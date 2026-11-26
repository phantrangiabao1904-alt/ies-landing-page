import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: 'Công khai chất lượng giáo dục | IES Sài Gòn',
  description:
    'Cổng thông tin ba công khai của IES Sài Gòn: chuẩn đầu ra, cơ sở vật chất, học phí theo Nghị định 81/2021, kết quả tuyển sinh và khảo sát việc làm.',
  alternates: { canonical: '/cong-khai' },
};

const categories = [
  { icon: 'rule', label: 'Chuẩn đầu ra & cam kết', count: 4 },
  { icon: 'apartment', label: 'Cơ sở vật chất & nhà giáo', count: 3 },
  { icon: 'payments', label: 'Tài chính & học phí NĐ 81', count: 5 },
  { icon: 'how_to_reg', label: 'Kết quả tuyển sinh hàng năm', count: 3 },
  { icon: 'work', label: 'Khảo sát việc làm', count: 4 },
] as const;

const documents = [
  {
    code: 'BC-01/IES-2025',
    date: '15/01/2025',
    size: '2.4 MB',
    title: 'Báo cáo ba công khai cơ sở giáo dục nghề nghiệp',
    desc: 'Tổng hợp chỉ tiêu, cơ sở vật chất, đội ngũ giáo viên cơ hữu và kết quả tài chính theo quy định.',
  },
  {
    code: 'CĐR-06/IES-2025',
    date: '10/12/2024',
    size: '4.1 MB',
    title: 'Chuẩn đầu ra 6 ngành đào tạo trọng điểm',
    desc: 'Khung năng lực thực hành nghề nghiệp, ngoại ngữ và kỹ năng mềm sinh viên phải đạt khi tốt nghiệp.',
  },
  {
    code: 'CK-VL/IES-2025',
    date: '05/11/2024',
    size: '1.8 MB',
    title: 'Cam kết chuẩn đào tạo và bảo đảm việc làm',
    desc: 'Văn bản ký kết với doanh nghiệp về việc tiếp nhận sinh viên đạt chuẩn vào thực tập có lương.',
  },
  {
    code: 'CTĐT-THCS/IES',
    date: '20/09/2024',
    size: '3.5 MB',
    title: 'Khung chương trình đào tạo tích hợp 70% thực hành',
    desc: 'Giảm tải lý thuyết hàn lâm, rèn luyện tay nghề trên phòng máy và xưởng thực hành.',
  },
  {
    code: 'QĐ-TS2026/IES',
    date: '08/01/2026',
    size: '1.2 MB',
    title: 'Quyết định phê duyệt chỉ tiêu và điều kiện tuyển sinh đợt 1 năm 2026',
    desc: 'Công bố 750 chỉ tiêu, hạn nộp hồ sơ đợt 1 đến 30/08/2026 và chính sách hỗ trợ học phí theo NĐ 81/2021.',
  },
];

const jobStats = [
  { label: 'Đúng chuyên ngành CNTT & Thiết kế', value: 68 },
  { label: 'Khối Kinh tế - Thương mại điện tử', value: 24 },
  { label: 'Học liên thông Cao đẳng / Đại học', value: 8 },
];

const stats = [
  { value: '10+', label: 'Năm đào tạo' },
  { value: '5.000+', label: 'Học sinh tốt nghiệp' },
  { value: '50+', label: 'Doanh nghiệp đối tác' },
  { value: '92%', label: 'Có việc làm sau 6 tháng' },
];

