import 'server-only';

import { createHmac } from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function consumeRateLimit(
  client: SupabaseClient,
  identifier: string,
  maxRequests: number,
  windowSeconds: number,
): Promise<boolean> {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for rate limiting.');
  }

  const keyHash = createHmac('sha256', secret).update(identifier).digest('hex');
  const { data, error } = await client.rpc('consume_request_rate_limit', {
    p_key_hash: keyHash,
    p_max_requests: maxRequests,
    p_window_seconds: windowSeconds,
  });

  if (error) {
    throw new Error(`Rate limit check failed: ${error.message}`);
  }
  if (typeof data !== 'boolean') {
    throw new Error('Rate limit RPC returned an invalid response.');
  }

  return data;
}
