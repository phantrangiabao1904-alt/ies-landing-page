'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createAnonServerClient } from '@/lib/supabase/server-client';
import { requireStaff } from '@/lib/supabase/staff';

const BUCKET = 'site-media';
const MAX_BYTES = 20 * 1024 * 1024;

import { type DocumentCategory } from '@/lib/documents/categories';

export type DocumentRow = {
  id: number;
  title: string;
  category: DocumentCategory;
  description: string;
  file_url: string;
  published_year: number | null;
  status: 'draft' | 'published';
};

export type DocumentResult = { success: boolean; message: string };

const DocumentSchema = z.object({
  title: z.string().trim().min(5, 'Tên tài liệu tối thiểu 5 ký tự.').max(200),
  category: z.enum(['hocphi', 'chinhsach', 'thongtu', 'quyche']),
  description: z.string().trim().max(500).default(''),
  published_year: z.coerce.number().int().min(2000).max(2100).optional(),
  status: z.enum(['draft', 'published']),
});

const SELECT_FIELDS = 'id, title, category, description, file_url, published_year, status';

// Danh sách tài liệu đã đăng cho trang công khai. Lỗi thì trả về rỗng.
export async function getPublishedDocuments(category?: string): Promise<DocumentRow[]> {
  try {
    const client = createAnonServerClient();
    let query = client
      .from('site_documents')
      .select(SELECT_FIELDS)
      .eq('status', 'published')
      .order('published_year', { ascending: false, nullsFirst: false })
      .order('created_at', { ascending: false });
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return (data ?? []) as DocumentRow[];
  } catch (error) {
    console.error('Published documents could not be loaded.', error);
    return [];
  }
}

// Danh sách đầy đủ (cả nháp) cho trang quản trị.
export async function getAllDocumentsForAdmin(): Promise<DocumentRow[]> {
  const { client } = await requireStaff(['ADMIN', 'BA']);
  const { data, error } = await client
    .from('site_documents')
    .select(SELECT_FIELDS)
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Admin documents could not be loaded:', error.message);
    return [];
  }
  return (data ?? []) as DocumentRow[];
}

// Tạo mới tài liệu. Bắt buộc có file PDF.
export async function createDocument(formData: FormData): Promise<DocumentResult> {
  const { client } = await requireStaff(['ADMIN', 'BA']);

  const parsed = DocumentSchema.safeParse({
    title: formData.get('title'),
    category: formData.get('category'),
    description: formData.get('description') ?? '',
    published_year: formData.get('published_year') || undefined,
    status: formData.get('status'),
  });
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ.' };
  }

  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return { success: false, message: 'Vui lòng chọn file PDF.' };
  }
  if (file.size > MAX_BYTES) {
    return { success: false, message: 'File vượt quá 20MB.' };
  }
  if (file.type !== 'application/pdf') {
    return { success: false, message: 'Chỉ chấp nhận file PDF.' };
  }

  const path = `documents/${Date.now()}.pdf`;
  const { error: uploadError } = await client.storage
    .from(BUCKET)
    .upload(path, Buffer.from(await file.arrayBuffer()), {
      contentType: 'application/pdf',
      cacheControl: '3600',
      upsert: false,
    });
  if (uploadError) {
    console.error('Document upload failed:', uploadError.message);
    return { success: false, message: 'Không thể tải file lên.' };
  }
  const { data: urlData } = client.storage.from(BUCKET).getPublicUrl(path);

  const data = parsed.data;
  const now = new Date().toISOString();
  const { error } = await client.from('site_documents').insert({
    title: data.title,
    category: data.category,
    description: data.description,
    file_url: urlData.publicUrl,
    published_year: data.published_year ?? null,
    status: data.status,
    created_by: 'staff',
    updated_at: now,
  });
  if (error) {
    console.error('Document save failed:', error.message);
    return { success: false, message: 'Không thể lưu tài liệu. Vui lòng thử lại.' };
  }

  revalidatePath('/chinh-sach');
  revalidatePath('/cong-khai');
  revalidatePath('/admin/documents');
  return { success: true, message: data.status === 'published' ? 'Đã đăng tài liệu.' : 'Đã lưu nháp.' };
}

// Đổi trạng thái hoặc xóa tài liệu (chỉ ADMIN).
export async function setDocumentStatus(formData: FormData): Promise<DocumentResult> {
  const { client } = await requireStaff(['ADMIN']);
  const id = Number(formData.get('id'));
  const status = formData.get('status');
  if (!Number.isInteger(id) || id <= 0 || (status !== 'draft' && status !== 'published')) {
    return { success: false, message: 'Dữ liệu không hợp lệ.' };
  }
  const { error } = await client
    .from('site_documents')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) {
    console.error('Document status update failed:', error.message);
    return { success: false, message: 'Không thể cập nhật tài liệu.' };
  }
  revalidatePath('/chinh-sach');
  revalidatePath('/cong-khai');
  revalidatePath('/admin/documents');
  return { success: true, message: status === 'published' ? 'Đã đăng.' : 'Đã chuyển về nháp.' };
}

export async function deleteDocument(formData: FormData): Promise<DocumentResult> {
  const { client } = await requireStaff(['ADMIN']);
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id) || id <= 0) {
    return { success: false, message: 'Tài liệu không hợp lệ.' };
  }
  const { error } = await client.from('site_documents').delete().eq('id', id);
  if (error) {
    console.error('Document delete failed:', error.message);
    return { success: false, message: 'Không thể xóa tài liệu.' };
  }
  revalidatePath('/chinh-sach');
  revalidatePath('/cong-khai');
  revalidatePath('/admin/documents');
  return { success: true, message: 'Đã xóa tài liệu.' };
}
