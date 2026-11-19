'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Counter({
  value,
  suffix = '',
  decimals = 0,
  className = '',
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) return;

    let frame = 0;
    let startTime: number | undefined;
    const duration = 1100;
    const animate = (time: number) => {
      if (startTime === undefined) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplayValue(value * (1 - (1 - progress) ** 3));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, prefersReducedMotion, value]);

  const formattedValue = new Intl.NumberFormat('vi-VN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(prefersReducedMotion ? value : displayValue);

  return (
    <span ref={ref} className={className} aria-label={`${formattedValue}${suffix}`}>
      {formattedValue}
      {suffix}
    </span>
  );
}
