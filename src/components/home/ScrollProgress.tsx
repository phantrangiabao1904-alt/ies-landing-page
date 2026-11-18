'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress({ className = '' }: { className?: string }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const documentHeight = document.documentElement.scrollHeight;
        const scrollableHeight = documentHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
            : 0;

        progressRef.current?.style.setProperty('--scroll-progress', String(progress));
        frameId = 0;
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={`home-scroll-progress ${className}`.trim()} aria-hidden="true">
      <div ref={progressRef} className="home-scroll-progress__bar" />
    </div>
  );
}
