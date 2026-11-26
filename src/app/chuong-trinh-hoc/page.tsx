import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import PolicyDisclosure from '@/components/ui/PolicyDisclosure';
import { decree81SearchUrl, decree24DocumentUrl } from '@/lib/school-info';

export const metadata = {
  title: 'Chọn lộ trình — Trường Trung cấp Tin học Kinh tế Sài Gòn (IES)',
  description: 'So sánh lộ trình Hệ 9+ và Trung cấp nghề: thời gian học, bằng nhận được, hỗ trợ học phí và cách đăng ký.',
};

const columns = [
  { name: 'Hệ 9+', badge: 'Sau THCS' },
  { name: 'Trung cấp nghề', badge: 'Sau THPT' },
];

const rows = [
  { label: 'Dành cho ai', values: ['Đã tốt nghiệp THCS (lớp 9)', 'Đã tốt nghiệp THPT (lớp 12)'] },
  { label: 'Thời gian học', values: ['2,5 - 3 năm', '1,5 - 2 năm'] },
  { label: 'Nội dung học', values: ['Văn hóa THPT song song với nghề', 'Tập trung hoàn toàn vào nghề'] },
  { label: 'Văn bằng', values: ['Trung cấp và chứng nhận hoàn thành THPT', 'Bằng Trung cấp chính quy'] },
  { label: 'Hỗ trợ học phí', values: ['Theo Nghị định 81 nếu đủ điều kiện', 'Theo chính sách hiện hành, Ban tư vấn xác nhận'] },
  { label: 'Sau khi học', values: ['Đi làm hoặc học liên thông', 'Đi làm hoặc học liên thông'] },
];

const steps = [
  'Chọn lộ trình phù hợp với trình độ hiện tại.',
  'Đăng ký tư vấn, Ban tư vấn liên hệ trong thời gian sớm nhất.',
  'Nộp hồ sơ theo hướng dẫn, nhận xác nhận điều kiện.',
  'Nhập học và bắt đầu chương trình.',
];

export default function ChuongTrinhHocPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-slate-500 sm:px-6">
          <Link href="/" className="hover:text-[#0F5587]">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#0F5587]">Chọn lộ trình</span>
        </nav>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-extrabold leading-tight text-[#0F5587] sm:text-4xl">
            Chọn lộ trình phù hợp với bạn
                </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            IES có hai lộ trình. Bảng dưới đây so sánh nhanh để bạn chọn đúng điểm xuất phát của mình.
          </p>
          </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6" aria-labelledby="so-sanh">
          <h2 id="so-sanh" className="sr-only">So sánh hai lộ trình</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="p-4 font-semibold text-slate-500">Tiêu chí</th>
                  {columns.map((col) => (
                    <th key={col.name} scope="col" className="p-4">
                      <span className="block text-xs font-semibold uppercase text-slate-500">{col.badge}</span>
                      <span className="text-base font-bold text-[#0F5587]">{col.name}</span>
                    </th>
                  ))}
                    </tr>
                  </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="w-1/4 p-4 font-semibold text-slate-900">{row.label}</th>
                    {row.values.map((value, i) => (
                      <td key={i} className="p-4 leading-relaxed text-slate-600">{value}</td>
                    ))}
                    </tr>
                ))}
                  </tbody>
                </table>
              </div>
          <p className="mt-4 text-sm text-slate-500">
            Điều kiện hỗ trợ học phí áp dụng theo đối tượng và hồ sơ.{' '}
            <a href={decree81SearchUrl} target="_blank" rel="noopener noreferrer" className="underline">Nghị định 81/2021/NĐ-CP</a>
            {' · '}
            <a href={decree24DocumentUrl} target="_blank" rel="noopener noreferrer" className="underline">Nghị định 24/2022/NĐ-CP (PDF)</a>
          </p>
          <div className="mt-4"><PolicyDisclosure /></div>
          </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold text-[#0F5587] sm:text-3xl">Quy trình đăng ký</h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((text, index) => (
                <li key={text} className="rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F5587] font-bold text-white">{index + 1}</span>
                  <p className="mt-3 leading-relaxed text-slate-700">{text}</p>
                </li>
              ))}
            </ol>
            </div>
          </section>

        <section id="dang-ky-tu-van" className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Đăng ký tư vấn</h2>
              <p className="mt-3 leading-relaxed text-white/85">
                Để lại thông tin, Ban tư vấn sẽ liên hệ xác nhận lộ trình và hướng dẫn hồ sơ.
              </p>
            </div>
            <LeadForm source="chuong_trinh_hoc" />
            </div>
          </section>
      </main>
      <SiteFooter />
    </div>
  );
}
