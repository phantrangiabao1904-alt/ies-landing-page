import Icon from '@/components/ui/Icon';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/forms/LeadForm';
import { decree24DocumentUrl, decree81SearchUrl, schoolContact } from '@/lib/school-info';

export const metadata = {
  title: 'Chương Trình Học — Trường Trung cấp Tin học Kinh tế Sài Gòn (IES)',
  description: 'Lộ trình tinh gọn, 70% thực hành, đào tạo song bằng Hệ 9+ và hỗ trợ kết nối việc làm.',
};

export default function ChuongTrinhHocPage() {
  return (
    <div className="site-page bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
      <SiteHeader />

      <main className="w-full pt-28 bg-surface min-h-[calc(100vh-28rem)] flex-1">
        <div className="flex flex-col w-full">
          {/* BREADCRUMB STRIP */}
          <section className="w-full bg-surface-container-low py-space-sm px-margin-sm md:px-margin">
            <div className="max-w-[1240px] mx-auto flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Icon name="home" className="text-[16px]" />
                <span>Trang Chủ</span>
              </Link>
              <Icon name="chevron_right" className="text-[14px]" />
              <span className="text-primary font-semibold">Chương Trình Học</span>
            </div>
          </section>

          {/* BANNER CHƯƠNG TRÌNH HỌC (HỆ 9+) */}
          <section className="w-full">
            <Image
              src="/images/chuong-trinh-hoc-banner.jpg"
              alt="Chương trình đào tạo Hệ 9+ tại Trường Trung cấp Tin học Kinh tế Sài Gòn"
              width={2048}
              height={1152}
              priority
              sizes="100vw"
              className="block h-auto w-full"
            />
          </section>

          {/* HERO SECTION */}
          <section className="w-full bg-surface py-space-xl md:py-space-2xl px-margin-sm md:px-margin relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                {/* Badge Tag */}
                <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-full text-primary w-fit font-label-md text-label-md shadow-sm">
                  <Icon name="school" className="text-[16px] text-tertiary" />
                  <span>CHƯƠNG TRÌNH ĐÀO TẠO THỰC CHIẾN 9+ &amp; TRUNG CẤP CHÍNH QUY</span>
                </div>
                {/* Main Title */}
                <h1 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-primary tracking-tight font-bold leading-tight">
                  Lộ Trình Tinh Gọn — <span className="whitespace-nowrap">Vững Vàng</span> Tay Nghề —{' '}
                  <span className="text-[#F58232]">
                    <span className="whitespace-nowrap">Tự Chủ Tương Lai</span>
                  </span>{' '}
                  Ở Tuổi 18
                </h1>
                {/* Description */}
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Chương trình học tại IES được thiết kế theo tỷ lệ vàng <strong className="text-primary font-semibold">70% Thực hành - 30% Lý thuyết</strong>, tích hợp chương trình văn hóa phổ thông và nghề chính quy. Học sinh tốt nghiệp THCS sở hữu ngay bằng Trung cấp và chứng chỉ văn hóa chỉ sau 2-3 năm, sẵn sàng lập nghiệp vững vàng hoặc liên thông Đại học công lập.
                </p>
                {/* Highlights Policy Pill */}
                <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#F58232]/10 flex items-center justify-center flex-shrink-0 text-[#F58232]">
                    <Icon name="verified_user" className="text-[24px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title text-title text-primary text-sm font-bold">Hỗ trợ học phí nghề theo chính sách Nhà nước</span>
                    <a
                      href={decree81SearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-sm text-body-sm text-on-surface-variant underline decoration-primary/40 underline-offset-2 hover:text-primary"
                    >
                      Tra cứu Nghị định 81/2021/NĐ-CP
                    </a>
                    <a
                      href={decree24DocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-sm text-body-sm text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary-container"
                    >
                      Mở Nghị định 24/2022/NĐ-CP (PDF)
                    </a>
                    <span className="text-[11px] leading-relaxed text-on-surface-variant">
                      Áp dụng theo đối tượng, điều kiện và hồ sơ quy định.
                    </span>
                  </div>
                </div>
                {/* CTA Buttons Group */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a
                    href="#dang-ky-tu-van"
                    className="bg-[#F58232] hover:bg-[#e07122] text-white px-space-lg py-3 rounded-xl font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all flex items-center gap-space-xs text-center font-bold tracking-wide"
                  >
                    <Icon name="how_to_reg" className="text-[20px]" />
                    <span>Đăng Ký Xét Tuyển Ngay</span>
                  </a>
                  <a
                    href="#khung-chuong-trinh"
                    className="bg-primary text-white hover:bg-primary-container px-space-lg py-3 rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all flex items-center gap-space-xs"
                  >
                    <Icon name="download" className="text-[20px]" />
                    <span>Tải Khung Đào Tạo</span>
                  </a>
                </div>
              </div>

              {/* Hero Visual Metric Collage */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-3 shadow-xl sm:p-space-md">
                  <figure>
                    <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl bg-surface-container-low">
                      <Image
                        className="object-contain"
                        alt="Hai học viên cùng học và trao đổi bài trong lớp"
                        src="/images/learning-practice.jpg"
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-semibold text-primary">
                      Trao đổi và thực hành trong lớp
                    </figcaption>
                  </figure>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-outline-variant/50 bg-surface-container-low p-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-tertiary/10 text-tertiary">
                        <Icon name="menu_book" className="text-[24px]" />
                      </div>
                      <div>
                        <p className="font-display-mobile text-lg font-bold leading-none text-primary">70 : 30</p>
                        <p className="mt-1 text-xs leading-tight text-on-surface-variant">Thực hành / lý thuyết</p>
                      </div>
                    </div>
                    <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-outline-variant/50 bg-surface-container-low p-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                        <Icon name="work" className="text-[24px]" />
                      </div>
                      <div>
                        <p className="font-title text-sm font-bold leading-tight text-primary">Hỗ trợ kết nối</p>
                        <p className="mt-1 text-xs leading-tight text-on-surface-variant">Cơ hội thực tập, việc làm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DUAL CORE TRAINING SYSTEMS (2 HỆ ĐÀO TẠO TRỌNG TÂM) */}
          <section className="w-full bg-surface-container-low py-space-2xl px-margin-sm md:px-margin">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-space-xl">
              <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md uppercase tracking-widest text-[#3764AF]">Mô Hình Tối Ưu</span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">2 Tuyến Hệ Đào Tạo Trọng Tâm</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Lộ trình học linh hoạt, phù hợp với từng điểm xuất phát và định hướng nghề nghiệp cụ thể của học viên.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                {/* Hệ 9+ */}
                <div className="site-card bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all">
                  <div className="w-full h-1.5 bg-[#F58232] absolute top-0 left-0 rounded-t-2xl"></div>
                  <div>
                    <div className="flex items-center justify-between gap-space-sm mb-space-md">
                      <span className="bg-[#F58232]/10 text-[#F58232] font-label-md text-label-md px-space-sm py-1 rounded-full uppercase font-bold">Tuyển sinh tốt nghiệp THCS</span>
                      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1 font-semibold">
                        <Icon name="schedule" className="text-[16px] text-primary" /> 2.5 - 3 Năm
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">Khối Hệ 9+ (Học Nghề &amp; THPT Song Bằng)</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Mô hình tinh gọn kết hợp học song song 7 môn văn hóa phổ thông và chuyên môn kỹ thuật nghề nghiệp. Học sinh nhận cùng lúc 2 văn bằng quốc gia khi tròn 18 tuổi.
                    </p>
                    <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#F58232] text-[20px] flex-shrink-0" />
                        <span><strong className="text-on-surface">Miễn 100% học phí chuyên ngành nghề</strong> theo quy định cấp bù học phí Nghị định 81 của Nhà nước.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#F58232] text-[20px] flex-shrink-0" />
                        <span>Nhận <strong className="text-on-surface">Bằng Trung Cấp Chính Quy</strong> và Giấy chứng nhận hoàn thành chương trình THPT.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#F58232] text-[20px] flex-shrink-0" />
                        <span>Rút ngắn thời gian đại học: Đủ điều kiện thi liên thông thẳng lên Đại học/Cao đẳng chỉ từ 1.5 năm tiếp theo.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase">Hệ 9+ Sài Gòn IES</span>
                    <a
                      href="#dang-ky-tu-van"
                      className="bg-primary hover:bg-primary-container text-white px-space-md py-2 rounded-lg font-label-md text-label-md inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Đăng ký Hệ 9+</span>
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </a>
                  </div>
                </div>

                {/* Khối Trung Cấp Nghề (Sau THPT) */}
                <div className="site-card bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all">
                  <div className="w-full h-1.5 bg-[#2DBEDC] absolute top-0 left-0 rounded-t-2xl"></div>
                  <div>
                    <div className="flex items-center justify-between gap-space-sm mb-space-md">
                      <span className="bg-[#2DBEDC]/15 text-[#0F5587] font-label-md text-label-md px-space-sm py-1 rounded-full uppercase font-bold">Tuyển sinh tốt nghiệp THPT</span>
                      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1 font-semibold">
                        <Icon name="schedule" className="text-[16px] text-primary" /> 1.5 - 2 Năm
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">Khối Trung Cấp Nghề Thực Chiến</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                      Chuyên sâu 100% thời gian cho nghiệp vụ chuyên ngành và đồ án dự án doanh nghiệp. Loại bỏ môn học lý thuyết hàn lâm, gia tăng năng lực cạnh tranh tuyển dụng tức thì.
                    </p>
                    <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#0F5587] text-[20px] flex-shrink-0" />
                        <span><strong className="text-on-surface">Đào tạo theo đơn đặt hàng doanh nghiệp</strong>, làm quen với quy trình thực tế ngay từ học kỳ 2.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#0F5587] text-[20px] flex-shrink-0" />
                        <span>Được tư vấn cơ hội thực tập tại doanh nghiệp theo ngành học và kế hoạch đào tạo.</span>
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <Icon name="check_circle" className="text-[#0F5587] text-[20px] flex-shrink-0" />
                        <span>Nhận <strong className="text-on-surface">Bằng Trung Cấp Chính Quy</strong> khi hoàn thành chương trình; IES hỗ trợ giới thiệu việc làm phù hợp.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase">Hệ Trung Cấp Chuyên Sâu</span>
                    <a
                      href="#dang-ky-tu-van"
                      className="bg-[#F58232] hover:bg-[#e07122] text-white px-space-md py-2 rounded-lg font-label-md text-label-md inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Đăng ký Xét Tuyển</span>
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4-PILLAR CURRICULUM ARCHITECTURE */}
          <section className="w-full bg-surface py-space-2xl px-margin-sm md:px-margin" id="khung-chuong-trinh">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs max-w-2xl">
                  <span className="font-label-md text-label-md text-[#3764AF] uppercase tracking-wider font-semibold">Khung Chương Trình Học Đột Phá</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Cấu Trúc Đào Tạo Thực Chiến 70%</h2>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container px-space-md py-2 rounded-xl text-primary font-label-md text-label-md">
                  <Icon name="tune" className="text-[20px] text-tertiary" />
                  <span>Chuẩn Khung Năng Lực Quốc Gia</span>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                <div className="site-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md font-bold">
                      <Icon name="terminal" className="text-[26px]" />
                    </div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Trụ cột 01</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1 mb-space-xs">Nền Tảng Cơ Sở &amp; Tin Học</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Tư duy thuật toán, ứng dụng công nghệ thông tin văn phòng, ngoại ngữ chuyên ngành thực dụng và kỹ năng thuyết trình làm việc nhóm.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <span className="font-label-md text-label-md text-secondary font-semibold">Tỷ trọng: 20% khung giờ</span>
                  </div>
                </div>

                <div className="site-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-space-md font-bold">
                      <Icon name="devices" className="text-[26px]" />
                    </div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Trụ cột 02</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1 mb-space-xs">Chuyên Môn &amp; Công Nghệ</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Thực hành phòng máy: Lập trình ứng dụng số, Thiết kế đồ họa đa phương tiện, Quản trị mạng, Digital Marketing và Kế toán doanh nghiệp số.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <span className="font-label-md text-label-md text-secondary font-semibold">Tỷ trọng: 40% khung giờ</span>
                  </div>
                </div>

                <div className="site-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F58232]/10 text-[#F58232] flex items-center justify-center mb-space-md font-bold">
                      <Icon name="rocket_launch" className="text-[26px]" />
                    </div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Trụ cột 03</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1 mb-space-xs">Dự Án Doanh Nghiệp (Capstone)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mỗi học viên trực tiếp hoàn thiện dự án mô phỏng thực tế hoặc bài toán do các công ty đối tác IES giao phó dưới sự kèm cặp của giảng viên.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <span className="font-label-md text-label-md text-secondary font-semibold">Tỷ trọng: 20% khung giờ</span>
                  </div>
                </div>

                <div className="site-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-space-md font-bold">
                      <Icon name="apartment" className="text-[26px]" />
                    </div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Trụ cột 04</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1 mb-space-xs">Thực Tập Tốt Nghiệp On-Job</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Trải nghiệm môi trường doanh nghiệp chuyên nghiệp (FPT, Thế Giới Di Động, Viettel, Logistics HCM) có trả lương và giữ lại làm việc chính thức.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm">
                    <span className="font-label-md text-label-md text-secondary font-semibold">Tỷ trọng: 20% khung giờ</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEMESTER TIMELINE ROADMAP */}
          <section className="w-full bg-surface-container-low py-space-2xl px-margin-sm md:px-margin">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-xs text-center max-w-2xl mx-auto">
                <span className="font-label-md text-label-md text-[#3764AF] uppercase tracking-wider font-semibold">Tiến Trình Đào Tạo Rõ Ràng</span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Lộ Trình Từng Học Kỳ (Semester Timeline)</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Thiết kế khoa học giúp học viên tích lũy năng lực từ mức cơ bản đến thuần thục nghiệp vụ độc lập.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary text-white font-title text-title flex items-center justify-center mb-space-sm font-bold">01</div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary font-bold">Học Kỳ I</span>
                    <h4 className="font-title text-title text-primary font-bold mt-1 mb-space-xs">Nền Tảng &amp; Hội Nhập</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Công nghệ thông tin đại cương, Logic học thuật, Tư duy chuyển đổi số và Kỹ năng giao tiếp ứng xử văn minh.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs text-on-surface-variant font-label-md text-[11px]">Học phần: 5 môn cơ sở</div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary text-white font-title text-title flex items-center justify-center mb-space-sm font-bold">02</div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary font-bold">Học Kỳ II</span>
                    <h4 className="font-title text-title text-primary font-bold mt-1 mb-space-xs">Công Cụ Thực Hành</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Làm quen hệ thống Lab tiêu chuẩn, công cụ đồ họa/lập trình cơ bản, kế toán doanh nghiệp nhập môn.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs text-on-surface-variant font-label-md text-[11px]">Học phần: 6 môn thực hành</div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary text-white font-title text-title flex items-center justify-center mb-space-sm font-bold">03</div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary font-bold">Học Kỳ III</span>
                    <h4 className="font-title text-title text-primary font-bold mt-1 mb-space-xs">Tác Nghiệp Chuyên Sâu</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Nghiệp vụ chuyên ngành nâng cao, xử lý tình huống phát sinh, giải quyết bài toán nghiệp vụ doanh nghiệp.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs text-on-surface-variant font-label-md text-[11px]">Học phần: 5 môn chuyên môn</div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary text-white font-title text-title flex items-center justify-center mb-space-sm font-bold">04</div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary font-bold">Học Kỳ IV</span>
                    <h4 className="font-title text-title text-primary font-bold mt-1 mb-space-xs">Đồ Án Môn Học</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Bảo vệ đồ án môn học trước hội đồng giảng viên và chuyên gia doanh nghiệp đánh giá năng lực thực tế.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs text-on-surface-variant font-label-md text-[11px]">Học phần: Đồ án ứng dụng</div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#F58232] text-white font-title text-title flex items-center justify-center mb-space-sm font-bold">05+</div>
                    <span className="font-label-md text-[11px] uppercase tracking-wider text-[#F58232] font-bold">Học Kỳ V - VI</span>
                    <h4 className="font-title text-title text-primary font-bold mt-1 mb-space-xs">Thực Tập &amp; Bằng Cấp</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Thực tập 6 tháng tại doanh nghiệp, thi tốt nghiệp văn hóa THPT (hệ 9+) và nhận bằng Trung cấp nghề chính quy.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs text-on-surface-variant font-label-md text-[11px]">Tốt nghiệp &amp; Đi làm</div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPARISON TABLE: HỆ 9+ IES VS THPT TRUYỀN THỐNG */}
          <section className="w-full bg-surface py-space-2xl px-margin-sm md:px-margin">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-space-xl">
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-[#3764AF] uppercase tracking-wider font-semibold">Góc Nhìn Thực Tế</span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">So Sánh Lợi Thế Vượt Trội</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Lựa chọn lộ trình học 9+ tại IES giúp học sinh và gia đình tiết kiệm tối đa thời gian và chi phí.</p>
              </div>

              <div className="overflow-x-auto rounded-2xl shadow-md bg-surface-container-lowest">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white font-title text-title">
                      <th className="p-space-md md:p-space-lg font-bold">Tiêu Chí Đánh Giá</th>
                      <th className="p-space-md md:p-space-lg font-bold bg-primary-container text-tertiary-fixed">
                        <div className="flex items-center gap-space-xs">
                          <Icon name="stars" className="text-[20px]" />
                          <span>Chương Trình 9+ Tại IES</span>
                        </div>
                      </th>
                      <th className="p-space-md md:p-space-lg font-bold text-surface-variant/90">Lộ Trình THPT Truyền Thống</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-body-md divide-y divide-surface-container-high">
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-space-md md:p-space-lg font-semibold text-primary">Thời Điểm Tự Chủ Tài Chính</td>
                      <td className="p-space-md md:p-space-lg font-bold text-primary bg-primary/5">
                        <span className="text-[#F58232] text-lg font-extrabold">18 Tuổi</span> — Có tay nghề vững vàng, đi làm ngay với thu nhập ổn định.
                      </td>
                      <td className="p-space-md md:p-space-lg text-on-surface-variant">
                        <span className="font-semibold text-on-surface">22 - 23 Tuổi</span> — Sau khi tốt nghiệp THPT và thêm 4 năm Đại học.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-space-md md:p-space-lg font-semibold text-primary">Học Phí Chuyên Ngành</td>
                      <td className="p-space-md md:p-space-lg font-bold text-primary bg-primary/5">
                        <div className="flex items-center gap-2">
                          <Icon name="verified" className="text-green-600 text-[20px]" />
                          <span className="text-green-700 font-bold">Miễn 100% Học Phí Nghề</span>
                        </div>
                        <span className="text-xs text-on-surface-variant font-normal block mt-1">Được nhà nước cấp bù chi phí theo NĐ 81/2021/NĐ-CP.</span>
                      </td>
                      <td className="p-space-md md:p-space-lg text-on-surface-variant">
                        Tốn kém từ 150 - 300 triệu đồng trong suốt 3 năm THPT và 4 năm đại học.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-space-md md:p-space-lg font-semibold text-primary">Văn Bằng Nhận Được</td>
                      <td className="p-space-md md:p-space-lg font-bold text-primary bg-primary/5">
                        <span className="text-primary font-bold">Song Bằng:</span> Bằng Trung cấp chính quy + Giấy chứng nhận hoàn thành văn hóa THPT.
                      </td>
                      <td className="p-space-md md:p-space-lg text-on-surface-variant">
                        Chỉ có Bằng tốt nghiệp THPT (chưa có kỹ năng chuyên môn nghề).
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-space-md md:p-space-lg font-semibold text-primary">Phương Pháp Đào Tạo</td>
                      <td className="p-space-md md:p-space-lg font-bold text-primary bg-primary/5">
                        <span className="text-[#0F5587]">70% Thực hành nghề</span> — Trực tiếp làm dự án thực chiến và thực tập doanh nghiệp có lương.
                      </td>
                      <td className="p-space-md md:p-space-lg text-on-surface-variant">
                        80% - 90% Lý thuyết hàn lâm thi cử, áp lực điểm số thi tốt nghiệp.
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-space-md md:p-space-lg font-semibold text-primary">Cơ Hội Học Lên Đại Học</td>
                      <td className="p-space-md md:p-space-lg font-bold text-primary bg-primary/5">
                        Liên thông thẳng lên Đại học/Cao đẳng chính quy trong 1.5 - 2 năm (Vừa học vừa làm tiện lợi).
                      </td>
                      <td className="p-space-md md:p-space-lg text-on-surface-variant">
                        Thi tuyển đại học tỷ lệ chọi cao, áp lực điểm chuẩn đầu vào.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* QUICK ADMISSION CONSULTATION FORM */}
          <section className="w-full bg-surface py-space-2xl px-margin-sm md:px-margin" id="dang-ky-tu-van">
            <div className="max-w-[1240px] mx-auto bg-primary rounded-3xl p-space-xl md:p-space-2xl text-white shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs bg-white/10 px-space-sm py-1 rounded-full text-tertiary-fixed w-fit font-label-md text-label-md">
                    <Icon name="celebration" className="text-[16px]" />
                    <span>CHÍNH SÁCH TUYỂN SINH 2026</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-white font-bold leading-tight">
                    Đăng Ký Tư Vấn Chương Trình &amp; Nhận Suất Học Bổng Ưu Tiên
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant/90 leading-relaxed">
                    Phòng Tuyển sinh Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) sẽ liên hệ trực tiếp để tư vấn lộ trình học phù hợp nhất cho học sinh, hướng dẫn chi tiết hồ sơ nhận hỗ trợ 100% học phí nhà nước.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-space-md pt-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <Icon name="call" className="text-[#F58232] text-[24px]" />
                      <div>
                        <p className="font-label-md text-[11px] text-surface-variant/75 uppercase">Hotline Tư Vấn 24/7</p>
                        <div className="flex flex-wrap gap-x-2">
                          {schoolContact.phoneNumbers.map((phone) => (
                            <a key={phone.number} className="font-title text-title text-white font-bold hover:underline" href={phone.href}>
                              {phone.number}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <Icon name="location_on" className="text-tertiary-fixed text-[24px]" />
                      <div>
                        <p className="font-label-md text-[11px] text-surface-variant/75 uppercase">Trụ sở nộp hồ sơ</p>
                        <div className="font-body-sm text-body-sm text-white">
                          {schoolContact.campuses.map((campus) => (
                            <p key={campus.value}>{campus.name}: {campus.address}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <LeadForm source="chuong_trinh_hoc" />
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM CALL-TO-ACTION BANNER */}
          <section className="w-full bg-surface-container py-space-xl px-margin-sm md:px-margin">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
              <div className="flex flex-col gap-1 max-w-xl">
                <h3 className="font-headline-md text-headline-md text-primary font-bold">Khám Phá Chi Tiết Các Ngành Nghề Tại IES</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Xem chương trình chi tiết từng chuyên ngành công nghệ thông tin và kinh tế mũi nhọn.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-space-sm">
                <Link
                  href="/tuyen-sinh"
                  className="bg-primary hover:bg-primary-container text-white px-space-lg py-3 rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all flex items-center gap-space-xs font-semibold"
                >
                  <Icon name="list_alt" className="text-[18px]" />
                  <span>Đề Án Tuyển Sinh</span>
                </Link>
                <a
                  href="#dang-ky-tu-van"
                  className="bg-[#F58232] hover:bg-[#e07122] text-white px-space-lg py-3 rounded-xl font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all flex items-center gap-space-xs font-bold"
                >
                  <Icon name="how_to_reg" className="text-[18px]" />
                  <span>Đăng Ký Xét Tuyển</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
