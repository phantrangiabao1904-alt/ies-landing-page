'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import StickyLeadForm from '@/app/components/forms/StickyLeadForm';
import HomeCmsSection from '@/components/home/HomeCmsSection';
import { decree81SearchUrl, schoolContact } from '@/lib/school-info';

export default function HomePage() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col pb-[76px] md:pb-0">
      <SiteHeader />

      {/* MAIN */}
      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* HERO SECTION WITH ULTRA PROMINENT 100% TUITION EXEMPTION */}
          <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface-container-lowest py-space-xl md:py-space-2xl">
            {/* Ambient technical glow circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-fixed opacity-40 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full bg-tertiary-fixed opacity-30 blur-3xl pointer-events-none"></div>

            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              {/* Top Eyebrow Badge */}
              <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-space-xs bg-[#F58232] text-white px-space-md py-1 rounded-full font-label-md text-label-md tracking-wider uppercase shadow-sm">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">verified_user</span>
                  Tuyển Sinh Năm Học 2026
                </span>
                <a
                  href={decree81SearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-1 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-[#e3efff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Tra cứu Nghị định 81 trên Cổng văn bản Chính phủ"
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-container">policy</span>
                  Nghị định 81/2021/NĐ-CP
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">open_in_new</span>
                </a>
              </div>

              {/* Main Headline Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Left Hero Pitch */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <h1 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-primary leading-tight font-extrabold uppercase">
                    TRƯỜNG TRUNG CẤP <br className="hidden sm:inline" />
                    <span className="text-secondary">TIN HỌC KINH TẾ</span> SÀI GÒN (IES)
                    <span className="block text-[#F58232] mt-2">MIỄN PHÍ 100% HỌC PHÍ</span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    <strong className="text-primary">Học thực tiễn - Làm chuyên nghiệp.</strong>{' '}
                    Xét tuyển học bạ - Nhập học ngay. Học sinh tốt nghiệp THCS được tư vấn điều kiện
                    áp dụng chính sách hỗ trợ học phí nghề theo quy định hiện hành.
                  </p>

                  {/* THE MEGA VISUAL CARD: MIỄN 100% HỌC PHÍ */}
                  <div className="relative mt-space-sm p-space-lg rounded-xl bg-[#063b5e] border-t-4 border-t-[#F58232] ring-1 ring-white/10 text-on-primary shadow-xl overflow-hidden">
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs text-[#F58232] font-label-lg text-label-lg tracking-wider uppercase mb-1">
                          <span className="material-symbols-outlined text-[20px]">stars</span>
                          <span>Chính sách hỗ trợ học phí nghề</span>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F58232] font-black leading-none drop-shadow-sm">MIỄN 100%</span>
                          <span className="font-headline-md text-lg sm:text-xl text-white font-bold tracking-tight">HỌC PHÍ</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-surface-container-high mt-space-xs leading-relaxed max-w-lg">
                          Chính sách hỗ trợ học phí nghề được áp dụng theo quy định hiện hành; quyền lợi cụ thể phụ thuộc điều kiện và hồ sơ xét duyệt.{' '}
                          <a
                            href={decree81SearchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-white underline decoration-white/60 underline-offset-2 hover:decoration-white"
                          >
                            Tra cứu Nghị định 81/2021/NĐ-CP
                          </a>
                        </p>
                      </div>

                      {/* Big Visual Badge */}
                      <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-space-md rounded-xl text-center self-start sm:self-center border-0 shadow-inner">
                        <span className="block font-headline-lg text-headline-lg text-tertiary-fixed font-black">0 ĐỒNG</span>
                        <span className="block font-label-md text-label-md text-white/90 uppercase tracking-wide">Chi phí học nghề</span>
                      </div>
                    </div>

                    {/* 4 Quick Fact Pillars */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md mt-space-md bg-[#002f52] border-t border-white/20 -mx-space-lg -mb-space-lg px-space-lg pb-space-md">
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-tertiary-fixed font-bold">Hỗ trợ</span>
                        <span className="font-body-sm text-[13px] text-white/90 leading-tight">Giới thiệu việc làm</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-tertiary-fixed font-bold">70%</span>
                        <span className="font-body-sm text-[13px] text-white/90 leading-tight">Thực hành dự án</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-tertiary-fixed font-bold">1.5 - 2 Năm</span>
                        <span className="font-body-sm text-[13px] text-white/90 leading-tight">Nhận bằng chính quy</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-tertiary-fixed font-bold">Song Bằng</span>
                        <span className="font-body-sm text-[13px] text-white/90 leading-tight">Văn hóa THPT + Nghề</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                    <a
                      className="bg-[#F58232] hover:bg-[#e07122] text-white px-space-xl py-space-md rounded-xl font-title text-title font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-space-xs text-center group tracking-wide"
                      href="#home-sticky-lead-form"
                    >
                      <span>ĐĂNG KÝ XÉT TUYỂN NGAY</span>
                      <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                    <Link
                      className="bg-surface-container-high hover:bg-surface-container text-primary px-space-lg py-space-md rounded-xl font-title text-title font-semibold shadow-sm hover:shadow transition-all flex items-center gap-space-xs"
                      href="/gioi-thieu"
                    >
                      <span className="material-symbols-outlined text-[20px] text-secondary">domain</span>
                      <span>Khám Phá Giới Thiệu Trường</span>
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-md text-label-md pt-1">
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                      <span>Không thi tuyển</span>
                    </div>
                    <span className="text-outline-variant">•</span>
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                      <span>Xét tuyển học bạ</span>
                    </div>
                    <span className="text-outline-variant">•</span>
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                      <span>Hỗ trợ hồ sơ 24/7</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 w-full lg:pt-2">
                  <StickyLeadForm id="home-sticky-lead-form" />
                </div>
              </div>
            </div>
          </section>

          <HomeCmsSection />

          {/* ENTERPRISE PARTNERS MARQUEE SECTION */}
          <section className="w-full bg-surface-container-low py-space-lg">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md uppercase tracking-wider flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">handshake</span>
                  <span>Doanh nghiệp tiêu biểu trong các lĩnh vực đào tạo:</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-space-lg opacity-85">
                  <span className="font-display text-[18px] font-black text-primary tracking-tighter">FPT<span className="text-[#F58232]">Software</span></span>
                  <span className="font-title text-title font-black text-secondary tracking-widest">VIETTEL</span>
                  <span className="font-display text-[18px] font-bold text-tertiary-container tracking-tight">HPT <span className="text-[12px] font-normal">Vietnam</span></span>
                  <span className="font-title text-title font-extrabold text-primary">VNPT Group</span>
                  <span className="font-headline-sm text-headline-sm font-black text-secondary tracking-tighter">Sacombank</span>
                  <span className="font-title text-title font-bold text-[#F58232]">MWG Tech</span>
                  <span className="font-title text-title font-extrabold text-primary">VNG Corporation</span>
                </div>
              </div>
            </div>
          </section>

          {/* SPECIAL SECTION: CHÍNH SÁCH "HỌC NGHỀ 0 ĐỒNG - VỮNG VÀNG TƯƠNG LAI" */}
          <section className="w-full py-space-2xl bg-surface-container-lowest">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col gap-space-xs">
                <div className="inline-flex items-center justify-center gap-space-xs mx-auto text-secondary font-label-lg text-label-lg uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Đặc Quyền Tài Chính Dành Cho Sinh Viên IES</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  Chính Sách &quot;Học Nghề 0 Đồng - Vững Vàng Tương Lai&quot;
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Tại IES, phụ huynh và sinh viên hoàn toàn yên tâm về vấn đề học phí. Chúng tôi cam kết hiện thực hóa mô hình giáo dục phi lợi nhuận gắn liền trách nhiệm xã hội và tiếp sức thế hệ trẻ.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {/* Pillar 1 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px]">gavel</span>
                    </div>
                    <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wide">Trụ cột 01</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      Nghị Định 81 Chính Phủ
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Nhà nước thực hiện cấp bù 100% kinh phí học phí cho học sinh tốt nghiệp THCS tham gia học nghề trình độ trung cấp theo khung chuẩn quy định.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-green-600">check</span>
                    <span>Chi trả đúng định kỳ</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px]">corporate_fare</span>
                    </div>
                    <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wide">Trụ cột 02</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      Quỹ IES Talent Fund
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Hệ thống doanh nghiệp công nghệ đối tác tài trợ toàn bộ chi phí sử dụng hệ thống máy chủ, phòng Lab iMac cao cấp và bản quyền phần mềm quốc tế.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-green-600">check</span>
                    <span>Không thu phụ phí lab</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-[#F58232] text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px]">card_membership</span>
                    </div>
                    <span className="font-label-md text-label-md text-[#F58232] uppercase font-bold tracking-wide">Trụ cột 03</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-[#F58232] transition-colors">
                      Học Bổng Khuyến Học
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Trao tặng học bổng sinh hoạt phí toàn phần cho tân sinh viên hoàn cảnh khó khăn nhưng hiếu học, đạt danh hiệu sinh viên xuất sắc từng kỳ.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-green-600">check</span>
                    <span>Hàng trăm suất mỗi khóa</span>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm hover:shadow-md flex flex-col justify-between group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-tertiary-container text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                    </div>
                    <span className="font-label-md text-label-md text-tertiary uppercase font-bold tracking-wide">Trụ cột 04</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-tertiary transition-colors">
                      Minh Bạch Tuyệt Đối
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Cam kết không phát sinh các chi phí ẩn trong suốt thời gian học tập. Mọi quy chế, khoản thu được công khai trên cổng thông tin sinh viên IES.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-green-600">check</span>
                    <span>Ký cam kết nhập học</span>
                  </div>
                </div>
              </div>

              {/* Action Anchor to Admissions Details */}
              <div className="mt-space-xl p-space-lg bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[36px] text-primary">contact_support</span>
                  <div>
                    <h4 className="font-title text-title text-primary font-bold">Bạn cần hướng dẫn thủ tục nhận bù học phí 100%?</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Bộ phận tuyển sinh sẽ hỗ trợ hoàn thiện hồ sơ gửi phòng GD&amp;ĐT địa phương nhanh nhất.</p>
                  </div>
                </div>
                <Link
                  className="bg-primary hover:bg-primary-container text-white px-space-xl py-space-md rounded-xl font-title text-title font-bold flex-shrink-0 flex items-center gap-space-xs transition-all shadow-md hover:shadow-lg"
                  href="/tuyen-sinh"
                >
                  <span>Tìm Hiểu Chi Tiết Đề Án Tuyển Sinh</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </Link>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE IES SECTION */}
          <section className="w-full py-space-2xl bg-surface-container-low">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left: Image grid showing real activities */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-md">
                    <div className="h-64 rounded-2xl overflow-hidden bg-surface-container shadow-md">
                      <Image
                        className="w-full h-full object-contain"
                        alt="Học viên cùng nhau trao đổi trong giờ học thực hành"
                        src="/images/learning-practice.jpg"
                        width={1200}
                        height={630}
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
                      />
                    </div>
                    <div className="h-44 rounded-2xl overflow-hidden shadow-md bg-primary p-space-md flex flex-col justify-end text-white">
                      <span className="font-headline-lg text-headline-lg font-black text-[#F58232]">15+</span>
                      <span className="font-title text-title font-semibold">Năm Uy Tín Giáo Dục Nghề Nghiệp Tại Sài Gòn</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-md pt-space-lg">
                    <div className="h-44 rounded-2xl overflow-hidden shadow-md bg-surface-container-lowest p-space-md flex flex-col justify-between">
                      <span className="material-symbols-outlined text-[36px] text-secondary">workspace_premium</span>
                      <div>
                        <span className="font-headline-md text-headline-md font-black text-primary">98,5%</span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Tỷ lệ có việc làm theo số liệu IES</p>
                      </div>
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden bg-surface-container shadow-md">
                      <Image
                        className="w-full h-full object-contain"
                        alt="Học sinh tham gia hoạt động tư vấn hướng nghiệp tại trường"
                        src="/images/school-outreach-event.jpg"
                        width={1024}
                        height={768}
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 25vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Text & Core strengths */}
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <span className="text-secondary font-label-lg text-label-lg uppercase tracking-wider font-bold">Thế Mạnh Độc Quyền Của IES</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold leading-tight">
                    Vì Sao Hơn 10.000+ Phụ Huynh &amp; Học Sinh Đặt Trọn Niềm Tin Vào IES?
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Chúng tôi không chỉ dạy nghề, chúng tôi xây dựng lộ trình sự nghiệp vững chắc cho từng bạn trẻ với triết lý đào tạo thực học - thực hành - thực nghiệp.
                  </p>
                  <div className="space-y-space-md pt-space-xs">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="material-symbols-outlined text-[24px]">badge</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title text-title text-primary font-bold">100% Giảng Viên Là Chuyên Gia Doanh Nghiệp</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Thầy cô trực tiếp quản lý dự án công nghệ, giám đốc tài chính trực tiếp truyền đạt kinh nghiệm xử lý thực tế.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="material-symbols-outlined text-[24px]">desktop_mac</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title text-title text-primary font-bold">Cơ Sở Vật Chất Hiện Đại &amp; Studio Sáng Tạo</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Hệ thống máy tính cấu hình cao Core i7/i9, đường truyền cáp quang riêng biệt và phòng chuyên đề kỹ thuật số.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="material-symbols-outlined text-[24px]">work_history</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title text-title text-primary font-bold">Cam Kết Hỗ Trợ Giới Thiệu Việc Làm</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Ký cam kết đầu ra ngay khi nhập học; định kỳ tổ chức Ngày Hội Tuyển Dụng IES Job Fair với hơn 50 doanh nghiệp tham gia.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-sm">
                    <Link
                      className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-white px-space-xl py-space-md rounded-xl font-title text-title font-bold transition-all shadow-md hover:shadow-lg"
                      href="/gioi-thieu"
                    >
                      <span>Tìm Hiểu Lịch Sử &amp; Sứ Mệnh IES</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ADMISSIONS CTA: direct visitors to the single registration form in the hero. */}
          <section className="w-full py-space-2xl bg-[#0F5587] text-white relative overflow-hidden" id="form-xet-tuyen">
            {/* Abstract circular background decor */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary opacity-20 blur-2xl"></div>
            <div className="absolute left-1/3 -top-24 w-72 h-72 rounded-full bg-tertiary-fixed opacity-15 blur-2xl"></div>

            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Form Left Information */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-[#F58232] text-white px-space-md py-1 rounded-full font-label-md text-label-md uppercase tracking-wider w-fit shadow">
                    <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                    <span>Cổng Tiếp Nhận Hồ Sơ 2026</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold leading-tight text-white">
                    Đăng Ký Xét Tuyển Ngay <br />
                    <span className="text-[#F58232]">Nhận Ưu Đãi Miễn 100% Học Phí</span>
                  </h2>
                  <p className="font-body-md text-body-md text-white/90 leading-relaxed">
                    Chỉ mất 1 phút để đăng ký giữ suất học bổng nghề và nhận trọn vẹn quyền lợi cấp bù học phí nhà nước. Ban tư vấn tuyển sinh IES sẽ liên hệ hướng dẫn chi tiết trong vòng 30 phút.
                  </p>
                  <div className="space-y-space-sm pt-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      </div>
                      <span className="font-body-md text-body-md">Xét tuyển bằng học bạ - Tuyệt đối không thi cử căng thẳng</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      </div>
                      <span className="font-body-md text-body-md">Hỗ trợ trọn gói thủ tục hồ sơ hỗ trợ học phí cấp phường/xã</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      </div>
                      <span className="font-body-md text-body-md">Ký túc xá tiện nghi, an ninh cho học sinh ở xa</span>
                    </div>
                  </div>
                  <div className="p-space-md bg-white/10 rounded-xl backdrop-blur-sm mt-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[32px] text-[#F58232]">headset_mic</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md uppercase tracking-wider text-white/90">Tổng Đài Tư Vấn Tuyển Sinh Miễn Phí</span>
                        <div className="flex flex-wrap gap-x-3">
                          {schoolContact.phoneNumbers.map((phone) => (
                            <a key={phone.number} className="font-title text-[20px] font-extrabold text-white hover:underline" href={phone.href}>
                              {phone.number}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keep the bottom section informational; the landing page has one registration form in the hero. */}
                <div className="lg:col-span-7">
                  <div className="bg-surface-container-lowest text-on-surface p-space-lg md:p-space-xl rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-space-sm mb-space-md">
                      <span className="material-symbols-outlined text-[32px] text-[#F58232]">assignment</span>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Đăng ký tư vấn trực tuyến</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Chỉ cần gửi thông tin một lần tại biểu mẫu đăng ký ở đầu trang.</p>
                      </div>
                    </div>
                    <a
                      className="inline-flex w-full items-center justify-center gap-space-xs bg-[#F58232] hover:bg-[#e07122] text-white py-space-md px-space-lg rounded-xl font-title text-title font-extrabold shadow-lg hover:shadow-xl transition-all tracking-wide"
                      href="#home-sticky-lead-form"
                    >
                      <span>ĐI ĐẾN BIỂU MẪU ĐĂNG KÝ</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* QUICK NAVIGATION ACTION BAR */}
          <section className="w-full bg-surface-container py-space-lg">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm text-primary font-title text-title">
                  <span className="material-symbols-outlined text-[24px] text-secondary">explore</span>
                  <span>Khám phá thêm thông tin hữu ích về IES:</span>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <Link className="px-space-lg py-space-sm bg-surface-container-lowest text-primary hover:bg-primary hover:text-white rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow font-semibold" href="/gioi-thieu">
                    Giới Thiệu
                  </Link>
                  <Link className="px-space-lg py-space-sm bg-surface-container-lowest text-primary hover:bg-primary hover:text-white rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow font-semibold" href="/chuong-trinh-hoc">
                    Chương Trình Học
                  </Link>
                  <Link className="px-space-lg py-space-sm bg-surface-container-lowest text-primary hover:bg-primary hover:text-white rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow font-semibold" href="/nganh-dao-tao">
                    Ngành Đào Tạo
                  </Link>
                  <Link className="px-space-lg py-space-sm bg-surface-container-lowest text-primary hover:bg-primary hover:text-white rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow font-semibold" href="/tuyen-sinh">
                    Thông Tin Tuyển Sinh
                  </Link>
                  <a className="px-space-lg py-space-sm bg-[#F58232] text-white hover:bg-[#e07122] rounded-xl font-label-lg text-label-lg transition-all shadow-sm hover:shadow-md font-bold tracking-wide cursor-pointer" href="#home-sticky-lead-form">
                    Đăng Ký
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-3 border-t border-white/20 bg-[#0F5587] px-4 py-3 text-white shadow-[0_-4px_16px_rgba(0,0,0,0.16)] md:hidden">
        <span className="text-xs font-extrabold leading-tight sm:text-sm">MIỄN PHÍ 100% HỌC PHÍ</span>
        <a
          href="#home-sticky-lead-form"
          className="inline-flex min-h-[44px] flex-shrink-0 items-center justify-center rounded-lg bg-[#F58232] px-4 text-sm font-bold text-white transition-colors hover:bg-[#e07122]"
        >
          ĐĂNG KÝ NGAY
        </a>
      </div>
    </div>
  );
}
