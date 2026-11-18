import Link from 'next/link';
import StaffLoginForm from './StaffLoginForm';

export default function LoginPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
          IES • Cổng nội bộ
        </p>
        <h1 className="mt-2 text-2xl font-extrabold text-[#0F5587]">
          Đăng nhập tuyển sinh
        </h1>
        <p className="mb-6 mt-2 text-sm text-slate-600">
          Dùng tài khoản Supabase đã được cấp quyền ADMIN hoặc BA.
        </p>
        <StaffLoginForm />
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-[#0F5587] hover:underline">
          Trở về trang chủ
        </Link>
      </section>
    </main>
  );
}
