'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { createServiceRoleClient } from '@/lib/supabase/server-client';
import { getClientIp, getPublicPagePath, getReferrerHost } from '@/lib/server/request-context';
import { consumeRateLimit } from '@/lib/server/rate-limit';

// Sanitize helper chống XSS
function sanitizeText(val: unknown): string {
  if (typeof val !== 'string') return '';
  return val
    .replace(/[<>]/g, '') // Loại bỏ ký tự thẻ HTML < >
    .trim();
}

const LeadSchema = z.object({
  fullName: z
    .string()
    .transform(sanitizeText)
    .pipe(
      z
        .string()
        .min(2, 'Họ và tên phải có ít nhất 2 ký tự')
        .max(100, 'Họ và tên quá dài'),
    ),
  phone: z
    .string()
    .regex(/^(0|\+84)[0-9]{9}$/, 'Số điện thoại không hợp lệ (10 chữ số)'),
  parentPhone: z
    .string()
    .optional()
    .transform(sanitizeText)
    .pipe(z.string().max(20, 'Số điện thoại phụ quá dài')),
  email: z
    .string()
    .max(254, 'Email quá dài')
    .email('Email không đúng định dạng')
    .optional()
    .or(z.literal('')),
  educationLevel: z
    .string()
    .optional()
    .default('thcs')
    .transform(sanitizeText)
    .pipe(z.string().max(40, 'Trình độ học vấn không hợp lệ')),
  schoolName: z
    .string()
    .optional()
    .transform(sanitizeText)
    .pipe(z.string().max(150, 'Tên trường quá dài')),
  major: z
    .string()
    .transform(sanitizeText)
    .pipe(
      z
        .string()
        .min(1, 'Vui lòng chọn chuyên ngành học')
        .max(120, 'Tên ngành học quá dài'),
    ),
  secondaryMajor: z
    .string()
    .optional()
    .transform(sanitizeText)
    .pipe(z.string().max(120, 'Ngành học thứ hai quá dài')),
  campus: z
    .string()
    .optional()
    .default('govap')
    .transform(sanitizeText)
    .pipe(z.string().max(80, 'Cơ sở không hợp lệ')),
  idCard: z
    .string()
    .optional()
    .transform(sanitizeText)
    .pipe(z.string().max(20, 'Số CCCD quá dài')),
  address: z
    .string()
    .optional()
    .transform(sanitizeText)
    .pipe(z.string().max(300, 'Địa chỉ quá dài')),
  consent: z
    .string()
    .regex(/^(on|true)$/, 'Vui lòng đồng ý để IES liên hệ tư vấn.'),
  source: z
    .string()
    .max(120)
    .regex(/^[A-Za-z0-9_-]+$/, 'Nguồn đăng ký không hợp lệ.')
    .optional()
    .default('landing_page'),
});

export async function submitLeadAction(formData: FormData) {
  const rawData = {
    fullName: formData.get('fullName') || formData.get('reg-name') || '',
    phone: formData.get('phone') || formData.get('reg-phone') || '',
    parentPhone: formData.get('parentPhone') || '',
    email: formData.get('email') || '',
    educationLevel: formData.get('educationLevel') || formData.get('academicLevel') || formData.get('reg-edu') || 'thcs',
    schoolName: formData.get('schoolName') || '',
    major: formData.get('major') || formData.get('reg-major') || '',
    secondaryMajor: formData.get('secondaryMajor') || '',
    campus: formData.get('campus') || formData.get('reg-campus') || 'pham-van-chieu',
    idCard: formData.get('idCard') || '',
    address: formData.get('address') || '',
    consent: formData.get('consent') || '',
    source: formData.get('source') || 'landing_page',
  };
  const validatedData = LeadSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      message: validatedData.error.issues[0]?.message || 'Dữ liệu không hợp lệ.',
    };
  }

  try {
    const requestHeaders = await headers();
    const supabase = createServiceRoleClient();
    const ip = getClientIp(requestHeaders);

    if (
      ip &&
      !(await consumeRateLimit(supabase, `lead-ip:${ip}`, 15, 60 * 60))
    ) {
      return {
        success: false,
        message: 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng chờ và thử lại sau.',
      };
    }

    if (
      !(await consumeRateLimit(
        supabase,
        `lead-phone:${validatedData.data.phone}`,
        3,
        24 * 60 * 60,
      ))
    ) {
      return {
        success: false,
        message: 'Số điện thoại này đã được gửi gần đây. Ban tuyển sinh sẽ sớm liên hệ.',
      };
    }

    const { error } = await supabase.from('leads').insert({
      full_name: validatedData.data.fullName,
      phone: validatedData.data.phone,
      parent_phone: validatedData.data.parentPhone || null,
      email: validatedData.data.email || null,
      education_level: validatedData.data.educationLevel,
      school_name: validatedData.data.schoolName || null,
      major: validatedData.data.major,
      secondary_major: validatedData.data.secondaryMajor || null,
      campus: validatedData.data.campus,
      id_card: validatedData.data.idCard || null,
      address: validatedData.data.address || null,
      consent: true,
      source: validatedData.data.source,
      status: 'NEW',
    });

    if (error) {
      console.error('Supabase lead insert failed:', error.message);
      return { success: false, message: 'Hệ thống bận, vui lòng thử lại sau.' };
    }

    const referer = requestHeaders.get('referer');
    const { error: analyticsError } = await supabase.from('analytics_events').insert({
      event_type: 'lead_submit',
      page_path: getPublicPagePath(requestHeaders),
      referrer_host: getReferrerHost(referer),
      source: validatedData.data.source,
    });

    if (analyticsError) {
      console.error('Lead conversion analytics insert failed:', analyticsError.message);
    }
  } catch (error) {
    console.error('Lead submission could not be completed:', error);
    return {
      success: false,
      message: 'Hệ thống đăng ký chưa sẵn sàng. Vui lòng thử lại hoặc liên hệ Ban tuyển sinh.',
    };
  }

  return {
    success: true,
    message: 'Đăng ký xét tuyển thành công! Ban tuyển sinh IES sẽ liên hệ tư vấn.',
  };
}
