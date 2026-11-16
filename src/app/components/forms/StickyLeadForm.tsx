'use client';

import { useState, useRef } from 'react';
import { submitLeadAction } from '@/actions/lead-submit';

interface StickyLeadFormProps {
  id?: string;
  isSticky?: boolean;
}

export default function StickyLeadForm({
  id = 'lead-form',
  isSticky = true,
}: StickyLeadFormProps) {
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
      setMessage('Không thể gửi đăng ký lúc này. Vui lòng thử lại hoặc gọi hotline tư vấn.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`site-card bg-white rounded-2xl shadow-xl p-6 sm:p-7 border border-[#D9E2EA] ring-1 ring-black/5 ${
        isSticky ? 'lg:sticky lg:top-24 lg:z-30' : ''
      }`}
    >
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EEE5] text-[#F58232] font-black text-xs uppercase tracking-wider mb-2 border border-[#F58232]/20">
          <span className="w-2 h-2 rounded-full bg-[#F58232] animate-ping" />
          ƯU ĐÃI NGHỊ ĐỊNH 81/CP
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#0F5587] tracking-tight">
          ĐĂNG KÝ XÉT TUYỂN 2026
        </h3>
        <p className="text-xs sm:text-sm text-[#3764AF] font-bold mt-1">
          Tài trợ 100% học phí nghề cho học sinh tốt nghiệp THCS
        </p>
      </div>

      <form id={id} ref={formRef} onSubmit={handleSubmit} className="scroll-mt-28 space-y-4">
        <div>
          <label htmlFor={`${id}-full-name`} className="block text-xs font-bold uppercase text-[#263849] mb-1">
            Họ và tên thí sinh <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${id}-full-name`}
            type="text"
            name="fullName"
            required
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Ví dụ: Nguyễn Văn An"
            className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none transition-all placeholder:text-[#5D6B78]/60 text-[#263849]"
          />
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className="block text-xs font-bold uppercase text-[#263849] mb-1">
            Số điện thoại / Zalo <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="^(0|\+84)[0-9]{9}$"
            placeholder="Ví dụ: 0912345678"
            className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none transition-all placeholder:text-[#5D6B78]/60 text-[#263849]"
          />
        </div>

        <div>
          <label htmlFor={`${id}-major`} className="block text-xs font-bold uppercase text-[#263849] mb-1">
            Ngành học quan tâm <span className="text-rose-500">*</span>
          </label>
          <select
            id={`${id}-major`}
            name="major"
            required
            defaultValue=""
            className="min-h-[44px] w-full px-3.5 py-2.5 text-sm bg-[#F5F8FA] border border-[#D9E2EA] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F5587] focus:border-[#0F5587] outline-none transition-all text-[#263849]"
          >
            <option value="" disabled>
              -- Chọn ngành học của bạn --
            </option>
            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
            <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
            <option value="Quản trị mạng">Quản trị mạng</option>
            <option value="Kế toán">Kế toán</option>
            <option value="Quản trị kinh doanh">Quản trị kinh doanh</option>
            <option value="Thương mại điện tử">Thương mại điện tử</option>
          </select>
        </div>

        <input type="hidden" name="source" value="landing_sticky_brand" />
        <label className="flex items-start gap-2 text-xs text-[#5D6B78]">
          <input type="checkbox" name="consent" required className="mt-0.5 accent-[#0F5587]" />
          Tôi đồng ý để IES liên hệ tư vấn về chương trình tuyển sinh.
        </label>

        {message && (
          <div
            role={isSuccess ? 'status' : 'alert'}
            aria-live="polite"
            className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold leading-relaxed border ${
              isSuccess
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            {message}
          </div>
        )}

        {/* Nút hành động chính theo Brand Guideline: màu cam Learning Orange #F58232 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group overflow-hidden bg-[#F58232] hover:bg-[#E06F20] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-[#F58232]/30 transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-sm">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                ĐANG XỬ LÝ...
              </>
            ) : (
              'NHẬN TƯ VẤN & HỌC BỔNG 100%'
            )}
          </span>
        </button>

        <p className="text-center text-[11px] text-[#5D6B78] font-medium">
          🔒 Bảo mật thông tin thí sinh 100% theo quy chuẩn Bộ GD&ĐT
        </p>
      </form>
    </div>
  );
}
