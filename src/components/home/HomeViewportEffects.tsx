'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function HomeViewportEffects({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const hero = root.querySelector<HTMLElement>('.home-hero-section');
    const leadSection = root.querySelector<HTMLElement>('#form-xet-tuyen');
    const stickyCta = root.querySelector<HTMLElement>('.mobile-sticky-cta');

    if (!hero || !leadSection || !stickyCta) {
      throw new Error('Homepage viewport targets are missing.');
    }

    hero.setAttribute('data-motion-in-view', 'false');
    leadSection.setAttribute('data-lead-form-in-view', 'false');
    stickyCta.dataset.compact = 'false';

    if (typeof IntersectionObserver === 'undefined') {
      hero.setAttribute('data-motion-in-view', 'true');
      leadSection.setAttribute('data-lead-form-in-view', 'true');
      stickyCta.dataset.compact = 'true';
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          hero.setAttribute('data-motion-in-view', String(entry.isIntersecting));
        }
      },
      { threshold: 0.05 },
    );
    const leadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const isInView = String(entry.isIntersecting);
        leadSection.setAttribute('data-lead-form-in-view', isInView);
        stickyCta.dataset.compact = isInView;
      },
      { threshold: 0.01, rootMargin: '120px 0px 120px 0px' },
    );

    heroObserver.observe(hero);
    leadObserver.observe(leadSection);

    return () => {
      heroObserver.disconnect();
      leadObserver.disconnect();
    };
  }, []);

  return <div ref={rootRef} className="contents">{children}</div>;
}
