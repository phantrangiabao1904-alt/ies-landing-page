'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { DEFAULT_CMS_CONTENT, CMS_CONTENT_IDS } from '@/lib/cms/content';
import type { CmsContentItem } from '@/lib/cms/content';
import { createAnonServerClient } from '@/lib/supabase/server-client';
import { requireStaff } from '@/lib/supabase/staff';

const ContentItemSchema = z.object({
  id: z.enum(CMS_CONTENT_IDS),
  kind: z.enum(['banner', 'course']),
  title: z.string().trim().min(2).max(120),
  body: z.string().trim().min(2).max(300),
  sort_order: z.number().int().min(0),
  is_active: z.boolean(),
});

const ContentUpdateSchema = z.array(ContentItemSchema).length(CMS_CONTENT_IDS.length);

let missingConfigurationLogged = false;

export async function getHomepageCmsContent(): Promise<CmsContentItem[]> {
  if (
    !(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) ||
    !process.env.SUPABASE_ANON_KEY
  ) {
    if (!missingConfigurationLogged) {
      console.warn('Homepage CMS is using built-in content until Supabase credentials are configured.');
      missingConfigurationLogged = true;
    }
    return DEFAULT_CMS_CONTENT.filter((item) => item.is_active);
  }

  try {
    const client = createAnonServerClient();
    const { data, error } = await client
      .from('site_content')
      .select('id, kind, title, body, sort_order, is_active')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    const parsed = z.array(ContentItemSchema).safeParse(data);
    if (!parsed.success) {
      throw new Error('Supabase returned invalid public CMS content.');
    }

    return parsed.data;
  } catch (error) {
    console.error('Homepage CMS content could not be loaded; using built-in content.', error);
    return DEFAULT_CMS_CONTENT.filter((item) => item.is_active);
  }
}

export async function saveHomepageCmsContent(
  items: unknown,
): Promise<{ success: boolean; message: string }> {
  const parsed = ContentUpdateSchema.safeParse(items);
  if (!parsed.success) {
    return { success: false, message: 'Nội dung gửi lên không hợp lệ.' };
  }

  const ids = new Set(parsed.data.map((item) => item.id));
  if (ids.size !== CMS_CONTENT_IDS.length) {
    return { success: false, message: 'Danh sách nội dung bị thiếu hoặc trùng mục.' };
  }

  const { client } = await requireStaff(['ADMIN']);
  const { error } = await client.rpc('save_site_content', {
    p_items: parsed.data,
  });

  if (error) {
    console.error('CMS content update failed:', error.message);
    return { success: false, message: 'Không thể lưu nội dung. Vui lòng thử lại.' };
  }

  revalidatePath('/');
  revalidatePath('/admin/content');
  return { success: true, message: 'Đã lưu và cập nhật nội dung Landing Page.' };
}
