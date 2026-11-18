'use client';
import Icon from '@/components/ui/Icon';

import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/home/HeroCarousel';
import HeroAtmosphere from '@/components/home/HeroAtmosphere';
import HeroTitle from '@/components/home/HeroTitle';
import MagneticCta from '@/components/home/MagneticCta';
import HomeStats from '@/components/home/HomeStats';
import LearningPath from '@/components/home/LearningPath';
import PartnersMarquee from '@/components/home/PartnersMarquee';
import ScrollTimeline from '@/components/home/ScrollTimeline';
import StudentLifeCarousel from '@/components/home/StudentLifeCarousel';
import HomeGallery from '@/components/home/HomeGallery';
import MajorQuiz from '@/components/home/MajorQuiz';
import FloatingContactActions from '@/components/home/FloatingContactActions';
import CustomCursor from '@/components/home/CustomCursor';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import StickyLeadForm from '@/app/components/forms/StickyLeadForm';
import HomeCmsSection from '@/components/home/HomeCmsSection';
import ScrollProgress from '@/components/home/ScrollProgress';
import { useInView } from '@/hooks/useInView';
import { decree24DocumentUrl, decree81SearchUrl, schoolContact } from '@/lib/school-info';

export default function HomePage() {
  const { ref: heroSectionRef, isInView: isHeroInView } = useInView<HTMLElement>({
    threshold: 0.05,
  });
  const { ref: leadSectionRef, isInView: isLeadSectionInView } = useInView<HTMLElement>({
    threshold: 0.01,
    rootMargin: '120px 0px 120px 0px',
  });

  return (
    <div className="site-page home-page bg-surface font-body-md text-on-surface min-h-screen flex flex-col pb-[76px] md:pb-0">
      <ScrollProgress />
      <SiteHeader enableScrollEffects />

      {/* MAIN */}
      <main id="main-content" tabIndex={-1} className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section
            ref={heroSectionRef}
            data-motion-in-view={isHeroInView}
            className="home-hero-section relative w-full overflow-hidden py-space-xl text-white md:py-space-2xl"
          >
            <HeroAtmosphere />

            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              {/* Top Eyebrow Badge */}
              <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-space-xs bg-[#F58232] text-white px-space-md py-1 rounded-full font-label-md text-label-md tracking-wider uppercase shadow-sm">
                  <Icon name="verified_user" className="text-[16px]" />
                  Tuyển Sinh Năm Học 2026
                </span>
                <a
                  href={decree81SearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-md py-1 font-label-md text-label-md font-semibold text-primary hover:bg-[#e3efff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Tra cứu Nghị định 81 trên Cổng văn bản Chính phủ"
                >
                  <Icon name="policy" className="text-[16px] text-tertiary-container" />
                  Nghị định 81/2021/NĐ-CP
                  <Icon name="open_in_new" className="text-[14px]" />
                </a>
                <a
                  href={decree24DocumentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs rounded-full bg-[#F6EEE5] px-space-md py-1 font-label-md text-label-md font-semibold text-[#F58232] hover:bg-[#f9e3d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58232]"
                >
                  <Icon name="picture_as_pdf" className="text-[16px]" />
                  Nghị định 24/2022/NĐ-CP (PDF)
                </a>
              </div>

              {/* Main Headline Grid */}
              <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
                <div className="order-first flex flex-col gap-space-md lg:order-first lg:col-span-7">
                  <HeroTitle />
                  <p className="hero-description max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                    <strong className="text-[#7AA2F7]">Học thực tiễn - Làm chuyên nghiệp.</strong>{' '}
                    Xét tuyển học bạ - Nhập học ngay. Học sinh tốt nghiệp THCS được tư vấn điều kiện áp dụng chính sách hỗ trợ học phí nghề theo quy định hiện hành.
                  </p>

                  <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                    <MagneticCta
                      className="hero-cta hero-cta--primary group flex min-h-12 items-center gap-space-xs rounded-xl bg-[#A84300] px-space-xl py-space-md text-center font-title text-title font-bold tracking-wide text-white shadow-md hover:bg-[#873400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A84300]"
                      href="#home-sticky-lead-form"
                    >
                      <span>ĐĂNG KÝ XÉT TUYỂN NGAY</span>
                      <Icon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
                    </MagneticCta>
                    <Link
                      className="hero-cta hero-cta--secondary flex min-h-12 items-center gap-space-xs rounded-xl border border-white/20 bg-white/10 px-space-lg py-space-md font-title text-title font-semibold text-white shadow-sm hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      href="/gioi-thieu"
                    >
                      <Icon name="domain" className="text-[20px] text-[#7AA2F7]" />
                      <span>Khám Phá Giới Thiệu Trường</span>
                    </Link>
                  </div>
                </div>

                <div className="order-last w-full lg:order-last lg:col-span-5 lg:pt-2">
                  <HeroCarousel />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <Image
              src="/images/home-admissions-banner-2026.png"
              alt="Tuyển sinh năm học 2026–2027 tại Trường Trung cấp Tin học Kinh tế Sài Gòn"
              width={1920}
              height={730}
              sizes="100vw"
              className="home-banner-image block h-auto w-full"
            />
          </section>

          <HomeStats decree81Url={decree81SearchUrl} decree24Url={decree24DocumentUrl} />

          <HomeCmsSection />

          <PartnersMarquee />

          {/* SPECIAL SECTION: CHÍNH SÁCH "HỌC NGHỀ 0 ĐỒNG - VỮNG VÀNG TƯƠNG LAI" */}
          <section className="w-full py-space-2xl bg-surface-container-lowest">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col gap-space-xs">
                <div className="inline-flex items-center justify-center gap-space-xs mx-auto text-secondary font-label-lg text-label-lg uppercase tracking-wider">
                  <Icon name="verified" className="text-[18px]" />
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
              <ScrollTimeline className="scroll-timeline--steps grid grid-cols-1 gap-space-lg lg:grid-cols-4">
                {/* Pillar 1 */}
                <div data-timeline-step style={{ transitionDelay: '0ms' }} className="scroll-timeline__step home-pillar-card home-hover-card flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-md">
                      <Icon name="gavel" className="text-[28px]" />
                    </div>
                    <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wide">Trụ cột 01</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      Nghị Định 81 Chính Phủ
                    </h3>
                    <p className="text-base leading-relaxed text-on-surface-variant">
                      Nhà nước thực hiện cấp bù 100% kinh phí học phí cho học sinh tốt nghiệp THCS tham gia học nghề trình độ trung cấp theo khung chuẩn quy định.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <Icon name="check" className="text-[16px] text-green-600" />
                    <span>Chi trả đúng định kỳ</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div data-timeline-step style={{ transitionDelay: '80ms' }} className="scroll-timeline__step home-pillar-card home-hover-card flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center shadow-md">
                      <Icon name="corporate_fare" className="text-[28px]" />
                    </div>
                    <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wide">Trụ cột 02</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                      Quỹ IES Talent Fund
                    </h3>
                    <p className="text-base leading-relaxed text-on-surface-variant">
                      Hệ thống doanh nghiệp công nghệ đối tác tài trợ toàn bộ chi phí sử dụng hệ thống máy chủ, phòng Lab iMac cao cấp và bản quyền phần mềm quốc tế.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <Icon name="check" className="text-[16px] text-green-600" />
                    <span>Không thu phụ phí lab</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div data-timeline-step style={{ transitionDelay: '160ms' }} className="scroll-timeline__step home-pillar-card home-hover-card flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-[#F58232] text-white flex items-center justify-center shadow-md">
                      <Icon name="card_membership" className="text-[28px]" />
                    </div>
                    <span className="font-label-md text-label-md text-[#F58232] uppercase font-bold tracking-wide">Trụ cột 03</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-[#F58232] transition-colors">
                      Học Bổng Khuyến Học
                    </h3>
                    <p className="text-base leading-relaxed text-on-surface-variant">
                      Trao tặng học bổng sinh hoạt phí toàn phần cho tân sinh viên hoàn cảnh khó khăn nhưng hiếu học, đạt danh hiệu sinh viên xuất sắc từng kỳ.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <Icon name="check" className="text-[16px] text-green-600" />
                    <span>Hàng trăm suất mỗi khóa</span>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div data-timeline-step style={{ transitionDelay: '240ms' }} className="scroll-timeline__step home-pillar-card home-hover-card flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-sm group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-tertiary-container text-white flex items-center justify-center shadow-md">
                      <Icon name="receipt_long" className="text-[28px]" />
                    </div>
                    <span className="font-label-md text-label-md text-tertiary uppercase font-bold tracking-wide">Trụ cột 04</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-tertiary transition-colors">
                      Minh Bạch Tuyệt Đối
                    </h3>
                    <p className="text-base leading-relaxed text-on-surface-variant">
                      Cam kết không phát sinh các chi phí ẩn trong suốt thời gian học tập. Mọi quy chế, khoản thu được công khai trên cổng thông tin sinh viên IES.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <Icon name="check" className="text-[16px] text-green-600" />
                    <span>Ký cam kết nhập học</span>
                  </div>
                </div>
              </ScrollTimeline>

              {/* Action Anchor to Admissions Details */}
              <div className="mt-space-xl p-space-lg bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <Icon name="contact_support" className="text-[36px] text-primary" />
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
                  <Icon name="open_in_new" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </section>

          <LearningPath />

          {/* WHY CHOOSE IES SECTION */}
          <section className="w-full py-space-2xl bg-surface-container-low">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left: Image grid showing real activities */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-md">
                    <div className="home-image-frame mx-auto aspect-square w-full max-w-[206px] rounded-2xl overflow-hidden bg-surface-container shadow-md">
                      <Image
                        className="w-full h-full object-cover"
                        alt="Học sinh IES nhận chứng nhận trong hoạt động tại trường"
                        src="/images/ies-student-awards.png"
                        width={206}
                        height={206}
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                    <div className="home-hover-card h-44 rounded-2xl overflow-hidden shadow-md bg-primary p-space-md flex flex-col justify-end text-white">
                      <span className="font-headline-lg text-headline-lg font-black text-[#F58232]">15+</span>
                      <span className="font-title text-title font-semibold">Năm Uy Tín Giáo Dục Nghề Nghiệp Tại Sài Gòn</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-md pt-space-lg">
                    <div className="home-hover-card h-44 rounded-2xl overflow-hidden shadow-md bg-surface-container-lowest p-space-md flex flex-col justify-between">
                      <Icon name="workspace_premium" className="text-[36px] text-secondary" />
                      <div>
                        <span className="font-headline-md text-headline-md font-black text-primary">98,5%</span>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Tỷ lệ có việc làm theo số liệu IES</p>
                      </div>
                    </div>
                    <div className="home-image-frame mx-auto aspect-square w-full max-w-[206px] rounded-2xl overflow-hidden bg-surface-container shadow-md">
                      <Image
                        className="w-full h-full object-cover"
                        alt="Học sinh IES tham gia hoạt động tập thể tại trường"
                        src="/images/ies-student-event.png"
                        width={206}
                        height={206}
                        unoptimized
                        loading="lazy"
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
                        <Icon name="badge" className="text-[24px]" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title text-title text-primary font-bold">100% Giảng Viên Là Chuyên Gia Doanh Nghiệp</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Thầy cô trực tiếp quản lý dự án công nghệ, giám đốc tài chính trực tiếp truyền đạt kinh nghiệm xử lý thực tế.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="desktop_mac" className="text-[24px]" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title text-title text-primary font-bold">Cơ Sở Vật Chất Hiện Đại &amp; Studio Sáng Tạo</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Hệ thống máy tính cấu hình cao Core i7/i9, đường truyền cáp quang riêng biệt và phòng chuyên đề kỹ thuật số.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="work_history" className="text-[24px]" />
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
                      <Icon name="arrow_forward" className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <StudentLifeCarousel />
          <HomeGallery />
          <MajorQuiz />

          {/* ADMISSIONS SECTION */}
          <section
            ref={leadSectionRef}
            data-lead-form-in-view={isLeadSectionInView}
            className="w-full py-space-2xl bg-[#0F5587] text-white relative overflow-hidden"
            id="form-xet-tuyen"
          >
            {/* Abstract circular background decor */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary opacity-20 blur-2xl"></div>
            <div className="absolute left-1/3 -top-24 w-72 h-72 rounded-full bg-tertiary-fixed opacity-15 blur-2xl"></div>

            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Form Left Information */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-[#A84300] text-white px-space-md py-1 rounded-full font-label-md text-label-md uppercase tracking-wider w-fit shadow">
                    <Icon name="how_to_reg" className="text-[16px]" />
                    <span>Cổng Tiếp Nhận Hồ Sơ 2026</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold leading-tight text-white">
                    Đăng Ký Xét Tuyển Ngay <br />
                    <span className="text-[#acedff]">Nhận tư vấn hỗ trợ học phí nghề</span>
                  </h2>
                  <p className="font-body-md text-body-md text-white/90 leading-relaxed">
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
                  <div className="p-space-md bg-white/10 rounded-xl backdrop-blur-sm mt-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <Icon name="headset_mic" className="text-[32px] text-[#F58232]" />
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

                <div className="lg:col-span-7">
                  <StickyLeadForm id="home-sticky-lead-form" isSticky={false} />
                </div>
              </div>
            </div>
          </section>

          {/* QUICK NAVIGATION ACTION BAR */}
          <section className="w-full bg-surface-container py-space-lg">
            <div className="max-w-[1240px] mx-auto px-margin-sm md:px-margin">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm text-primary font-title text-title">
                  <Icon name="explore" className="text-[24px] text-secondary" />
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
                  <a className="px-space-lg py-space-sm bg-[#A84300] text-white hover:bg-[#873400] rounded-xl font-label-lg text-label-lg transition-colors shadow-sm hover:shadow-md font-bold tracking-wide cursor-pointer" href="#home-sticky-lead-form">
                    Đăng Ký
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <div
        data-compact={isLeadSectionInView}
        className="mobile-sticky-cta fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-3 border-t border-white/20 bg-[#0F5587] px-4 py-3 text-white shadow-[0_-4px_16px_rgba(0,0,0,0.16)] md:hidden"
      >
        <span
          aria-hidden={isLeadSectionInView}
          className="mobile-sticky-cta__offer text-xs font-extrabold leading-tight sm:text-sm"
        >
          HỖ TRỢ HỌC PHÍ NGHỀ
        </span>
        <a
          href="#home-sticky-lead-form"
          className="mobile-sticky-cta__button inline-flex min-h-[44px] flex-shrink-0 items-center justify-center rounded-lg bg-[#A84300] px-4 text-sm font-bold text-white hover:bg-[#873400]"
        >
          ĐĂNG KÝ NGAY
        </a>
      </div>
      <FloatingContactActions />
      <CustomCursor />
    </div>
  );
}
