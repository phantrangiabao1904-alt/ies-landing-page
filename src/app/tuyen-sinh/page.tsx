import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

import { getResolvedSiteMedia } from '@/lib/media/site-media-urls';

export const metadata: Metadata = {
  title: 'Tuyển sinh 2026 - Xét tuyển học bạ | IES Sài Gòn',
  description:
    'Tuyển sinh Trung cấp chính quy 2026 tại IES Sài Gòn: xét tuyển học bạ THCS/THPT, hệ song bằng, hỗ trợ học phí nghề theo Nghị định 81/2021/NĐ-CP.',
  alternates: { canonical: '/tuyen-sinh' },
};

const highlights: { icon: 'task_alt' | 'school' | 'precision_manufacturing' | 'payments'; title: string; desc: string }[] = [
  { icon: 'task_alt', title: 'Không thi tuyển đầu vào', desc: 'Xét tuyển bằng học bạ lớp 9 hoặc lớp 12. Không tạo áp lực thi cử.' },
  { icon: 'school', title: 'Song bằng Trung cấp & THPT', desc: '1.5 - 2 năm nhận bằng Trung cấp chính quy; 3 năm hoàn tất văn hóa THPT.' },
  { icon: 'precision_manufacturing', title: '70% thời lượng thực hành', desc: 'Thực hành trên phòng máy, studio và thực tập tại doanh nghiệp đối tác.' },
  { icon: 'payments', title: 'Hỗ trợ học phí nghề', desc: 'Học sinh tốt nghiệp THCS được hỗ trợ học phí theo Nghị định 81/2021/NĐ-CP.' },
];

const majors = [
  { code: 'IES-01', name: 'Công nghệ thông tin', quota: 150 },
  { code: 'IES-02', name: 'Thiết kế đồ họa', quota: 120 },
  { code: 'IES-03', name: 'Quản trị mạng & An ninh mạng', quota: 110 },
  { code: 'IES-04', name: 'Kế toán doanh nghiệp số', quota: 120 },
  { code: 'IES-05', name: 'Quản trị kinh doanh & Dịch vụ', quota: 110 },
  { code: 'IES-06', name: 'Thương mại điện tử', quota: 140 },
];

const steps = [
  { title: 'Đăng ký tư vấn trực tuyến', desc: 'Điền form trong 3-5 phút hoặc gọi hotline.' },
  { title: 'Nộp hồ sơ học bạ', desc: 'Nộp trực tiếp tại trường hoặc qua bưu điện.' },
  { title: 'Nhận giấy báo nhập học', desc: 'Hội đồng tuyển sinh phản hồi trong 24-48 giờ.' },
  { title: 'Nhập học & nhận lịch thực hành', desc: 'Hoàn thiện hồ sơ gốc, nhận thẻ sinh viên và tham gia tuần định hướng.' },
];

const documents = [
  'Phiếu đăng ký xét tuyển theo mẫu IES Sài Gòn',
  'Bản sao học bạ THCS (hoặc THPT), có công chứng',
  'Bản sao CCCD hoặc trích lục định danh VNeID',
  'Ảnh thẻ 3x4 (04 tấm, chụp không quá 6 tháng)',
  'Giấy tờ ưu tiên, hộ nghèo, gia đình chính sách (nếu có)',
];

const faqs = [
  {
    q: 'Học hết lớp 9 đi học Trung cấp có được nhận bằng THPT không?',
    a: 'Có. Học sinh tích hợp chương trình văn hóa THPT theo quy định của Bộ GD&ĐT, đủ điều kiện thi tốt nghiệp THPT quốc gia và liên thông Cao đẳng, Đại học.',
  },
  {
    q: 'Học lực trung bình cấp 2 có đủ điều kiện xét tuyển không?',
    a: 'Đủ điều kiện. Nhà trường xét tuyển dựa trên học bạ THCS, không thi tuyển.',
  },
  {
    q: 'Chính sách học phí theo Nghị định 81/2021/NĐ-CP được thực hiện thế nào?',
    a: 'Học sinh tốt nghiệp THCS học Trung cấp được Nhà nước hỗ trợ học phí nghề theo quy định hiện hành. Nhà trường cấp giấy xác nhận để phụ huynh nhận hỗ trợ tại Phòng LĐ-TB&XH nơi đăng ký thường trú.',
  },
  {
    q: 'Học xong có cam kết việc làm không?',
    a: 'Sinh viên đạt chuẩn tốt nghiệp được giới thiệu thực tập có lương và kết nối phỏng vấn tại 50+ doanh nghiệp đối tác tại TP.HCM.',
  },
];

