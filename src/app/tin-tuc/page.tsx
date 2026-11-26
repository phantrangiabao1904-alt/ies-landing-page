import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { getPublishedPosts } from '@/actions/site-posts';
import { POST_CATEGORIES, getCategoryLabel } from '@/lib/posts/categories';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: 'Tin tức & sự kiện | IES Sài Gòn',
  description: 'Thông báo tuyển sinh, hoạt động học tập và hợp tác doanh nghiệp của IES Sài Gòn.',
  alternates: { canonical: '/tin-tuc' },
};

export const dynamic = 'force-dynamic';

const fmt = new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

export default async function TinTucPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-[#F6EEE5]">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <Icon name="chevron_right" className="text-[13px]" />
              <span className="font-semibold text-white">Tin tức & sự kiện</span>
            </nav>
            <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold md:text-5xl">Tin tức & sự kiện IES</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
              Cập nhật thông báo tuyển sinh, hoạt động ngoại khóa thực tiễn và nhịp sống sinh viên IES.
            </p>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-12">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <p className="mb-6 text-sm font-semibold text-[#0F5587]">
              Danh mục: {POST_CATEGORIES.map((c) => c.label).join(' • ')}
            </p>
            {posts.length === 0 ? (
              <p className="py-16 text-center text-slate-600">Hiện chưa có tin nào. Vui lòng quay lại sau.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((a) => (
                  <article key={a.id} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative aspect-video bg-slate-100">
                      <Image src={a.image_url} alt={a.image_alt || a.title} fill unoptimized sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="rounded-full bg-[#e3efff] px-3 py-1 font-semibold text-[#0F5587]">{getCategoryLabel(a.category)}</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Icon name="calendar_today" className="text-[14px]" />
                          {a.published_at ? fmt.format(new Date(a.published_at)) : ''}
                        </span>
                      </div>
                      <h2 className="font-[var(--font-montserrat)] text-lg font-bold leading-snug text-[#0F5587]">{a.title}</h2>
                      <p className="text-sm leading-relaxed text-slate-600">{a.description}</p>
                      <p className="mt-auto pt-3 text-xs text-slate-500">Đăng bởi {a.author_name}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F6EEE5] py-16">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Nhận bản tin tuyển sinh</h2>
              <p className="mt-2 text-slate-600">Cập nhật mốc nộp hồ sơ, chỉ tiêu từng ngành và chính sách hỗ trợ học phí.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-6 py-3 font-bold text-white shadow-md hover:brightness-105">Đăng ký xét tuyển</Link>
              <a href={schoolContact.phoneNumbers[0].href} className="rounded-full border-2 border-[#0F5587]/40 px-6 py-3 font-bold text-[#0F5587] hover:bg-white">
                {schoolContact.phoneNumbers[0].number}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
