'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Reveal from '@/components/home/Reveal';

interface HomeStatsProps {
  decree81Url: string;
  decree24Url: string;
}

const metrics = [
  {
    value: (progress: number) => `MIỄN ${Math.round(100 * progress)}% HỌC PHÍ`,
    label: 'Chi phí học nghề',
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
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.25 });
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView || prefersReducedMotion || progressRef.current >= 1) return;

    const startProgress = progressRef.current;
    const duration = 1200 * (1 - startProgress);
    let frameId = 0;
    let startTime: number | undefined;

    function animate(timestamp: number) {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - elapsed) ** 3;
      const nextProgress = startProgress + easedProgress * (1 - startProgress);
      progressRef.current = nextProgress;
      setProgress(nextProgress);
      if (nextProgress < 1) frameId = window.requestAnimationFrame(animate);
    }

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion]);

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
            <Reveal key={metric.label} delayMs={index * 80} className="h-full">
              <div
                className={`flex min-h-32 flex-col items-center justify-center rounded-2xl border p-4 text-center ${
                  index === 0
                    ? 'border-[#F58232]/40 bg-[#FFF6EF]'
                    : 'border-[#D9E2EA] bg-[#F5F8FA]'
                }`}
              >
                <span className="font-headline-lg text-xl font-black leading-tight text-primary sm:text-2xl">
                  {metric.value(displayedProgress)}
                </span>
                {index !== 0 && (
                  <span className="mt-2 text-base font-semibold leading-snug text-on-surface-variant">
                    {metric.label}
                  </span>
                )}
                <span aria-hidden="true" className="home-stat-progress mt-3">
                  <span
                    className="home-stat-progress__fill"
                    style={{ transform: `scaleX(${displayedProgress})` }}
                  />
                </span>
              </div>
            </Reveal>
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
