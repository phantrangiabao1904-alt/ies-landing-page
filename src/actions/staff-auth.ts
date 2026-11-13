'use server';

import { createClient } from '@supabase/supabase-js';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { consumeRateLimit } from '@/lib/server/rate-limit';
import { getClientIp } from '@/lib/server/request-context';
import { createServiceRoleClient } from '@/lib/supabase/server-client';

function getSupabaseCredentials() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error('Supabase URL and anon key must be configured.');
  }

  return { url, anonKey };
}

export async function loginStaff(
  _previousState: string,
  formData: FormData,
): Promise<string> {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || !password) {
    return 'Vui lòng nhập email và mật khẩu.';
  }

  try {
    const requestHeaders = await headers();
    const ip = getClientIp(requestHeaders);
    const userAgent = requestHeaders.get('user-agent')?.slice(0, 180) || 'unknown';
    const identifier = ip ? `staff-login-ip:${ip}` : `staff-login-agent:${userAgent}`;
    const rateLimitClient = createServiceRoleClient();
    const allowed = await consumeRateLimit(
      rateLimitClient,
      identifier,
      10,
      15 * 60,
    );
    if (!allowed) {
      return 'Bạn đã thử đăng nhập quá nhiều lần. Vui lòng chờ 15 phút rồi thử lại.';
    }

    const emailAllowed = await consumeRateLimit(
      rateLimitClient,
      `staff-login-email:${email.toLowerCase()}`,
      10,
      15 * 60,
    );
    if (!emailAllowed) {
      return 'Bạn đã thử đăng nhập quá nhiều lần. Vui lòng chờ 15 phút rồi thử lại.';
    }
  } catch (error) {
    console.error('Staff login rate limit could not be checked.', error);
    return 'Cổng nội bộ chưa sẵn sàng. Vui lòng liên hệ quản trị hệ thống.';
  }

  let credentials: ReturnType<typeof getSupabaseCredentials>;
  try {
    credentials = getSupabaseCredentials();
  } catch (error) {
    console.error('Staff login is unavailable because Supabase is not configured.', error);
    return 'Cổng nội bộ chưa được cấu hình. Vui lòng liên hệ quản trị hệ thống.';
  }
  const { url, anonKey } = credentials;
  const supabase = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return 'Thông tin đăng nhập không hợp lệ.';
  }

  const role = data.user.app_metadata?.role;
  if (role !== 'ADMIN' && role !== 'BA') {
    return 'Tài khoản không được cấp quyền truy cập hệ thống tuyển sinh.';
  }

  const maxAge = Math.max(0, data.session.expires_in);
  const cookieStore = await cookies();
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge,
  };

  cookieStore.set('sb-access-token', data.session.access_token, cookieOptions);
  cookieStore.set('user-role', role, cookieOptions);
  redirect(role === 'ADMIN' ? '/admin' : '/analytics');
}

export async function logoutStaff() {
  const cookieStore = await cookies();
  cookieStore.delete('sb-access-token');
  cookieStore.delete('sb-auth-token');
  cookieStore.delete('user-role');
  redirect('/login');
}
