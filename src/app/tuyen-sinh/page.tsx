import Icon from '@/components/ui/Icon';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import { decree24DocumentUrl, decree81SearchUrl } from '@/lib/school-info';
import AudienceGuide from '@/components/home/AudienceGuide';
import PolicyDisclosure from '@/components/ui/PolicyDisclosure';

export const metadata = {
  title: 'Thông Tin Tuyển Sinh 2026 — IES Saigon',
  description: 'Thông tin tuyển sinh 2026: Chính sách hỗ trợ học phí nghề, xét tuyển học bạ THCS/THPT và hỗ trợ giới thiệu việc làm.',
};

const admissionFaq = [
  {
    question: 'Học sinh tốt nghiệp THCS có thể đăng ký học không?',
    answer:
      'IES có lộ trình đào tạo dành cho học sinh sau THCS. Liên hệ Ban tư vấn để được xác nhận điều kiện và lộ trình phù hợp với hồ sơ của bạn.',
  },
  {
    question: 'Đăng ký trực tuyến có thay thế hồ sơ nhập học không?',
    answer:
      'Biểu mẫu trực tuyến giúp nhà trường tiếp nhận thông tin ban đầu. Ban tư vấn sẽ hướng dẫn các giấy tờ cần bổ sung để hoàn thiện hồ sơ.',
  },
  {
    question: 'Cần chuẩn bị những giấy tờ nào?',
    answer:
      'Hồ sơ thường gồm giấy tờ học tập, giấy tờ tùy thân và phiếu đăng ký. Xem checklist trên trang để biết danh sách chi tiết và chuẩn bị theo hướng dẫn của tư vấn viên.',
  },
  {
    question: 'Chưa biết chọn ngành nào thì có thể được tư vấn không?',
    answer:
      'Bạn có thể tìm hiểu sáu ngành đào tạo hoặc làm bài khám phá sở thích ở trang Ngành đào tạo, sau đó trao đổi thêm với Ban tư vấn.',
  },
  {
    question: 'Điều kiện hỗ trợ học phí nghề là gì?',
    answer:
      'Chính sách áp dụng theo đối tượng, hồ sơ và quy định hiện hành. Vui lòng liên hệ Ban tư vấn để được xác nhận điều kiện cụ thể trước khi nộp.',
  },
  {
    question: 'Ký túc xá có điều kiện và chi phí như thế nào?',
    answer: 'Điều kiện chỗ ở, khả năng tiếp nhận và chi phí được xác nhận trực tiếp với Ban tư vấn.',
  },
  {
    question: 'Thời gian học của từng hệ là bao lâu?',
    answer: 'Thời lượng phụ thuộc lộ trình và ngành học; vui lòng xác nhận với Ban tư vấn theo hồ sơ cụ thể.',
  },
] as const;

