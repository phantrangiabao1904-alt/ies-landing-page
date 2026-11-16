import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const { client } = await requireStaff(['ADMIN']);
  const { data: leads, error } = await client
    .from('leads')
    .select('id, full_name, phone, email, major, education_level, status, created_at')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    throw new Error(`Không thể tải danh sách hồ sơ: ${error.message}`);
  }

  return (
    <main className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="staff-card staff-hover-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
              IES • Quản trị tuyển sinh
            </p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">
              Hồ sơ đăng ký mới
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/admin/content" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] transition-colors hover:bg-sky-50 hover:underline">
              Quản lý Landing Page
            </Link>
            <Link href="/analytics" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] transition-colors hover:bg-sky-50 hover:underline">
              Xem Analytics
            </Link>
            <a
              href="/admin/leads/export"
              className="min-h-[44px] rounded-lg bg-[#F58232] px-4 font-bold text-white shadow-sm transition hover:bg-[#df6f22] hover:shadow-md"
            >
              Xuất CSV
            </a>
            <form action={logoutStaff}>
              <button className="min-h-[44px] rounded-lg border border-slate-300 bg-white px-4 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>

        <div className="staff-card overflow-x-auto border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="sticky top-0 z-10 bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Thời gian</th>
                <th className="px-4 py-3">Họ tên</th>
                <th className="px-4 py-3">Điện thoại</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Ngành quan tâm</th>
                <th className="px-4 py-3">Trình độ</th>
                <th className="px-4 py-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads?.map((lead) => (
                <tr key={lead.id} className="text-slate-700 transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-3">
                    {new Date(lead.created_at).toLocaleString('vi-VN')}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">{lead.full_name}</td>
                  <td className="whitespace-nowrap px-4 py-3">{lead.phone}</td>
                  <td className="px-4 py-3">{lead.email || '—'}</td>
                  <td className="px-4 py-3">{lead.major}</td>
                  <td className="px-4 py-3">{lead.education_level}</td>
                  <td className="px-4 py-3">{lead.status}</td>
                </tr>
              ))}
              {!leads?.length && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                    Chưa có hồ sơ đăng ký.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Hiển thị tối đa 100 hồ sơ mới nhất. Dữ liệu chỉ dành cho cán bộ có quyền ADMIN.
        </p>
      </div>
    </main>
  );
}
