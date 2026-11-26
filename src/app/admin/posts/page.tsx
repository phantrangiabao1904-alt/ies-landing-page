import Link from 'next/link';
import { logoutStaff } from '@/actions/staff-auth';
import { getAllPostsForAdmin } from '@/actions/site-posts';
import PostEditor from '@/app/admin/posts/PostEditor';
import { getCategoryLabel } from '@/lib/posts/categories';
import { requireStaff } from '@/lib/supabase/staff';

export const dynamic = 'force-dynamic';

export default async function AdminPostsPage() {
  await requireStaff(['ADMIN', 'BA']);
  const posts = await getAllPostsForAdmin();

  return (
    <main id="main-content" tabIndex={-1} className="staff-page min-h-screen px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="staff-card mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#F58232]">IES • Quản trị tin tức</p>
            <h1 className="mt-1 text-3xl font-extrabold text-[#0F5587]">Bài viết trang Tin tức</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/admin/media" className="min-h-[44px] inline-flex items-center rounded-lg px-3 font-semibold text-[#0F5587] hover:bg-sky-50">
              Thay ảnh website
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

        <PostEditor />

        <section className="mt-8 space-y-3" aria-label="Danh sách bài viết">
          <h2 className="text-xl font-bold text-[#0F5587]">Bài đã có ({posts.length})</h2>
          {posts.length === 0 && <p className="text-slate-600">Chưa có bài viết nào.</p>}
          {posts.map((post) => (
            <article key={post.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-[#e3efff] px-3 py-1 font-semibold text-[#0F5587]">
                  {getCategoryLabel(post.category)}
                </span>
                <span className={`rounded-full px-3 py-1 font-semibold ${post.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                  {post.status === 'published' ? 'Đã đăng' : 'Nháp'}
                </span>
              </div>
              <h3 className="mt-2 font-bold text-[#0F5587]">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{post.description}</p>
              <PostEditor post={post} />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
