'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ies-home-promo-dismissed';

export default function HomePromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      // Trình duyệt chặn sessionStorage: vẫn hiển thị popup.
    }
    setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Bỏ qua nếu không ghi được storage.
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Thông báo học phí miễn 100%"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Đóng thông báo"
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-slate-700 shadow hover:bg-white"
        >
          ×
        </button>
        <a href="/dang-ky" onClick={close} className="block">
          <Image
            src="/images/home-promo-banner.jpg"
            alt="Học phí miễn 100% theo Nghị định 81/2021 cho học sinh tốt nghiệp THCS (lớp 9)"
            width={764}
            height={1024}
            priority
            className="h-auto w-full"
          />
        </a>
      </div>
    </div>
  );
}
