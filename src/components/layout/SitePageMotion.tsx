'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import ScrollProgress from '@/components/home/ScrollProgress';
import BackToTopButton from '@/components/layout/BackToTopButton';
import MobileContactBar from '@/components/layout/MobileContactBar';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const MOTION_TARGET_SELECTOR = '.site-page main section, .site-page main .site-card, .site-page main h1';

export default function SitePageMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const isNonHomeSitePage = Boolean(root.querySelector('.site-page:not(.home-page)'));
    setHasProgress(isNonHomeSitePage);
    if (!isNonHomeSitePage || prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    let observer: IntersectionObserver | null = null;

    // Gắn thuộc tính animation sau khi React hydrate xong, tránh lệch hydration.
    const timeoutId = window.setTimeout(() => {
      const targets = root.querySelectorAll<HTMLElement>(MOTION_TARGET_SELECTOR);
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute('data-page-motion-visible', 'true');
            io.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -32px 0px', threshold: 0 },
      );
      observer = io;

      targets.forEach((target) => {
        const siblings = target.parentElement ? Array.from(target.parentElement.children) : [];
        const staggerIndex = siblings.indexOf(target);
        const isCard = target.classList.contains('site-card');
        const delay = isCard
          ? Math.min(Math.max(staggerIndex, 0), 5) * 70
          : target.matches('h1')
            ? 90
            : 0;

        target.setAttribute('data-page-motion-ready', 'true');
        target.setAttribute('data-page-motion-visible', 'false');
        target.style.setProperty('--page-motion-delay', `${delay}ms`);
        io.observe(target);
      });
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={rootRef}>
      {hasProgress && <ScrollProgress className="site-scroll-progress" />}
      {children}
      {hasProgress && <MobileContactBar />}
      <BackToTopButton />
    </div>
  );
}
