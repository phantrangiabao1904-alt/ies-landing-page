import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: 'IES Sài Gòn - Trường Trung cấp Tin học Kinh tế | Tuyển sinh 2026',
  description:
    'Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) tuyển sinh 2026: đào tạo nghề 9+ song bằng, 6 ngành thực hành, hỗ trợ học phí theo Nghị định 81/2021.',
  alternates: { canonical: '/' },
};

const metrics = [
  { value: '10+', label: 'Năm đào tạo' },
  { value: '5.000+', label: 'Học viên tốt nghiệp' },
  { value: '50+', label: 'Doanh nghiệp đối tác' },
  { value: '92%', label: 'Có việc làm sau 6 tháng' },
];

const partnerTags = ['TechNova', 'Saigon Digital', 'Minh Phát', 'An Khang', 'Lạc Việt', 'BlueWave'];

const majors = [
  { icon: 'terminal', name: 'Công nghệ thông tin', desc: 'Lập trình web, phần mềm, cơ sở dữ liệu.', href: '/nganh-dao-tao#IES-01' },
  { icon: 'palette', name: 'Thiết kế đồ họa', desc: 'Thương hiệu, UI/UX, truyền thông số.', href: '/nganh-dao-tao#IES-02' },
  { icon: 'security', name: 'Quản trị mạng & ANM', desc: 'Hạ tầng mạng, server và bảo mật.', href: '/nganh-dao-tao#IES-03' },
  { icon: 'calculate', name: 'Kế toán doanh nghiệp số', desc: 'Kế toán thực hành, thuế số, MISA/FAST.', href: '/nganh-dao-tao#IES-04' },
  { icon: 'business_center', name: 'Quản trị kinh doanh', desc: 'Bán hàng, vận hành, chăm sóc khách hàng.', href: '/nganh-dao-tao#IES-05' },
  { icon: 'shopping_bag', name: 'Thương mại điện tử', desc: 'Sàn TMĐT, livestream, digital marketing.', href: '/nganh-dao-tao#IES-06' },
] as const;

const quiz = [
  { q: 'Bạn thích làm việc với máy tính hay con người?', a: 'Máy tính & công nghệ', to: 'Công nghệ thông tin' },
  { q: 'Bạn yêu thích sáng tạo hình ảnh hay chữ nghĩa?', a: 'Hình ảnh & thiết kế', to: 'Thiết kế đồ họa' },
  { q: 'Bạn muốn làm việc trong môi trường kinh doanh?', a: 'Bán hàng & kinh doanh', to: 'Quản trị kinh doanh / TMĐT' },
];

const stories = [
  { img: '/images/stitch/photos/sv-le-hoang-phuc.png', name: 'Lê Hoàng Phúc', major: 'Công nghệ thông tin', quote: 'Thầy cô hướng dẫn thực hành sát sao. Sau kỳ thực tập, em đã có việc làm đúng ngành.' },
  { img: '/images/stitch/photos/sv-nguyen-minh-khoi.png', name: 'Nguyễn Minh Khôi', major: 'Quản trị mạng', quote: 'Học trên hệ thống máy chủ thật giúp em tự tin khi làm việc tại doanh nghiệp.' },
  { img: '/images/stitch/photos/sv-tran-thu-ha.png', name: 'Trần Thu Hà', major: 'Thiết kế đồ họa', quote: 'Dự án thực tế với doanh nghiệp giúp portfolio của em nổi bật khi đi phỏng vấn.' },
];

