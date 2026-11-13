import 'server-only';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServiceRoleClient } from '@/lib/supabase/server-client';

export type StaffRole = 'ADMIN' | 'BA';

function getSupabaseCredentials() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error('Supabase URL and anon key must be configured.');
  }

  return { url, anonKey };
}

export async function requireStaff(
  allowedRoles: StaffRole[],
): Promise<{ client: SupabaseClient; role: StaffRole }> {
  const cookieStore = await cookies();
  const accessToken =
    cookieStore.get('sb-access-token')?.value ||
    cookieStore.get('sb-auth-token')?.value;

  if (!accessToken) {
    redirect('/login');
  }

  const { url, anonKey } = getSupabaseCredentials();
  const authClient = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await authClient.auth.getUser(accessToken);
  const role = data.user?.app_metadata?.role;

  if (
    error ||
    (role !== 'ADMIN' && role !== 'BA') ||
    !allowedRoles.includes(role)
  ) {
    redirect('/login?error=unauthorized');
  }

  return {
    client: createServiceRoleClient(),
    role,
  };
}
