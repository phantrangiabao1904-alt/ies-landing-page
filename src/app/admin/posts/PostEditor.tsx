'use client';

import { useState } from 'react';
import Image from 'next/image';
import { deletePost, savePost, type PostRow } from '@/actions/site-posts';
import { POST_CATEGORIES } from '@/lib/posts/categories';

interface PostEditorProps {
  post?: PostRow;
}

export default function PostEditor({ post }: PostEditorProps) {
  const [isOpen, setIsOpen] = useState(!post);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  async function handleSave(formData: FormData) {
    setIsBusy(true);
    setMessage('');
    try {
      const result = await savePost(formData);
      setMessage(result.message);
      if (result.success && !post) {
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Save post request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  async function handleDelete() {
    if (!post || !window.confirm('Xóa bài viết này?')) return;
    setIsBusy(true);
    try {
      const formData = new FormData();
      formData.set('id', String(post.id));
      const result = await deletePost(formData);
      setMessage(result.message);
    } catch (error) {
      console.error('Delete post request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  if (!post && !isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22]"
      >
        + Viết bài mới
      </button>
    );
  }

  if (post && !isOpen) {
    return (
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setIsOpen(true)} className="min-h-[44px] rounded-lg border border-[#0F5587] px-4 font-semibold text-[#0F5587] hover:bg-sky-50">
          Sửa bài
        </button>
        <button type="button" onClick={handleDelete} disabled={isBusy} className="min-h-[44px] rounded-lg border border-red-300 px-4 font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60">
          Xóa
        </button>
        {message && <p role="status" className="self-center text-sm text-slate-700">{message}</p>}
      </div>
    );
  }

  return (
    <form action={handleSave} className="mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2">
      {post && <input type="hidden" name="id" value={post.id} />}
      {post && <input type="hidden" name="current_image_url" value={post.image_url} />}

      <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
        Tiêu đề
        <input name="title" required minLength={5} maxLength={200} defaultValue={post?.title} className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3" />
      </label>

      <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
        Mô tả ngắn (hiển thị ở danh sách)
        <textarea name="description" required minLength={10} maxLength={500} rows={2} defaultValue={post?.description} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>

      <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
        Nội dung chi tiết
        <textarea name="content" required minLength={20} maxLength={20000} rows={8} defaultValue={post?.content} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Danh mục
        <select name="category" required defaultValue={post?.category ?? 'tuyensinh'} className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3">
          {POST_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Người đăng
        <input name="author_name" required minLength={2} maxLength={100} defaultValue={post?.author_name ?? 'Ban Truyền thông IES'} className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3" />
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Trạng thái
        <select name="status" defaultValue={post?.status ?? 'draft'} className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3">
          <option value="draft">Lưu nháp</option>
          <option value="published">Đăng ngay</option>
        </select>
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Mô tả ảnh (alt)
        <input name="image_alt" maxLength={200} defaultValue={post?.image_alt} className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3" />
      </label>

      <div className="block text-sm font-semibold text-slate-700">
        <span>Ảnh bài viết {post ? '(để trống nếu giữ ảnh cũ)' : '(bắt buộc)'}</span>
        {post && (
          <div className="relative mt-1 aspect-video overflow-hidden rounded-lg bg-slate-100">
            <Image src={preview ?? post.image_url} alt="" fill unoptimized sizes="320px" className="object-cover" />
          </div>
        )}
        <input
          type="file"
          name="image"
          accept="image/jpeg,image/png,image/webp"
          required={!post}
          onChange={(event) => {
            const file = event.target.files?.[0];
            setPreview(file ? URL.createObjectURL(file) : null);
          }}
          className="mt-1 block w-full text-sm"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 md:col-span-2">
        <button type="submit" disabled={isBusy} className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22] disabled:opacity-60">
          {isBusy ? 'Đang lưu...' : 'Lưu bài'}
        </button>
        <button type="button" onClick={() => setIsOpen(false)} className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700">
          Đóng
        </button>
        {message && <p role="status" className="text-sm text-slate-700">{message}</p>}
      </div>
    </form>
  );
}
