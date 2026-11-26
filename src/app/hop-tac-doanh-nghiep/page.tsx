import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

export const metadata: Metadata = {
  title: 'Hợp tác doanh nghiệp & việc làm | IES Sài Gòn',
  description:
    'Hợp tác doanh nghiệp tại IES Sài Gòn: đào tạo theo đơn đặt hàng, thực tập có lương, cam kết giới thiệu việc làm và ngày hội việc làm Job Fair.',
  alternates: { canonical: '/hop-tac-doanh-nghiep' },
};

const pillars: { icon: 'menu_book' | 'co_present' | 'paid'; title: string; desc: string }[] = [
  { icon: 'menu_book', title: 'Xây dựng & thẩm định giáo trình', desc: 'Khung chương trình hiệu chỉnh hàng năm với sự tham gia của Giám đốc Kỹ thuật và Trưởng bộ phận nhân sự.' },
  { icon: 'co_present', title: 'Chuyên gia doanh nghiệp đứng lớp', desc: 'Kỹ sư thâm niên trực tiếp giảng các chuyên đề và chia sẻ kỹ năng xử lý dự án.' },
  { icon: 'paid', title: 'Thực tập có lương & tuyển dụng', desc: 'Học viên tham gia OJT từ kỳ 4 có thu nhập hỗ trợ, ưu tiên chuyển tiếp thành nhân viên chính thức.' },
];

const steps = [
  { n: '01', title: 'Khảo sát nhu cầu', desc: 'Tiếp nhận mô tả công việc, số lượng nhân sự và yêu cầu kỹ năng từ doanh nghiệp.' },
  { n: '02', title: 'Ký biên bản thỏa thuận', desc: 'Xác lập MOU về quyền lợi thực tập, lộ trình huấn luyện và chính sách đãi ngộ.' },
  { n: '03', title: 'Tiếp nhận & đánh giá', desc: 'Đưa học sinh về thực tập tại đơn vị, nhà trường và mentor cùng theo dõi sát sao.' },
  { n: '04', title: 'Tuyển dụng chính thức', desc: 'Doanh nghiệp tuyển trực tiếp ứng viên đạt yêu cầu và ký hợp đồng lao động.' },
];

const partners = ['TechNova', 'Saigon Digital', 'Minh Phát', 'An Khang', 'Lạc Việt', 'BlueWave'];

const industries = ['CNTT & Phần mềm', 'Thiết kế đồ họa', 'Quản trị doanh nghiệp', 'Thương mại điện tử', 'Kế toán & tài chính'];

export default function HopTacDoanhNghiepPage() {
  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-20 text-white">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-[#F6EEE5]">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <Icon name="chevron_right" className="text-[13px]" />
              <span className="font-semibold text-white">Hợp tác doanh nghiệp</span>
            </nav>
            <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold md:text-5xl">Hợp tác doanh nghiệp & việc làm</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90">
              Cầu nối thực tiễn giữa nhà trường và thị trường lao động. Đào tạo theo đơn đặt hàng, cam kết việc làm sau tốt nghiệp cho nguồn nhân lực trẻ.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3764AF]">Mô hình đào tạo kép</span>
              <h2 className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Tam giác hợp tác Nhà trường - Doanh nghiệp - Học sinh</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Xóa bỏ khoảng cách giữa giảng đường và nhu cầu tuyển dụng. Chương trình học gắn với công việc thực tế mà doanh nghiệp cần.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-xl">
              <Image src="/images/stitch/photos/hop-tac-ky-ket.png" alt="Lễ ký kết hợp tác đào tạo giữa IES và doanh nghiệp" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 px-4 md:grid-cols-3 md:px-8">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon name={p.icon} className="text-[28px] text-[#3764AF]" />
                <h3 className="mt-3 font-bold text-[#0F5587]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold text-[#0F5587]">Quy trình tiếp nhận 4 bước</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-xl border border-slate-200 bg-[#F5F8FA] p-6">
                  <span className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#F58232]">{s.n}</span>
                  <h3 className="mt-2 font-bold text-[#0F5587]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#F6EEE5] py-16">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Khối liên minh đối tác</h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((p) => (
                <li key={p} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 text-center font-[var(--font-montserrat)] font-bold text-[#0F5587]">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Ngày hội việc làm Job Fair</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Tổ chức thường kỳ vào quý 2 ngay tại khuôn viên trường, thu hút hơn 40 gian hàng tuyển dụng, phỏng vấn thử việc và tuyển thực tập sinh năm cuối.
              </p>
              <div className="relative mt-6 aspect-video overflow-hidden rounded-xl border border-slate-200">
                <Image src="/images/stitch/photos/cong-truong.png" alt="Khuôn viên IES tổ chức ngày hội việc làm" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>

            <form className="rounded-2xl border border-slate-200 bg-[#F5F8FA] p-6 sm:p-8" action="/dang-ky" method="get">
              <h2 className="font-[var(--font-montserrat)] text-xl font-extrabold text-[#0F5587]">Gửi yêu cầu hợp tác</h2>
              <p className="mt-2 text-sm text-slate-600">
                Bộ phận Quan hệ Doanh nghiệp sẽ liên hệ trong vòng 24 giờ. Vui lòng để lại thông tin tại đây hoặc gọi hotline công vụ.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-slate-700">
                  Ngành nghề quan tâm
                  <select name="industry" className="h-11 rounded-lg border border-slate-300 bg-white px-3 font-normal">
                    {industries.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-slate-700">
                  Ghi chú nhu cầu hợp tác
                  <textarea name="note" rows={3} className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal" />
                </label>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="rounded-full bg-[#F58232] px-6 py-3 font-bold text-white shadow-md hover:brightness-105">
                  Tiếp tục đăng ký
                </button>
                <a href={schoolContact.phoneNumbers[0].href} className="text-sm font-bold text-[#0F5587]">
                  Hoặc gọi {schoolContact.phoneNumbers[0].number}
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
