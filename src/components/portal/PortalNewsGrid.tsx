'use client';

import Image from 'next/image';
import React from 'react';
import {
  Newspaper,
  Calendar,
  Share2,
  ChevronRight,
  BookOpen,
  Award,
  CheckCircle2,
} from 'lucide-react';

export default function PortalNewsGrid() {
  const admissionNews = [
    {
      title: 'HƯỚNG DẪN THỦ TỤC NHẬP HỌC TRUNG CẤP CHÍNH QUY NĂM HỌC 2026 - 2027',
      date: '10/06/2026',
      badge: 'Tuyển sinh 2026',
      imgUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=160&auto=format&fit=crop&q=80',
      summary: 'Quy trình hoàn thiện hồ sơ, nhận giấy báo trúng tuyển và thủ tục cấp bù miễn 100% học phí nghề theo NĐ 81/CP.',
    },
    {
      title: 'THÔNG BÁO TIẾP NHẬN HỒ SƠ VÀ THỰC HIỆN CHẾ ĐỘ MIỄN, GIẢM HỌC PHÍ THEO NGHỊ ĐỊNH 81/2021/NĐ-CP',
      date: '02/06/2026',
      badge: 'Chính sách',
      imgUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=160&auto=format&fit=crop&q=80',
      summary: 'Hướng dẫn cụ thể cho học sinh tốt nghiệp THCS nhận hỗ trợ 100% học phí từ ngân sách Nhà nước.',
    },
    {
      title: 'THÔNG BÁO XÉT TUYỂN HỌC BẠ ĐỢT 2 CÁC NGÀNH CÔNG NGHỆ THÔNG TIN & THIẾT KẾ ĐỒ HỌA',
      date: '28/05/2026',
      badge: 'Xét tuyển',
      imgUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=160&auto=format&fit=crop&q=80',
      summary: 'Chỉ tiêu đợt 2 cho các khối ngành mũi nhọn CNTT, Marketing số, Đồ họa đa phương tiện tại cơ sở TP.HCM.',
    },
    {
      title: 'THÔNG BÁO TUYỂN SINH LIÊN THÔNG ĐẠI HỌC VÀ CAO ĐẲNG CHÍNH QUY NĂM 2026',
      date: '20/05/2026',
      badge: 'Liên thông',
      imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=160&auto=format&fit=crop&q=80',
      summary: 'Chương trình liên thông linh hoạt buổi tối hoặc cuối tuần dành cho sinh viên tốt nghiệp Trung cấp.',
    },
  ];

  const eventsNews = [
    {
      title: 'LỄ KÝ KẾT THỎA THUẬN HỢP TÁC ĐÀO TẠO & CUNG ỨNG NGUỒN NHÂN LỰC VỚI 50+ DOANH NGHIỆP',
      date: '08/06/2026',
      badge: 'Sự kiện',
      imgUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=160&auto=format&fit=crop&q=80',
      summary: 'IES kết nối cùng các tập đoàn CNTT, truyền thông và tài chính, cam kết 100% sinh viên ra trường có việc làm.',
    },
    {
      title: 'HỘI THẢO KHOA HỌC: "ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI) VÀ CHUYỂN ĐỔI SỐ TRONG GIÁO DỤC NGHỀ NGHIỆP"',
      date: '01/06/2026',
      badge: 'Hội thảo',
      imgUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=160&auto=format&fit=crop&q=80',
      summary: 'Đổi mới phương pháp giảng dạy, đưa công nghệ AI và thực hành ảo vào chương trình đào tạo sinh viên IES.',
    },
    {
      title: 'HÀNH TRÌNH TRI ÂN – GHI DẤU NHỮNG GIÁ TRỊ VÀNG TRONG HƠN 15 NĂM ĐÀO TẠO PHÁT TRIỂN',
      date: '25/05/2026',
      badge: 'Hoạt động',
      imgUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=160&auto=format&fit=crop&q=80',
      summary: 'Gặp gỡ các thế hệ cựu sinh viên thành đạt và vinh danh các giảng viên xuất sắc của trường.',
    },
    {
      title: 'LỄ KHAI GIẢNG KHÓA KỸ NĂNG MỀM VÀ ĐÀO TẠO CHUẨN KỸ NĂNG SỐ DOANH NGHIỆP CHO TÂN SINH VIÊN',
      date: '18/05/2026',
      badge: 'Khai giảng',
      imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=160&auto=format&fit=crop&q=80',
      summary: 'Trang bị ngoại ngữ giao tiếp, kỹ năng làm việc nhóm và phỏng vấn tuyển dụng chuyên nghiệp.',
    },
  ];

  return (
    <section id="tin-tuc" className="py-12 bg-white border-b border-[#D9E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CỘT 1: TUYỂN SINH (COL-SM-6 COL-MD-4 / LG:COL-SPAN-4) */}
          <div className="lg:col-span-4 bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#0F5587]">
                <a href="#tuyen-sinh" className="flex items-center gap-2 group">
                  <span className="w-2.5 h-6 bg-[#0F5587] rounded-sm" />
                  <h3 className="font-black text-base sm:text-lg text-[#0F5587] uppercase tracking-wide group-hover:text-[#3764AF] transition-colors">
                    Tuyển Sinh
                  </h3>
                </a>
                <a
                  href="#tuyen-sinh"
                  className="text-xs text-[#0F5587] hover:text-[#F58232] font-bold flex items-center gap-1 transition-colors"
                >
                  <Newspaper className="w-4 h-4 text-[#F58232]" />
                  <span>Xem tất cả</span>
                </a>
              </div>

              <div className="space-y-4">
                {admissionNews.map((item, idx) => (
                  <article
                    key={idx}
                    className="flex gap-3.5 pb-3.5 border-b border-[#D9E2EA]/70 last:border-b-0 group"
                  >
                    <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200 border border-[#D9E2EA]">
                      <Image
                        src={item.imgUrl}
                        alt={item.title}
                        width={80}
                        height={64}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[10px] text-[#5D6B78] mb-1">
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#D9E2EA] text-[#0F5587] font-bold">
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#F58232]" />
                          {item.date}
                        </span>
                      </div>
                      <a
                        href="#tuyen-sinh"
                        className="font-bold text-xs text-[#263849] group-hover:text-[#0F5587] transition-colors line-clamp-2 leading-snug"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2">
              <a
                href="#lead-form"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0F5587] hover:bg-[#3764AF] text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Nộp hồ sơ xét tuyển online</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CỘT 2: TIN TỨC - SỰ KIỆN (COL-SM-6 COL-MD-4 / LG:COL-SPAN-4) */}
          <div className="lg:col-span-4 bg-[#F5F8FA] rounded-2xl p-6 border border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#3764AF]">
                <a href="#tin-tuc-su-kien" className="flex items-center gap-2 group">
                  <span className="w-2.5 h-6 bg-[#3764AF] rounded-sm" />
                  <h3 className="font-black text-base sm:text-lg text-[#0F5587] uppercase tracking-wide group-hover:text-[#3764AF] transition-colors">
                    Tin Tức - Sự Kiện
                  </h3>
                </a>
                <a
                  href="#tin-tuc-su-kien"
                  className="text-xs text-[#3764AF] hover:text-[#F58232] font-bold flex items-center gap-1 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-[#3764AF]" />
                  <span>Xem thêm</span>
                </a>
              </div>

              <div className="space-y-4">
                {eventsNews.map((item, idx) => (
                  <article
                    key={idx}
                    className="flex gap-3.5 pb-3.5 border-b border-[#D9E2EA]/70 last:border-b-0 group"
                  >
                    <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200 border border-[#D9E2EA]">
                      <Image
                        src={item.imgUrl}
                        alt={item.title}
                        width={80}
                        height={64}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[10px] text-[#5D6B78] mb-1">
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#D9E2EA] text-[#3764AF] font-bold">
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#2DBEDC]" />
                          {item.date}
                        </span>
                      </div>
                      <a
                        href="#tin-tuc-su-kien"
                        className="font-bold text-xs text-[#263849] group-hover:text-[#3764AF] transition-colors line-clamp-2 leading-snug"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-2">
              <a
                href="#tin-tuc-su-kien"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F5F8FA] border border-[#D9E2EA] hover:border-[#3764AF] text-[#0F5587] font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Xem bản tin nhà trường</span>
                <ChevronRight className="w-4 h-4 text-[#3764AF]" />
              </a>
            </div>
          </div>

          {/* CỘT 3: SỨ MẠNG VÀ GIÁ TRỊ CỐT LÕI (COL-MD-4 / LG:COL-SPAN-4) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#F6EEE5]/70 to-white rounded-2xl p-6 border-2 border-[#D9E2EA] shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58232]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="text-center pb-3 mb-5 border-b-2 border-[#F58232]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#F58232]">
                  Định Hướng Chiến Lược IES
                </span>
                <h3 className="font-black text-lg sm:text-xl text-[#0F5587] mt-0.5">
                  Sứ Mạng & Giá Trị Cốt Lõi
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#263849] leading-relaxed">
                <div className="p-3.5 bg-white rounded-xl border border-[#D9E2EA] shadow-xs">
                  <div className="flex items-center gap-2 font-black text-[#0F5587] mb-1.5">
                    <BookOpen className="w-4 h-4 text-[#F58232]" />
                    <span>Sứ Mạng Đào Tạo</span>
                  </div>
                  <p className="text-xs text-[#5D6B78] leading-relaxed">
                    Là nơi chuyên đào tạo nguồn nhân lực có uy tín và chất lượng cao đáp ứng nhu cầu của xã hội, của doanh nghiệp và góp phần phục vụ quá trình công nghiệp hóa, hiện đại hóa của TP. Hồ Chí Minh và cả nước.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#D9E2EA] shadow-xs">
                  <div className="flex items-center gap-2 font-black text-[#0F5587] mb-1.5">
                    <Award className="w-4 h-4 text-[#2DBEDC]" />
                    <span>Nghiên Cứu & Ứng Dụng</span>
                  </div>
                  <p className="text-xs text-[#5D6B78] leading-relaxed">
                    Là nơi kết hợp đào tạo với thực hiện nghiên cứu và chuyển giao các kết quả nghiên cứu khoa học về lĩnh vực đào tạo nghề nghiệp và công nghệ kỹ thuật cho xã hội.
                  </p>
                </div>

                {/* 4 Giá trị cốt lõi */}
                <div className="p-4 bg-gradient-to-r from-[#0F5587] to-[#1F4E75] text-white rounded-xl shadow-md">
                  <p className="text-[11px] font-black uppercase text-cyan-200 tracking-wider mb-2">
                    4 Giá Trị Truyền Thống IES:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-black">
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F58232]" />
                      <span>Nhân Văn</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DBEDC]" />
                      <span>Sáng Tạo</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300" />
                      <span>Phát Triển</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Bền Vững</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3">
              <a
                href="#gioi-thieu"
                className="w-full py-2.5 px-4 rounded-xl bg-[#F58232] hover:bg-[#E06F20] text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Tìm hiểu về IES</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