export default function HomePage() {
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0F5587] text-white">
          <div className="absolute inset-0">
            <Image src="/images/stitch/photos/khuon-vien.png" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          </div>
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F6EEE5]">
                <Icon name="stars" className="text-[15px]" /> Tuyển sinh 2026 - Đợt 1
              </span>
              <h1 className="mt-5 font-[var(--font-montserrat)] text-4xl font-extrabold leading-tight md:text-6xl">
                Học nghề thực chiến,<br />
                <span className="text-[#2DBEDC]">sẵn sàng việc làm.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                Trường Trung cấp Tin học Kinh tế Sài Gòn đào tạo 6 ngành công nghệ và kinh tế theo mô hình 70% thực hành, học song song văn hóa THPT.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-8 py-4 font-bold text-white shadow-lg hover:brightness-105">
                  Đăng ký xét tuyển
                </Link>
                <Link href="/tuyen-sinh" className="rounded-full border-2 border-white/60 px-8 py-4 font-bold text-white hover:bg-white/10">
                  Xem điều kiện tuyển sinh
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/80">
                Tư vấn nhanh: <a href={schoolContact.phoneNumbers[0].href} className="font-bold text-white underline-offset-4 hover:underline">{schoolContact.phoneNumbers[0].number}</a>
                {' '}· {schoolContact.phoneNumbers[1].number}
              </p>
            </div>
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-[28px] border-4 border-white/20 shadow-2xl lg:block">
              <Image src="/images/stitch/photos/cong-truong.png" alt="Cổng trường IES Sài Gòn" fill sizes="50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587] md:text-4xl">{m.value}</p>
                <p className="mt-1 text-sm text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="border-y border-slate-200 bg-[#F6EEE5] py-8">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3 px-4 md:px-8">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#3764AF]">Đối tác doanh nghiệp</span>
            {partnerTags.map((p) => (
              <span key={p} className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-[#0F5587]">{p}</span>
            ))}
          </div>
        </section>

        {/* Majors */}
        <section className="bg-[#F5F8FA] py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Ngành đào tạo</span>
                <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">6 ngành trọng điểm 2026</h2>
              </div>
              <Link href="/nganh-dao-tao" className="flex items-center gap-1 font-bold text-[#0F5587] hover:underline">
                Xem chi tiết các ngành <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {majors.map((m) => (
                <Link key={m.name} href={m.href} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon name={m.icon} className="text-[28px] text-[#3764AF]" />
                  <h3 className="mt-4 font-bold text-[#0F5587] group-hover:underline">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Hướng nghiệp</span>
              <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Chưa biết chọn ngành nào?</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Trả lời 3 câu hỏi nhanh để xem ngành nào phù hợp với tính cách và sở thích của bạn. Thầy cô tư vấn miễn phí sau đó.
              </p>
              <Link href="/dang-ky" className="mt-6 inline-flex rounded-full bg-[#0F5587] px-7 py-3 font-bold text-white hover:bg-[#3764AF]">
                Nhận tư vấn hướng nghiệp
              </Link>
            </div>
            <ol className="flex flex-col gap-4">
              {quiz.map((item, i) => (
                <li key={item.q} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-5">
                  <p className="text-xs font-bold text-[#F58232]">Câu {i + 1}</p>
                  <p className="mt-1 font-semibold text-slate-800">{item.q}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Gợi ý: <span className="font-bold text-[#0F5587]">{item.to}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stories */}
        <section className="bg-[#F5F8FA] py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Cảm nhận sinh viên</span>
            <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Điều các bạn học viên chia sẻ</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {stories.map((s) => (
                <figure key={s.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image src={s.img} alt={`Sinh viên ${s.name}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="p-6">
                    <blockquote className="text-sm leading-relaxed text-slate-700">&ldquo;{s.quote}&rdquo;</blockquote>
                    <p className="mt-4 font-bold text-[#0F5587]">{s.name}</p>
                    <p className="text-xs text-slate-500">Ngành {s.major}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold md:text-3xl">Đợt 1 tuyển sinh đến 30/08/2026</h2>
              <p className="mt-2 text-white/85">Ưu tiên 500 suất đầu tiên. Hỗ trợ học phí theo Nghị định 81/2021/NĐ-CP.</p>
            </div>
            <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-8 py-4 font-bold text-white shadow-lg hover:brightness-105">
              Đăng ký ngay
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
