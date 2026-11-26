import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: 'Giới thiệu trường | IES Sài Gòn',
  description:
    'Trường Trung cấp Tin học Kinh tế Sài Gòn (IES): triết lý đào tạo thực hành, cơ sở vật chất, đội ngũ lãnh đạo và giảng viên, pháp lý và hành trình phát triển.',
  alternates: { canonical: '/gioi-thieu' },
};

const values: { icon: 'verified' | 'business_center' | 'group'; title: string; desc: string }[] = [
  { icon: 'verified', title: '70% thời lượng thực hành dự án', desc: 'Học bằng việc làm: mỗi bài học gắn với sản phẩm cụ thể.' },
  { icon: 'business_center', title: 'Kết nối doanh nghiệp trực tiếp', desc: 'Giáo trình được hiệu chỉnh cùng doanh nghiệp đối tác.' },
  { icon: 'group', title: 'Đồng hành đến cùng', desc: 'Thầy cô theo sát học sinh từ ngày nhập học đến khi có việc làm.' },
];

const facilities = [
  { src: '/images/stitch/photos/phong-may-lab.png', title: 'Phòng lab máy tính', desc: 'Cấu hình cao, phục vụ CNTT và đồ họa.' },
  { src: '/images/stitch/photos/studio.png', title: 'Studio sáng tạo', desc: 'Sản xuất nội dung và đồ họa số.' },
  { src: '/images/stitch/photos/thu-vien.png', title: 'Thư viện số', desc: 'Không gian đọc mở và tài liệu số.' },
  { src: '/images/stitch/photos/ky-tuc-xa.png', title: 'Ký túc xá', desc: 'Nơi ở an toàn cho học sinh xa nhà.' },
  { src: '/images/stitch/photos/khuon-vien-moi.jpg', title: 'Khuôn viên trường', desc: 'Không gian học tập xanh, thoáng.' },
];

const timeline = [
  { step: 'Giai đoạn 1', title: 'Thành lập', desc: 'Thành lập trường và định hình sứ mệnh đào tạo nghề thực tiễn.' },
  { step: 'Giai đoạn 2', title: 'Phát triển', desc: 'Mở rộng khối ngành Công nghệ thông tin theo nhu cầu thị trường.' },
  { step: 'Giai đoạn 3', title: 'Mở rộng', desc: 'Mở rộng cơ sở, hiện đại hóa hệ thống phòng máy và studio.' },
  { step: 'Giai đoạn 4', title: 'Hợp tác', desc: 'Ký kết mạng lưới liên kết 50+ doanh nghiệp đối tác thực tập.' },
  { step: 'Hiện tại', title: '2026', desc: 'Đào tạo song bằng: Trung cấp chính quy và văn hóa THPT.' },
];

export default function GioiThieuPage() {
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-slate-500">
                <Link href="/" className="hover:text-[#0F5587]">Trang chủ</Link>
                <Icon name="chevron_right" className="text-[13px]" />
                <span className="font-semibold text-[#0F5587]">Giới thiệu</span>
              </nav>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Về chúng tôi</span>
              <h1 className="mt-3 font-[var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#0F5587] md:text-5xl">
                Trường nghề của những người trẻ muốn làm được việc
              </h1>
              <p className="mt-5 leading-relaxed text-slate-600">
                Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) đào tạo trung cấp các ngành công nghệ và kinh tế, lấy thực hành làm trung tâm. Chúng tôi xây dựng tư duy nghề nghiệp chuyên nghiệp, tính kỷ luật và năng lực ứng dụng công nghệ thực tế.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
              <Image src="/images/stitch/photos/hop-tac-ky-ket.png" alt="Giảng viên và học viên tại IES Sài Gòn" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 px-4 md:grid-cols-3 md:px-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon name={v.icon} className="text-[28px] text-[#3764AF]" />
                <h3 className="mt-3 font-bold text-[#0F5587]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Cơ sở vật chất</span>
            <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Không gian học tập & thực hành</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map((f) => (
                <figure key={f.title} className="overflow-hidden rounded-xl border border-slate-200 bg-[#F5F8FA]">
                  <div className="relative aspect-video">
                    <Image src={f.src} alt={f.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-bold text-[#0F5587]">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Hành trình</span>
            <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Những mốc đáng nhớ</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {timeline.map((t) => (
                <li key={t.title} className="rounded-xl border-t-4 border-[#3764AF] bg-[#F5F8FA] p-5">
                  <p className="text-xs font-bold uppercase text-[#F58232]">{t.step}</p>
                  <h3 className="mt-1 font-bold text-[#0F5587]">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold">Sẵn sàng bắt đầu cùng IES?</h2>
              <p className="mt-2 text-white/85">Để lại thông tin, ban tuyển sinh sẽ liên hệ trong ngày làm việc.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-7 py-3 font-bold text-white shadow-md hover:brightness-105">Đăng ký xét tuyển</Link>
              <a href={schoolContact.phoneNumbers[0].href} className="rounded-full border-2 border-white/50 px-6 py-3 font-bold text-white hover:bg-white/10">
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
