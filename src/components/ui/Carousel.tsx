'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Icon from '@/components/ui/Icon';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Carousel({
  slides,
  label,
  autoPlay = false,
  intervalMs = 6000,
}: {
  slides: ReactNode[];
  label: string;
  autoPlay?: boolean;
  intervalMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const canAdvance = autoPlay && !isPaused && !isFocused && !prefersReducedMotion;

  useEffect(() => {
    if (!canAdvance || slides.length < 2) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % slides.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [canAdvance, intervalMs, slides.length]);

  if (slides.length === 0) return null;

  const moveBy = (step: number) => {
    setActiveIndex((index) => (index + step + slides.length) % slides.length);
  };

  return (
    <section
      className="experience-carousel"
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
      }}
    >
      <div className="experience-carousel__stage" aria-live={canAdvance ? 'off' : 'polite'}>
        {slides.map((slide, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${slides.length}`}
            hidden={index !== activeIndex}
            className="experience-carousel__slide"
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="experience-carousel__controls">
        {autoPlay && (
          <button
            type="button"
            className="experience-carousel__control"
            aria-label={isPaused ? 'Phát tự động' : 'Tạm dừng'}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            <Icon name={isPaused ? 'play_arrow' : 'pause'} className="text-[20px]" />
            {isPaused ? 'Phát' : 'Tạm dừng'}
          </button>
        )}
        <button
          type="button"
          className="experience-carousel__control"
          aria-label="Thẻ trước"
          onClick={() => moveBy(-1)}
        >
          <Icon name="arrow_back" className="text-[20px]" />
        </button>
        <span aria-live="polite" className="experience-carousel__count">
          {activeIndex + 1} / {slides.length}
        </span>
        <button
          type="button"
          className="experience-carousel__control"
          aria-label="Thẻ tiếp theo"
          onClick={() => moveBy(1)}
        >
          <Icon name="arrow_forward" className="text-[20px]" />
        </button>
      </div>
    </section>
  );
}
