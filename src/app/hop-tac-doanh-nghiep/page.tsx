import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

const pillars: { icon: 'work' | 'handshake' | 'hub'; title: string; desc: string }[] = [
  { icon: 'work' as const, title: 'Thực tập có lương', desc: 'Sinh viên thực tập tại doanh nghiệp đối tác trong học kỳ cuối, có hướng dẫn từ mentor.' },
  { icon: 'handshake' as const, title: 'Ngày hội việc làm', desc: 'Tổ chức định kỳ, doanh nghiệp tuyển trực tiếp tại trường.' },
  { icon: 'hub' as const, title: 'Đặt hàng đào tạo', desc: 'Doanh nghiệp đề xuất kỹ năng cần có, nhà trường điều chỉnh chương trình tương ứng.' },
];

const steps = [
  { title: 'Trao đổi nhu cầu', desc: 'Doanh nghiệp gửi nhu cầu nhân sự và kỹ năng mong muốn.' },
  { title: 'Ký kết thỏa thuận', desc: 'Hai bên thống nhất MOU về số lượng, thời gian và quyền lợi thực tập.' },
  { title: 'Triển khai & đánh giá', desc: 'Theo dõi sinh viên định kỳ và đánh giá kết quả sau mỗi đợt.' },
];

const partners = ['Công ty Phần mềm', 'Doanh nghiệp Thiết kế', 'Ngân hàng & Kế toán', 'Thương mại điện tử', 'Doanh nghiệp Logistics', 'Dịch vụ Truyền thông'];

import { getResolvedSiteMedia } from '@/lib/media/site-media-urls';

export default async function HopTacDoanhNghiepPage() {
  const media = await getResolvedSiteMedia();
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-12 lg:py-20">
            <div className="flex flex-col gap-5 lg:col-span-6">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3764AF]">
                <span className="inline-block h-[3px] w-8 rounded-full bg-[#F58232]" /> Đối tác doanh nghiệp
              </span>
              <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#0F5587] md:text-[42px]">
                Kết nối nhà trường và doanh nghiệp
              </h1>
              <p className="text-base leading-relaxed text-slate-600">
                Sinh viên IES học theo nhu cầu thực tế của doanh nghiệp, thực tập có lương và được giới thiệu việc làm sau tốt nghiệp.
              </p>
            </div>
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
                <Image src={media['partnership-banner']} alt="Ký kết hợp tác với doanh nghiệp" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 px-4 md:grid-cols-3 md:px-8">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon name={p.icon} className="text-[28px] text-[#3764AF]" />
                <h2 className="mt-3 text-base font-bold text-[#0F5587]">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Quy trình hợp tác</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-6">
                  <span className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#F58232]">0{i + 1}</span>
                  <h3 className="mt-2 font-bold text-[#0F5587]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#F6EEE5] py-16">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Đối tác tiêu biểu</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {partners.map((p) => (
                <div key={p} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center text-sm font-bold text-slate-700">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold">Doanh nghiệp muốn hợp tác?</h2>
              <p className="mt-2 text-white/85">Liên hệ ban hợp tác để trao đổi nhu cầu nhân sự.</p>
            </div>
            <a href={schoolContact.phoneNumbers[0].href} className="rounded-full bg-[#F58232] px-7 py-3 text-sm font-bold text-white hover:brightness-105">
              {schoolContact.phoneNumbers[0].number}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
