'use client';

import { useState, useRef } from 'react';
import { submitLeadAction } from '@/actions/lead-submit';
import { schoolContact } from '@/lib/school-info';

interface LeadFormProps {
  id?: string;
  source?: string;
  variant?: 'card' | 'inline';
}

export default function LeadForm({
  id = 'form-xet-tuyen',
  source = 'landing_page',
  variant = 'card',
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    try {
      const response = await submitLeadAction(formData);
      setMessage(response.message);
      setIsSuccess(response.success);

      if (response.success) {
        formRef.current?.reset();
      }
    } catch {
      setIsSuccess(false);
      setMessage('Không thể gửi đăng ký lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const wrapperClass =
    variant === 'card'
      ? 'bg-white text-[#263849] p-6 md:p-10 rounded-2xl shadow-2xl'
      : '';

  return (
    <div className={wrapperClass} id={id}>
      <div className="flex items-center justify-between pb-4 mb-4">
        <div>
          <h3 className="font-['Montserrat',sans-serif] text-[20px] leading-[28px] text-[#0F5587] font-bold">
            Phiếu Đăng Ký Xét Tuyển Trực Tuyến
          </h3>
          <p className="font-['Inter',sans-serif] text-[13px] text-[#5D6B78]">
            Dành cho học sinh tốt nghiệp THCS / THPT trên toàn quốc
          </p>
        </div>
        <span className="material-symbols-outlined text-[28px] text-[#F58232]">assignment</span>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-full-name`} className="font-['Montserrat',sans-serif] text-[12px] tracking-[0.04em] text-[#0F5587] font-semibold">
              Họ và Tên Thí Sinh <span className="text-red-500">*</span>
            </label>
            <input
              id={`${id}-full-name`}
              type="text"
              name="fullName"
              required
              autoComplete="name"
              autoCapitalize="words"
              placeholder="Ví dụ: Nguyễn Văn An"
              className="h-11 px-4 rounded-lg bg-[#F5F8FA] text-[#263849] font-['Inter',sans-serif] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3764AF] transition-all"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-phone`} className="font-['Montserrat',sans-serif] text-[12px] tracking-[0.04em] text-[#0F5587] font-semibold">
              Số Điện Thoại / Zalo <span className="text-red-500">*</span>
            </label>
            <input
              id={`${id}-phone`}
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="Ví dụ: 0908123456"
              className="h-11 px-4 rounded-lg bg-[#F5F8FA] text-[#263849] font-['Inter',sans-serif] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3764AF] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-education-level`} className="font-['Montserrat',sans-serif] text-[12px] tracking-[0.04em] text-[#0F5587] font-semibold">
              Trình Độ Học Vấn <span className="text-red-500">*</span>
            </label>
            <select
              id={`${id}-education-level`}
              name="educationLevel"
              required
              className="h-11 px-4 rounded-lg bg-[#F5F8FA] text-[#263849] font-['Inter',sans-serif] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3764AF] transition-all"
            >
              <option value="thcs">Tốt nghiệp THCS (Lớp 9) — Hưởng NĐ 81 Miễn 100% Học Phí</option>
              <option value="thpt">Tốt nghiệp THPT (Lớp 12)</option>
              <option value="danghoc">Đang theo học lớp 9 / 12</option>
              <option value="khac">Đi làm / Tốt nghiệp CĐ, ĐH văn bằng 2</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor={`${id}-major`} className="font-['Montserrat',sans-serif] text-[12px] tracking-[0.04em] text-[#0F5587] font-semibold">
              Ngành Đào Tạo Quan Tâm <span className="text-red-500">*</span>
            </label>
            <select
              id={`${id}-major`}
              name="major"
              required
              className="h-11 px-4 rounded-lg bg-[#F5F8FA] text-[#263849] font-['Inter',sans-serif] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3764AF] transition-all"
            >
              <option value="Công nghệ thông tin">Công nghệ thông tin</option>
              <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
              <option value="Quản trị mạng">Quản trị mạng</option>
              <option value="Kế toán">Kế toán</option>
              <option value="Quản trị kinh doanh">Quản trị kinh doanh</option>
              <option value="Thương mại điện tử">Thương mại điện tử</option>
              <option value="other">Cần Ban Tư Vấn Hướng Nghiệp Thêm</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor={`${id}-campus`} className="font-['Montserrat',sans-serif] text-[12px] tracking-[0.04em] text-[#0F5587] font-semibold">
            Cơ Sở Đăng Ký Học Tập <span className="text-red-500">*</span>
          </label>
          <select
            id={`${id}-campus`}
            name="campus"
            required
            className="h-11 px-4 rounded-lg bg-[#F5F8FA] text-[#263849] font-['Inter',sans-serif] text-[15px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3764AF] transition-all"
          >
            {schoolContact.campuses.map((campus) => (
              <option key={campus.value} value={campus.value}>
                {campus.name}: {campus.address}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            id={`${id}-consent`}
            type="checkbox"
            name="consent"
            defaultChecked
            required
            className="mt-1 w-4 h-4 text-[#0F5587] rounded focus:ring-0 accent-[#0F5587]"
          />
          <label htmlFor={`${id}-consent`} className="font-['Inter',sans-serif] text-[12px] text-[#5D6B78]">
            Tôi đồng ý để Ban tuyển sinh IES liên hệ tư vấn lộ trình học tập và kiểm tra điều kiện thụ hưởng chính sách miễn 100% học phí theo Nghị định của Nhà nước.
          </label>
        </div>

        <input type="hidden" name="source" value={source} />

        {message && (
          <div
            role={isSuccess ? 'status' : 'alert'}
            aria-live="polite"
            className={`p-3 rounded-xl text-[13px] font-semibold border ${
              isSuccess
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#F58232] hover:bg-[#e07122] text-white py-4 rounded-xl font-['Montserrat',sans-serif] text-[16px] font-extrabold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">send</span>
          <span>{isSubmitting ? 'ĐANG XỬ LÝ...' : 'GỬI HỒ SƠ ĐĂNG KÝ XÉT TUYỂN & NHẬN ƯU ĐÃI 100% HỌC PHÍ'}</span>
        </button>

        <div className="flex items-center justify-center gap-4 text-[12px] text-[#5D6B78] font-['Montserrat',sans-serif] font-semibold pt-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-green-600">lock</span> Bảo mật tuyệt đối
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-green-600">schedule</span> Phản hồi trong 30 phút
          </span>
        </div>
      </form>
    </div>
  );
}
