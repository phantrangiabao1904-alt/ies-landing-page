'use server';

import { headers } from 'next/headers';
import { z } from 'zod';
import { getClientIp } from '@/lib/server/request-context';
import { consumeRateLimit } from '@/lib/server/rate-limit';
import { createServiceRoleClient } from '@/lib/supabase/server-client';

const AnalyticsEventSchema = z.object({
  eventType: z.enum(['page_view', 'form_click']),
  pagePath: z.enum([
    '/',
    '/chuong-trinh-hoc',
    '/dang-ky',
    '/gioi-thieu',
    '/nganh-dao-tao',
    '/tuyen-sinh',
  ]),
  referrerHost: z
    .string()
    .max(255)
    .regex(/^[A-Za-z0-9.:[\]-]+$/)
    .nullable(),
  source: z
    .string()
    .max(60)
    .regex(/^[A-Za-z0-9_-]+$/)
    .nullable(),
});

let missingConfigurationLogged = false;

export async function trackPublicAnalyticsEvent(input: unknown): Promise<boolean> {
  const parsed = AnalyticsEventSchema.safeParse(input);
  if (!parsed.success) return false;

  if (
    !(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    if (!missingConfigurationLogged) {
      console.warn('Public analytics tracking is disabled until Supabase server credentials are configured.');
      missingConfigurationLogged = true;
    }
    return false;
  }

  try {
    const requestHeaders = await headers();
    const client = createServiceRoleClient();
    const ip = getClientIp(requestHeaders);
    const userAgent = requestHeaders.get('user-agent')?.slice(0, 180) || 'unknown';
    const identifier = ip
      ? `analytics-ip:${ip}`
      : `analytics-agent:${userAgent}`;

    if (!(await consumeRateLimit(client, identifier, 240, 60 * 60))) {
      return false;
    }

    const event = parsed.data;
    const { error } = await client.from('analytics_events').insert({
      event_type: event.eventType,
      page_path: event.pagePath,
      referrer_host: event.referrerHost,
      source: event.source || event.referrerHost || 'direct',
    });

    if (error) {
      console.error('Public analytics event insert failed:', error.message);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Public analytics event could not be recorded:', error);
    return false;
  }
}
