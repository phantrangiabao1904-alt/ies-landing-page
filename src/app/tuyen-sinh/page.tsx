import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import { decree24DocumentUrl, decree81SearchUrl } from '@/lib/school-info';

export const metadata = {
  title: 'Thông Tin Tuyển Sinh 2026 — IES Saigon',
  description: 'Thông tin tuyển sinh 2026: Chính sách hỗ trợ học phí nghề, xét tuyển học bạ THCS/THPT và hỗ trợ giới thiệu việc làm.',
};

export default function TuyenSinhPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB & CONTEXT STRIP */}
          <section className="w-full bg-surface-container-low py-space-sm">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Trang Chủ</span>
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
                <span className="text-primary font-bold">Tuyển Sinh 2026</span>
              </nav>
              <div className="hidden md:flex items-center gap-space-xs font-code text-code text-primary bg-surface-container px-space-sm py-1 rounded-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#F58232] animate-pulse"></span>
                <span>Hồ sơ trực tuyến mở 24/7 • Tuyển sinh năm 2026</span>
              </div>
            </div>
          </section>

          {/* HERO SECTION */}
          <section className="relative w-full bg-surface py-space-xl overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Left Statement */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="bg-primary/10 text-primary font-label-md text-label-md px-space-sm py-1 rounded-lg font-bold tracking-wide flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                      ĐỀ ÁN TUYỂN SINH NĂM 2026
                    </span>
                    <a
                      href={decree81SearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F6EEE5] text-[#F58232] font-label-md text-label-md px-space-sm py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-[#f9e3d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58232]"
                    >
                      <span className="material-symbols-outlined text-[16px]">savings</span>
                      Nghị định 81/2021/NĐ-CP
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">open_in_new</span>
                    </a>
                    <a
                      href={decree24DocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F6EEE5] text-[#F58232] font-label-md text-label-md px-space-sm py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-[#f9e3d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58232]"
                    >
                      <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                      Nghị định 24/2022/NĐ-CP (PDF)
                    </a>
                  </div>
                  <h1 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-tight">
                    Thông Tin Tuyển Sinh 2026 — Khởi Đầu Nghề Nghiệp, <span className="text-[#F58232]">Học Phí 0 Đồng</span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Xét tuyển bằng học bạ THCS / THPT. Chính sách hỗ trợ học phí nghề được áp dụng theo đối tượng, điều kiện và hồ sơ quy định; Ban tuyển sinh sẽ tư vấn cụ thể. IES hỗ trợ định hướng và kết nối cơ hội thực tập, việc làm phù hợp.
                  </p>

                  {/* Quick Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-primary block leading-none">1.200</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Chỉ tiêu toàn khóa</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-primary block leading-none">06</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Ngành mũi nhọn</span>
                    </div>
                    <div className="bg-[#F6EEE5] p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-[#F58232] block leading-none">0 ĐỒNG</span>
                      <span className="font-label-md text-[11px] text-[#F58232] uppercase tracking-wider block mt-1 font-bold">Học phí hệ 9+</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-tertiary-container block leading-none">100%</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Xét tuyển học bạ</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a
                      href="#form-xet-tuyen"
                      className="bg-[#F58232] hover:bg-[#e07122] text-white px-space-xl py-3 rounded-xl font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all flex items-center gap-space-xs text-center font-bold tracking-wide"
                    >
                      <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                      <span>Nộp Hồ Sơ Xét Tuyển Online</span>
                    </a>
                    <a
                      href="#checklist-ho-so"
                      className="bg-surface-container hover:bg-surface-container-high text-primary px-space-lg py-3 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-space-xs font-bold"
                    >
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      <span>Quy Trình Hồ Sơ</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span> Phê duyệt 24h
                    </span>
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span> Ký kết việc làm
                    </span>
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span> Hỗ trợ vay vốn 0%
                    </span>
                  </div>
                </div>

                {/* Right: Notification Card + Photo */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F58232]"></div>
                    <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                      <span className="inline-flex items-center gap-1 text-[#F58232] font-label-md text-label-md uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-[18px]">emergency_home</span> Đợt Tuyển Sinh 1 Mở Cổng
                      </span>
                      <span className="bg-secondary-fixed text-on-secondary-fixed font-code text-code px-2 py-0.5 rounded">Tuyển sinh 2026</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Học bổng Khởi Nghiệp 2.000.000đ
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Áp dụng thẳng cho <strong>100 thí sinh đầu tiên</strong> hoàn tất hồ sơ xét tuyển sớm tại trường hoặc qua cổng trực tuyến.
                    </p>
                    <div className="grid grid-cols-3 gap-space-xs text-center mb-space-md">
                      <div className="bg-surface-container p-2 rounded-lg">
                        <span className="font-headline-sm text-headline-sm text-primary block font-bold">68</span>
                        <span className="font-label-md text-[11px] text-on-surface-variant">Suất đã nhận</span>
                      </div>
                      <div className="bg-surface-container p-2 rounded-lg">
                        <span className="font-headline-sm text-headline-sm text-[#F58232] block font-bold">32</span>
                        <span className="font-label-md text-[11px] text-[#F58232] font-bold">Suất còn lại</span>
                      </div>
                      <div className="bg-surface-container p-2 rounded-lg">
                        <span className="font-headline-sm text-headline-sm text-primary block font-bold">24h</span>
                        <span className="font-label-md text-[11px] text-on-surface-variant">Trả kết quả</span>
                      </div>
                    </div>
                    <a
                      href="#form-xet-tuyen"
                      className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 rounded-lg font-label-md text-label-md text-center block font-bold transition-all"
                    >
                      Đăng Ký Giữ Suất Học Bổng Sớm
                    </a>
                  </div>

                  <figure className="overflow-hidden rounded-xl border border-outline-variant/50 bg-white shadow-md">
                    <div className="relative aspect-[4/3] w-full bg-surface-container-high">
                      <Image
                        className="object-contain"
                        alt="Cán bộ IES tư vấn lộ trình học nghề cho học sinh"
                        src="/images/admissions-counseling.jpg"
                        fill
                        sizes="(max-width: 1024px) 100vw, 56vw"
                      />
                    </div>
                    <figcaption className="p-space-md">
                      <span className="font-label-md text-[11px] uppercase tracking-widest text-secondary">
                        Tư vấn tuyển sinh trực tiếp
                      </span>
                      <p className="mt-1 font-title text-title font-bold text-primary">
                        Cán bộ IES hướng dẫn học sinh chọn lộ trình học nghề phù hợp
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* ĐỐI TƯỢNG & PHƯƠNG THỨC XÉT TUYỂN */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-primary bg-surface-container px-space-sm py-1 rounded-lg uppercase tracking-wider font-bold">
                  Lộ Trình Tinh Gọn
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs mb-space-sm font-bold">
                  02 Tuyến Đào Tạo Phù Hợp Từng Xuất Phát Điểm
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Dù bạn vừa tốt nghiệp THCS hay đã hoàn thành bậc THPT, IES luôn thiết kế khung năng lực nghề nghiệp bám sát nhu cầu tuyển dụng thực tế.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
                {/* CARD 1: HỆ 9+ (THCS) */}
                <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-xl flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F58232]"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-code text-code px-2 py-1 bg-[#F6EEE5] text-[#F58232] rounded-lg font-bold">TUYẾN 01 • HỆ 9+</span>
                      <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-sm py-1 rounded-full">2.5 - 3 Năm</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs font-bold">
                      Dành Cho Học Sinh Tốt Nghiệp THCS (Lớp 9)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Mô hình đào tạo kết hợp văn hóa THPT và chuyên ngành kỹ thuật số, giúp học sinh sở hữu tay nghề vững chắc ở tuổi 18 mà không chịu áp lực kỳ thi tuyển sinh lớp 10.
                    </p>
                    <div className="space-y-space-sm mb-space-lg">
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified</span>
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Điều kiện xét tuyển</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Xét học bạ THCS (Điểm trung bình cả năm lớp 9 đạt từ 5.0 trở lên, hạnh kiểm Khá).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-[#F6EEE5]/60 p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-[#F58232] text-[20px] mt-0.5">payments</span>
                        <div>
                          <span className="font-title text-title text-[#F58232] block font-bold">Đặc quyền Học phí 0 Đồng</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Nhà nước cấp bù 100% học phí nghề theo NĐ 81/2021/NĐ-CP trong toàn bộ khóa đào tạo.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">school</span>
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Bằng cấp sau tốt nghiệp</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Bằng Trung cấp Chính quy + Chứng chỉ hoàn thành chương trình Giáo dục Phổ thông.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#form-xet-tuyen"
                    className="w-full bg-[#F58232] hover:bg-[#e07122] text-white py-3 rounded-lg font-label-lg text-label-lg text-center font-bold shadow-sm transition-all flex items-center justify-center gap-space-xs"
                  >
                    <span>Đăng Ký Xét Tuyển Hệ 9+</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>

                {/* CARD 2: HỆ TRUNG CẤP CHÍNH QUY (THPT) */}
                <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-xl flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-code text-code px-2 py-1 bg-surface-container text-primary rounded-lg font-bold">TUYẾN 02 • TRUNG CẤP CHÍNH QUY</span>
                      <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-sm py-1 rounded-full">1.5 - 2 Năm</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs font-bold">
                      Dành Cho Thí Sinh Tốt Nghiệp THPT (Lớp 12)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Lộ trình chuyên sâu thực tiễn, loại bỏ các môn học đại cương trùng lặp, tập trung 100% vào kỹ năng chuyên ngành và dự án thực tế cùng các doanh nghiệp đối tác hàng đầu.
                    </p>
                    <div className="space-y-space-sm mb-space-lg">
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified</span>
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Điều kiện xét tuyển</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Xét tuyển học bạ lớp 12 (hoặc kết quả thi tốt nghiệp THPT Quốc gia).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">business_center</span>
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Đặc quyền Chuyên Môn Tinh Gọn</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">1 học kỳ thực tập hưởng lương tại doanh nghiệp đối tác, nhận chứng nhận kinh nghiệm.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">trending_up</span>
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Cơ hội liên thông Đại học</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Liên thông thẳng lên Đại học Kinh tế, ĐH Mở, Sư phạm Kỹ thuật chỉ từ 1 đến 1.5 năm.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#form-xet-tuyen"
                    className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-lg font-label-lg text-label-lg text-center font-bold shadow-sm transition-all flex items-center justify-center gap-space-xs"
                  >
                    <span>Đăng Ký Xét Tuyển Hệ Tốt Nghiệp 12</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* HÌNH ẢNH TƯ VẤN TUYỂN SINH */}
          <section className="w-full bg-surface py-space-2xl">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                  Hoạt Động Thực Tế
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                  Hình Ảnh Tư Vấn Tuyển Sinh
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Cùng IES gặp gỡ học sinh và chia sẻ thông tin tuyển sinh tại các trường.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <figure className="overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative aspect-[4/3] w-full bg-surface-container-high">
                    <Image
                      className="object-cover"
                      alt="Học sinh tham dự buổi tư vấn tuyển sinh tại sân trường"
                      src="/images/admissions-school-outreach.jpg"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-space-md font-title text-title font-bold text-primary">
                    Gặp gỡ học sinh tại trường
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative aspect-[4/3] w-full bg-surface-container-high">
                    <Image
                      className="object-cover"
                      alt="Gian tư vấn tuyển sinh của IES tại sân trường"
                      src="/images/admissions-event-booth.jpg"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-space-md font-title text-title font-bold text-primary">
                    Gian tư vấn tuyển sinh IES
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative aspect-[4/3] w-full bg-surface-container-high">
                    <Image
                      className="object-cover"
                      alt="Cán bộ IES trao đổi và tư vấn cùng học sinh"
                      src="/images/admissions-student-guidance.jpg"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-space-md font-title text-title font-bold text-primary">
                    Tư vấn và định hướng cho học sinh
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          {/* LEAD FORM SECTION */}
          <section className="w-full py-space-2xl bg-primary text-white relative overflow-hidden" id="form-xet-tuyen">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-[#F58232] text-white px-space-md py-1 rounded-full font-label-md text-label-md uppercase tracking-wider w-fit shadow">
                    <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                    <span>Cổng Tiếp Nhận Hồ Sơ 2026</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold leading-tight">
                    Đăng Ký Xét Tuyển Ngay <br />
                    <span className="text-[#F58232]">Nhận Ưu Đãi Miễn 100% Học Phí</span>
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant/90 leading-relaxed">
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
                </div>

                <div className="lg:col-span-7">
                  <LeadForm source="tuyen_sinh" />
                </div>
              </div>
            </div>
          </section>

          {/* CHECKLIST HỒ SƠ */}
          <section className="w-full bg-surface py-space-2xl" id="checklist-ho-so">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">Thủ Tục Đơn Giản</span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">Hồ Sơ Nhập Học Cần Chuẩn Bị</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Thí sinh có thể nộp trực tiếp tại văn phòng tuyển sinh hoặc gửi qua đường bưu điện.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">description</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">1. Giấy Tờ Học Tập</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li>• Học bạ THCS hoặc THPT (Bản sao công chứng)</li>
                    <li>• Bằng tốt nghiệp hoặc Giấy chứng nhận tốt nghiệp tạm thời</li>
                    <li>• Phiếu đăng ký xét tuyển theo mẫu của trường IES</li>
                  </ul>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">badge</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">2. Giấy Tờ Tùy Thân</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li>• Căn cước công dân (CCCD) của thí sinh (Bản sao)</li>
                    <li>• Giấy khai sinh (Bản sao trích lục)</li>
                    <li>• 04 ảnh thẻ kích thước 3x4 (Chụp trong vòng 6 tháng)</li>
                  </ul>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#F58232]/10 text-[#F58232] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">savings</span>
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">3. Hồ Sơ Nhận Miễn Học Phí</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li>• Đơn đề nghị miễn giảm học phí theo mẫu Nghị định 81/CP</li>
                    <li>• Giấy xác nhận thông tin cư trú (Mẫu CT07)</li>
                    <li>• Hỗ trợ hoàn thiện hồ sơ gửi về địa phương miễn phí</li>
                  </ul>
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