export default async function TuyenSinhPage() {
  const media = await getResolvedSiteMedia();
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
            <div className="flex flex-col gap-5 lg:col-span-6">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3764AF]">
                <span className="inline-block h-[3px] w-8 rounded-full bg-[#F58232]" /> Tuyển sinh 2026
              </span>
              <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#0F5587] md:text-[44px]">
                Học nghề sớm, vững sự nghiệp mai sau
              </h1>
              <p className="text-base leading-relaxed text-slate-600">
                Thực hành thiết bị thật, thầy cô kèm cặp sát sao, cam kết giới thiệu việc làm sau tốt nghiệp.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Xét tuyển học bạ', 'Hỗ trợ học phí NĐ 81', 'Song bằng Trung cấp & THPT'].map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-[#e3efff] px-3.5 py-1.5 text-xs font-semibold text-[#0F5587]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#dang-ky" className="rounded-full bg-[#F58232] px-7 py-3 text-sm font-bold text-white shadow-md hover:brightness-105">
                  Đăng ký ngay
                </a>
                <a href="#nganh" className="rounded-full border-2 border-[#0F5587]/40 px-6 py-3 text-sm font-bold text-[#0F5587] hover:bg-slate-50">
                  Xem 6 ngành học
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[#F6EEE5]" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
                <Image src={media['admission-banner']} alt="Khuôn viên trường IES Sài Gòn" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
              </div>
              </div>
            </div>
          </section>

        {/* Highlights */}
        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon name={item.icon} className="text-[28px] text-[#3764AF]" />
                <h3 className="mt-3 text-base font-bold text-[#0F5587]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
            </div>
          </section>

        {/* Majors & quota */}
        <section id="nganh" className="bg-white py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Chỉ tiêu đợt 1</span>
              <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Chỉ tiêu tuyển sinh 6 ngành</h2>
              <p className="mt-2 text-sm text-slate-600">Tổng chỉ tiêu 750. Chỉ tiêu dựa trên dữ liệu tuyển sinh năm 2026, có thể điều chỉnh theo quyết định của nhà trường.</p>
                  </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-[#e3efff] text-[#0F5587]">
                  <tr>
                    <th className="px-5 py-3 font-bold">Mã ngành</th>
                    <th className="px-5 py-3 font-bold">Tên ngành</th>
                    <th className="px-5 py-3 font-bold">Thời gian</th>
                    <th className="px-5 py-3 text-right font-bold">Chỉ tiêu đợt 1</th>
                  </tr>
                </thead>
                <tbody>
                  {majors.map((m) => (
                    <tr key={m.code} className="border-t border-slate-200">
                      <td className="px-5 py-3 font-mono text-slate-500">{m.code}</td>
                      <td className="px-5 py-3 font-semibold text-slate-800">{m.name}</td>
                      <td className="px-5 py-3 text-slate-600">1.5 - 2 năm</td>
                      <td className="px-5 py-3 text-right font-bold text-[#0F5587]">{m.quota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Xem chi tiết từng ngành tại <Link href="/nganh-dao-tao" className="font-semibold text-[#3764AF] hover:underline">trang Ngành đào tạo</Link>.
            </p>
            </div>
          </section>

        {/* Steps */}
        <section className="bg-[#F6EEE5] py-20">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <h2 className="mb-10 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Lộ trình 4 bước xét tuyển</h2>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <span className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#F58232]">0{i + 1}</span>
                  <h3 className="mt-2 font-bold text-[#0F5587]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ol>
              </div>
        </section>

        {/* Documents & FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Hồ sơ đăng ký</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon name="check_circle" className="mt-0.5 text-[18px] text-[#3764AF]" />
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Cần hỗ trợ hồ sơ? Gọi <a href={schoolContact.phoneNumbers[0].href} className="font-bold text-[#0F5587]">{schoolContact.phoneNumbers[0].number}</a>.
              </p>
            </div>
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Câu hỏi thường gặp</h2>
              <div className="mt-6 flex flex-col gap-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-slate-200 bg-[#F5F8FA] p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0F5587]">
                      {f.q}
                      <Icon name="expand_more" className="shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
              </div>
            </div>
          </section>

        {/* Form */}
        <section id="dang-ky" className="bg-[#0F5587] py-20 text-white">
          <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold">Sẵn sàng bắt đầu cùng IES?</h2>
              <p className="mt-4 leading-relaxed text-white/85">
                Để lại thông tin, ban tuyển sinh sẽ liên hệ tư vấn lộ trình học phù hợp trong ngày làm việc.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-lg font-bold">
                {schoolContact.phoneNumbers.map((phone) => (
                  <a key={phone.number} href={phone.href} className="hover:underline">
                    {phone.number}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-xl sm:p-8">
              <LeadForm id="form-tuyen-sinh-2026" source="tuyen_sinh_2026" />
            </div>
        </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
