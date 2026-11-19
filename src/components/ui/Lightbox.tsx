'use client';

import { useEffect, useRef, useState, type TouchEvent } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export interface LightboxImage {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export default function Lightbox({
  images,
  label,
}: {
  images: LightboxImage[];
  label: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex !== null && !dialog.open) dialog.showModal();
    else if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  const moveBy = (amount: number) => {
    setActiveIndex((index) => index === null ? null : (index + amount + images.length) % images.length);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    const end = event.changedTouches[0]?.clientX;
    if (start === null || end === undefined || Math.abs(end - start) < 40) return;
    moveBy(end < start ? 1 : -1);
  };

  return (
    <>
      <div className="home-gallery-grid">
        {images.map((image, index) => (
          <div key={image.src} className="home-gallery-cell">
            <button
              type="button"
              aria-label={`Mở ảnh: ${image.alt}`}
              className="home-gallery-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{ aspectRatio: image.aspectRatio ?? '4 / 3' }}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
              <span aria-hidden="true" className="home-gallery-item__overlay" />
            </button>
          </div>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-label={label}
        className="home-gallery-dialog"
        onCancel={() => setActiveIndex(null)}
        onClose={() => {
          setActiveIndex(null);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
      >
        {activeImage && activeIndex !== null && (
          <div className="home-gallery-dialog__content">
            <div className="mb-space-sm flex items-center justify-between gap-space-sm">
              <h3 className="text-base font-bold text-white">{activeImage.alt}</h3>
              <button
                type="button"
                aria-label="Đóng ảnh"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => setActiveIndex(null)}
              >
                ×
              </button>
            </div>
            <div
              className="home-gallery-dialog__image"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={onTouchEnd}
            >
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-contain" />
            </div>
            <div className="mt-space-sm flex items-center justify-between gap-space-sm">
              <button type="button" aria-label="Ảnh trước" className="home-gallery-dialog__control" onClick={() => moveBy(-1)}>
                <Icon name="arrow_back" className="mr-1 text-[18px]" /> Ảnh trước
              </button>
              <span className="text-sm text-white/80">{activeIndex + 1} / {images.length}</span>
              <button type="button" aria-label="Ảnh tiếp theo" className="home-gallery-dialog__control" onClick={() => moveBy(1)}>
                Ảnh tiếp theo <Icon name="arrow_forward" className="ml-1 text-[18px]" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
