import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export default function NotFound() {
  return (
    <div className="site-page min-h-screen bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />
      <main id="main-content" className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-5 pt-32 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#A84300]">404 · Không tìm thấy trang</p>
        <h1 className="mt-3 text-4xl font-black text-[#0F5587] sm:text-5xl">Có vẻ bạn đã rẽ nhầm đường.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5D6B78]">
          Trang này không tồn tại hoặc đã được chuyển. Bạn có thể quay về trang chủ hoặc xem thông tin tuyển sinh.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className="experience-cta experience-cta--primary" href="/">
            Về trang chủ <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <Link className="experience-cta experience-cta--secondary" href="/tuyen-sinh">
            Xem tuyển sinh
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
