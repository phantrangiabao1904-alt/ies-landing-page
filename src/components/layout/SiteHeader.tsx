'use client';
import Icon from '@/components/ui/Icon';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Giới Thiệu', href: '/gioi-thieu' },
  { label: 'Chương Trình Học', href: '/chuong-trinh-hoc' },
  { label: 'Ngành Đào Tạo', href: '/nganh-dao-tao' },
  { label: 'Tuyển Sinh', href: '/tuyen-sinh' },
  { label: 'Đăng Ký', href: '/dang-ky' },
];

interface SiteHeaderProps {
  enableScrollEffects?: boolean;
}

export default function SiteHeader({ enableScrollEffects = true }: SiteHeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isActiveLink = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!enableScrollEffects || prefersReducedMotion) return;

    let lastScrollY = window.scrollY;
    let frameId = 0;
    let showOnStart = true;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const hasFocusInsideHeader =
          headerRef.current?.contains(document.activeElement) ?? false;

        setIsCompact(currentScrollY > 24);
        if (showOnStart || currentScrollY <= 24) {
          setIsHidden(false);
        } else if (currentScrollY - lastScrollY > 4 && !hasFocusInsideHeader) {
          setIsHidden(true);
        } else if (lastScrollY - currentScrollY > 4) {
          setIsHidden(false);
        }

        lastScrollY = currentScrollY;
        showOnStart = false;
        frameId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [enableScrollEffects, prefersReducedMotion]);

  const shouldHide = enableScrollEffects && !prefersReducedMotion && isHidden;
  const shouldCompact = enableScrollEffects && !prefersReducedMotion && isCompact;

  return (
    <header
      ref={headerRef}
      aria-hidden={shouldHide || undefined}
      inert={shouldHide || undefined}
      className={`site-header-motion vibe-site-header fixed top-0 z-50 w-full shadow-[0_4px_18px_rgba(0,29,52,0.08)] ${
        shouldCompact ? 'is-compact' : ''
      } ${shouldHide ? 'is-hidden' : ''}`}
    >
      {/* Announcement Bar */}
      <div className="vibe-announcement-bar bg-[#0F5587] text-white py-1.5 px-4 md:px-8 text-center overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex items-center justify-center gap-2 font-['Montserrat',sans-serif] text-[9px] leading-4 font-semibold tracking-[0.04em] sm:text-[11px] sm:leading-5">
          <Icon name="campaign" className="text-[16px] text-[#acedff]" />
          <span className="sm:hidden">
            TUYỂN SINH 2026 • TƯ VẤN HỌC PHÍ NGHỀ
          </span>
          <span className="hidden sm:inline">
            TUYỂN SINH 2026: TƯ VẤN CHÍNH SÁCH HỖ TRỢ HỌC PHÍ NGHỀ THEO QUY ĐỊNH HIỆN HÀNH
          </span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="vibe-nav-shell h-16 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1240px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <IESLogo variant="horizontal" className="h-10 w-[140px] max-w-[140px] sm:w-[160px] sm:max-w-[160px] md:w-[180px] md:max-w-[180px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors font-['Montserrat',sans-serif] text-[11px] ${
                  isActiveLink(link.href)
                    ? 'bg-[#e3efff] text-[#0F5587] font-bold ring-1 ring-[#0F5587]/15'
                    : 'text-[#5D6B78] hover:text-[#263849] hover:bg-[#e3efff]/50 font-semibold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="ml-auto flex flex-shrink-0 items-center gap-2">
            <div className="hidden lg:flex flex-col items-end text-right">
              <span className="font-['Montserrat',sans-serif] text-[9px] text-[#5D6B78] uppercase tracking-wider font-semibold">
                Hotline Tuyển Sinh
              </span>
              <div className="flex flex-col items-end font-['Montserrat',sans-serif] text-[10px] leading-[1.2] text-[#0F5587] font-bold">
                {schoolContact.phoneNumbers.map((phone) => (
                  <a key={phone.number} href={phone.href} className="hover:underline">
                    {phone.number}
                  </a>
                ))}
              </div>
            </div>
            <Link
              href="/dang-ky"
              className="vibe-header-cta min-h-[44px] whitespace-nowrap bg-[#A84300] hover:bg-[#873400] text-white px-3 py-1.5 rounded-lg font-['Montserrat',sans-serif] text-[11px] font-bold tracking-[0.02em] shadow-sm hover:shadow-md transition-all flex items-center gap-1"
            >
              <Icon name="how_to_reg" className="text-[14px]" />
              <span>Đăng Ký</span>
            </Link>

            <details className="vibe-mobile-menu relative lg:hidden">
              <summary
                className="flex h-11 w-11 list-none cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[#F5F8FA] [&::-webkit-details-marker]:hidden"
                aria-label="Mở menu điều hướng"
              >
                <Icon name="menu" className="text-[24px] text-[#0F5587]" />
              </summary>
              <nav className="absolute right-0 top-[calc(100%+10px)] flex w-[calc(100vw-2rem)] max-w-[22rem] flex-col gap-1 border-t border-[#D9E2EA] bg-white px-4 py-4 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                    aria-current={isActiveLink(link.href) ? 'page' : undefined}
                    className={`min-h-[44px] rounded-lg px-4 py-3 font-['Montserrat',sans-serif] text-[16px] transition-colors ${
                      isActiveLink(link.href)
                        ? 'bg-[#e3efff] font-bold text-[#0F5587]'
                        : 'font-semibold text-[#263849] hover:bg-[#F5F8FA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/tuyen-sinh#form-xet-tuyen"
                  onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                  className="mt-2 min-h-[44px] rounded-lg bg-[#A84300] px-4 py-3 text-center font-['Montserrat',sans-serif] text-[14px] font-bold text-white"
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
