'use client';

import { useActionState } from 'react';
import { requestStaffPasswordReset } from '@/actions/staff-auth';

export default function ForgotPasswordForm() {
  const [message, formAction, isPending] = useActionState(
    requestStaffPasswordReset,
    '',
  );

  return (
    <form action={formAction} className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-semibold text-slate-700">Email cán bộ</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#0F5587] focus:ring-2 focus:ring-[#0F5587]/20"
        />
      </label>
      {message && (
        <p
          role="status"
          className="rounded-lg bg-blue-50 p-3 text-sm text-blue-900"
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-[#0F5587] px-4 py-3 font-bold text-white hover:bg-[#0b456f] disabled:opacity-60"
      >
        {isPending ? 'Đang gửi...' : 'Gửi hướng dẫn đặt lại'}
      </button>
    </form>
  );
}
