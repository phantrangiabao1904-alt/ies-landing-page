import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import CmsContentEditor from '@/app/admin/content/CmsContentEditor';
import { requireStaff } from '@/lib/supabase/staff';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const CmsContentRowsSchema = z.array(
  z.object({
    id: z.string(),
    kind: z.enum(['banner', 'course']),
    title: z.string(),
    body: z.string(),
    sort_order: z.number(),
    is_active: z.boolean(),
  }),
);

export default async function AdminContentPage() {
  const { client } = await requireStaff(['ADMIN']);
  const { data, error } = await client
    .from('site_content')
    .select('id, kind, title, body, sort_order, is_active')
    .order('sort_order', { ascending: true });

  if (error) {
    throw new Error(`Không thể tải nội dung CMS: ${error.message}`);
  }

  const parsedItems = CmsContentRowsSchema.safeParse(data || []);
  if (!parsedItems.success) {
    throw new Error('Dữ liệu CMS từ Supabase không đúng định dạng.');
  }

  return (
    <main id="main-content" tabIndex={-1} className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="staff-card staff-hover-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">
              IES • Quản trị nội dung
            </p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">
              Landing Page CMS
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] transition-colors hover:bg-sky-50 hover:underline">
              Danh sách hồ sơ
            </Link>
            <form action={logoutStaff}>
              <button className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-white">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>

        <CmsContentEditor initialItems={parsedItems.data} />
      </div>
    </main>
  );
}
