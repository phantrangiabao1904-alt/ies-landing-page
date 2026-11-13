'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { AnalyticsSummary } from '@/lib/analytics/summary';

interface AnalyticsChartsProps {
  summary: AnalyticsSummary;
}

const COLORS = ['#0F5587', '#F58232', '#3B82F6', '#16A34A', '#9333EA'];

export default function AnalyticsCharts({ summary }: AnalyticsChartsProps) {
  const router = useRouter();

  useEffect(() => {
    const interval = window.setInterval(() => router.refresh(), 60_000);
    return () => window.clearInterval(interval);
  }, [router]);

  const funnel = [
    { name: 'Lượt xem', value: summary.funnel.page_views },
    { name: 'Nhấn đăng ký', value: summary.funnel.form_clicks },
    { name: 'Gửi hồ sơ', value: summary.funnel.lead_submits },
  ];
  const conversionRate = summary.funnel.page_views
    ? (summary.funnel.lead_submits / summary.funnel.page_views) * 100
    : 0;

  return (
    <div className="mt-8 space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F5587]">Lượt truy cập và chuyển đổi · 30 ngày</h2>
          <div className="mt-4 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={summary.daily} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} minTickGap={24} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="page_views" name="Lượt xem" fill="#0F5587" />
                <Bar dataKey="form_clicks" name="Nhấn đăng ký" fill="#F58232" />
                <Line
                  type="monotone"
                  dataKey="lead_submits"
                  name="Gửi hồ sơ"
                  stroke="#16A34A"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#0F5587]">Nguồn truy cập · 30 ngày</h2>
          {summary.referrals.length ? (
            <div className="mt-4 h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={summary.referrals}
                    dataKey="count"
                    nameKey="source"
                    outerRadius={95}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {summary.referrals.map((item, index) => (
                      <Cell key={item.source} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="py-16 text-center text-sm text-slate-500">
              Chưa có lượt truy cập được ghi nhận.
            </p>
          )}
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-bold text-[#0F5587]">Phễu tuyển sinh · 30 ngày</h2>
          <p className="text-sm font-semibold text-slate-600">
            Tỷ lệ xem → nộp hồ sơ: {conversionRate.toFixed(1)}%
          </p>
        </div>
        <div className="mt-4 h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnel} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" allowDecimals={false} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip />
              <Bar dataKey="value" name="Số lượt" fill="#F58232" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <p className="text-xs text-slate-500">
        Số liệu được cập nhật tự động mỗi phút. Lượt truy cập được ghi nhận khi trình duyệt bật JavaScript.
      </p>
    </div>
  );
}
