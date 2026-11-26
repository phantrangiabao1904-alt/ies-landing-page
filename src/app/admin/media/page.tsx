import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import { getSiteMediaUrls } from '@/actions/site-media';
import MediaUploader from '@/app/admin/media/MediaUploader';
import { SITE_MEDIA_SLOTS } from '@/lib/media/slots';
import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

export default async function AdminMediaPage() {
  await requireStaff(['ADMIN']);
  const customUrls = await getSiteMediaUrls();

  return (
    <main id="main-content" tabIndex={-1} className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="staff-card staff-hover-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">IES • Quản trị hình ảnh</p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">Thay ảnh website</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/admin/content" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Quản lý Landing Page
            </Link>
            <Link href="/admin/posts" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Bài tin tức
            </Link>
            <Link href="/admin" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Danh sách hồ sơ
            </Link>
            <form action={logoutStaff}>
              <button className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-white">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {SITE_MEDIA_SLOTS.map((slot) => (
            <MediaUploader
              key={slot.id}
              slot={slot.id}
              label={slot.label}
              currentUrl={customUrls[slot.id] ?? slot.fallback}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
