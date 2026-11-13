'use client';

import React, { useState } from 'react';
import {
  Bell,
  BookOpen,
  Briefcase,
  FileText,
  ExternalLink,
  ShieldCheck,
  Calendar,
  ChevronRight,
  Library,
  Award,
} from 'lucide-react';

export default function PortalTabsAndServices() {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4'>('tab1');

  const tabContents = {
    tab1: [
      {
        title: 'THÔNG BÁO VỀ VIỆC NGHỈ LỄ QUỐC KHÁNH 2/9 NĂM HỌC 2026 CHO TOÀN THỂ CB-GV-NV VÀ HỌC SINH SINH VIÊN',
        date: '28/08/2026',
        desc: 'Thời gian nghỉ lễ và kế hoạch trực đảm bảo an ninh trật tự, phòng chống cháy nổ tại các cơ sở trường.',
        isNew: true,
      },
      {
        title: 'THÔNG BÁO TIẾP NHẬN HỒ SƠ XÉT HỌC BỔNG "TIẾP SỨC ĐẾN TRƯỜNG" DÀNH CHO TÂN SINH VIÊN KHÓA 2026',
        date: '15/08/2026',
        desc: 'Học bổng tài trợ thiết bị học tập máy tính xách tay và hỗ trợ chi phí sinh hoạt cho học sinh có hoàn cảnh khó khăn.',
        isNew: true,
      },
      {
        title: 'KẾ HOẠCH BỒI DƯỠNG NÂNG CAO NĂNG LỰC SƯ PHẠM VÀ KỸ NĂNG CÔNG NGHỆ THÔNG TIN CHO GIẢNG VIÊN NĂM 2026',
        date: '02/08/2026',
        desc: 'Khóa tập huấn ứng dụng công nghệ GenAI và phần mềm mô phỏng trong giảng dạy các môn kỹ thuật.',
        isNew: false,
      },
    ],
    tab2: [
      {
        title: 'KẾ HOẠCH KIỂM TRA ĐÁNH GIÁ NĂNG LỰC TIẾNG ANH ĐẦU VÀO VÀ CHUẨN ĐẦU RA CHO SINH VIÊN KHÓA 2026',
        date: '20/07/2026',
        desc: 'Tổ chức thi xếp lớp và lộ trình bồi dưỡng tiếng Anh giao tiếp chuyên ngành miễn phí cho sinh viên.',
        isNew: true,
      },
      {
        title: 'THÔNG BÁO LỊCH ĐÀO TẠO KỸ NĂNG SỐ VÀ CHỨNG CHỈ TIN HỌC DOANH NGHIỆP QUỐC TẾ MOS / IC3',
        date: '12/07/2026',
        desc: 'Đăng ký tham gia lớp ôn tập và dự thi chứng chỉ tin học quốc tế có giá trị trọn đời.',
        isNew: false,
      },
      {
        title: 'HỘI THẢO HƯỚNG DẪN XÂY DỰNG HỒ SƠ DỰ ÁN KHỞI NGHIỆP VÀ ĐỔI MỚI SÁNG TẠO TRONG SINH VIÊN',
        date: '05/07/2026',
        desc: 'Được cố vấn bởi các chuyên gia doanh nghiệp và quỹ đầu tư hỗ trợ phát triển ý tưởng công nghệ.',
        isNew: false,
      },
    ],
    tab3: [
      {
        title: 'THÔNG BÁO TUYỂN DỤNG GIẢNG VIÊN CÔNG NGHỆ THÔNG TIN VÀ THIẾT KẾ ĐỒ HỌA HỌC KỲ 1 NĂM HỌC 2026 - 2027',
        date: '10/08/2026',
        desc: 'Yêu cầu tốt nghiệp Đại học chuyên ngành liên quan, ưu tiên ứng viên có kinh nghiệm thực chiến tại doanh nghiệp.',
        isNew: true,
      },
      {
        title: 'DANH SÁCH DOANH NGHIỆP TUYỂN DỤNG THỰC TẬP SINH CÓ LƯƠNG NGÀNH DIGITAL MARKETING & THƯƠNG MẠI ĐIỆN TỬ',
        date: '01/08/2026',
        desc: 'Hơn 80 vị trí thực tập và làm việc chính thức tại các agency truyền thông và sàn TMĐT lớn.',
        isNew: true,
      },
      {
        title: 'NGÀY HỘI PHỎNG VẤN TRỰC TIẾP IES CAREER DAY - CƠ HỘI VIỆC LÀM CHO 100% SINH VIÊN TỐT NGHIỆP',
        date: '15/07/2026',
        desc: 'Sự kiện thường niên kết nối hơn 50 doanh nghiệp phỏng vấn tuyển dụng trực tiếp tại khuôn viên trường.',
        isNew: false,
      },
    ],
    tab4: [
      {
        title: 'NGHỊ ĐỊNH 81/2021/NĐ-CP CỦA CHÍNH PHỦ QUY ĐỊNH VỀ CƠ CHẾ THU, QUẢN LÝ HỌC PHÍ VÀ CHÍNH SÁCH MIỄN, GIẢM HỌC PHÍ',
        date: '05/06/2026',
        desc: 'Căn cứ pháp lý quan trọng cho chính sách miễn 100% học phí nghề cho học sinh tốt nghiệp THCS học Trung cấp.',
        isNew: false,
      },
      {
        title: 'THÔNG TƯ SỐ 05/2024/TT-BLĐTBXH VỀ QUY ĐỊNH CHUẨN CHUYÊN MÔN, NGHIỆP VỤ CỦA NHÀ GIÁO GIÁO DỤC NGHỀ NGHIỆP',
        date: '20/05/2026',
        desc: 'Văn bản của Bộ Lao động - Thương binh và Xã hội hướng dẫn chuẩn hóa đội ngũ giảng viên GDNN.',
        isNew: false,
      },
      {
        title: 'QUY CHẾ ĐÀO TẠO TRUNG CẤP CHÍNH QUY VÀ HỆ THỐNG ĐÁNH GIÁ CHẤT LƯỢNG HỌC PHẦN THEO TÍN CHỈ',
        date: '10/05/2026',
        desc: 'Quyết định ban hành khung chương trình đào tạo mở, linh hoạt cho sinh viên các khối ngành.',
        isNew: false,
      },
    ],
  };

  return (
    <section className="py-12 bg-[#F5F8FA] border-b border-[#D9E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CỘT TRÁI (COL-MD-8 / LG:COL-SPAN-8): HỆ THỐNG TABS THÔNG BÁO VĂN BẢN */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#D9E2EA] shadow-sm overflow-hidden">
            
            {/* Header Tabs Navigation */}
            <div className="flex flex-wrap border-b border-[#D9E2EA] bg-[#F5F8FA]">
              <button
                onClick={() => setActiveTab('tab1')}
                className={`flex-1 min-w-[140px] px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 ${
                  activeTab === 'tab1'
                    ? 'border-[#0F5587] text-[#0F5587] bg-white shadow-xs'
                    : 'border-transparent text-[#5D6B78] hover:text-[#0F5587] hover:bg-slate-100'
                }`}
              >
                <Bell className="w-4 h-4 text-[#0F5587]" />
                <span>Thông Báo CB-GV</span>
              </button>

              <button
                onClick={() => setActiveTab('tab2')}
                className={`flex-1 min-w-[140px] px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 ${
                  activeTab === 'tab2'
                    ? 'border-[#3764AF] text-[#3764AF] bg-white shadow-xs'
                    : 'border-transparent text-[#5D6B78] hover:text-[#3764AF] hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#3764AF]" />
                <span>Trung Tâm Đào Tạo</span>
              </button>

              <button
                onClick={() => setActiveTab('tab3')}
                className={`flex-1 min-w-[140px] px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 ${
                  activeTab === 'tab3'
                    ? 'border-[#F58232] text-[#F58232] bg-white shadow-xs'
                    : 'border-transparent text-[#5D6B78] hover:text-[#F58232] hover:bg-slate-100'
                }`}
              >
                <Briefcase className="w-4 h-4 text-[#F58232]" />
                <span>Tuyển Dụng & Việc Làm</span>
              </button>

              <button
                onClick={() => setActiveTab('tab4')}
                className={`flex-1 min-w-[140px] px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 ${
                  activeTab === 'tab4'
                    ? 'border-[#0F5587] text-[#0F5587] bg-white shadow-xs'
                    : 'border-transparent text-[#5D6B78] hover:text-[#0F5587] hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 text-[#0F5587]" />
                <span>Văn Bản Pháp Quy</span>
              </button>
            </div>

            {/* Tab Body Content */}
            <div className="p-6">
              <div className="divide-y divide-[#D9E2EA]">
                {tabContents[activeTab].map((item, idx) => (
                  <article key={idx} className="py-4 first:pt-0 last:pb-0 group">
                    <div className="flex items-start gap-4">
                      {/* Box ngày tháng dạng lịch */}
                      <div className="w-16 h-16 rounded-xl bg-[#F5F8FA] border border-[#D9E2EA] flex flex-col items-center justify-center text-center flex-shrink-0 group-hover:bg-[#0F5587] group-hover:text-white transition-colors">
                        <span className="text-base font-black text-[#0F5587] group-hover:text-white leading-none">
                          {item.date.split('/')[0]}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#5D6B78] group-hover:text-cyan-200 mt-1">
                          Th{item.date.split('/')[1]}
                        </span>
                      </div>

                      {/* Nội dung bài viết */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {item.isNew && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#F58232] text-white">
                              MỚI
                            </span>
                          )}
                          <span className="text-[11px] text-[#5D6B78] flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#3764AF]" />
                            {item.date}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#263849] group-hover:text-[#0F5587] transition-colors leading-snug">
                          <a href="#xem-tin">{item.title}</a>
                        </h4>
                        <p className="text-xs text-[#5D6B78] mt-1 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Xem thêm link */}
              <div className="pt-6 mt-4 border-t border-[#D9E2EA] flex items-center justify-between text-xs">
                <span className="text-[#5D6B78]">
                  Cập nhật liên tục từ các phòng ban trường IES
                </span>
                <a
                  href="#tat-ca-thong-bao"
                  className="font-bold text-[#0F5587] hover:text-[#F58232] flex items-center gap-1 transition-colors"
                >
                  <span>Xem thêm danh mục</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (COL-MD-4 / LG:COL-SPAN-4): KHỐI TIỆN ÍCH DỊCH VỤ NHÀ TRƯỜNG */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 1. THƯ VIỆN SỐ */}
            <a
              href="#thu-vien-so"
              className="group block p-4 rounded-2xl bg-white border border-[#D9E2EA] hover:border-[#0F5587] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0F5587] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Library className="w-6 h-6 text-[#2DBEDC]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-sm uppercase text-[#0F5587] group-hover:text-[#3764AF] transition-colors">
                    Thư Viện Số IES
                  </h4>
                  <p className="text-xs text-[#5D6B78] mt-0.5">
                    Hơn 10.000+ giáo trình, đề án tốt nghiệp và sách điện tử
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5D6B78] group-hover:text-[#0F5587]" />
              </div>
            </a>

            {/* 2. TRA CỨU VĂN BẰNG & CHỨNG CHỈ */}
            <a
              href="#tra-cuu"
              className="group block p-4 rounded-2xl bg-white border border-[#D9E2EA] hover:border-[#3764AF] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#3764AF] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-sm uppercase text-[#0F5587] group-hover:text-[#3764AF] transition-colors">
                    Tra Cứu Văn Bằng
                  </h4>
                  <p className="text-xs text-[#5D6B78] mt-0.5">
                    Hệ thống xác thực văn bằng điện tử chính thức
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5D6B78] group-hover:text-[#3764AF]" />
              </div>
            </a>

            {/* 3. CHUẨN KIỂM ĐỊNH CHẤT LƯỢNG ISO */}
            <a
              href="#kiem-dinh"
              className="group block p-4 rounded-2xl bg-white border border-[#D9E2EA] hover:border-[#F58232] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#F6EEE5] text-[#F58232] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-sm uppercase text-[#0F5587] group-hover:text-[#F58232] transition-colors">
                    Kiểm Định Chất Lượng
                  </h4>
                  <p className="text-xs text-[#5D6B78] mt-0.5">
                    Đạt chuẩn kiểm định giáo dục nghề nghiệp quốc gia
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#5D6B78] group-hover:text-[#F58232]" />
              </div>
            </a>

            {/* 4. GIỚI THIỆU VIỆC LÀM & DOANH NGHIỆP */}
            <a
              href="#lead-form"
              className="group block p-4 rounded-2xl bg-gradient-to-r from-[#0F5587] to-[#1F4E75] text-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform text-[#2DBEDC]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-sm uppercase text-white group-hover:text-cyan-200 transition-colors">
                    Giới Thiệu Việc Làm
                  </h4>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Hỗ trợ sinh viên thực tập & làm việc ngay từ năm nhất
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white" />
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
