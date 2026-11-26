import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact, decree81SearchUrl } from '@/lib/school-info';

const disclosures = [
  {
    icon: 'verified' as const,
    title: 'Cam kết chất lượng đào tạo',
    desc: 'Chương trình đào tạo, chuẩn đầu ra và điều kiện tốt nghiệp được công bố đầy đủ trước khi nhập học.',
  },
  {
    icon: 'payments' as const,
    title: 'Học phí & chính sách hỗ trợ',
    desc: 'Mức thu học phí, các khoản thu khác và chính sách hỗ trợ theo Nghị định 81/2021/NĐ-CP.',
  },
  {
    icon: 'apartment' as const,
    title: 'Điều kiện cơ sở vật chất',
    desc: 'Phòng máy thực hành, studio, thư viện và ký túc xá tại cơ sở Phạm Văn Chiêu.',
  },
];

const documents = [
  { title: 'Quyết định thành lập & giấy phép hoạt động', type: 'PDF', href: '#' },
  { title: 'Chương trình đào tạo các ngành 2026', type: 'PDF', href: '#' },
  { title: 'Quy chế tuyển sinh năm 2026', type: 'PDF', href: '#' },
  { title: 'Thông báo học phí và các khoản thu', type: 'PDF', href: '#' },
  { title: 'Báo cáo tình hình việc làm sinh viên', type: 'PDF', href: '#' },
];

const stats = [
  { label: 'Tỷ lệ sinh viên tốt nghiệp đúng hạn', value: 'Đang cập nhật' },
  { label: 'Tỷ lệ có việc làm sau tốt nghiệp', value: 'Đang cập nhật' },
  { label: 'Doanh nghiệp đối tác thực tập', value: '50+' },
];

import { getResolvedSiteMedia } from '@/lib/media/site-media-urls';

export default async function CongKhaiPage() {
  const media = await getResolvedSiteMedia();
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-12 lg:py-20">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3764AF]">
                <span className="inline-block h-[3px] w-8 rounded-full bg-[#F58232]" /> Minh bạch
              </span>
              <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#0F5587] md:text-[42px]">
                Công khai thông tin
              </h1>
              <p className="text-base leading-relaxed text-slate-600">
                IES công khai cam kết chất lượng, học phí, cơ sở vật chất và kết quả đào tạo để người học và phụ huynh có đầy đủ thông tin trước khi quyết định.
              </p>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
                <Image src={media['admission-decree']} alt="Văn bằng và chứng chỉ IES" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 px-4 md:grid-cols-3 md:px-8">
            {disclosures.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon name={item.icon} className="text-[28px] text-[#3764AF]" />
                <h2 className="mt-3 text-base font-bold text-[#0F5587]">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Tài liệu công khai</h2>
              <p className="mt-2 text-sm text-slate-600">Các văn bản được cập nhật theo năm học. Liên hệ trường nếu chưa tìm thấy tài liệu cần tìm.</p>
              <ul className="mt-6 flex flex-col gap-3">
                {documents.map((doc) => (
                  <li key={doc.title} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-[#F5F8FA] p-4">
                    <span className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                      <Icon name="description" className="text-[#3764AF]" />
                      {doc.title}
                    </span>
                    <span className="rounded-full bg-[#e3efff] px-3 py-1 text-xs font-bold text-[#0F5587]">{doc.type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Kết quả đào tạo</h2>
              <div className="mt-6 grid gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
                    <span className="text-sm text-slate-700">{s.label}</span>
                    <span className="font-[var(--font-montserrat)] text-lg font-extrabold text-[#0F5587]">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-600">
                Căn cứ pháp lý: <a href={decree81SearchUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#3764AF] hover:underline">Nghị định 81/2021/NĐ-CP</a>. Thắc mắc, liên hệ{' '}
                <a href={schoolContact.phoneNumbers[0].href} className="font-bold text-[#0F5587]">{schoolContact.phoneNumbers[0].number}</a>.
              </p>
              <Link href="/tuyen-sinh" className="mt-6 inline-flex rounded-full bg-[#F58232] px-6 py-3 text-sm font-bold text-white hover:brightness-105">
                Xem thông tin tuyển sinh
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
