'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 560);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="vibe-back-to-top"
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
    >
      <Icon name="arrow_upward" className="text-[20px]" />
    </button>
  );
}
