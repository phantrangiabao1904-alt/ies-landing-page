'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import IESLogo from '@/components/brand/IESLogo';
import { schoolContact } from '@/lib/school-info';

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Chọn lộ trình', href: '/chuong-trinh-hoc' },
  { label: 'Ngành đào tạo', href: '/nganh-dao-tao' },
  { label: 'Học phí & chính sách', href: '/tuyen-sinh' },
  { label: 'Đời sống & thực tập', href: '/gioi-thieu' },
  { label: 'Tin tức', href: '/tin-tuc' },
];

interface SiteHeaderProps {
  // Giữ tương thích với các trang đang truyền prop; giao diện mới không dùng hiệu ứng cuộn.
  enableScrollEffects?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SiteHeader(_props: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Trang chủ IES">
          <IESLogo variant="horizontal" className="h-9 w-auto" />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'bg-sky-50 text-[#0F5587]'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={schoolContact.phoneNumbers[0].href}
            className="hidden items-center gap-2 text-sm font-bold text-[#0F5587] xl:flex"
          >
            <Icon name="call" className="text-[18px]" />
            {schoolContact.phoneNumbers[0].number}
          </a>
          <Link
            href="/dang-ky"
            className="hidden min-h-11 items-center rounded-lg bg-[#A84300] px-4 text-sm font-bold text-white hover:bg-[#873400] sm:inline-flex"
          >
            Đăng ký tư vấn
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#0F5587] hover:bg-slate-100 lg:hidden"
            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? 'chevron_right' : 'menu'} className="text-[24px]" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu di động"
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-3 font-semibold ${
                    isActive(link.href) ? 'bg-sky-50 text-[#0F5587]' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2">
            <Link
              href="/dang-ky"
              onClick={() => setIsMenuOpen(false)}
              className="flex min-h-11 items-center justify-center rounded-lg bg-[#A84300] font-bold text-white"
            >
              Đăng ký tư vấn
            </Link>
            {schoolContact.phoneNumbers.map((phone) => (
              <a
                key={phone.number}
                href={phone.href}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#0F5587]/30 font-bold text-[#0F5587]"
              >
                <Icon name="call" className="text-[18px]" />
                Gọi {phone.number}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
