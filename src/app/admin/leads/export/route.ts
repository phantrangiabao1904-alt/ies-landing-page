import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

function csvCell(value: string | null) {
  let safeValue = value || '';
  if (/^[=+\-@\t\r]/.test(safeValue)) {
    safeValue = `'${safeValue}`;
  }
  return `"${safeValue.replace(/"/g, '""')}"`;
}

export async function GET() {
  const { client } = await requireStaff(['ADMIN']);
  const { data: leads, error } = await client
    .from('leads')
    .select('full_name, phone, email, major, education_level, status, created_at, source')
    .order('created_at', { ascending: false })
    .limit(10000);

  if (error) {
    throw new Error(`Không thể xuất danh sách hồ sơ: ${error.message}`);
  }

  const header = [
    'Họ và tên',
    'Số điện thoại',
    'Email',
    'Ngành quan tâm',
    'Trình độ',
    'Trạng thái',
    'Thời gian đăng ký',
    'Nguồn',
  ];
  const rows = (leads || []).map((lead) =>
    [
      lead.full_name,
      lead.phone,
      lead.email,
      lead.major,
      lead.education_level,
      lead.status,
      lead.created_at,
      lead.source,
    ]
      .map((value) => csvCell(value))
      .join(','),
  );
  const csv = `\uFEFF${[header.map(csvCell).join(','), ...rows].join('\r\n')}`;

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="ies-leads.csv"',
      'Cache-Control': 'private, no-store',
    },
  });
}