export default function CongKhaiPage() {
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-[#F6EEE5]">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <Icon name="chevron_right" className="text-[13px]" />
              <span className="font-semibold text-white">Công khai chất lượng giáo dục</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-[#F6EEE5]">
              <Icon name="verified" className="text-[14px]" /> Ba công khai giáo dục nghề nghiệp
            </span>
            <h1 className="mt-4 font-[var(--font-montserrat)] text-3xl font-extrabold tracking-tight md:text-5xl">
              Minh bạch thông tin, cam kết chất lượng đào tạo
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90">
              Thực hiện quy định ba công khai theo định hướng của Bộ GD&amp;ĐT và Sở GD&amp;ĐT TP.HCM, bảo đảm quyền lợi cho học sinh, phụ huynh và doanh nghiệp đồng hành.
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 px-4 md:px-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-5 text-center">
                <p className="font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">{s.value}</p>
                <p className="mt-1 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 md:px-8 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <h2 className="font-[var(--font-montserrat)] text-lg font-extrabold text-[#0F5587]">Mục lục</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {categories.map((c, i) => (
                  <li key={c.label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm">
                    <span className="flex items-center gap-3 font-semibold text-slate-800">
                      <Icon name={c.icon} className="text-[18px] text-[#3764AF]" />
                      {i + 1}. {c.label}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{c.count}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#0F5587]">Khảo sát việc làm 2025</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {jobStats.map((j) => (
                    <li key={j.label}>
                      <div className="flex justify-between text-xs text-slate-700">
                        <span>{j.label}</span>
                        <span className="font-bold">{j.value}%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-slate-200">
                        <div className="h-2 rounded-full bg-[#3764AF]" style={{ width: `${j.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm">
                <h3 className="font-bold text-[#0F5587]">Hỗ trợ tra cứu hồ sơ</h3>
                <p className="mt-2 text-slate-600">Cần bản sao hoặc giải đáp về quy chế đào tạo, liên hệ:</p>
                <p className="mt-3 flex items-center gap-2 font-bold text-[#0F5587]">
                  <Icon name="call" className="text-[16px]" />
                  <a href={schoolContact.phoneNumbers[0].href}>{schoolContact.phoneNumbers[0].number}</a>
                </p>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <Icon name="mail" className="text-[16px]" />
                  <a href={`mailto:${schoolContact.email}`}>{schoolContact.email}</a>
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Danh mục công khai</h2>
              <div className="mt-6 flex flex-col gap-4">
                {documents.map((d) => (
                  <article key={d.code} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="rounded bg-[#e3efff] px-2 py-0.5 font-mono font-bold text-[#0F5587]">{d.code}</span>
                      <span className="flex items-center gap-1"><Icon name="calendar_today" className="text-[14px]" />{d.date}</span>
                      <span className="flex items-center gap-1"><Icon name="description" className="text-[14px]" />{d.size}</span>
                    </div>
                    <h3 className="mt-3 font-bold text-[#0F5587]">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.desc}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
                      <span className="flex items-center gap-1 text-slate-500"><Icon name="visibility" className="text-[16px]" />Xem trước</span>
                      <span className="flex items-center gap-1 text-[#F58232]"><Icon name="download" className="text-[16px]" />Tải PDF</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200">
                <Image src="/images/stitch/photos/phong-may-lab.png" alt="Phòng thực hành máy tính chuẩn" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>

              <div className="mt-10 rounded-xl border-l-4 border-[#0F5587] bg-white p-6">
                <h3 className="font-bold text-[#0F5587]">Văn bằng Trung cấp chính quy</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Văn bằng có giá trị sử dụng toàn quốc, thuộc Hệ thống Giáo dục Quốc dân. Lộ trình: 1.5 - 2 năm nhận bằng Trung cấp chính quy; 3 năm hoàn tất văn hóa THPT để dự thi tốt nghiệp và liên thông Cao đẳng, Đại học.
                </p>
                <div className="relative mt-5 aspect-[4/3] max-w-sm overflow-hidden rounded-lg border border-slate-200">
                  <Image src="/images/stitch/photos/van-bang.png" alt="Mẫu văn bằng tốt nghiệp chính quy IES" fill sizes="384px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold">Bạn cần thêm thông tin?</h2>
              <p className="mt-2 text-white/85">Liên hệ Phòng Đào tạo & Khảo thí của IES.</p>
            </div>
            <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-7 py-3 font-bold text-white shadow-md hover:brightness-105">Đăng ký tư vấn</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
