import Link from 'next/link';
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordPage() {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const anonKey = process.env.SUPABASE_ANON_KEY || '';

  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
          IES • Cổng nội bộ
        </p>
        <h1 className="mt-2 text-2xl font-extrabold text-[#0F5587]">
          Tạo mật khẩu mới
        </h1>
        <p className="mb-6 mt-2 text-sm text-slate-600">
          Mở trang này từ liên kết khôi phục trong email của bạn.
        </p>
        <ResetPasswordForm supabaseUrl={supabaseUrl} anonKey={anonKey} />
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
