'use client';

import { useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import { useIsTouch } from '@/hooks/useIsTouch';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function HeroAtmosphere() {
  const { ref: rootRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const isTouch = useIsTouch();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isPointerParallaxEnabled = !isTouch && !prefersReducedMotion && isInView;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !isPointerParallaxEnabled) return;

    const layers = Array.from(
      root.querySelectorAll<HTMLElement>('[data-parallax-depth]'),
    );
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resetLayers = () => {
      for (const layer of layers) {
        layer.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      const bounds = root.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        pointerX = 0;
        pointerY = 0;
      } else {
        pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      }

      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        for (const layer of layers) {
          const depth = Number(layer.dataset.parallaxDepth ?? 0);
          layer.style.transform = `translate3d(${pointerX * depth}px, ${pointerY * depth}px, 0)`;
        }
        frameId = 0;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId) window.cancelAnimationFrame(frameId);
      resetLayers();
    };
  }, [isPointerParallaxEnabled, rootRef]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="home-hero-atmosphere"
      data-motion-in-view={isInView}
      data-touch={isTouch}
    >
      <div className="home-hero-mesh" />
      <div className="home-hero-grid" />
      <div className="home-hero-orb home-hero-orb--blue" data-parallax-depth="16">
        <div className="home-hero-orb__float" />
      </div>
      <div className="home-hero-orb home-hero-orb--violet" data-parallax-depth="-12">
        <div className="home-hero-orb__float" />
      </div>
      <div className="home-hero-orb home-hero-orb--amber" data-parallax-depth="9">
        <div className="home-hero-orb__float" />
      </div>
    </div>
  );
}
