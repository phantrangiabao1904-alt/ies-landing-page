'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createAnonServerClient } from '@/lib/supabase/server-client';
import { requireStaff } from '@/lib/supabase/staff';

const BUCKET = 'site-media';
const MAX_BYTES = 5 * 1024 * 1024;
const MIME_EXTENSION: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const PostSchema = z.object({
  id: z.coerce.number().int().positive().optional(),
  title: z.string().trim().min(5, 'Tiêu đề tối thiểu 5 ký tự.').max(200),
  description: z.string().trim().min(10, 'Mô tả tối thiểu 10 ký tự.').max(500),
  content: z.string().trim().min(20, 'Nội dung tối thiểu 20 ký tự.').max(20000),
  category: z.enum(['tuyensinh', 'hoctap', 'doanhnghiep', 'doisong']),
  author_name: z.string().trim().min(2).max(100),
  image_alt: z.string().trim().max(200).default(''),
  status: z.enum(['draft', 'published']),
  current_image_url: z.string().optional().default(''),
});

export type PostRow = {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  author_name: string;
  image_url: string;
  image_alt: string;
  status: 'draft' | 'published';
  published_at: string | null;
};

export type PostResult = { success: boolean; message: string };

// Lấy bài đã đăng cho trang công khai. Lỗi thì trả về danh sách rỗng.
export async function getPublishedPosts(category?: string): Promise<PostRow[]> {
  try {
    const client = createAnonServerClient();
    let query = client
      .from('site_posts')
      .select('id, title, description, content, category, author_name, image_url, image_alt, status, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return (data ?? []) as PostRow[];
  } catch (error) {
    console.error('Published posts could not be loaded.', error);
    return [];
  }
}

// Lấy toàn bộ bài (cả nháp) cho trang quản trị.
export async function getAllPostsForAdmin(): Promise<PostRow[]> {
  const { client } = await requireStaff(['ADMIN', 'BA']);
  const { data, error } = await client
    .from('site_posts')
    .select('id, title, description, content, category, author_name, image_url, image_alt, status, published_at')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Admin posts could not be loaded:', error.message);
    return [];
  }
  return (data ?? []) as PostRow[];
}

async function uploadPostImage(
  client: Awaited<ReturnType<typeof requireStaff>>['client'],
  file: File,
): Promise<{ url: string } | { error: string }> {
  if (file.size > MAX_BYTES) return { error: 'Ảnh vượt quá 5MB.' };
  const extension = MIME_EXTENSION[file.type];
  if (!extension) return { error: 'Chỉ chấp nhận ảnh JPG, PNG hoặc WEBP.' };

  const path = `posts/${Date.now()}.${extension}`;
  const { error } = await client.storage
    .from(BUCKET)
    .upload(path, Buffer.from(await file.arrayBuffer()), {
      contentType: file.type,
      cacheControl: '3600',
      upsert: false,
    });
  if (error) {
    console.error('Post image upload failed:', error.message);
    return { error: 'Không thể tải ảnh lên.' };
  }
  const { data } = client.storage.from(BUCKET).getPublicUrl(path);
  return { url: data.publicUrl };
}

// Tạo mới hoặc cập nhật bài. Nếu không chọn ảnh mới thì giữ ảnh cũ.
export async function savePost(formData: FormData): Promise<PostResult> {
  const { client } = await requireStaff(['ADMIN', 'BA']);

  const parsed = PostSchema.safeParse({
    id: formData.get('id') || undefined,
    title: formData.get('title'),
    description: formData.get('description'),
    content: formData.get('content'),
    category: formData.get('category'),
    author_name: formData.get('author_name'),
    image_alt: formData.get('image_alt') ?? '',
    status: formData.get('status'),
    current_image_url: formData.get('current_image_url') ?? '',
  });
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ.' };
  }
  const data = parsed.data;

  let imageUrl = data.current_image_url;
  const file = formData.get('image');
  if (file instanceof File && file.size > 0) {
    const uploaded = await uploadPostImage(client, file);
    if ('error' in uploaded) return { success: false, message: uploaded.error };
    imageUrl = uploaded.url;
  }
  if (!imageUrl) {
    return { success: false, message: 'Vui lòng chọn ảnh cho bài viết.' };
  }

  const now = new Date().toISOString();
  const row = {
    title: data.title,
    description: data.description,
    content: data.content,
    category: data.category,
    author_name: data.author_name,
    image_url: imageUrl,
    image_alt: data.image_alt,
    status: data.status,
    published_at: data.status === 'published' ? now : null,
    updated_at: now,
  };

  const query = data.id
    ? client.from('site_posts').update(row).eq('id', data.id)
    : client.from('site_posts').insert({ ...row, created_by: 'staff' });
  // created_by lưu nhãn chung; vai trò chi tiết không cần thiết cho trang công khai.
  const { error } = await query;
  if (error) {
    console.error('Post save failed:', error.message);
    return { success: false, message: 'Không thể lưu bài viết. Vui lòng thử lại.' };
  }

  revalidatePath('/tin-tuc');
  revalidatePath('/admin/posts');
  return { success: true, message: data.status === 'published' ? 'Đã đăng bài.' : 'Đã lưu nháp.' };
}

export async function deletePost(formData: FormData): Promise<PostResult> {
  const { client } = await requireStaff(['ADMIN']);
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id) || id <= 0) {
    return { success: false, message: 'Bài viết không hợp lệ.' };
  }
  const { error } = await client.from('site_posts').delete().eq('id', id);
  if (error) {
    console.error('Post delete failed:', error.message);
    return { success: false, message: 'Không thể xóa bài viết.' };
  }
  revalidatePath('/tin-tuc');
  revalidatePath('/admin/posts');
  return { success: true, message: 'Đã xóa bài viết.' };
}
