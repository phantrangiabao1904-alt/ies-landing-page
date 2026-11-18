'use client';

import { useRef, useState, type AnchorHTMLAttributes, type PointerEvent } from 'react';
import { useIsTouch } from '@/hooks/useIsTouch';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MagneticCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function MagneticCta({
  children,
  className = '',
  href,
  onPointerDown,
  onPointerLeave,
  onPointerMove,
  style,
  ...props
}: MagneticCtaProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const nextRippleId = useRef(0);
  const [offset, setOffset] = useState<{ x: number; y: number } | null>(null);
  const [ripple, setRipple] = useState<Ripple | null>(null);
  const isTouch = useIsTouch();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMagneticEnabled = !isTouch && !prefersReducedMotion;

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    onPointerMove?.(event);
    if (!isMagneticEnabled || event.pointerType !== 'mouse') return;

    const bounds = linkRef.current?.getBoundingClientRect();
    if (!bounds) return;

    setOffset({
      x: (event.clientX - bounds.left - bounds.width / 2) * 0.12,
      y: (event.clientY - bounds.top - bounds.height / 2) * 0.12,
    });
  }

  function handlePointerLeave(event: PointerEvent<HTMLAnchorElement>) {
    onPointerLeave?.(event);
    setOffset(null);
  }

  function handlePointerDown(event: PointerEvent<HTMLAnchorElement>) {
    onPointerDown?.(event);
    if (prefersReducedMotion) return;

    const bounds = linkRef.current?.getBoundingClientRect();
    if (!bounds) return;

    nextRippleId.current += 1;
    setRipple({
      id: nextRippleId.current,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  }

  return (
    <a
      {...props}
      ref={linkRef}
      href={href}
      className={`magnetic-cta ${className}`.trim()}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        ...style,
        ...(offset
          ? { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }
          : {}),
      }}
    >
      <span className="relative z-10">{children}</span>
      {ripple && (
        <span
          key={ripple.id}
          aria-hidden="true"
          className="magnetic-cta__ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
    </a>
  );
}
