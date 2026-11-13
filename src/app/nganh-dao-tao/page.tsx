import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import { schoolContact } from '@/lib/school-info';

export const metadata = {
  title: 'Hệ Thống Ngành Đào Tạo Thực Chiến — IES Saigon',
  description: 'Danh mục ngành đào tạo năm 2026: Công nghệ thông tin, Thiết kế đồ họa, Quản trị mạng, Kế toán, Quản trị kinh doanh và Thương mại điện tử.',
};

const majors = [
  {
    id: '01',
    code: 'CNTT',
    title: 'Công nghệ thông tin',
    enTitle: 'INFORMATION TECHNOLOGY',
    desc: 'Trang bị nền tảng công nghệ thông tin, lập trình ứng dụng, cơ sở dữ liệu và kỹ năng triển khai sản phẩm số theo yêu cầu thực tế.',
    skills: ['Lập trình ứng dụng', 'Cơ sở dữ liệu', 'Phát triển web', 'Làm việc nhóm'],
    salary: '10.000.000 - 18.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    category: 'cong-nghe',
  },
  {
    id: '02',
    code: 'TKĐH',
    title: 'Thiết kế Đồ họa & Đa Phương tiện',
    enTitle: 'GRAPHIC DESIGN & MULTIMEDIA',
    desc: 'Thực hành Photoshop, Illustrator, Premiere và After Effects; rèn tư duy mỹ thuật ứng dụng để thiết kế ấn phẩm truyền thông, video cho mạng xã hội và đồ họa chuyển động.',
    skills: ['Thiết kế 2D/3D', 'Ấn phẩm thương hiệu', 'Biên tập Video & Motion', 'UI/UX cơ bản'],
    salary: '9.000.000 - 15.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    category: 'cong-nghe',
  },
  {
    id: '03',
    code: 'QTM',
    title: 'Quản trị Mạng & An ninh Mạng',
    enTitle: 'NETWORK ADMINISTRATION & CYBER SECURITY',
    desc: 'Làm chủ hạ tầng CNTT doanh nghiệp: Thiết lập hệ thống mạng Cisco, máy chủ Windows Server/Linux, bảo mật tường lửa, phòng chống xâm nhập và quản trị đám mây AWS/Google Cloud.',
    skills: ['Hạ tầng mạng Cisco CCNA', 'Quản trị Linux / Windows Server', 'An toàn thông tin', 'Điện toán đám mây Cloud'],
    salary: '9.000.000 - 16.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    category: 'cong-nghe',
  },
  {
    id: '04',
    code: 'KT',
    title: 'Kế toán Doanh nghiệp Số',
    enTitle: 'DIGITAL ACCOUNTING & CORPORATE FINANCE',
    desc: 'Thực hành kế toán thực tế trên phần mềm MISA, FAST. Nắm vững kê khai thuế điện tử, quyết toán thuế, lập báo cáo tài chính doanh nghiệp và ứng dụng chuyển đổi số trong quản trị tài chính.',
    skills: ['Phần mềm kế toán MISA/FAST', 'Kê khai thuế & Báo cáo tài chính', 'Hóa đơn điện tử', 'Tư duy tài chính doanh nghiệp'],
    salary: '8.000.000 - 14.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    category: 'kinh-te',
  },
  {
    id: '05',
    code: 'QTKD',
    title: 'Quản trị kinh doanh',
    enTitle: 'BUSINESS ADMINISTRATION',
    desc: 'Học các nghiệp vụ quản trị, bán hàng, chăm sóc khách hàng và lập kế hoạch kinh doanh qua bài tập tình huống thực tế.',
    skills: ['Nghiệp vụ kinh doanh', 'Bán hàng', 'Chăm sóc khách hàng', 'Lập kế hoạch'],
    salary: '8.500.000 - 15.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    category: 'kinh-te',
  },
  {
    id: '06',
    code: 'TMĐT',
    title: 'Thương mại Điện tử & Logistics',
    enTitle: 'E-COMMERCE & SMART LOGISTICS',
    desc: 'Quản trị gian hàng đa sàn TMĐT (Shopee, Lazada, TikTok Shop), tối ưu chuỗi cung ứng, quản lý kho thông minh và xử lý đơn hàng tự động bám sát nhu cầu bùng nổ của nền kinh tế số.',
    skills: ['Vận hành gian hàng Shopee/TikTok Shop', 'Quản trị kho vận Logistics', 'Xử lý đơn hàng & CSKH tự động', 'Phân tích dữ liệu bán lẻ'],
    salary: '8.500.000 - 15.000.000 VNĐ',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    category: 'kinh-te',
  },
];

