'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { SITE_MEDIA_SLOTS, SITE_MEDIA_SLOT_IDS, type SiteMediaSlot } from '@/lib/media/slots';
import { createAnonServerClient } from '@/lib/supabase/server-client';
import { requireStaff } from '@/lib/supabase/staff';

const BUCKET = 'site-media';
const MAX_BYTES = 5 * 1024 * 1024;
const MIME_EXTENSION: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const SlotSchema = z.enum(SITE_MEDIA_SLOT_IDS);

export type SiteMediaResult = { success: boolean; message: string };

// Trả về URL ảnh đã tùy chỉnh theo slot. Slot chưa có thì không có key (dùng ảnh mặc định).
export async function getSiteMediaUrls(): Promise<Partial<Record<SiteMediaSlot, string>>> {
  try {
    const client = createAnonServerClient();
    const { data, error } = await client.from('site_media').select('slot, url');
    if (error) {
      throw new Error(error.message);
    }
    return Object.fromEntries((data ?? []).map((row) => [row.slot, row.url]));
  } catch (error) {
    console.error('Site media could not be loaded; using default images.', error);
    return {};
  }
}

export async function uploadSiteMedia(formData: FormData): Promise<SiteMediaResult> {
  const { client } = await requireStaff(['ADMIN']);

  const slotParsed = SlotSchema.safeParse(formData.get('slot'));
  if (!slotParsed.success) {
    return { success: false, message: 'Vị trí ảnh không hợp lệ.' };
  }
  const slot = slotParsed.data;

  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return { success: false, message: 'Vui lòng chọn một file ảnh.' };
  }
  if (file.size > MAX_BYTES) {
    return { success: false, message: 'Ảnh vượt quá 5MB. Vui lòng chọn ảnh nhỏ hơn.' };
  }
  const extension = MIME_EXTENSION[file.type];
  if (!extension) {
    return { success: false, message: 'Chỉ chấp nhận ảnh JPG, PNG hoặc WEBP.' };
  }

  const path = `${slot}/${Date.now()}.${extension}`;
  const { error: uploadError } = await client.storage
    .from(BUCKET)
    .upload(path, Buffer.from(await file.arrayBuffer()), {
      contentType: file.type,
      cacheControl: '3600',
      upsert: false,
    });
  if (uploadError) {
    console.error('Site media upload failed:', uploadError.message);
    return { success: false, message: 'Không thể tải ảnh lên. Vui lòng thử lại.' };
  }

  const { data: publicData } = client.storage.from(BUCKET).getPublicUrl(path);
  const label = SITE_MEDIA_SLOTS.find((item) => item.id === slot)?.label ?? slot;
  const altText = String(formData.get('alt') ?? '').trim().slice(0, 200);

  const { error } = await client.from('site_media').upsert(
    {
      slot,
      label,
      url: publicData.publicUrl,
      alt: altText,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'slot' },
  );
  if (error) {
    console.error('Site media save failed:', error.message);
    return { success: false, message: 'Đã tải ảnh nhưng chưa lưu được. Vui lòng thử lại.' };
  }

  revalidatePath('/');
  revalidatePath('/admin/media');
  return { success: true, message: 'Đã cập nhật ảnh. Trang chủ sẽ hiển thị ảnh mới.' };
}

// Xóa tùy chỉnh để slot quay về ảnh mặc định.
export async function resetSiteMedia(formData: FormData): Promise<SiteMediaResult> {
  const { client } = await requireStaff(['ADMIN']);

  const slotParsed = SlotSchema.safeParse(formData.get('slot'));
  if (!slotParsed.success) {
    return { success: false, message: 'Vị trí ảnh không hợp lệ.' };
  }

  const { error } = await client.from('site_media').delete().eq('slot', slotParsed.data);
  if (error) {
    console.error('Site media reset failed:', error.message);
    return { success: false, message: 'Không thể khôi phục ảnh mặc định.' };
  }

  revalidatePath('/');
  revalidatePath('/admin/media');
  return { success: true, message: 'Đã khôi phục ảnh mặc định.' };
}
