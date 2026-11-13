'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Home,
  ChevronDown,
  Menu,
  X,
  FileCheck2,
} from 'lucide-react';

export default function PortalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchTarget = document.getElementById('nganh-dao-tao') || document.getElementById('tin-tuc');
      searchTarget?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-[#D9E2EA] font-sans sticky top-0 z-50">
      {/* 1. TOP BAR: THÔNG TIN LIÊN HỆ & NGÔN NGỮ */}
      <div className="bg-[#0F5587] text-white text-xs border-b border-[#3764AF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-100 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#2DBEDC]" />
              TP. Hồ Chí Minh
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F58232]" />
              <span className="inline-flex flex-wrap gap-x-2">
                {schoolContact.phoneNumbers.map((phone) => (
                  <a key={phone.number} href={phone.href} className="hover:text-[#2DBEDC] transition-colors">
                    {phone.number}
                  </a>
                ))}
              </span>
            </span>
            <a
              href={`mailto:${schoolContact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#2DBEDC] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2DBEDC]" />
              {schoolContact.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md text-[11px]">
              <span className="font-semibold text-white cursor-pointer px-1.5 py-0.5 rounded bg-[#3764AF]">
                🇻🇳 VI
              </span>
              <span className="text-white/40">|</span>
              <span className="text-slate-300 hover:text-white cursor-pointer px-1.5 py-0.5 transition-colors">
                🇬🇧 EN
              </span>
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-1 bg-[#F58232] hover:bg-[#E06F20] text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Nộp Hồ Sơ 2026
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER TOP: LOGO TRƯỜNG & KHUNG TÌM KIẾM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo IES bản chuẩn */}
          <Link href="/" className="flex items-center gap-3 group">
            <IESLogo variant="horizontal" theme="color" className="h-12 w-[180px] max-w-[180px]" />
          </Link>

          {/* Ô Tìm Kiếm chuẩn Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md ml-auto">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm thông tin ngành, tuyển sinh, thông báo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 text-xs bg-[#F5F8FA] border border-[#D9E2EA] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F5587] focus:bg-white text-[#263849] placeholder:text-[#5D6B78]"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0F5587] text-white flex items-center justify-center hover:bg-[#3764AF] transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Nút bật Menu trên Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F5F8FA] border border-[#D9E2EA] text-[#0F5587]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. THANH ĐIỀU HƯỚNG CHÍNH (NAVIGATION BAR) - ĐẬM MÀU BRAND DEEP BLUE #0F5587 */}
      <nav className="bg-[#0F5587] text-white border-y border-[#3764AF] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="hidden lg:flex items-center text-xs font-bold uppercase tracking-wide">
            {/* Trang chủ */}
            <li className="border-r border-white/15">
              <Link
                href="/"
                className="px-4 py-3.5 flex items-center gap-1.5 hover:bg-[#3764AF] transition-colors text-white"
                title="Trang chủ"
              >
                <Home className="w-4 h-4 text-[#2DBEDC]" />
              </Link>
            </li>

            {/* Giới thiệu */}
            <li className="relative group border-r border-white/15">
              <a
                href="#gioi-thieu"
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-[#3764AF] transition-colors"
              >
                <span>Giới Thiệu</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:rotate-180 transition-transform" />
              </a>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-[#263849] w-64 shadow-2xl border border-[#D9E2EA] rounded-b-xl py-2 z-50 normal-case">
                <li>
                  <a
                    href="#gioi-thieu"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] font-semibold text-xs border-b border-[#D9E2EA]/50"
                  >
                    Giới thiệu chung về IES
                  </a>
                </li>
                <li>
                  <a
                    href="#su-mang"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] font-semibold text-xs border-b border-[#D9E2EA]/50"
                  >
                    Sứ mạng - Tầm nhìn & Giá trị
                  </a>
                </li>
                <li>
                  <a
                    href="#co-cau"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] font-semibold text-xs border-b border-[#D9E2EA]/50"
                  >
                    Sơ đồ tổ chức & Ban Giám hiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#co-so-vat-chat"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] font-semibold text-xs"
                  >
                    Cơ sở vật chất & Phòng máy Lab
                  </a>
                </li>
              </ul>
            </li>

            {/* Cơ cấu tổ chức */}
            <li className="relative group border-r border-white/15">
              <a
                href="#co-cau"
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-[#3764AF] transition-colors"
              >
                <span>Cơ Cấu Tổ Chức</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:rotate-180 transition-transform" />
              </a>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-[#263849] w-64 shadow-2xl border border-[#D9E2EA] rounded-b-xl py-2 z-50 normal-case">
                <li className="px-4 py-1.5 text-[11px] font-black uppercase text-[#0F5587] bg-[#F5F8FA]">
                  Lãnh Đạo & Phòng Ban
                </li>
                <li>
                  <a
                    href="#lanh-dao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Hội đồng trường & Ban Giám hiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#phong-dao-tao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Phòng Đào tạo - Tuyển sinh
                  </a>
                </li>
                <li>
                  <a
                    href="#phong-ctsv"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs border-b border-[#D9E2EA]/50"
                  >
                    Phòng Công tác học sinh - sinh viên
                  </a>
                </li>
                <li className="px-4 py-1.5 text-[11px] font-black uppercase text-[#0F5587] bg-[#F5F8FA]">
                  Các Khoa Đào Tạo
                </li>
                <li>
                  <a
                    href="#khoa-cntt"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Khoa Công nghệ thông tin
                  </a>
                </li>
                <li>
                  <a
                    href="#khoa-do-hoa"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Khoa Thiết kế Đồ họa & Đa phương tiện
                  </a>
                </li>
                <li>
                  <a
                    href="#khoa-kinh-te"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Khoa Kinh tế số & Marketing
                  </a>
                </li>
              </ul>
            </li>

            {/* Tuyển sinh 2026 */}
            <li className="relative group border-r border-white/15">
              <a
                href="#tuyen-sinh"
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-[#3764AF] transition-colors text-yellow-300 font-extrabold"
              >
                <span>Tuyển Sinh 2026</span>
                <span className="bg-[#F58232] text-white text-[10px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                  HOT
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:rotate-180 transition-transform" />
              </a>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-[#263849] w-72 shadow-2xl border border-[#D9E2EA] rounded-b-xl py-2 z-50 normal-case">
                <li>
                  <a
                    href="#chinh-sach-hoc-phi"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] text-[#0F5587] font-bold text-xs border-b border-[#D9E2EA]/50"
                  >
                    🌟 Miễn 100% học phí theo Nghị định 81/CP
                  </a>
                </li>
                <li>
                  <a
                    href="#nganh-dao-tao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    6 Ngành đào tạo mũi nhọn 2026
                  </a>
                </li>
                <li>
                  <a
                    href="#quy-trinh"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Quy trình xét tuyển học bạ THCS / THPT
                  </a>
                </li>
                <li>
                  <a
                    href="#lead-form"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] text-[#F58232] font-bold text-xs"
                  >
                    Đăng ký hồ sơ xét tuyển trực tuyến
                  </a>
                </li>
              </ul>
            </li>

            {/* Đào tạo */}
            <li className="relative group border-r border-white/15">
              <a
                href="#he-dao-tao"
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-[#3764AF] transition-colors"
              >
                <span>Đào Tạo</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:rotate-180 transition-transform" />
              </a>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-[#263849] w-64 shadow-2xl border border-[#D9E2EA] rounded-b-xl py-2 z-50 normal-case">
                <li>
                  <a
                    href="#he-dao-tao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Trung cấp chính quy 9+ (Tốt nghiệp THCS)
                  </a>
                </li>
                <li>
                  <a
                    href="#he-dao-tao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Trung cấp chính quy (Tốt nghiệp THPT)
                  </a>
                </li>
                <li>
                  <a
                    href="#he-dao-tao"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Liên thông Cao đẳng - Đại học
                  </a>
                </li>
                <li>
                  <a
                    href="#tra-cuu"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] text-[#0F5587] font-semibold text-xs border-t border-[#D9E2EA]"
                  >
                    Tra cứu văn bằng & chứng chỉ
                  </a>
                </li>
              </ul>
            </li>

            {/* Nghiên cứu & Hợp tác */}
            <li className="relative group border-r border-white/15">
              <a
                href="#hop-tac"
                className="px-4 py-3.5 flex items-center gap-1 hover:bg-[#3764AF] transition-colors"
              >
                <span>Nghiên Cứu & Hợp Tác</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:rotate-180 transition-transform" />
              </a>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-[#263849] w-64 shadow-2xl border border-[#D9E2EA] rounded-b-xl py-2 z-50 normal-case">
                <li>
                  <a
                    href="#hop-tac-dn"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Liên kết hơn 200+ Doanh nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#nghien-cuu"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Hội thảo khoa học & đổi mới sáng tạo
                  </a>
                </li>
                <li>
                  <a
                    href="#viec-lam"
                    className="block px-4 py-2 hover:bg-[#F5F8FA] hover:text-[#0F5587] text-xs"
                  >
                    Giới thiệu việc làm cho sinh viên
                  </a>
                </li>
              </ul>
            </li>

            {/* Công khai giáo dục */}
            <li className="border-r border-white/15">
              <a
                href="#cong-khai"
                className="px-4 py-3.5 block hover:bg-[#3764AF] transition-colors"
              >
                Công Khai GD
              </a>
            </li>

            {/* Liên hệ */}
            <li>
              <a
                href="#lien-he"
                className="px-4 py-3.5 block hover:bg-[#3764AF] transition-colors"
              >
                Liên Hệ
              </a>
            </li>
          </ul>

          {/* MOBILE MENU ACCORDION */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/15 space-y-2">
              <form onSubmit={handleSearch} className="mb-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 text-xs bg-white text-[#263849] rounded-lg outline-none"
                />
              </form>
              <Link
                href="/"
                className="block px-3 py-2 rounded font-bold text-white hover:bg-[#3764AF]"
              >
                Trang Chủ
              </Link>
              <div>
                <button
                  onClick={() => toggleDropdown('gioithieu')}
                  className="w-full flex items-center justify-between px-3 py-2 font-bold text-white hover:bg-[#3764AF] rounded"
                >
                  <span>Giới Thiệu</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'gioithieu' && (
                  <div className="pl-6 py-1 space-y-1 text-slate-200 text-xs">
                    <a href="#gioi-thieu" className="block py-1">Giới thiệu chung</a>
                    <a href="#su-mang" className="block py-1">Sứ mạng & Giá trị cốt lõi</a>
                    <a href="#co-cau" className="block py-1">Sơ đồ tổ chức</a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown('tuyensinh')}
                  className="w-full flex items-center justify-between px-3 py-2 font-bold text-yellow-300 hover:bg-[#3764AF] rounded"
                >
                  <span>Tuyển Sinh 2026 (Miễn 100% Học Phí)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'tuyensinh' && (
                  <div className="pl-6 py-1 space-y-1 text-slate-200 text-xs">
                    <a href="#chinh-sach-hoc-phi" className="block py-1 text-yellow-300 font-bold">Chính sách Nghị định 81/CP</a>
                    <a href="#nganh-dao-tao" className="block py-1">6 Ngành đào tạo mũi nhọn</a>
                    <a href="#quy-trinh" className="block py-1">Quy trình nộp hồ sơ</a>
                    <a href="#lead-form" className="block py-1 text-[#F58232] font-bold">Đăng ký trực tuyến</a>
                  </div>
                )}
              </div>
              <a
                href="#he-dao-tao"
                className="block px-3 py-2 rounded font-bold text-white hover:bg-[#3764AF]"
              >
                Hệ Đào Tạo
              </a>
              <a
                href="#tin-tuc"
                className="block px-3 py-2 rounded font-bold text-white hover:bg-[#3764AF]"
              >
                Tin Tức & Sự Kiện
              </a>
              <a
                href="#lien-he"
                className="block px-3 py-2 rounded font-bold text-white hover:bg-[#3764AF]"
              >
                Thông Tin Liên Hệ
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
