import 'server-only';
import { SITE_MEDIA_SLOTS, type SiteMediaSlot } from '@/lib/media/slots';
import { createAnonServerClient } from '@/lib/supabase/server-client';

// Đọc trực tiếp từ bảng site_media (không dùng Server Action vì action không gọi được lúc render trang).
async function loadCustomSiteMedia(): Promise<Partial<Record<SiteMediaSlot, string>>> {
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

// Trả về map slot -> URL: ưu tiên ảnh admin đã tải lên (bảng site_media), không có thì dùng ảnh mặc định.
export async function getResolvedSiteMedia(): Promise<Record<SiteMediaSlot, string>> {
  const custom = await loadCustomSiteMedia();
  return Object.fromEntries(
    SITE_MEDIA_SLOTS.map((slot) => [slot.id, custom[slot.id] ?? slot.fallback]),
  ) as Record<SiteMediaSlot, string>;
}
