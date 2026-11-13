import Link from 'next/link';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
          IES • Cổng nội bộ
        </p>
        <h1 className="mt-2 text-2xl font-extrabold text-[#0F5587]">
          Đặt lại mật khẩu
        </h1>
        <p className="mb-6 mt-2 text-sm text-slate-600">
          Nhập email đăng nhập. Nếu tài khoản tồn tại, hướng dẫn sẽ được gửi đến email đó.
        </p>
        <ForgotPasswordForm />
        <Link
          href="/login"
          className="mt-6 inline-block text-sm font-semibold text-[#0F5587] hover:underline"
        >
          Quay lại đăng nhập
        </Link>
      </section>
    </main>
  );
}
