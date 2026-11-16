import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import AnalyticsCharts from '@/app/analytics/AnalyticsCharts';
import { AnalyticsSummarySchema } from '@/lib/analytics/summary';
import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  const { client, role } = await requireStaff(['ADMIN', 'BA']);
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const since = new Date();
  since.setDate(since.getDate() - 29);
  since.setHours(0, 0, 0, 0);

  const [total, newLeads, monthLeads, summaryResult] = await Promise.all([
    client.from('leads').select('id', { count: 'exact', head: true }),
    client.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'NEW'),
    client
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', monthStart.toISOString()),
    client.rpc('get_analytics_summary', { p_since: since.toISOString() }),
  ]);
  const error = total.error || newLeads.error || monthLeads.error || summaryResult.error;
  if (error) {
    throw new Error(`Không thể tải số liệu tuyển sinh: ${error.message}`);
  }

  const parsedSummary = AnalyticsSummarySchema.safeParse(summaryResult.data);
  if (!parsedSummary.success) {
    throw new Error('Dữ liệu Analytics từ Supabase không đúng định dạng.');
  }

  const metrics = [
    { label: 'Tổng hồ sơ', value: total.count ?? 0 },
    { label: 'Hồ sơ mới cần tư vấn', value: newLeads.count ?? 0 },
    { label: 'Hồ sơ tháng này', value: monthLeads.count ?? 0 },
  ];

  return (
    <main className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="staff-card staff-hover-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
              IES • Phân tích tuyển sinh
            </p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">Analytics</h1>
          </div>
          <div className="flex items-center gap-4">
            {role === 'ADMIN' && (
              <Link href="/admin" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] transition-colors hover:bg-sky-50 hover:underline">
                Danh sách hồ sơ
              </Link>
            )}
            <form action={logoutStaff}>
              <button className="min-h-[44px] rounded-lg border border-slate-300 bg-white px-4 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>
        <section className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="staff-card staff-hover-card border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
              <p className="mt-3 text-4xl font-extrabold text-[#0F5587]">
                {metric.value.toLocaleString('vi-VN')}
              </p>
            </article>
          ))}
        </section>
        <AnalyticsCharts summary={parsedSummary.data} />
        <p className="mt-6 text-sm text-slate-500">
          BA chỉ xem số liệu tổng hợp, không xem thông tin định danh thí sinh.
        </p>
      </div>
    </main>
  );
}
