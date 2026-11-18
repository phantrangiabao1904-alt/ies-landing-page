'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseInViewOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useInView<T extends Element = HTMLElement>({
  once = false,
  rootMargin = '0px',
  threshold = 0.15,
}: UseInViewOptions = {}): {
  ref: RefObject<T | null>;
  isInView: boolean;
  hasObserved: boolean;
} {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasObserved, setHasObserved] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        setHasObserved(true);
        setIsInView(visible);

        if (once && visible) observer.disconnect();
      },
      { rootMargin, threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isInView, hasObserved };
}
