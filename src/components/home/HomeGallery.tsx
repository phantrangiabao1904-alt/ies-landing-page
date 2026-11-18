'use client';

import { useEffect, useRef, useState, type TouchEvent } from 'react';
import Image from 'next/image';
import Reveal from '@/components/home/Reveal';

const photos = [
  {
    src: '/images/ies-classroom-activities.png',
    alt: 'Học sinh tham gia hoạt động học tập trong lớp',
    aspectRatio: '4 / 3',
  },
  {
    src: '/images/ies-computer-practice.png',
    alt: 'Học sinh thực hành trên máy tính tại lớp',
    aspectRatio: '3 / 4',
  },
  {
    src: '/images/ies-classroom.jpg',
    alt: 'Không gian lớp học của Trường Trung cấp Tin học Kinh tế Sài Gòn',
    aspectRatio: '4 / 3',
  },
  {
    src: '/images/admissions-event-booth.jpg',
    alt: 'Khu vực tư vấn tuyển sinh của Trường Trung cấp Tin học Kinh tế Sài Gòn',
    aspectRatio: '3 / 4',
  },
  {
    src: '/images/school-outreach-event.jpg',
    alt: 'Hoạt động tư vấn tuyển sinh tại trường',
    aspectRatio: '4 / 3',
  },
] as const;

export default function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (activeIndex === null && dialog.open) {
      dialog.close();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index === null ? null : (index + 1) % photos.length));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + photos.length) % photos.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const moveBy = (amount: number) => {
    setActiveIndex((index) =>
      index === null ? null : (index + amount + photos.length) % photos.length,
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;

    const currentX = event.changedTouches[0]?.clientX;
    if (currentX === undefined) return;

    const difference = currentX - startX;
    if (Math.abs(difference) > 40) moveBy(difference < 0 ? 1 : -1);
  };

  return (
    <section
      aria-labelledby="home-gallery-title"
      className="w-full bg-white py-space-2xl"
    >
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <Reveal variant="up" className="mb-space-xl text-center">
          <h2
            id="home-gallery-title"
            className="font-headline-lg text-headline-lg font-bold text-primary"
          >
            Không gian học tập và hoạt động
          </h2>
        </Reveal>

        <div className="home-gallery-grid">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              variant="scale"
              delayMs={index * 80}
              className="home-gallery-cell"
            >
              <button
                type="button"
                aria-label={`Mở ảnh: ${photo.alt}`}
                className="home-gallery-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{ aspectRatio: photo.aspectRatio }}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                <span aria-hidden="true" className="home-gallery-item__overlay" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="home-gallery-dialog-title"
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
        {activePhoto && (
          <div className="home-gallery-dialog__content">
            <div className="mb-space-sm flex items-center justify-between gap-space-sm">
              <h3 id="home-gallery-dialog-title" className="text-base font-bold text-white">
                {activePhoto.alt}
              </h3>
              <button
                type="button"
                aria-label="Đóng ảnh"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => setActiveIndex(null)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div
              className="home-gallery-dialog__image"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>

            <div className="mt-space-sm flex items-center justify-between gap-space-sm">
              <button
                type="button"
                aria-label="Ảnh trước"
                className="inline-flex min-h-11 items-center rounded-lg border border-white/30 px-4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => moveBy(-1)}
              >
                Ảnh trước
              </button>
              <span className="text-sm text-white/80">
                {(activeIndex ?? 0) + 1} / {photos.length}
              </span>
              <button
                type="button"
                aria-label="Ảnh tiếp theo"
                className="inline-flex min-h-11 items-center rounded-lg border border-white/30 px-4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => moveBy(1)}
              >
                Ảnh tiếp theo
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
