'use client';

import { useSyncExternalStore } from 'react';

const query = '(hover: none), (pointer: coarse)';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};

  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getSnapshot() {
  return typeof window === 'undefined' || !window.matchMedia
    ? true
    : window.matchMedia(query).matches;
}

export function useIsTouch() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
