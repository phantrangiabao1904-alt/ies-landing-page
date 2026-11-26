'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Icon from '@/components/ui/Icon';

const slides = [
  {
    src: '/images/home-dual-program-2026.webp',
    alt: 'Học song bằng văn hóa và nghề tại IES',
    fit: 'contain',
  },
  {
    src: '/images/admissions-student-guidance.jpg',
    alt: 'Tư vấn tuyển sinh IES cùng học sinh',
    fit: 'cover',
  },
  {
    src: '/images/school-outreach-event.jpg',
    alt: 'Học sinh tham dự hoạt động tư vấn tuyển sinh tại trường',
    fit: 'cover',
  },
] as const;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  const isPaused =
    isHovering || isFocused || isDragging || isManuallyPaused || prefersReducedMotion || !isInView;

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest('button')) return;

    pointerStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const startX = pointerStartX.current;
    pointerStartX.current = null;
    setIsDragging(false);

    if (startX === null) return;

    const distance = event.clientX - startX;
    if (Math.abs(distance) < 48) return;

    setActiveIndex((index) =>
      distance < 0
        ? (index + 1) % slides.length
        : (index - 1 + slides.length) % slides.length,
    );
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setIsFocused(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      setActiveIndex((index) => (index + 1) % slides.length);
    } else if (event.key === 'ArrowLeft') {
      setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
    }
  }

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Ảnh tuyển sinh IES"
      aria-roledescription="carousel"
      className="hero-carousel w-full"
      data-motion-paused={isPaused}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div
        className="hero-carousel__stage relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#e3efff] shadow-xl ring-1 ring-black/10 touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
          setIsDragging(false);
        }}
      >
        <div
          className={`flex h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none ${
            isVideoPlaying ? 'opacity-0' : ''
          }`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-hidden={index !== activeIndex}
              className="relative h-full w-full flex-none"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 497px, (min-width: 1024px) 42vw, 100vw"
                className={`hero-carousel-image ${
                  slide.fit === 'contain' ? 'object-contain p-2' : 'object-cover'
                } ${index === activeIndex ? 'is-active' : ''}`}
              />
            </div>
          ))}
        </div>

        {videoUrl && (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              poster={slides[0].src}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className={`hero-carousel__video ${isVideoPlaying ? 'is-playing' : ''}`}
              onError={() => {
                setHasVideoError(true);
                setIsVideoPlaying(false);
              }}
            />
            <button
              type="button"
              aria-pressed={isVideoPlaying}
              className="hero-carousel__video-control"
              onClick={async () => {
                const video = videoRef.current;
                if (!video) return;
                if (isVideoPlaying) {
                  video.pause();
                  setIsVideoPlaying(false);
                } else {
                  try {
                    await video.play();
                    setHasVideoError(false);
                    setIsVideoPlaying(true);
                  } catch {
                    setHasVideoError(true);
                  }
                }
              }}
            >
              <Icon name={isVideoPlaying ? 'pause' : 'play_arrow'} className="text-[18px]" />
              {isVideoPlaying ? 'Tạm dừng video' : 'Phát video'}
            </button>
            {hasVideoError && <p className="hero-carousel__video-error" role="status">Video chưa tải được. Vui lòng xem ảnh tuyển sinh.</p>}
          </>
        )}

        <button
          type="button"
          aria-pressed={isManuallyPaused}
          aria-label={isManuallyPaused ? 'Tiếp tục trình chiếu ảnh' : 'Tạm dừng trình chiếu ảnh'}
          className="hero-carousel__pause-control"
          onClick={() => setIsManuallyPaused((paused) => !paused)}
        >
          <Icon name={isManuallyPaused ? 'play_arrow' : 'pause'} className="text-[18px]" />
          {isManuallyPaused ? 'Phát ảnh' : 'Tạm dừng'}
        </button>

        <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-1">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Hiển thị hình ${index + 1}`}
              aria-pressed={activeIndex === index}
              className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`h-2.5 w-7 rounded-full transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
                  activeIndex === index
                    ? 'scale-x-100 bg-white opacity-100'
                    : 'scale-x-50 bg-white/70 opacity-80'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
