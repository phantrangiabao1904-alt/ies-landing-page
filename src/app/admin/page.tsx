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
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
              IES • Quản trị tuyển sinh
            </p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">
              Hồ sơ đăng ký mới
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/content" className="font-semibold text-[#0F5587] hover:underline">
              Quản lý Landing Page
            </Link>
            <Link href="/analytics" className="font-semibold text-[#0F5587] hover:underline">
              Xem Analytics
            </Link>
            <a
              href="/admin/leads/export"
              className="rounded-lg bg-[#F58232] px-4 py-2 font-bold text-white hover:bg-[#df6f22]"
            >
              Xuất CSV
            </a>
            <form action={logoutStaff}>
              <button className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-white">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
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
                <tr key={lead.id} className="text-slate-700">
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
