'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  FileCheck,
  Building2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
} from 'lucide-react';

export default function PortalHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'CHÍNH SÁCH VÀNG 2026',
      title: 'HỌC PHÍ MIỄN PHÍ 100% THEO NGHỊ ĐỊNH 81/CP',
      subtitle: 'Dành riêng cho học sinh tốt nghiệp THCS (Lớp 9). Nhận bằng Trung cấp chính quy ở tuổi 18, liên thông thẳng Cao đẳng & Đại học.',
      badge: 'Cơ Hội Vàng',
      bgGradient: 'from-[#0F5587] via-[#1B4B73] to-[#0A3250]',
      primaryBtn: { text: 'Nộp Hồ Sơ Ngay', href: '#lead-form' },
      secondaryBtn: { text: 'Xem Chính Sách NĐ 81', href: '#chinh-sach-hoc-phi' },
      highlights: ['Tiết kiệm 50-70 triệu đồng', '70% Thực hành Lab', 'Cam kết 100% việc làm'],
    },
    {
      id: 2,
      tag: 'KHỐI NGÀNH CÔNG NGHỆ & SỐ',
      title: '6 NGÀNH ĐÀO TẠO MŨI NHỌN ĐÓN ĐẦU XU HƯỚNG 2026',
      subtitle: 'Công nghệ thông tin • Thiết kế đồ họa • Marketing số • Quản trị mạng • Kế toán doanh nghiệp • Du lịch dịch vụ.',
      badge: 'Xu Hướng 2026',
      bgGradient: 'from-[#173F63] via-[#0F5587] to-[#2DBEDC]/40',
      primaryBtn: { text: 'Xem Chi Tiết Ngành', href: '#nganh-dao-tao' },
      secondaryBtn: { text: 'Tư Vấn Hướng Nghiệp', href: '#lead-form' },
      highlights: ['Học cùng chuyên gia', 'Phòng máy hiện đại', 'Dự án doanh nghiệp thật'],
    },
    {
      id: 3,
      tag: 'KẾT NỐI DOANH NGHIỆP',
      title: 'HỢP TÁC HƠN 200+ TẬP ĐOÀN & DOANH NGHIỆP UY TÍN',
      subtitle: 'Sinh viên IES được cam kết việc làm ngay sau khi tốt nghiệp. Thực tập có lương và tuyển dụng trực tiếp tại trường.',
      badge: 'Cam Kết Việc Làm',
      bgGradient: 'from-[#0A3B5C] via-[#0F5587] to-[#3764AF]',
      primaryBtn: { text: 'Đăng Ký Xét Tuyển', href: '#lead-form' },
      secondaryBtn: { text: 'Danh Sách Doanh Nghiệp', href: '#hop-tac' },
      highlights: ['98.5% Tỷ lệ có việc làm', 'Mức lương khởi điểm tốt', 'Hỗ trợ việc làm trọn đời'],
    },
    {
      id: 4,
      tag: 'MÔ HÌNH SONG BẰNG 9+',
      title: 'TỐT NGHIỆP CÙNG LÚC 2 BẰNG Ở TUỔI 18',
      subtitle: 'Vừa hoàn thành chương trình văn hóa THPT, vừa sở hữu Bằng Trung cấp chính quy. Tiết kiệm thời gian, sớm tự chủ tài chính.',
      badge: 'Rút Ngắn Thời Gian',
      bgGradient: 'from-[#0F5587] via-[#2A577B] to-[#F58232]/30',
      primaryBtn: { text: 'Tư Vấn Lộ Trình 9+', href: '#lead-form' },
      secondaryBtn: { text: 'Quy Trình Nhập Học', href: '#quy-trinh' },
      highlights: ['Giảm áp lực thi cử', '18 tuổi có nghề vững', 'Liên thông dễ dàng'],
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#F5F8FA] py-5 sm:py-8 border-b border-[#D9E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CỘT TRÁI (COL-MD-9): CAROUSEL SLIDER NỔI BẬT */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#D9E2EA] bg-[#0F5587] text-white flex-1 min-h-[420px] sm:min-h-[460px] flex items-center">
              
              {/* Nền slide động */}
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-gradient-to-br ${slide.bgGradient} p-6 sm:p-10 flex flex-col justify-between ${
                    idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#2DBEDC]/10 rounded-full blur-xl pointer-events-none" />

                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#2DBEDC] text-[11px] font-black uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#F58232]" />
                      {slide.tag}
                    </span>
                    <span className="bg-[#F58232] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="my-auto py-4 z-10 space-y-4 max-w-2xl">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed">
                      {slide.subtitle}
                    </p>

                    {/* Highlights pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {slide.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1 text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-lg text-slate-100"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2DBEDC]" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 z-10 pt-4">
                    <a
                      href={slide.primaryBtn.href}
                      className="px-6 py-3 rounded-xl bg-[#F58232] hover:bg-[#E06F20] text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#F58232]/30 flex items-center gap-2 hover:scale-105 active:scale-95"
                    >
                      <span>{slide.primaryBtn.text}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={slide.secondaryBtn.href}
                      className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/25 transition-all"
                    >
                      {slide.secondaryBtn.text}
                    </a>
                  </div>
                </div>
              ))}

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-[#0F5587] text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-[#0F5587] text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      dotIdx === currentSlide ? 'w-8 bg-[#F58232]' : 'w-2.5 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (COL-MD-3): BOX TIỆN ÍCH NHANH (BOX-TIENICH) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between gap-3 sm:gap-3.5">
            
            {/* 1. CÁN BỘ - GIẢNG VIÊN */}
            <a
              href="#eoffice"
              className="group p-4 rounded-xl bg-gradient-to-r from-[#0F5587] to-[#1E4E79] text-white shadow-sm hover:shadow-md border border-[#3764AF] transition-all transform hover:-translate-y-0.5 flex items-center gap-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#2DBEDC] group-hover:scale-110 transition-transform flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-extrabold text-sm uppercase tracking-wide text-white group-hover:text-cyan-200 transition-colors">
                  Cán Bộ - Giảng Viên
                </h3>
                <p className="text-[11px] text-slate-200 mt-0.5 truncate">
                  E-Office • Quản lý đào tạo • Tra cứu lịch dạy
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            {/* 2. SINH VIÊN */}
            <a
              href="#cong-thong-tin-sv"
              className="group p-4 rounded-xl bg-gradient-to-r from-[#3764AF] to-[#2B5697] text-white shadow-sm hover:shadow-md border border-blue-400/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300 group-hover:scale-110 transition-transform flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-extrabold text-sm uppercase tracking-wide text-white group-hover:text-yellow-200 transition-colors">
                  Cổng Sinh Viên
                </h3>
                <p className="text-[11px] text-slate-200 mt-0.5 truncate">
                  Xem điểm • Lịch học • Học bổng • Học phí
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            {/* 3. ĐĂNG KÝ XÉT TUYỂN - NỔI BẬT LEARNING ORANGE #F58232 */}
            <a
              href="#lead-form"
              className="group p-4 rounded-xl bg-gradient-to-r from-[#F58232] to-[#E06F20] text-white shadow-md hover:shadow-lg border border-[#F58232]/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-3.5 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-sm uppercase tracking-wide text-white">
                    Đăng Ký Xét Tuyển
                  </h3>
                  <span className="bg-white text-[#F58232] text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                    2026
                  </span>
                </div>
                <p className="text-[11px] text-white/90 mt-0.5 truncate">
                  Xét học bạ THCS / THPT • Miễn 100% học phí
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            {/* 4. NHẬP HỌC TRỰC TUYẾN */}
            <a
              href="#quy-trinh"
              className="group p-4 rounded-xl bg-gradient-to-r from-[#0F5587] via-[#2A6A9E] to-[#2DBEDC] text-white shadow-sm hover:shadow-md border border-cyan-400/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-extrabold text-sm uppercase tracking-wide text-white group-hover:text-cyan-100 transition-colors">
                  Nhập Học Trực Tuyến
                </h3>
                <p className="text-[11px] text-slate-100 mt-0.5 truncate">
                  Hướng dẫn 3 bước hồ sơ • Nhận giấy báo ngay
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
