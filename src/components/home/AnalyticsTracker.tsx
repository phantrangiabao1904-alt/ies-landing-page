'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPublicAnalyticsEvent } from '@/actions/public-analytics';

const PUBLIC_PATHS = new Set([
  '/',
  '/chuong-trinh-hoc',
  '/dang-ky',
  '/gioi-thieu',
  '/nganh-dao-tao',
  '/tuyen-sinh',
]);

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!PUBLIC_PATHS.has(pathname)) return;

    let referrerHost: string | null = null;
    if (document.referrer) {
      try {
        referrerHost = new URL(document.referrer).hostname;
        if (referrerHost === window.location.hostname) {
          referrerHost = null;
        }
      } catch {
        referrerHost = null;
      }
    }

    const rawSource = new URLSearchParams(window.location.search).get('utm_source');
    const source = rawSource
      ?.toLowerCase()
      .replace(/[^a-z0-9_-]/g, '')
      .slice(0, 60) || null;
    void trackPublicAnalyticsEvent({
      eventType: 'page_view',
      pagePath: pathname,
      referrerHost,
      source,
    }).catch((error: unknown) => {
      console.error('Unable to record page view analytics:', error);
    });
  }, [pathname]);

  useEffect(() => {
    if (!PUBLIC_PATHS.has(pathname)) return;

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const submit = event.target.closest<HTMLButtonElement>('button[type="submit"]');
      const clickedForm = submit?.form;
      const targetIsForm = link?.hash
        ? document.getElementById(link.hash.slice(1))?.tagName === 'FORM'
        : false;

      if (!clickedForm && !targetIsForm) return;

      void trackPublicAnalyticsEvent({
        eventType: 'form_click',
        pagePath: pathname,
        referrerHost: null,
        source: null,
      }).catch((error: unknown) => {
        console.error('Unable to record form interaction analytics:', error);
      });
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
}
