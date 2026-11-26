'use client';

import { useState, useTransition } from 'react';
import { submitLeadAction } from '@/actions/lead-submit';
import { admissionMajors } from '@/lib/majors';

type Status = { type: 'idle' } | { type: 'success'; message: string } | { type: 'error'; message: string };

export default function HeroQuickForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle' });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const response = await submitLeadAction(formData);
      if (response.success) {
        setStatus({ type: 'success', message: response.message });
        event.currentTarget.reset();
      } else {
        setStatus({ type: 'error', message: response.message });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="hero-quick-form-title"
      className="rounded-2xl bg-white p-4 shadow-lg sm:p-5"
    >
      <h2 id="hero-quick-form-title" className="text-lg font-bold text-[#0F5587]">
        Nhận tư vấn miễn phí trong 24 giờ
      </h2>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="hero-quick-name" className="mb-1 block text-sm font-semibold text-[#263849]">
            Họ và tên <span className="text-rose-600">*</span>
          </label>
          <input
            id="hero-quick-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className="min-h-11 w-full rounded-xl border border-[#8A96A3] bg-white px-3 py-2 text-base text-[#263849] outline-none focus:ring-2 focus:ring-[#0F5587]"
          />
        </div>
        <div>
          <label htmlFor="hero-quick-phone" className="mb-1 block text-sm font-semibold text-[#263849]">
            Số điện thoại / Zalo <span className="text-rose-600">*</span>
          </label>
          <input
            id="hero-quick-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="09xxxxxxxx"
            className="min-h-11 w-full rounded-xl border border-[#8A96A3] bg-white px-3 py-2 text-base text-[#263849] outline-none focus:ring-2 focus:ring-[#0F5587]"
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="hero-quick-major" className="mb-1 block text-sm font-semibold text-[#263849]">
          Ngành quan tâm <span className="text-rose-600">*</span>
        </label>
        <select
          id="hero-quick-major"
          name="major"
          required
          defaultValue=""
          className="min-h-11 w-full rounded-xl border border-[#8A96A3] bg-white px-3 py-2 text-base text-[#263849] outline-none focus:ring-2 focus:ring-[#0F5587]"
        >
          <option value="" disabled>
            Chọn ngành
          </option>
          {admissionMajors.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>

      <label className="mt-3 flex items-start gap-2 text-sm text-[#263849]">
        <input type="checkbox" name="consent" value="on" required className="mt-1 h-4 w-4 accent-[#0F5587]" />
        <span>Tôi đồng ý để IES liên hệ tư vấn.</span>
      </label>
      <input type="hidden" name="source" value="hero_quick_form" />

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 min-h-12 w-full rounded-xl bg-[#A84300] px-4 py-3 font-bold text-white shadow-md hover:bg-[#873400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A84300] disabled:opacity-70"
      >
        {isPending ? 'Đang gửi...' : 'Gửi thông tin tư vấn'}
      </button>

      <p role="status" aria-live="polite" className="mt-3 text-sm">
        {status.type === 'success' && <span className="font-semibold text-emerald-700">{status.message}</span>}
        {status.type === 'error' && <span className="font-semibold text-rose-700">{status.message}</span>}
      </p>
    </form>
  );
}
