'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    src: '/images/gioi-thieu/le-tot-nghiep-1.jpg',
    alt: 'Lễ tốt nghiệp - Thầy cô và học sinh nhận bằng tốt nghiệp tại IES Saigon',
    caption: 'Lễ tốt nghiệp trang trọng tại Trường Trung cấp Tin học Kinh tế Sài Gòn (IES)',
  },
  {
    id: 2,
    src: '/images/gioi-thieu/le-tot-nghiep-2.jpg',
    alt: 'Khoảnh khắc rạng rỡ của tân khoa IES trong ngày nhận bằng tốt nghiệp',
    caption: 'Học sinh IES rạng rỡ nhận bằng tốt nghiệp chính quy ở tuổi 18',
  },
  {
    id: 3,
    src: '/images/gioi-thieu/le-tot-nghiep-3.jpg',
    alt: 'Tân khoa IES chào đón tương lai nghề nghiệp vững vàng',
    caption: 'Kiến tạo nghề nghiệp - Tự tin vững bước tương lai cùng IES Saigon',
  },
];

export default function AboutHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 select-none group"
      aria-label="Hình ảnh hoạt động và lễ tốt nghiệp IES"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container with responsive aspect ratio */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] max-h-[540px]">
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="relative h-full w-full flex-shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Subtle gradient overlay at bottom for caption contrast */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              {slide.caption && (
                <div className="absolute inset-x-0 bottom-3 md:bottom-5 px-4 md:px-8 text-center pointer-events-none">
                  <p className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/95 text-xs sm:text-sm font-medium">
                    {slide.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Ảnh kế tiếp"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full h-2 ${
                current === index
                  ? 'w-7 bg-[#F58232]'
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Chuyển đến ảnh ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
