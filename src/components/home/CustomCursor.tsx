'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';
import { useIsTouch } from '@/hooks/useIsTouch';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isAvailable = !isTouch && !prefersReducedMotion;

  useEffect(() => {
    const root = document.documentElement;
    const cursor = cursorRef.current;
    if (!isEnabled || !isAvailable || !cursor) return;

    root.dataset.customCursor = 'true';
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let isOverInteractive = false;
    let isOverInput = false;

    const applyCursor = () => {
      frameId = 0;
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%) scale(${isOverInteractive ? 1.55 : 1})`;
      cursor.dataset.input = String(isOverInput);
    };

    const scheduleCursor = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(applyCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      pointerX = event.clientX;
      pointerY = event.clientY;

      const target = event.target instanceof Element ? event.target : null;
      isOverInput = Boolean(
        target?.closest('input, textarea, select, [contenteditable="true"]'),
      );
      isOverInteractive = Boolean(
        !isOverInput && target?.closest('a, button, [role="button"], summary'),
      );
      scheduleCursor();
    };

    const handlePointerLeave = () => {
      cursor.dataset.input = 'true';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
      delete root.dataset.customCursor;
      cursor.removeAttribute('style');
      delete cursor.dataset.input;
    };
  }, [isAvailable, isEnabled]);

  if (isTouch) return null;

  return (
    <>
      <button
        type="button"
        aria-pressed={isEnabled && isAvailable}
        disabled={!isAvailable}
        className="custom-cursor-toggle"
        onClick={() => setIsEnabled((enabled) => !enabled)}
        title={
          prefersReducedMotion
            ? 'Con trỏ tùy chỉnh tắt khi bật giảm chuyển động'
            : 'Bật hoặc tắt con trỏ tùy chỉnh'
        }
      >
        <Icon name="tune" className="text-[18px]" />
        <span>Con trỏ {isEnabled && isAvailable ? 'tùy chỉnh' : 'mặc định'}</span>
      </button>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span />
      </div>
    </>
  );
}
