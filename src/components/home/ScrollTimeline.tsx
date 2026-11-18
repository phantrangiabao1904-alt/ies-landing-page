'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollTimelineProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollTimeline({ children, className = '' }: ScrollTimelineProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.01 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timeline = ref.current;
    if (!timeline) return;

    const steps = Array.from(
      timeline.querySelectorAll<HTMLElement>('[data-timeline-step]'),
    );

    if (prefersReducedMotion) {
      timeline.style.setProperty('--timeline-progress', '1');
      steps.forEach((step) => {
        step.dataset.timelineActive = 'true';
      });
      return;
    }

    if (!isInView || steps.length === 0) return;

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const horizontal = window.matchMedia('(min-width: 1024px)').matches;
      const firstRect = steps[0].getBoundingClientRect();
      const lastRect = steps[steps.length - 1].getBoundingClientRect();
      const start = horizontal
        ? firstRect.left + firstRect.width / 2
        : firstRect.top + firstRect.height / 2;
      const end = horizontal
        ? lastRect.left + lastRect.width / 2
        : lastRect.top + lastRect.height / 2;
      const viewportLine = horizontal ? window.innerWidth * 0.72 : window.innerHeight * 0.72;
      const progress = Math.max(0, Math.min(1, (viewportLine - start) / (end - start || 1)));

      timeline.style.setProperty('--timeline-progress', String(progress));

      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const stepPosition = horizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
        step.dataset.timelineActive = String(stepPosition <= viewportLine);
      });
    };

    const scheduleUpdate = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(updateProgress);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, [isInView, prefersReducedMotion, ref]);

  return (
    <div ref={ref} className={`scroll-timeline ${className}`.trim()}>
      {children}
    </div>
  );
}
