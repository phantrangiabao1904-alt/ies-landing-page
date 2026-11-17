'use client';

import { useEffect, useRef, useState } from 'react';

interface HomeStatsProps {
  decree81Url: string;
  decree24Url: string;
}

const metrics = [
  {
    value: (progress: number) => `MIỄN ${Math.round(100 * progress)}%`,
    label: 'HỌC PHÍ',
  },
  {
    value: (progress: number) => `${Math.round(0 * progress)} ĐỒNG`,
    label: 'Chi phí học nghề',
  },
  {
    value: (progress: number) => `${Math.round(70 * progress)}%`,
    label: 'Thực hành dự án',
  },
  {
    value: (progress: number) =>
      `${(1.5 * progress).toFixed(1)} - ${progress === 1 ? '2' : (2 * progress).toFixed(1)} Năm`,
    label: 'Nhận bằng chính quy',
  },
  {
    value: (progress: number) => `Hơn ${Math.round(50 * progress)}`,
    label: 'doanh nghiệp tham gia',
  },
] as const;

export default function HomeStats({ decree81Url, decree24Url }: HomeStatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    const section = sectionRef.current;

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    if (!section) {
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!hasEntered || prefersReducedMotion || progressRef.current >= 1) return;

    const startProgress = progressRef.current;
    const duration = 1200 * (1 - startProgress);
    let frameId = 0;
    let startTime: number | undefined;

    function animate(timestamp: number) {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = Math.min((timestamp - startTime) / duration, 1);
      const nextProgress = startProgress + elapsed * (1 - startProgress);
      progressRef.current = nextProgress;
      setProgress(nextProgress);
      if (nextProgress < 1) frameId = window.requestAnimationFrame(animate);
    }

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasEntered, prefersReducedMotion]);

  const displayedProgress = prefersReducedMotion ? 1 : progress;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-stats-title"
      className="w-full bg-white py-space-xl md:py-space-2xl"
    >
      <div className="mx-auto max-w-[1240px] px-margin-sm md:px-margin">
        <h2
          id="home-stats-title"
          className="mb-space-lg text-center font-headline-sm text-xl font-bold text-primary sm:text-2xl"
        >
          Chính sách hỗ trợ học phí nghề
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex min-h-32 flex-col items-center justify-center rounded-2xl border p-4 text-center ${
                index === 0
                  ? 'border-[#F58232]/40 bg-[#FFF6EF]'
                  : 'border-[#D9E2EA] bg-[#F5F8FA]'
              }`}
            >
              <span className="font-headline-lg text-xl font-black leading-tight text-primary sm:text-2xl">
                {metric.value(displayedProgress)}
                {index === 0 && <span className="ml-1">HỌC PHÍ</span>}
              </span>
              {index !== 0 && (
                <span className="mt-2 text-base font-semibold leading-snug text-on-surface-variant">
                  {metric.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-space-lg max-w-4xl text-center text-base leading-relaxed text-on-surface-variant">
          Chính sách hỗ trợ học phí nghề được áp dụng theo quy định hiện hành; quyền lợi cụ thể phụ thuộc điều kiện và hồ sơ xét duyệt.{' '}
          <a
            href={decree81Url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Tra cứu Nghị định 81/2021/NĐ-CP
          </a>
          {' · '}
          <a
            href={decree24Url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Mở Nghị định 24/2022/NĐ-CP (PDF)
          </a>
        </p>

        <p className="mt-space-md text-center text-base font-semibold text-primary">
          Không thi tuyển <span className="mx-1 text-outline-variant">•</span>
          Xét tuyển học bạ <span className="mx-1 text-outline-variant">•</span>
          Hỗ trợ hồ sơ 24/7
        </p>
      </div>
    </section>
  );
}
