'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export type RevealVariant = 'fade' | 'up' | 'left' | 'scale' | 'blur';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
  variant?: RevealVariant;
}

export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  once = true,
  variant = 'up',
}: RevealProps) {
  const { ref, isInView, hasObserved } = useInView<HTMLDivElement>({ once });
  const prefersReducedMotion = usePrefersReducedMotion();
  const isVisible = prefersReducedMotion || isInView;

  return (
    <div
      ref={ref}
      className={`motion-reveal ${className}`.trim()}
      data-motion-ready={hasObserved}
      data-motion-visible={isVisible}
      data-motion-variant={variant}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
