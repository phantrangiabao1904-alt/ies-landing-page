import 'server-only';

import { isIP } from 'node:net';

const publicPaths = new Set([
  '/',
  '/chuong-trinh-hoc',
  '/dang-ky',
  '/gioi-thieu',
  '/nganh-dao-tao',
  '/tuyen-sinh',
]);

export function getClientIp(requestHeaders: Headers): string | null {
  const candidates = [
    requestHeaders.get('x-real-ip'),
    requestHeaders.get('cf-connecting-ip'),
    requestHeaders.get('x-forwarded-for')?.split(',')[0],
  ];

  for (const candidate of candidates) {
    const ip = candidate?.trim();
    if (ip && isIP(ip)) {
      return ip;
    }
  }

  return null;
}

export function getPublicPagePath(requestHeaders: Headers): string {
  const referrer = requestHeaders.get('referer');
  if (!referrer) return '/';

  try {
    const path = new URL(referrer).pathname;
    return publicPaths.has(path) ? path : '/';
  } catch {
    return '/';
  }
}

export function getReferrerHost(referrer: string | null): string | null {
  if (!referrer) return null;

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    return hostname.length <= 255 ? hostname : null;
  } catch {
    return null;
  }
}
