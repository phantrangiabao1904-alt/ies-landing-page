'use client';

import Link from 'next/link';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Giới Thiệu', href: '/gioi-thieu' },
  { label: 'Chương Trình Học', href: '/chuong-trinh-hoc' },
  { label: 'Ngành Đào Tạo', href: '/nganh-dao-tao' },
  { label: 'Tuyển Sinh', href: '/tuyen-sinh' },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Announcement Bar */}
      <div className="bg-[#0F5587] text-white py-1.5 px-4 md:px-8 text-center overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex items-center justify-center gap-2 font-['Montserrat',sans-serif] text-[11px] leading-5 font-semibold tracking-[0.04em]">
          <span className="material-symbols-outlined text-[16px] text-[#acedff]">campaign</span>
          <span className="truncate">
            TUYỂN SINH 2026: MIỄN 100% HỌC PHÍ NGHỀ CHO HỌC SINH TỐT NGHIỆP THCS THEO CHÍNH SÁCH HIỆN HÀNH
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="h-16 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1240px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <IESLogo variant="horizontal" className="h-10 w-[140px] max-w-[140px] sm:w-[160px] sm:max-w-[160px] md:w-[180px] md:max-w-[180px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-1 py-2 text-[#5D6B78] hover:text-[#263849] hover:bg-[#e3efff]/50 rounded-lg transition-colors font-['Montserrat',sans-serif] text-[11px] font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="ml-auto flex flex-shrink-0 items-center gap-2">
            <div className="hidden lg:flex flex-col items-end text-right">
              <span className="font-['Montserrat',sans-serif] text-[10px] text-[#5D6B78] uppercase tracking-wider font-semibold">
                Hotline Tư Vấn
              </span>
              <div className="flex items-center gap-1 whitespace-nowrap font-['Montserrat',sans-serif] text-[10px] text-[#0F5587] font-bold">
                {schoolContact.phoneNumbers.map((phone, index) => (
                  <span key={phone.number} className="inline-flex items-center gap-1">
                    {index > 0 && <span className="text-[#5D6B78]">/</span>}
                    <a href={phone.href} className="hover:underline">
                      {phone.number}
                    </a>
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/dang-ky"
              className="min-h-[44px] bg-[#F58232] hover:bg-[#e07122] text-white px-2.5 py-1.5 rounded-lg font-['Montserrat',sans-serif] text-[11px] font-bold tracking-[0.02em] shadow-sm hover:shadow-md transition-all flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">how_to_reg</span>
              <span>Đăng Ký</span>
            </Link>

            <details className="relative md:hidden">
              <summary
                className="flex h-11 w-11 list-none cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[#F5F8FA] [&::-webkit-details-marker]:hidden"
                aria-label="Mở menu điều hướng"
              >
                <span className="material-symbols-outlined text-[24px] text-[#0F5587]">menu</span>
              </summary>
              <nav className="absolute right-0 top-[calc(100%+10px)] flex w-[calc(100vw-2rem)] max-w-[22rem] flex-col gap-1 border-t border-[#D9E2EA] bg-white px-4 py-4 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                    className="min-h-[44px] rounded-lg px-4 py-3 font-['Montserrat',sans-serif] text-[16px] font-semibold text-[#263849] transition-colors hover:bg-[#F5F8FA]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/tuyen-sinh#form-xet-tuyen"
                  onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                  className="mt-2 min-h-[44px] rounded-lg bg-[#F58232] px-4 py-3 text-center font-['Montserrat',sans-serif] text-[14px] font-bold text-white"
                >
                  Đăng Ký Xét Tuyển
                </Link>
              </nav>
            </details>
          </div>
        </div>
      </div>

    </header>
  );
}