export default function NganhDaoTaoPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB */}
          <section className="w-full bg-surface-container-low py-space-sm border-b border-outline-variant/30">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Trang Chủ</span>
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
                <span className="text-primary font-bold">Ngành Đào Tạo</span>
              </nav>
              <div className="hidden md:flex items-center gap-space-xs font-code text-code text-primary bg-surface-container px-space-sm py-1 rounded-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#F58232] animate-pulse"></span>
                <span>Tuyển sinh năm 2026 • Xét tuyển học bạ</span>
              </div>
            </div>
          </section>

          {/* HERO SECTION */}
          <section className="relative w-full bg-surface py-space-xl overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-[#e3efff] text-primary px-space-md py-1.5 rounded-full font-label-md text-label-md font-bold w-fit border border-primary/20">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>ĐÀO TẠO THỰC HÀNH CHIẾM 70% THỜI LƯỢNG HỌC TẬP</span>
                  </div>
                  <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-primary tracking-tight font-extrabold leading-tight">
                    Hệ Thống Ngành Đào Tạo Thực Chiến — Đón Đầu Nhu Cầu Tuyển Dụng 4.0
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Các chuyên ngành đào tạo tại IES được thiết kế theo định hướng ứng dụng. Học viên được thực hành trên phòng máy và làm bài tập, dự án gắn với nghiệp vụ của từng ngành.
                  </p>
                </div>

                <div className="lg:col-span-4 bg-gradient-to-br from-[#0F5587] to-[#3764AF] text-white p-space-lg rounded-2xl shadow-xl flex flex-col gap-space-md border border-white/10">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#F58232] flex items-center justify-center text-white font-bold shadow-md">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div>
                      <span className="font-label-md text-[11px] text-[#2DBEDC] uppercase tracking-wider block font-bold">Hỗ trợ hướng nghiệp</span>
                      <h4 className="font-title text-title text-white font-bold">Kết nối thực tập, việc làm</h4>
                    </div>
                  </div>
                  <p className="font-body-sm text-white/90 leading-relaxed text-sm">
                    IES hỗ trợ định hướng và kết nối cơ hội thực tập, việc làm phù hợp. Vị trí tuyển dụng và thu nhập phụ thuộc năng lực, yêu cầu doanh nghiệp và nhu cầu thị trường.
                  </p>
                  <Link
                    href="/dang-ky"
                    className="inline-flex items-center justify-center gap-space-xs bg-[#F58232] hover:bg-[#d96a1e] text-white font-title text-title font-bold py-space-sm px-space-md rounded-xl transition-all shadow-md text-center"
                  >
                    <span>Đăng Ký Nhận Tư Vấn Ngay</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* STATS STRIP */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl p-space-lg bg-surface-container-low rounded-2xl border border-outline-variant/40">
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-primary font-bold">06</span>
                  <span className="font-body-sm text-on-surface-variant">Ngành đào tạo đón đầu số</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-primary font-bold">70%</span>
                  <span className="font-body-sm text-on-surface-variant">Thực hành trên máy tính</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-primary font-bold">02</span>
                  <span className="font-body-sm text-on-surface-variant">Khối ngành đào tạo</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-display-sm text-primary font-bold">Hỗ trợ</span>
                  <span className="font-body-sm text-on-surface-variant">Kết nối thực tập, việc làm</span>
                </div>
              </div>
            </div>
          </section>

          {/* LIST OF 6 MAJORS */}
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
                <div>
                  <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-wider block mb-1">
                    CHƯƠNG TRÌNH ĐÀO TẠO TIÊN TIẾN CHUẨN NGHỀ
                  </span>
                  <h2 className="font-display text-display-sm text-primary font-bold">
                    Danh Mục 06 Chuyên Ngành Trọng Điểm
                  </h2>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Chương trình được kiểm định chất lượng, tích hợp chứng chỉ nghề quốc gia và kỹ năng mềm thiết yếu.
                </p>
              </div>

              {[
                { label: 'Khối Tin học', items: majors.filter((major) => major.category === 'cong-nghe') },
                { label: 'Khối Kinh tế', items: majors.filter((major) => major.category === 'kinh-te') },
              ].map((group) => (
                <div key={group.label} className="mb-space-xl last:mb-0">
                  <h3 className="mb-space-md border-l-4 border-[#F58232] pl-3 font-display text-headline-md font-bold text-primary">
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xl">
                    {group.items.map((m) => (
                  <div
                    key={m.id}
                    className="bg-white rounded-2xl overflow-hidden border border-outline-variant/40 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Header with Badge */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <img
                        src={m.img}
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 bg-primary text-white font-code text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wide">
                        {m.code} • CHUYÊN NGÀNH {m.id}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="font-label-md text-[10px] text-[#2DBEDC] uppercase tracking-wider block font-bold">
                          {m.enTitle}
                        </span>
                        <h3 className="font-title text-title-lg text-white font-bold leading-snug drop-shadow-sm">
                          {m.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-space-lg flex flex-col flex-1 gap-space-md">
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        {m.desc}
                      </p>

                      {/* Skills Tags */}
                      <div>
                        <span className="font-label-md text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block mb-2">
                          Kỹ Năng Đào Tạo Cốt Lõi:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {m.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-[#f0f4f8] text-primary text-xs px-2.5 py-1 rounded-lg font-medium border border-outline-variant/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Salary Bar */}
                      <div className="p-space-sm bg-[#F6EEE5]/60 border border-[#F58232]/20 rounded-xl flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#F58232] text-[20px]">payments</span>
                          <span className="font-label-md text-xs font-bold text-on-surface">Thu nhập tham khảo:</span>
                        </div>
                        <span className="font-title text-sm font-bold text-[#F58232]">{m.salary}</span>
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                        <Link
                          href={`/chuong-trinh-hoc`}
                          className="min-h-[44px] w-full px-3 py-2.5 rounded-xl border border-outline font-title text-sm font-semibold text-center text-on-surface hover:bg-surface-container transition-colors"
                        >
                          Xem chi tiết
                        </Link>
                        <Link
                          href={`/dang-ky?nganh=${encodeURIComponent(m.title)}`}
                          className="min-h-[44px] w-full px-3 py-2.5 rounded-xl bg-primary hover:bg-[#0c446c] text-white font-title text-sm font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1"
                        >
                          <span>Đăng ký ngành này</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                    </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 PILLARS: DAC QUYEN DAO TAO */}
          <section className="w-full bg-surface py-space-xl">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-wider block mb-1">
                  ĐẶC QUYỀN ĐÀO TẠO THỰC HỌC — THỰC NGHIỆP
                </span>
                <h2 className="font-display text-display-sm text-primary font-bold">
                  Tại Sao Sinh Viên Chọn Học Nghề Tại IES?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="bg-surface-container-low p-space-lg rounded-2xl border border-outline-variant/40 flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[28px]">school</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">Học Bằng Thực Lực</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    Đào tạo bám sát chuẩn nghề quốc gia. 70% thời lượng là bài tập thực hành, đồ án capstone và xử lý bài toán thực tế của doanh nghiệp.
                  </p>
                </div>

                <div className="bg-surface-container-low p-space-lg rounded-2xl border border-outline-variant/40 flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#2DBEDC]/10 text-[#0F5587] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[28px]">handshake</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">Doanh Nghiệp Đồng Hành</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    IES hỗ trợ học viên tìm hiểu cơ hội thực tập và việc làm phù hợp với ngành học, năng lực và nhu cầu tuyển dụng.
                  </p>
                </div>

                <div className="bg-surface-container-low p-space-lg rounded-2xl border border-outline-variant/40 flex flex-col gap-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#F58232]/10 text-[#F58232] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[28px]">savings</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">Học Phí 0 Đồng</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    Nhà nước cấp bù học phí nghề theo Nghị định 81/CP cho học sinh tốt nghiệp THCS. Quỹ học bổng IES Talent Fund trao tặng lên tới 3.000.000đ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* LEAD CAPTURE FORM SECTION */}
          <section className="w-full bg-gradient-to-r from-[#0F5587] to-[#3764AF] py-space-xl text-white">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-[#F58232] text-white px-space-sm py-1 rounded-full font-label-md text-label-md font-bold w-fit">
                    <span className="material-symbols-outlined text-[16px]">redeem</span>
                    <span>SUẤT HỌC BỔNG ĐẦU VÀO 2.000.000Đ</span>
                  </div>
                  <h2 className="font-display text-display-md text-white font-bold leading-tight">
                    Đăng Ký Xét Tuyển Online — Nhận Học Bổng Đầu Vào Ngay Hôm Nay
                  </h2>
                  <p className="font-body-md text-white/90 leading-relaxed">
                    Nộp hồ sơ trực tuyến trong hôm nay để giữ chỉ tiêu ngành yêu thích và nhận gói hỗ trợ tài chính đặc biệt từ Quỹ Hỗ trợ Phát triển Giáo dục IES.
                  </p>
                  <ul className="flex flex-col gap-space-xs text-white/95 font-body-sm">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2DBEDC]">check_circle</span>
                      <span>Xét tuyển thẳng bằng học bạ — Không thi tuyển áp lực</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2DBEDC]">check_circle</span>
                      <span>Tặng gói học bổng tân sinh viên trị giá 2.000.000đ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2DBEDC]">check_circle</span>
                      <span>Miễn 100% lệ phí xét tuyển &amp; tư vấn hồ sơ miễn phí</span>
                    </li>
                  </ul>
                  <div className="mt-space-sm flex items-center gap-space-sm font-code text-sm">
                    <span className="material-symbols-outlined text-[#2DBEDC]">call</span>
                    <span>
                      Hotline Tuyển sinh:{' '}
                      {schoolContact.phoneNumbers.map((phone, index) => (
                        <React.Fragment key={phone.number}>
                          {index > 0 && ' / '}
                          <a href={phone.href}><strong>{phone.number}</strong></a>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <LeadForm id="form-xet-tuyen-nganh" source="page_nganh_dao_tao" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
