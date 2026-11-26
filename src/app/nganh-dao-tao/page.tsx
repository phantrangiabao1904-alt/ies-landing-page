import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: '6 Ngành đào tạo trung cấp 2026 | IES Sài Gòn',
  description:
    'Công nghệ thông tin, Thiết kế đồ họa, Quản trị mạng, Kế toán doanh nghiệp số, Quản trị kinh doanh và Thương mại điện tử tại IES Sài Gòn. Thời gian 1.5 - 2 năm.',
  alternates: { canonical: '/nganh-dao-tao' },
};

const majors = [
  {
    code: 'IES-01',
    name: 'Công nghệ thông tin',
    icon: 'terminal',
    image: '/images/stitch/photos/phong-may-lab.png',
    desc: 'Lập trình web, phần mềm ứng dụng và cơ sở dữ liệu.',
    skills: ['Tư duy thuật toán & SQL', 'JavaScript & Python ứng dụng', 'Quy trình Git & Agile'],
    jobs: ['Junior Web Developer', 'Software Tester', 'IT Support'],
    quota: 150,
  },
  {
    code: 'IES-02',
    name: 'Thiết kế đồ họa',
    icon: 'palette',
    image: '/images/stitch/photos/phong-thiet-ke.png',
    desc: 'Mỹ thuật số, nhận diện thương hiệu, UI/UX và truyền thông số.',
    skills: ['Photoshop, Illustrator, Figma', 'Motion graphics & video ngắn', 'Typography & bao bì'],
    jobs: ['Graphic Designer', 'Junior UI/UX Designer', 'Digital Content Creator'],
    quota: 120,
  },
  {
    code: 'IES-03',
    name: 'Quản trị mạng & An ninh mạng',
    icon: 'security',
    image: '/images/stitch/photos/space-lab.png',
    desc: 'Hạ tầng mạng, máy chủ Windows Server & Linux, bảo mật thông tin.',
    skills: ['Cấu hình Router/Switch Cisco', 'Quản trị Windows Server & Linux', 'Giám sát an ninh mạng'],
    jobs: ['Kỹ thuật viên hạ tầng mạng', 'System Admin', 'Helpdesk & bảo mật'],
    quota: 110,
  },
  {
    code: 'IES-04',
    name: 'Kế toán doanh nghiệp số',
    icon: 'calculate',
    image: '/images/stitch/photos/thu-vien.png',
    desc: 'Chứng từ kế toán, kê khai thuế số và phần mềm kế toán thực hành.',
    skills: ['Kê khai thuế & báo cáo tài chính', 'Thành thạo MISA, FAST', 'Kế toán kho & lương số hóa'],
    jobs: ['Kế toán viên tổng hợp', 'Chuyên viên kê khai thuế', 'Thủ quỹ, kiểm soát chi'],
    quota: 120,
  },
  {
    code: 'IES-05',
    name: 'Quản trị kinh doanh & Dịch vụ',
    icon: 'business_center',
    image: '/images/stitch/photos/tu-van.png',
    desc: 'Bán hàng, vận hành kinh doanh, đàm phán và chăm sóc khách hàng.',
    skills: ['Lập kế hoạch bán hàng & KPI', 'Đàm phán & CRM số', 'Điều phối cửa hàng & nhân sự'],
    jobs: ['Nhân viên kinh doanh B2B/B2C', 'Trợ lý vận hành', 'Giám sát bán hàng'],
    quota: 110,
  },
  {
    code: 'IES-06',
    name: 'Thương mại điện tử',
    icon: 'shopping_bag',
    image: '/images/stitch/photos/livestream.png',
    desc: 'Vận hành sàn TMĐT, digital marketing, livestream bán hàng và TikTok Shop.',
    skills: ['Livestream & host bán hàng', 'Vận hành Shopee & TikTok Shop', 'Quảng cáo Meta/TikTok căn bản'],
    jobs: ['Chuyên viên vận hành sàn', 'Quản lý gian hàng đa kênh', 'Content creator'],
    quota: 140,
  },
] as const;

const model = [
  { icon: 'school', title: 'Nhà trường', desc: 'Xây dựng chương trình và quản lý đào tạo.' },
  { icon: 'business_center', title: 'Doanh nghiệp', desc: 'Tham gia thẩm định giáo trình, giảng dạy và nhận thực tập.' },
  { icon: 'person', title: 'Người học', desc: 'Thực hành trên thiết bị thật và dự án thực tế.' },
] as const;

export default function NganhDaoTaoPage() {
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-20 text-white">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-[#F6EEE5]">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <Icon name="chevron_right" className="text-[13px]" />
              <span className="font-semibold text-white">Ngành đào tạo</span>
            </nav>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2DBEDC]">Chương trình đào tạo 2026</span>
            <h1 className="mt-3 font-[var(--font-montserrat)] text-3xl font-extrabold md:text-5xl">6 ngành đào tạo trọng điểm</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
              Đào tạo chuyên sâu kỹ năng thực hành, bám sát nhu cầu nhân lực số của doanh nghiệp tại TP.HCM. Thời gian 1.5 - 2 năm.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {model.map((m) => (
                <div key={m.title} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-6">
                  <Icon name={m.icon} className="text-[28px] text-[#3764AF]" />
                  <h3 className="mt-3 font-bold text-[#0F5587]">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {majors.map((m) => (
              <article key={m.code} id={m.code} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-video w-full bg-slate-100">
                  <Image src={m.image} alt={`Hình ảnh ngành ${m.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <Icon name={m.icon} className="text-[24px] text-[#3764AF]" />
                    <h2 className="font-[var(--font-montserrat)] text-lg font-bold text-[#0F5587]">{m.name}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Kỹ năng cốt lõi</p>
                    <ul className="mt-2 flex flex-col gap-1.5 text-sm text-slate-700">
                      {m.skills.map((s) => (
                        <li key={s} className="flex gap-2"><Icon name="check" className="mt-0.5 text-[16px] text-[#2DBEDC]" />{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Vị trí việc làm</p>
                    <p className="mt-2 text-sm text-slate-700">{m.jobs.join(' · ')}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                    <span className="text-slate-500">Chỉ tiêu đợt 1: <strong className="text-[#0F5587]">{m.quota}</strong></span>
                    <Link href={`/dang-ky?major=${encodeURIComponent(m.name)}`} className="font-bold text-[#F58232] hover:underline">
                      Đăng ký ngành này
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold">Chưa chắc ngành nào phù hợp?</h2>
              <p className="mt-2 text-white/85">Gọi tư vấn để được hướng nghiệp miễn phí.</p>
            </div>
            <a href={schoolContact.phoneNumbers[0].href} className="rounded-full bg-[#F58232] px-7 py-3 font-bold text-white shadow-md hover:brightness-105">
              Gọi {schoolContact.phoneNumbers[0].number}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
