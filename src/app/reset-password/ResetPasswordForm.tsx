'use client';

import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useState } from 'react';

type ResetPasswordFormProps = {
  supabaseUrl: string;
  anonKey: string;
};

export default function ResetPasswordForm({
  supabaseUrl,
  anonKey,
}: ResetPasswordFormProps) {
  const supabase = useMemo(() => {
    if (!supabaseUrl || !anonKey) {
      return null;
    }

    return createClient(supabaseUrl, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }, [anonKey, supabaseUrl]);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    let active = true;
    void supabase.auth.getSession().then(({ data, error }) => {
      if (!active) {
        return;
      }

      if (error) {
        setMessage('Liên kết không hợp lệ hoặc đã hết hạn. Hãy yêu cầu email mới.');
        return;
      }

      if (!data.session) {
        setMessage('Hãy mở lại trang này từ liên kết khôi phục trong email.');
        return;
      }

      setReady(true);
    });

    return () => {
      active = false;
    };
  }, [supabase]);

  const statusMessage =
    message || (!supabase ? 'Chức năng đặt lại mật khẩu chưa được cấu hình.' : '');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) {
      setMessage('Chức năng đặt lại mật khẩu chưa được cấu hình.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get('password') || '');
    const confirmation = String(formData.get('confirmation') || '');

    if (password.length < 8) {
      setMessage('Mật khẩu mới phải có ít nhất 8 ký tự.');
      return;
    }

    if (password !== confirmation) {
      setMessage('Hai mật khẩu chưa khớp.');
      return;
    }

    setIsPending(true);
    setMessage('');
    const { error } = await supabase.auth.updateUser({ password });
    setIsPending(false);

    if (error) {
      setMessage('Không thể cập nhật mật khẩu. Hãy mở lại liên kết khôi phục mới nhất.');
      return;
    }

    setUpdated(true);
    setMessage('Đã cập nhật mật khẩu. Bạn có thể đăng nhập bằng mật khẩu mới.');
  }

  return (
    <>
      {ready && !updated && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-1">
            <span className="text-sm font-semibold text-slate-700">Mật khẩu mới</span>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#0F5587] focus:ring-2 focus:ring-[#0F5587]/20"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-semibold text-slate-700">
              Nhập lại mật khẩu mới
            </span>
            <input
              name="confirmation"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[#0F5587] focus:ring-2 focus:ring-[#0F5587]/20"
            />
          </label>
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-[#0F5587] px-4 py-3 font-bold text-white hover:bg-[#0b456f] disabled:opacity-60"
          >
            {isPending ? 'Đang cập nhật...' : 'Lưu mật khẩu mới'}
          </button>
        </form>
      )}
      {statusMessage && (
        <p
          role="status"
          className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-900"
        >
          {statusMessage}
        </p>
      )}
      {updated && (
        <Link
          href="/login"
          className="mt-4 inline-block text-sm font-semibold text-[#0F5587] hover:underline"
        >
          Đăng nhập
        </Link>
      )}
    </>
  );
}
