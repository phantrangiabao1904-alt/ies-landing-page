'use client';

import { useEffect, useRef, useState, type TouchEvent } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/home/Reveal';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const slides = [
  {
    src: '/images/gioi-thieu/le-tot-nghiep-1.jpg',
    alt: 'Lễ tốt nghiệp tại Trường Trung cấp Tin học Kinh tế Sài Gòn',
  },
  {
    src: '/images/gioi-thieu/le-tot-nghiep-2.jpg',
    alt: 'Sinh viên tham dự lễ tốt nghiệp tại IES',
  },
  {
    src: '/images/gioi-thieu/le-tot-nghiep-3.jpg',
    alt: 'Khoảnh khắc trong lễ tốt nghiệp tại IES',
  },
] as const;

export default function StudentLifeCarousel() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const canAutoPlay = isInView && !prefersReducedMotion && !isHovered && !isFocused;

  useEffect(() => {
    if (!canAutoPlay) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [canAutoPlay]);

  const moveBy = (amount: number) => {
    setActiveIndex((index) => (index + amount + slides.length) % slides.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    pointerStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = pointerStartX.current;
    pointerStartX.current = null;
    if (startX === null) return;

    const currentX = event.changedTouches[0]?.clientX;
    if (currentX === undefined) return;

    const difference = currentX - startX;
    if (Math.abs(difference) < 40) return;
    moveBy(difference < 0 ? 1 : -1);
  };

  return (
    <section
      aria-labelledby="student-life-title"
      className="w-full overflow-hidden bg-surface-container-low py-space-2xl"
    >
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <Reveal variant="up" className="mb-space-xl text-center">
          <h2
            id="student-life-title"
            className="font-headline-lg text-headline-lg font-bold text-primary"
          >
            Lễ tốt nghiệp tại IES
          </h2>
        </Reveal>

        <div
          ref={ref}
          role="region"
          aria-label="Hoạt động học tập và sinh hoạt tại IES"
          aria-roledescription="carousel"
          className="student-life-carousel"
          data-autoplay={canAutoPlay}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            pointerStartX.current = null;
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsFocused(false);
            }
          }}
        >
          <div className="student-life-stage">
            {slides.map((slide, index) => {
              const distance = (index - activeIndex + slides.length) % slides.length;
              const position =
                distance === 0 ? 'active' : distance === 1 ? 'next' : 'previous';

              return (
                <article
                  key={slide.src}
                  aria-hidden={position !== 'active'}
                  aria-label={`${index + 1} / ${slides.length}`}
                  className={`student-life-card student-life-card--${position}`}
                  data-position={position}
                >
                  <div className="student-life-image">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 760px"
                      className="object-cover"
                    />
                    <p className="student-life-caption">{slide.alt}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-space-lg flex items-center justify-center gap-space-md">
            <button
              type="button"
              aria-label="Ảnh hoạt động trước"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => moveBy(-1)}
            >
              <Icon name="arrow_forward" className="rotate-180 text-[20px]" />
            </button>
            <div className="student-life-progress" aria-hidden="true">
              <span
                key={`${activeIndex}-${canAutoPlay}`}
                className="student-life-progress__fill"
                data-running={canAutoPlay}
              />
            </div>
            <button
              type="button"
              aria-label="Ảnh hoạt động tiếp theo"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => moveBy(1)}
            >
              <Icon name="arrow_forward" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
