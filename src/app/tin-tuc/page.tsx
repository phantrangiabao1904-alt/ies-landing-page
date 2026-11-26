'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Icon from '@/components/ui/Icon';
import { schoolContact } from '@/lib/school-info';

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'tuyensinh', label: 'Thông báo tuyển sinh' },
  { id: 'hoctap', label: 'Hoạt động học tập' },
  { id: 'doanhnghiep', label: 'Hợp tác doanh nghiệp' },
  { id: 'doisong', label: 'Đời sống sinh viên' },
];

const articles = [
  {
    cat: 'tuyensinh',
    catLabel: 'Thông báo tuyển sinh',
    date: '24/02/2026',
    by: 'Ban Tuyển sinh',
    title: 'Thông báo tuyển sinh Trung cấp chính quy đợt 1 năm 2026',
    desc: 'Chỉ tiêu, điều kiện xét tuyển học bạ THCS không thi tuyển, ưu đãi học phí và hướng dẫn nộp hồ sơ.',
    image: '/images/stitch/photos/tu-van.png',
  },
  {
    cat: 'doanhnghiep',
    catLabel: 'Hợp tác doanh nghiệp',
    date: '18/02/2026',
    by: 'Trung tâm Việc làm',
    title: 'Ngày hội việc làm Job Fair 2026 kết nối 50+ doanh nghiệp đối tác',
    desc: 'Cơ hội thực tập có lương và tuyển dụng trực tiếp cho sinh viên CNTT, Thiết kế đồ họa và Kế toán.',
    image: '/images/stitch/photos/hop-tac-ky-ket.png',
  },
  {
    cat: 'hoctap',
    catLabel: 'Hoạt động học tập',
    date: '10/02/2026',
    by: 'Phòng Đào tạo',
    title: 'Khai giảng khóa mới chương trình Song bằng THPT & Nghề',
    desc: 'Hoàn tất bằng THPT song song bằng Trung cấp nghề sau 3 năm, sẵn sàng bước vào thị trường lao động.',
    image: '/images/stitch/photos/phong-may-lab.png',
  },
  {
    cat: 'doisong',
    catLabel: 'Đời sống sinh viên',
    date: '03/02/2026',
    by: 'Đoàn Thanh niên',
    title: 'Sinh viên ngành Thiết kế đồ họa IES đạt giải sáng tạo nội dung số',
    desc: 'Dự án truyền thông của nhóm sinh viên vượt qua hơn 40 dự án tại Hội thi Sáng tạo Trẻ thành phố.',
    image: '/images/stitch/photos/studio.png',
  },
  {
    cat: 'doanhnghiep',
    catLabel: 'Hợp tác doanh nghiệp',
    date: '28/01/2026',
    by: 'Khoa CNTT',
    title: 'Chuyến tham quan thực tế tại trung tâm dữ liệu và phần mềm',
    desc: 'Tiếp cận quy trình vận hành hạ tầng Cloud và DevOps thực tế tại Công viên Phần mềm Quang Trung.',
    image: '/images/stitch/photos/space-lab.png',
  },
  {
    cat: 'tuyensinh',
    catLabel: 'Thông báo chính sách',
    date: '15/01/2026',
    by: 'Phòng Kế toán',
    title: 'Chính sách hỗ trợ học phí học nghề theo Nghị định hiện hành',
    desc: 'Học sinh tốt nghiệp THCS đi học nghề được ngân sách nhà nước hỗ trợ học phí theo quy định.',
    image: '/images/stitch/photos/van-bang.png',
  },
];

export default function TinTucPage() {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (active === 'all' || a.cat === active) &&
          `${a.title} ${a.desc}`.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [active, query],
  );

  return (
    <div className="site-page flex min-h-screen flex-col bg-[#F5F8FA] text-[#263849]">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="bg-[#0F5587] py-16 text-white">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-[#F6EEE5]">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <Icon name="chevron_right" className="text-[13px]" />
              <span className="font-semibold text-white">Tin tức & sự kiện</span>
            </nav>
            <h1 className="font-[var(--font-montserrat)] text-3xl font-extrabold md:text-5xl">Tin tức & sự kiện IES</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
              Cập nhật thông báo tuyển sinh, hoạt động ngoại khóa thực tiễn và nhịp sống sinh viên IES.
            </p>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lọc tin tức">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active === c.id}
                  onClick={() => setActive(c.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === c.id ? 'bg-[#0F5587] text-white' : 'bg-[#e3efff] text-[#0F5587] hover:bg-[#d8eaff]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <label className="flex h-11 w-full items-center gap-2 rounded-full border border-slate-300 bg-white px-4 md:w-72">
              <Icon name="search" className="text-[18px] text-slate-500" />
              <span className="sr-only">Tìm tin tức</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm tin tức"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>
          </div>
        </section>

        <section className="bg-[#F5F8FA] py-12">
          <div className="mx-auto max-w-[1240px] px-4 md:px-8">
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-slate-600">Không tìm thấy tin phù hợp. Vui lòng thử từ khóa khác.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((a) => (
                  <article key={a.title} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative aspect-video bg-slate-100">
                      <Image src={a.image} alt={a.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="rounded-full bg-[#e3efff] px-3 py-1 font-semibold text-[#0F5587]">{a.catLabel}</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Icon name="calendar_today" className="text-[14px]" />
                          {a.date}
                        </span>
                      </div>
                      <h2 className="font-[var(--font-montserrat)] text-lg font-bold leading-snug text-[#0F5587]">{a.title}</h2>
                      <p className="text-sm leading-relaxed text-slate-600">{a.desc}</p>
                      <p className="mt-auto pt-3 text-xs text-slate-500">Đăng bởi {a.by}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F6EEE5] py-16">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-[var(--font-montserrat)] text-2xl font-extrabold text-[#0F5587]">Nhận bản tin tuyển sinh</h2>
              <p className="mt-2 text-slate-600">Cập nhật mốc nộp hồ sơ, chỉ tiêu từng ngành và chính sách hỗ trợ học phí.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/dang-ky" className="rounded-full bg-[#F58232] px-6 py-3 font-bold text-white shadow-md hover:brightness-105">Đăng ký xét tuyển</Link>
              <a href={schoolContact.phoneNumbers[0].href} className="rounded-full border-2 border-[#0F5587]/40 px-6 py-3 font-bold text-[#0F5587] hover:bg-white">
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