export default function TuyenSinhPage() {
  return (
    <div className="site-page vibe-site bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB & CONTEXT STRIP */}
          <section className="w-full bg-surface-container-low py-space-sm">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin flex items-center justify-between">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="home" className="text-[16px]" />
                  <span>Trang Chủ</span>
                </Link>
                <Icon name="chevron_right" className="text-[14px] text-outline" />
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
                      <Icon name="verified_user" className="text-[16px]" />
                      ĐỀ ÁN TUYỂN SINH NĂM 2026
                    </span>
                    <a
                      href={decree81SearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F6EEE5] text-[#A84300] font-label-md text-label-md px-space-sm py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-[#f9e3d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A84300]"
                    >
                      <Icon name="savings" className="text-[16px]" />
                      Nghị định 81/2021/NĐ-CP
                      <Icon name="open_in_new" className="text-[14px]" />
                    </a>
                    <a
                      href={decree24DocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F6EEE5] text-[#A84300] font-label-md text-label-md px-space-sm py-1 rounded-lg font-bold flex items-center gap-1 hover:bg-[#f9e3d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A84300]"
                    >
                      <Icon name="picture_as_pdf" className="text-[16px]" />
                      Nghị định 24/2022/NĐ-CP (PDF)
                    </a>
                  </div>
                  <h1 className="font-headline-lg text-2xl font-bold tracking-tight leading-tight text-primary sm:text-4xl lg:text-5xl">
                    Thông Tin Tuyển Sinh 2026 — Khởi Đầu Nghề Nghiệp, <span className="text-[#A84300]">Hỗ Trợ Học Phí Nghề</span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Xét tuyển bằng học bạ THCS / THPT. Chính sách hỗ trợ học phí nghề được áp dụng theo đối tượng, điều kiện và hồ sơ quy định; Ban tuyển sinh sẽ tư vấn cụ thể. IES hỗ trợ định hướng và kết nối cơ hội thực tập, việc làm phù hợp.
                  </p>

                  {/* Quick Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-primary block leading-none">06</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Ngành đào tạo</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-primary block leading-none">9+</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Lộ trình sau THCS</span>
                    </div>
                    <div className="bg-[#F6EEE5] p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-[#A84300] block leading-none">NĐ 81</span>
                      <span className="font-label-md text-[11px] text-[#A84300] uppercase tracking-wider block mt-1 font-bold">Chính sách hỗ trợ*</span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                      <span className="font-display-mobile text-headline-lg text-tertiary-container block leading-none">THPT</span>
                      <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mt-1">Lộ trình trung cấp</span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    * Điều kiện và mức hỗ trợ học phí được áp dụng theo đối tượng, hồ sơ và quy định hiện hành.
                  </p>
                  <PolicyDisclosure className="mt-1" />

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a
                      href="#form-xet-tuyen"
                      className="bg-[#A84300] hover:bg-[#873400] text-white px-space-xl py-3 rounded-xl font-label-lg text-label-lg shadow-md hover:shadow-lg transition-colors flex items-center gap-space-xs text-center font-bold tracking-wide"
                    >
                      <Icon name="how_to_reg" className="text-[20px]" />
                      <span>Nộp Hồ Sơ Xét Tuyển Online</span>
                    </a>
                    <a
                      href="#checklist-ho-so"
                      className="bg-surface-container hover:bg-surface-container-high text-primary px-space-lg py-3 rounded-xl font-label-lg text-label-lg transition-all flex items-center gap-space-xs font-bold"
                    >
                      <Icon name="download" className="text-[20px]" />
                      <span>Quy Trình Hồ Sơ</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-space-xs text-on-surface-variant font-body-sm text-body-sm sm:gap-4">
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <Icon name="check_circle" className="text-[16px] text-tertiary-container" /> Tư vấn hồ sơ
                    </span>
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <Icon name="check_circle" className="text-[16px] text-tertiary-container" /> Hỗ trợ định hướng nghề
                    </span>
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <Icon name="check_circle" className="text-[16px] text-tertiary-container" /> Kết nối cơ hội thực tập
                    </span>
                  </div>
                </div>

                {/* Right: Notification Card + Photo */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="site-card bg-surface-container-lowest p-space-lg rounded-xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F58232]"></div>
                    <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                      <span className="inline-flex items-center gap-1 text-[#A84300] font-label-md text-label-md uppercase tracking-wider font-bold">
                        <Icon name="emergency_home" className="text-[18px]" /> Thông Tin Tuyển Sinh
                      </span>
                      <span className="bg-secondary-fixed text-on-secondary-fixed font-code text-code px-2 py-0.5 rounded">Tuyển sinh 2026</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      Học bổng Khởi Nghiệp 2.000.000đ
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      Học bổng đầu vào 2.000.000đ. Mức hỗ trợ và điều kiện áp dụng tùy theo đợt tuyển sinh; vui lòng liên hệ Ban tư vấn để được xác nhận.
                    </p>
                    <p className="mb-space-md rounded-lg bg-surface-container p-space-sm text-xs leading-relaxed text-on-surface-variant">
                      Ban tư vấn sẽ xác nhận điều kiện và thời hạn áp dụng theo từng đợt tuyển sinh.
                    </p>
                    <a
                      href="#form-xet-tuyen"
                      className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 rounded-lg font-label-md text-label-md text-center block font-bold transition-all"
                    >
                      Tư Vấn Điều Kiện Học Bổng
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

          <AudienceGuide />

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
                <div className="site-card bg-surface-container-lowest rounded-xl shadow-md p-space-xl flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F58232]"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-code text-code px-2 py-1 bg-[#F6EEE5] text-[#A84300] rounded-lg font-bold">TUYẾN 01 • HỆ 9+</span>
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
                        <Icon name="verified" className="text-primary text-[20px] mt-0.5" />
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Điều kiện xét tuyển</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Xét học bạ THCS (Điểm trung bình cả năm lớp 9 đạt từ 5.0 trở lên, hạnh kiểm Khá).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-[#F6EEE5]/60 p-space-sm rounded-lg">
                        <Icon name="payments" className="text-[#F58232] text-[20px] mt-0.5" />
                        <div>
                          <span className="font-title text-title text-[#A84300] block font-bold">Chính sách hỗ trợ học phí</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Mức hỗ trợ học phí nghề theo Nghị định 81/2021/NĐ-CP phụ thuộc đối tượng, hồ sơ và quy định hiện hành.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <Icon name="school" className="text-primary text-[20px] mt-0.5" />
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Bằng cấp sau tốt nghiệp</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Bằng Trung cấp Chính quy + Chứng chỉ hoàn thành chương trình Giáo dục Phổ thông.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#form-xet-tuyen"
                    className="w-full bg-[#A84300] hover:bg-[#873400] text-white py-3 rounded-lg font-label-lg text-label-lg text-center font-bold shadow-sm transition-colors flex items-center justify-center gap-space-xs"
                  >
                    <span>Đăng Ký Xét Tuyển Hệ 9+</span>
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </a>
                </div>

                {/* CARD 2: HỆ TRUNG CẤP CHÍNH QUY (THPT) */}
                <div className="site-card bg-surface-container-lowest rounded-xl shadow-md p-space-xl flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-1">
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
                        <Icon name="verified" className="text-primary text-[20px] mt-0.5" />
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Điều kiện xét tuyển</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Xét tuyển học bạ lớp 12 (hoặc kết quả thi tốt nghiệp THPT Quốc gia).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <Icon name="business_center" className="text-primary text-[20px] mt-0.5" />
                        <div>
                          <span className="font-title text-title text-primary block font-bold">Đặc quyền Chuyên Môn Tinh Gọn</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">1 học kỳ thực tập hưởng lương tại doanh nghiệp đối tác, nhận chứng nhận kinh nghiệm.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                        <Icon name="trending_up" className="text-primary text-[20px] mt-0.5" />
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
                    <Icon name="arrow_forward" className="text-[18px]" />
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

              <div className="grid grid-cols-1 justify-items-center gap-space-lg md:grid-cols-3">
                <figure className="w-full max-w-[260px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[260px] bg-surface-container-high">
                    <Image
                      className="object-contain"
                      alt="Học sinh tham gia hoạt động học tập tại trường"
                      src="/images/ies-classroom-activities.png"
                      fill
                      sizes="206px"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="p-space-md font-title text-title font-bold text-primary">
                    Gặp gỡ học sinh tại trường
                  </figcaption>
                </figure>

                <figure className="w-full max-w-[260px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[260px] bg-surface-container-high">
                    <Image
                      className="object-cover"
                      alt="Gian tư vấn tuyển sinh của IES tại sân trường"
                      src="/images/admissions-event-booth.jpg"
                      fill
                      sizes="260px"
                    />
                  </div>
                  <figcaption className="p-space-md font-title text-title font-bold text-primary">
                    Gian tư vấn tuyển sinh IES
                  </figcaption>
                </figure>

                <figure className="w-full max-w-[260px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[260px] bg-surface-container-high">
                    <Image
                      className="object-contain"
                      alt="Giáo viên hướng dẫn học sinh thực hành máy tính"
                      src="/images/ies-computer-practice.png"
                      fill
                      sizes="206px"
                      unoptimized
                      loading="lazy"
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
                    <Icon name="how_to_reg" className="text-[16px]" />
                    <span>Cổng Tiếp Nhận Hồ Sơ 2026</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold leading-tight">
                    Đăng Ký Xét Tuyển Ngay <br />
                    <span className="text-[#acedff]">Nhận tư vấn hỗ trợ học phí nghề</span>
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant/90 leading-relaxed">
                    Gửi thông tin xét tuyển ban đầu để Ban tư vấn liên hệ xác nhận điều kiện và hướng dẫn hồ sơ. Chính sách hỗ trợ học phí áp dụng theo đối tượng, hồ sơ và quy định hiện hành.
                  </p>
                  <div className="space-y-space-sm pt-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <Icon name="task_alt" className="text-[18px]" />
                      </div>
                      <span className="font-body-md text-body-md">Xét tuyển bằng học bạ - Tuyệt đối không thi cử căng thẳng</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <Icon name="task_alt" className="text-[18px]" />
                      </div>
                      <span className="font-body-md text-body-md">Hỗ trợ trọn gói thủ tục hồ sơ hỗ trợ học phí cấp phường/xã</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center flex-shrink-0">
                        <Icon name="task_alt" className="text-[18px]" />
                      </div>
                      <span className="font-body-md text-body-md">Ký túc xá tiện nghi, an ninh cho học sinh ở xa</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <LeadForm id="form-xet-tuyen-fields" source="tuyen_sinh" />
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
              <p className="mb-space-lg text-center text-sm font-semibold text-[#5D6B78]">
                Hạn nộp hồ sơ: Theo từng đợt tuyển sinh; liên hệ Ban tư vấn để nhận lịch mới nhất
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="site-card bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Icon name="description" className="text-[22px]" />
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">1. Giấy Tờ Học Tập</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Học bạ THCS hoặc THPT (Bản sao công chứng)</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Bằng tốt nghiệp hoặc Giấy chứng nhận tốt nghiệp tạm thời</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Phiếu đăng ký xét tuyển theo mẫu của trường IES</span></label></li>
                  </ul>
                </div>

                <div className="site-card bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold">
                    <Icon name="badge" className="text-[22px]" />
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">2. Giấy Tờ Tùy Thân</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Căn cước công dân (CCCD) của thí sinh (Bản sao)</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Giấy khai sinh (Bản sao trích lục)</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>04 ảnh thẻ kích thước 3x4 (Chụp trong vòng 6 tháng)</span></label></li>
                  </ul>
                </div>

                <div className="site-card bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#F58232]/10 text-[#F58232] flex items-center justify-center font-bold">
                    <Icon name="savings" className="text-[22px]" />
                  </div>
                  <h3 className="font-title text-title text-primary font-bold">3. Hồ Sơ Nhận Miễn Học Phí</h3>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Đơn đề nghị miễn giảm học phí theo mẫu Nghị định 81/CP</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Giấy xác nhận thông tin cư trú (Mẫu CT07)</span></label></li>
                    <li><label className="admission-check-item"><input type="checkbox" /><span>Hỗ trợ hoàn thiện hồ sơ gửi về địa phương miễn phí</span></label></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="admission-faq-title"
            className="admissions-faq w-full bg-surface-container-low py-space-2xl"
          >
            <div className="mx-auto max-w-[900px] px-margin-sm md:px-margin">
              <div className="mb-space-xl text-center">
                <span className="font-label-md text-label-md font-bold uppercase tracking-widest text-secondary">
                  Cần biết trước khi đăng ký
                </span>
                <h2
                  id="admission-faq-title"
                  className="mt-1 font-headline-lg text-headline-lg font-bold text-primary"
                >
                  Giải đáp nhanh về tuyển sinh
                </h2>
                <p className="mt-2 text-body-md text-on-surface-variant">
                  Mở câu hỏi để xem thông tin và tiếp tục khám phá lộ trình phù hợp.
                </p>
              </div>

              <div className="space-y-3">
                {admissionFaq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-outline-variant/40 bg-white p-space-md shadow-sm"
                  >
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-title text-title font-bold text-primary">
                      <span>{item.question}</span>
                      <Icon
                        name="chevron_right"
                        className="shrink-0 rotate-90 text-[22px] transition-transform group-open:-rotate-90"
                      />
                    </summary>
                    <p className="pt-space-sm text-body-sm leading-relaxed text-on-surface-variant">
                      {item.answer}
                      {item.question.startsWith('Điều kiện hỗ trợ') && (
                        <strong className="mt-2 block">Áp dụng theo điều kiện và quy định hiện hành.</strong>
                      )}
                      {item.question.startsWith('Chưa biết chọn ngành') && (
                        <>
                          {' '}
                          <Link
                            href="/nganh-dao-tao"
                            className="font-bold text-primary underline underline-offset-2"
                          >
                            Khám phá ngành học
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
