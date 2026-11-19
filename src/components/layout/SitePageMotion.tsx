'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import ScrollProgress from '@/components/home/ScrollProgress';
import BackToTopButton from '@/components/layout/BackToTopButton';
import MobileContactBar from '@/components/layout/MobileContactBar';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

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

    const targets = root.querySelectorAll<HTMLElement>(
      '.site-page main section, .site-page main .site-card, .site-page main h1',
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-page-motion-visible', 'true');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -32px 0px', threshold: 0 },
    );

    targets.forEach((target) => {
      const siblings = target.parentElement?.children
        ? Array.from(target.parentElement.children)
        : [];
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
      observer.observe(target);
    });

    return () => observer.disconnect();
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
