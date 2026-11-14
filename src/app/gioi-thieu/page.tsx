import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { schoolContact } from '@/lib/school-info';

export const metadata = {
  title: 'Giới Thiệu — Trường Trung cấp Tin học Kinh tế Sài Gòn (IES)',
  description:
    'Tìm hiểu về lịch sử hình thành, tầm nhìn, sứ mệnh, giá trị cốt lõi, đội ngũ ban giám hiệu và cơ sở vật chất hiện đại của IES Saigon.',
};

export default function GioiThieuPage() {
  return (
    <div className="about-page min-h-screen bg-[#F5F8FA] flex flex-col font-['Inter',sans-serif] text-[#263849]">
      {/* 1. Header */}
      <SiteHeader />

      {/* Main Content with pt-28 to clear fixed SiteHeader */}
      <main className="flex-1 pt-28">
        {/* 2. Breadcrumb */}
        <section className="bg-white border-b border-[#D9E2EA] py-3.5">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <nav className="flex items-center gap-2 text-[13px] text-[#5D6B78] font-['Inter',sans-serif]">
              <Link
                href="/"
                className="hover:text-[#0F5587] flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Trang Chủ</span>
              </Link>
              <span className="text-[#D9E2EA]">/</span>
              <span className="text-[#0F5587] font-semibold font-['Montserrat',sans-serif]">
                Giới Thiệu
              </span>
            </nav>
          </div>
        </section>

        {/* 3. Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#F5F8FA] relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5587]/10 text-[#0F5587] text-[13px] font-semibold font-['Montserrat',sans-serif] w-fit border border-[#0F5587]/20">
                  <span className="material-symbols-outlined text-[18px] text-[#F58232]">
                    verified
                  </span>
                  <span>Hành Trình Kiến Tạo Tương Lai</span>
                </div>

                <h1 className="font-['Montserrat',sans-serif] text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F5587] leading-[1.18] tracking-tight">
                  Kiến Tạo Tương Lai — Vững Vàng Nghề Nghiệp Khởi Đầu Từ Tuổi 15
                </h1>

                <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] text-[#5D6B78] leading-relaxed">
                  Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) tự hào là một trong những cơ sở
                  giáo dục nghề nghiệp hàng đầu tại TP.HCM. Với mô hình đào tạo 9+ đột phá kết hợp
                  70% thực hành thực chiến, IES giúp học viên tốt nghiệp THCS nắm chắc nghề nghiệp
                  vững vàng, thụ hưởng trọn vẹn chính sách miễn 100% học phí từ Nhà nước và tự tin
                  hòa nhập thị trường lao động số.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/tuyen-sinh"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F58232] text-white font-['Montserrat',sans-serif] font-bold text-[14px] shadow-md hover:bg-[#e07328] transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Đăng Ký Tư Vấn Ngay</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>

                  <a
                    href="#tam-nhin-su-menh"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#0F5587] text-[#0F5587] font-['Montserrat',sans-serif] font-bold text-[14px] hover:bg-[#0F5587]/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                    <span>Khám Phá IES</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#D9E2EA] text-[13px] text-[#5D6B78]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2DBEDC] text-[20px]">
                      check_circle
                    </span>
                    <span>Bằng chính quy toàn quốc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F58232] text-[20px]">
                      payments
                    </span>
                    <span>Miễn 100% học phí nghề</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0F5587] text-[20px]">
                      work
                    </span>
                    <span>Cam kết giới thiệu việc làm</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols) - Visual Showcase */}
              <div className="lg:col-span-5 relative">
                {/* School activity photo */}
                <div className="w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                  <Image
                    src="/images/ies-classroom.jpg"
                    alt="Học viên tham gia lớp học tại Trường Trung cấp Tin học Kinh tế Sài Gòn"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F5587]/80 via-transparent to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-5 left-5 max-w-[190px] text-sm font-bold text-white drop-shadow-md">
                    Không gian học tập và trao đổi tại IES
                  </p>

                  {/* Floating Card 1 - Top Left */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-[#D9E2EA] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0F5587]/10 flex items-center justify-center text-[#0F5587]">
                      <span className="material-symbols-outlined text-[22px]">history_edu</span>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#5D6B78] uppercase tracking-wider font-['Montserrat',sans-serif]">
                        Thành Lập
                      </div>
                      <div className="font-['Montserrat',sans-serif] font-bold text-[15px] text-[#0F5587]">
                        Từ Năm 2008
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 2 - Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-[#D9E2EA] flex items-center gap-3 max-w-[240px]">
                    <div className="w-10 h-10 rounded-lg bg-[#2DBEDC]/10 flex items-center justify-center text-[#2DBEDC] flex-shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified_user</span>
                    </div>
                    <div>
                      <div className="font-['Montserrat',sans-serif] font-bold text-[13px] text-[#0F5587] leading-tight">
                        Kiểm Định Chất Lượng
                      </div>
                      <div className="text-[11px] text-[#5D6B78] mt-0.5">
                        Bộ LĐ-TB&amp;XH công nhận
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KPI Ribbon */}
        <section className="py-6 bg-[#F5F8FA]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="rounded-2xl bg-[#0F5587] p-8 md:p-10 shadow-xl border border-[#3764AF]/40">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {/* Metric 1 */}
                <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
                  <div className="font-['Montserrat',sans-serif] text-[36px] sm:text-[44px] font-extrabold tracking-tight leading-none text-[#acedff]">
                    15<span className="text-[#F58232]">+</span>
                  </div>
                  <div className="font-['Montserrat',sans-serif] text-white text-[14px] font-bold mt-2">
                    Năm Kinh Nghiệm
                  </div>
                  <div className="text-[12px] text-white/70 mt-1 max-w-[180px]">
                    Đào tạo nguồn nhân lực thực chiến &amp; vững tay nghề
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
                  <div className="font-['Montserrat',sans-serif] text-[36px] sm:text-[44px] font-extrabold tracking-tight leading-none text-[#acedff]">
                    10.000<span className="text-[#F58232]">+</span>
                  </div>
                  <div className="font-['Montserrat',sans-serif] text-white text-[14px] font-bold mt-2">
                    Sinh Viên Tốt Nghiệp
                  </div>
                  <div className="text-[12px] text-white/70 mt-1 max-w-[180px]">
                    Tự tin khởi nghiệp và làm việc tại các doanh nghiệp
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
                  <div className="font-['Montserrat',sans-serif] text-[36px] sm:text-[44px] font-extrabold tracking-tight leading-none text-[#acedff]">
                    98.5<span className="text-[#F58232]">%</span>
                  </div>
                  <div className="font-['Montserrat',sans-serif] text-white text-[14px] font-bold mt-2">
                    Tỷ Lệ Có Việc Làm
                  </div>
                  <div className="text-[12px] text-white/70 mt-1 max-w-[180px]">
                    Có việc làm ngay sau khi tốt nghiệp ra trường
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col items-center text-center px-4 pt-4 lg:pt-0">
                  <div className="font-['Montserrat',sans-serif] text-[36px] sm:text-[44px] font-extrabold tracking-tight leading-none text-[#acedff]">
                    50<span className="text-[#F58232]">+</span>
                  </div>
                  <div className="font-['Montserrat',sans-serif] text-white text-[14px] font-bold mt-2">
                    Doanh Nghiệp Ký Kết
                  </div>
                  <div className="text-[12px] text-white/70 mt-1 max-w-[180px]">
                    Cam kết hợp tác thực tập và tuyển dụng trực tiếp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Mission & Vision */}
        <section id="tam-nhin-su-menh" className="py-16 md:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Định Hướng Chiến Lược
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                Tầm Nhìn &amp; Sứ Mệnh Của IES
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Nền móng vững chắc định hình tương lai cho từng thế hệ học viên Sài Gòn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card: Top border cyan #2DBEDC */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D9E2EA] border-t-4 border-t-[#2DBEDC] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#2DBEDC]/10 flex items-center justify-center text-[#2DBEDC]">
                      <span className="material-symbols-outlined text-[32px]">visibility</span>
                    </div>
                    <span className="font-['Montserrat',sans-serif] text-[12px] font-extrabold uppercase tracking-widest text-[#2DBEDC] bg-[#2DBEDC]/10 px-3 py-1 rounded-full">
                      Vision 2030
                    </span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#0F5587] mb-4">
                    TẦM NHÌN CHIẾN LƯỢC
                  </h3>

                  <p className="font-['Inter',sans-serif] text-[15px] text-[#5D6B78] leading-relaxed mb-6">
                    Trở thành hệ sinh thái đào tạo nghề nghiệp và liên thông cao đẳng, đại học ứng
                    dụng hàng đầu tại TP.HCM và khu vực phía Nam. Tiên phong áp dụng mô hình chuyển
                    đổi số trong giảng dạy nghề nghiệp, đào tạo ra nguồn nhân lực công nghệ cao vững
                    kỹ năng thực tiễn, đáp ứng chuẩn mực hội nhập quốc tế.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9E2EA] flex items-center gap-2 text-[#2DBEDC] font-['Montserrat',sans-serif] text-[13px] font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Định vị trường trung cấp công nghệ thực chiến chuẩn mực</span>
                </div>
              </div>

              {/* Mission Card: Top border orange #F58232 */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#D9E2EA] border-t-4 border-t-[#F58232] flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F58232]/10 flex items-center justify-center text-[#F58232]">
                      <span className="material-symbols-outlined text-[32px]">track_changes</span>
                    </div>
                    <span className="font-['Montserrat',sans-serif] text-[12px] font-extrabold uppercase tracking-widest text-[#F58232] bg-[#F58232]/10 px-3 py-1 rounded-full">
                      Our Mission
                    </span>
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#0F5587] mb-4">
                    SỨ MỆNH GIÁO DỤC
                  </h3>

                  <p className="font-['Inter',sans-serif] text-[15px] text-[#5D6B78] leading-relaxed mb-6">
                    Trao quyền cho thế hệ trẻ từ 15 tuổi làm chủ tương lai thông qua chương trình
                    đào tạo thực hành 70% và được tư vấn điều kiện áp dụng chính sách hỗ trợ học phí
                    nghề theo quy định. IES hỗ trợ xây dựng lộ trình nghề nghiệp, kết nối cơ hội việc
                    làm phù hợp và phát triển nền tảng đạo đức nghề nghiệp.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9E2EA] flex items-center gap-2 text-[#F58232] font-['Montserrat',sans-serif] text-[13px] font-bold">
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  <span>Đồng hành cùng phụ huynh &amp; tương lai con em</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 4 Core Values */}
        <section className="py-16 md:py-20 bg-[#F5F8FA]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Giá Trị Cốt Lõi
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                4 Trụ Cột Giá Trị Vững Vàng
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Kim chỉ nam định hướng toàn bộ hoạt động giảng dạy, rèn luyện và phục vụ xã hội tại IES
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Value 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E2EA] shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat',sans-serif] text-[36px] font-black text-[#0F5587]/20 group-hover:text-[#0F5587] transition-colors">
                      01
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0F5587]/10 flex items-center justify-center text-[#0F5587]">
                      <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                    </div>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587] mb-2">
                    Thực Chiến (Hands-on)
                  </h3>
                  <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                    70% thời lượng chương trình là thực hành phòng máy, làm việc trên dự án thực tế của
                    doanh nghiệp, học tới đâu vững tay nghề tới đó.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9E2EA]/60 text-[12px] text-[#0F5587] font-semibold font-['Montserrat',sans-serif]">
                  Không lý thuyết suông
                </div>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E2EA] shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat',sans-serif] text-[36px] font-black text-[#F58232]/25 group-hover:text-[#F58232] transition-colors">
                      02
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F58232]/10 flex items-center justify-center text-[#F58232]">
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </div>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587] mb-2">
                    Tận Tâm (Dedication)
                  </h3>
                  <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                    Giảng viên và chuyên gia đồng hành 1-1, thấu hiểu tâm lý lứa tuổi 15-18, theo sát
                    từng bước trưởng thành cả về chuyên môn lẫn nhân cách.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9E2EA]/60 text-[12px] text-[#F58232] font-semibold font-['Montserrat',sans-serif]">
                  Lấy người học làm trung tâm
                </div>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E2EA] shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat',sans-serif] text-[36px] font-black text-[#2DBEDC]/30 group-hover:text-[#2DBEDC] transition-colors">
                      03
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#2DBEDC]/10 flex items-center justify-center text-[#2DBEDC]">
                      <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                    </div>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587] mb-2">
                    Đột Phá (Innovation)
                  </h3>
                  <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                    Liên tục cập nhật giáo trình theo xu thế Trí tuệ nhân tạo (AI), Marketing số,
                    thương mại điện tử và công nghệ truyền thông hiện đại.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9E2EA]/60 text-[12px] text-[#2DBEDC] font-semibold font-['Montserrat',sans-serif]">
                  Chuyển đổi số giáo dục
                </div>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D9E2EA] shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Montserrat',sans-serif] text-[36px] font-black text-[#3764AF]/25 group-hover:text-[#3764AF] transition-colors">
                      04
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#3764AF]/10 flex items-center justify-center text-[#3764AF]">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587] mb-2">
                    Cam Kết (Commitment)
                  </h3>
                  <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                    IES hỗ trợ sinh viên đủ điều kiện tốt nghiệp tìm cơ hội việc làm phù hợp với
                    chuyên ngành, đồng thời tư vấn lộ trình học liên thông lên Đại học.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9E2EA]/60 text-[12px] text-[#3764AF] font-semibold font-['Montserrat',sans-serif]">
                  Trách nhiệm trọn vẹn
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Timeline */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Chặng Đường Phát Triển
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                Lịch Sử Hình Thành &amp; Phát Triển
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Hơn một thập kỷ bền bỉ kiến tạo tương lai nghề nghiệp cho thanh thiếu niên TP.HCM
              </p>
            </div>

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Milestone 1: 2008 */}
              <div className="relative bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] hover:border-[#0F5587] transition-all">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#0F5587] text-white font-['Montserrat',sans-serif] font-extrabold text-[16px] mb-4">
                  2008
                </div>
                <h3 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-[#0F5587] mb-2">
                  Thành Lập Trường IES
                </h3>
                <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                  Trường Trung cấp Tin học Kinh tế Sài Gòn chính thức được thành lập theo quyết định
                  của UBND TP.HCM, đặt nền móng chuyên sâu về Tin học và Kinh tế ứng dụng.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] text-[#0F5587] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">flag</span>
                  <span>Khởi đầu sứ mệnh giáo dục nghề</span>
                </div>
              </div>

              {/* Milestone 2: 2015 */}
              <div className="relative bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] hover:border-[#2DBEDC] transition-all">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#2DBEDC] text-white font-['Montserrat',sans-serif] font-extrabold text-[16px] mb-4">
                  2015
                </div>
                <h3 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-[#0F5587] mb-2">
                  Tiên Phong Mô Hình 9+
                </h3>
                <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                  Triển khai mạnh mẽ lộ trình phân luồng 9+ học song song văn hóa THPT và trung cấp
                  nghề, giúp học sinh tốt nghiệp THCS nhận bằng trung cấp ở tuổi 18.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] text-[#2DBEDC] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  <span>Chuẩn hóa chương trình 9+</span>
                </div>
              </div>

              {/* Milestone 3: 2020 */}
              <div className="relative bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] hover:border-[#F58232] transition-all">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#F58232] text-white font-['Montserrat',sans-serif] font-extrabold text-[16px] mb-4">
                  2020
                </div>
                <h3 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-[#0F5587] mb-2">
                  Liên Kết 50+ Doanh Nghiệp
                </h3>
                <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                  Mở rộng cơ sở vật chất hiện đại, ký kết hợp tác chiến lược với hơn 50 doanh nghiệp
                  công nghệ, tài chính và truyền thông nhằm bao tiêu đầu ra cho sinh viên.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] text-[#F58232] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">business_center</span>
                  <span>Mạng lưới đối tác doanh nghiệp</span>
                </div>
              </div>

              {/* Milestone 4: 2023 - 2025 */}
              <div className="relative bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] hover:border-[#3764AF] transition-all">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#3764AF] text-white font-['Montserrat',sans-serif] font-extrabold text-[16px] mb-4">
                  2023 — 2025
                </div>
                <h3 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-[#0F5587] mb-2">
                  Chuyển Đổi Số &amp; Vươn Tầm
                </h3>
                <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                  Đạt chuẩn kiểm định giáo dục nghề nghiệp, tích hợp giảng dạy ứng dụng AI, Thương
                  mại điện tử số và mở rộng liên thông thẳng lên Đại học uy tín.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] text-[#3764AF] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span>Đổi mới toàn diện kỷ nguyên số</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Leadership */}
        <section className="py-16 md:py-20 bg-[#F5F8FA]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Ban Lãnh Đạo
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                Hội Đồng Sư Phạm &amp; Ban Giám Hiệu
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Đội ngũ chuyên gia giàu kinh nghiệm quản lý giáo dục và kết nối thực tế doanh nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leader 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#D9E2EA] shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="w-full h-64 bg-gradient-to-br from-[#0F5587] to-[#3764AF] flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-white/30 text-[80px]">
                    account_circle
                  </span>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-[#0F5587] font-['Montserrat',sans-serif]">
                    Hiệu Trưởng
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587]">
                      TS. Nguyễn Thanh Tuấn
                    </h3>
                    <p className="text-[13px] font-semibold text-[#F58232] font-['Montserrat',sans-serif] mb-3">
                      Tiến sĩ Quản lý Giáo dục &amp; Công nghệ
                    </p>
                    <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                      Hơn 25 năm tâm huyết cống hiến cho giáo dục nghề nghiệp TP.HCM, nguyên cố vấn
                      chiến lược đổi mới phương pháp giảng dạy thực hành định hướng thị trường.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D9E2EA] flex items-center gap-2 text-[12px] text-[#5D6B78]">
                    <span className="material-symbols-outlined text-[#0F5587] text-[16px]">mail</span>
                    <a href={`mailto:${schoolContact.email}`}>{schoolContact.email}</a>
                  </div>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#D9E2EA] shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="w-full h-64 bg-gradient-to-br from-[#3764AF] to-[#2DBEDC] flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-white/30 text-[80px]">
                    account_circle
                  </span>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-[#0F5587] font-['Montserrat',sans-serif]">
                    Phó Hiệu Trưởng Đào Tạo
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587]">
                      ThS. Trần Thị Kim Loan
                    </h3>
                    <p className="text-[13px] font-semibold text-[#2DBEDC] font-['Montserrat',sans-serif] mb-3">
                      Thạc sĩ Khoa học Máy tính
                    </p>
                    <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                      Chuyên gia thiết kế chuẩn đầu ra kỹ năng nghề và kiểm định chất lượng đào tạo,
                      18 năm kinh nghiệm giảng dạy và dẫn dắt đội ngũ giảng viên cốt cán.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D9E2EA] flex items-center gap-2 text-[12px] text-[#5D6B78]">
                    <span className="material-symbols-outlined text-[#0F5587] text-[16px]">mail</span>
                    <a href={`mailto:${schoolContact.email}`}>{schoolContact.email}</a>
                  </div>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#D9E2EA] shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="w-full h-64 bg-gradient-to-br from-[#0F5587] to-[#F58232] flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-white/30 text-[80px]">
                    account_circle
                  </span>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-[#0F5587] font-['Montserrat',sans-serif]">
                    Trưởng Ban Hợp Tác Doanh Nghiệp
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#0F5587]">
                      ThS. Lê Hoàng Nam
                    </h3>
                    <p className="text-[13px] font-semibold text-[#F58232] font-['Montserrat',sans-serif] mb-3">
                      Chuyên gia Quan hệ Doanh nghiệp &amp; Việc làm
                    </p>
                    <p className="text-[14px] text-[#5D6B78] leading-relaxed">
                      Hỗ trợ phối hợp hoạt động thực tập, tuyển dụng với doanh nghiệp tại TP.HCM và
                      tư vấn cơ hội việc làm phù hợp cho sinh viên tốt nghiệp.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D9E2EA] flex items-center gap-2 text-[12px] text-[#5D6B78]">
                    <span className="material-symbols-outlined text-[#0F5587] text-[16px]">mail</span>
                    <a href={`mailto:${schoolContact.email}`}>{schoolContact.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Facilities (Bento Grid) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Môi Trường Học Tập
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                Cơ Sở Vật Chất Chuẩn Doanh Nghiệp
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Không gian học tập hiện đại, kích thích tư duy sáng tạo và sẵn sàng thực chiến 100%
              </p>
            </div>

            {/* Bento Grid: 8-col lab, 4-col studio, 4-col library, 8-col dormitory */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Item 1: 8-col Lab */}
              <div className="lg:col-span-8 h-[340px] rounded-3xl overflow-hidden relative shadow-md group">
                <div className="w-full h-full bg-gradient-to-br from-[#0F5587] via-[#3764AF] to-[#2DBEDC] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/20 text-[100px] group-hover:scale-110 transition-transform duration-300">
                    desktop_windows
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F5587] via-[#0F5587]/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit text-[12px] font-bold font-['Montserrat',sans-serif] mb-2">
                    <span className="material-symbols-outlined text-[16px] text-[#acedff]">memory</span>
                    <span>Phòng Lab Chuyên Dụng</span>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[22px] sm:text-[24px] font-bold">
                    Hệ Thống Phòng Máy Tính &amp; Lab CNTT Cấu Hình Cao
                  </h3>
                  <p className="text-[14px] text-white/80 max-w-xl mt-1 line-clamp-2">
                    Trang bị 100% PC cấu hình cao, card đồ họa rời, hệ thống mạng cáp quang Gigabit
                    đáp ứng xuất sắc các môn lập trình, thiết kế đồ họa 3D và render video.
                  </p>
                </div>
              </div>

              {/* Item 2: 4-col Studio */}
              <div className="lg:col-span-4 h-[340px] rounded-3xl overflow-hidden relative shadow-md group">
                <div className="w-full h-full bg-gradient-to-br from-[#3764AF] to-[#0F5587] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/20 text-[90px] group-hover:scale-110 transition-transform duration-300">
                    videocam
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F5587] via-[#0F5587]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit text-[12px] font-bold font-['Montserrat',sans-serif] mb-2">
                    <span className="material-symbols-outlined text-[16px] text-[#acedff]">podcasts</span>
                    <span>Sáng Tạo Nội Dung</span>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[20px] font-bold">
                    Studio Đa Phương Tiện &amp; Livestream
                  </h3>
                  <p className="text-[13px] text-white/80 mt-1 line-clamp-2">
                    Phòng quay phông xanh, dàn đèn chuyên nghiệp và mic thu âm cho ngành Thương mại điện tử.
                  </p>
                </div>
              </div>

              {/* Item 3: 4-col Library */}
              <div className="lg:col-span-4 h-[320px] rounded-3xl overflow-hidden relative shadow-md group">
                <div className="w-full h-full bg-gradient-to-br from-[#0F5587] to-[#F58232] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/20 text-[90px] group-hover:scale-110 transition-transform duration-300">
                    menu_book
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F5587] via-[#0F5587]/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit text-[12px] font-bold font-['Montserrat',sans-serif] mb-2">
                    <span className="material-symbols-outlined text-[16px] text-[#F58232]">local_library</span>
                    <span>Không Gian Tự Học</span>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[20px] font-bold">
                    Thư Viện Số &amp; Co-Working Space
                  </h3>
                  <p className="text-[13px] text-white/80 mt-1 line-clamp-2">
                    Hơn 5.000 đầu sách chuyên khảo, tài liệu số và khu vực làm việc nhóm linh hoạt, yên tĩnh.
                  </p>
                </div>
              </div>

              {/* Item 4: 8-col Dormitory */}
              <div className="lg:col-span-8 h-[320px] rounded-3xl overflow-hidden relative shadow-md group">
                <div className="w-full h-full bg-gradient-to-br from-[#2DBEDC] via-[#3764AF] to-[#0F5587] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/20 text-[100px] group-hover:scale-110 transition-transform duration-300">
                    apartment
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F5587] via-[#0F5587]/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit text-[12px] font-bold font-['Montserrat',sans-serif] mb-2">
                    <span className="material-symbols-outlined text-[16px] text-[#acedff]">sports_soccer</span>
                    <span>Tiện Ích Toàn Diện</span>
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] text-[22px] sm:text-[24px] font-bold">
                    Khu Nội Trú An Toàn &amp; Sân Chơi Thể Thao Đa Năng
                  </h3>
                  <p className="text-[14px] text-white/80 max-w-xl mt-1 line-clamp-2">
                    Ký túc xá an ninh nghiêm ngặt 24/7, đầy đủ tiện nghi, sân tập bóng rổ và cầu lông giúp sinh viên rèn luyện sức khỏe toàn diện sau giờ học.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Legal/Credentials & IES 9+ Pathway Diagram */}
        <section className="py-16 md:py-20 bg-[#F5F8FA]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                Tính Pháp Lý &amp; Lộ Trình
              </span>
              <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#0F5587] mt-3">
                Bằng Cấp Chính Quy &amp; Lộ Trình IES 9+
              </h2>
              <p className="text-[#5D6B78] text-[15px] mt-2">
                Minh bạch pháp lý, văn bằng quốc gia và lộ trình học tập tối ưu thời gian cho học sinh THCS
              </p>
            </div>

            {/* 3 Legal Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F5587]/10 flex items-center justify-center text-[#0F5587] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">gavel</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#0F5587] mb-1">
                    Cơ Sở Giáo Dục Hợp Pháp
                  </h3>
                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    Được thành lập hợp pháp theo quyết định của UBND TP.HCM, chịu sự quản lý chuyên
                    môn của Sở LĐ-TB&amp;XH và Bộ LĐ-TB&amp;XH.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2DBEDC]/10 flex items-center justify-center text-[#2DBEDC] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#0F5587] mb-1">
                    Bằng Trung Cấp Quốc Gia
                  </h3>
                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    Văn bằng Trung cấp Chính quy trong hệ thống văn bằng quốc gia, có giá trị tuyển
                    dụng toàn quốc và đủ điều kiện liên thông Đại học.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F58232]/10 flex items-center justify-center text-[#F58232] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">price_check</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#0F5587] mb-1">
                    Hỗ Trợ Học Phí Theo Nghị Định
                  </h3>
                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    100% học sinh tốt nghiệp THCS học thẳng trung cấp được nhà nước hỗ trợ cấp bù học
                    phí theo Nghị định 81/2021/NĐ-CP của Chính phủ.
                  </p>
                </div>
              </div>
            </div>

            {/* IES 9+ Pathway Diagram (Progress Steps) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D9E2EA] shadow-sm">
              <h3 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#0F5587] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F58232]">alt_route</span>
                <span>Sơ Đồ Lộ Trình Đào Tạo IES 9+ Tối Ưu Thời Gian</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#0F5587] text-white flex items-center justify-center font-['Montserrat',sans-serif] font-bold text-[16px]">
                      1
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F5587] font-['Montserrat',sans-serif]">
                        Giai Đoạn 1
                      </span>
                      <h4 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#263849]">
                        Tuổi 15 — 16 (Lớp 10 &amp; 11)
                      </h4>
                    </div>
                  </div>

                  {/* Progress bar track */}
                  <div className="w-full bg-[#D9E2EA] h-2 rounded-full mb-4 overflow-hidden">
                    <div className="bg-[#0F5587] h-full w-full rounded-full"></div>
                  </div>

                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    Học song song 4-7 môn văn hóa THPT và các môn chuyên ngành cơ sở. Được Nhà nước hỗ
                    trợ 100% học phí nghề theo quy định.
                  </p>
                  <div className="mt-3 text-[12px] text-[#0F5587] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                    <span>Vững kiến thức nền tảng</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#2DBEDC] text-white flex items-center justify-center font-['Montserrat',sans-serif] font-bold text-[16px]">
                      2
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2DBEDC] font-['Montserrat',sans-serif]">
                        Giai Đoạn 2
                      </span>
                      <h4 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#263849]">
                        Tuổi 17 — 18 (Lớp 12 &amp; Thực Tập)
                      </h4>
                    </div>
                  </div>

                  {/* Progress bar track */}
                  <div className="w-full bg-[#D9E2EA] h-2 rounded-full mb-4 overflow-hidden">
                    <div className="bg-[#2DBEDC] h-full w-full rounded-full"></div>
                  </div>

                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    Thực tập dự án tại doanh nghiệp, hoàn thành kỳ thi tốt nghiệp nhận 2 văn bằng: Bằng
                    Trung cấp chính quy và Chứng nhận hoàn thành văn hóa THPT.
                  </p>
                  <div className="mt-3 text-[12px] text-[#2DBEDC] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                    <span>Tốt nghiệp nghề ở tuổi 18</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F58232] text-white flex items-center justify-center font-['Montserrat',sans-serif] font-bold text-[16px]">
                      3
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F58232] font-['Montserrat',sans-serif]">
                        Giai Đoạn 3
                      </span>
                      <h4 className="font-['Montserrat',sans-serif] text-[16px] font-bold text-[#263849]">
                        Tuổi 18+: Đi Làm Hoặc Liên Thông
                      </h4>
                    </div>
                  </div>

                  {/* Progress bar track */}
                  <div className="w-full bg-[#D9E2EA] h-2 rounded-full mb-4 overflow-hidden">
                    <div className="bg-[#F58232] h-full w-full rounded-full"></div>
                  </div>

                  <p className="text-[13px] text-[#5D6B78] leading-relaxed">
                    Đi làm ngay nhận thu nhập 8 — 15 triệu/tháng tại 50+ đối tác của trường HOẶC học liên thông
                    1.5 — 2 năm lấy bằng Cử nhân / Kỹ sư Đại học chính quy.
                  </p>
                  <div className="mt-3 text-[12px] text-[#F58232] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                    <span>Tiết kiệm 3 năm so với lộ trình thường</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Campus Map */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="bg-white rounded-3xl border border-[#D9E2EA] shadow-sm p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left (5 cols): Address & Info */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <span className="text-[12px] font-bold tracking-[0.1em] text-[#0F5587] uppercase font-['Montserrat',sans-serif] bg-[#0F5587]/10 px-3 py-1 rounded-full">
                      Mạng Lưới Đào Tạo
                    </span>
                    <h2 className="font-['Montserrat',sans-serif] text-[26px] sm:text-[32px] font-bold text-[#0F5587] mt-3">
                      Hệ Thống Cơ Sở IES Tại TP.HCM
                    </h2>
                    <p className="text-[#5D6B78] text-[14px] mt-2 leading-relaxed">
                      Các cơ sở tọa lạc tại những vị trí giao thông thuận tiện, trang bị đồng bộ cơ sở vật chất phục vụ học viên toàn thành phố.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {schoolContact.campuses.map((campus, index) => (
                      <div key={campus.value} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F5F8FA] border border-[#D9E2EA]/70">
                        <div className={`w-10 h-10 rounded-lg ${index === 0 ? 'bg-[#0F5587]/10 text-[#0F5587]' : 'bg-[#2DBEDC]/10 text-[#2DBEDC]'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="material-symbols-outlined text-[20px]">location_on</span>
                        </div>
                        <div>
                          <div className="font-['Montserrat',sans-serif] font-bold text-[14px] text-[#0F5587]">
                            {campus.name}
                          </div>
                          <div className="text-[13px] text-[#5D6B78] mt-0.5">{campus.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                    {schoolContact.phoneNumbers.map((phone) => (
                      <div key={phone.number} className="flex items-center gap-2 text-[#5D6B78]">
                        <span className="material-symbols-outlined text-[#F58232] text-[18px]">call</span>
                        <a href={phone.href}>Hotline: {phone.number}</a>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-[#5D6B78]">
                      <span className="material-symbols-outlined text-[#0F5587] text-[18px]">
                        mail
                      </span>
                      <a href={`mailto:${schoolContact.email}`}>{schoolContact.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-[#5D6B78]">
                      <span className="material-symbols-outlined text-[#2DBEDC] text-[18px]">
                        schedule
                      </span>
                      <span>T2 - T7: 07:30 - 17:30</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#5D6B78]">
                      <span className="material-symbols-outlined text-[#3764AF] text-[18px]">
                        language
                      </span>
                      <a href={schoolContact.websiteUrl} target="_blank" rel="noreferrer">{schoolContact.website}</a>
                    </div>
                  </div>
                </div>

                {/* Right (7 cols): Map Placeholder */}
                <div className="lg:col-span-7">
                  <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[#D9E2EA] bg-gradient-to-br from-[#0F5587]/5 via-[#2DBEDC]/10 to-[#F58232]/5 flex flex-col items-center justify-center p-8 text-center relative group">
                    {/* Simulated Map Elements */}
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#F58232] mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[36px]">location_on</span>
                    </div>
                    <div className="font-['Montserrat',sans-serif] font-bold text-[17px] text-[#0F5587]">
                      Bản Đồ Chỉ Đường Đến IES Sài Gòn
                    </div>
                    <p className="text-[13px] text-[#5D6B78] mt-1 max-w-md">
                      {schoolContact.campuses[0].name}: {schoolContact.campuses[0].address}
                    </p>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(schoolContact.campuses[0].address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F5587] text-white text-[13px] font-['Montserrat',sans-serif] font-semibold hover:bg-[#3764AF] transition-colors shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px]">directions</span>
                      <span>Mở Bản Đồ Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. CTA Banner */}
        <section className="py-12 md:py-16 bg-[#F5F8FA]">
          <div className="max-w-[1240px] mx-auto px-4 md:px-8">
            <div className="rounded-3xl bg-[#0F5587] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl text-white">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DBEDC]/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F58232]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#acedff] font-['Montserrat',sans-serif] text-[12px] font-bold tracking-wider uppercase mb-4 border border-white/20">
                  Tuyển Sinh Năm 2026
                </span>

                <h2 className="font-['Montserrat',sans-serif] text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-tight">
                  Bắt Đầu Hành Trình Thành Công Cùng IES Ngay Hôm Nay
                </h2>

                <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] text-white/80 mt-4 leading-relaxed max-w-2xl">
                  Tìm hiểu điều kiện áp dụng chính sách hỗ trợ học phí nghề theo quy định, nhận tư
                  vấn hướng nghiệp và kết nối cơ hội việc làm phù hợp.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                  <Link
                    href="/tuyen-sinh"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F58232] text-white font-['Montserrat',sans-serif] font-bold text-[15px] shadow-lg hover:bg-[#e07328] transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Nộp Hồ Sơ Trực Tuyến</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>

                  <a
                    href={schoolContact.phoneNumbers[0].href}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-['Montserrat',sans-serif] font-semibold text-[15px] hover:bg-white/10 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Liên Hệ Tư Vấn 1-1</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 13. Footer */}
      <SiteFooter />
    </div>
  );
}
