'use client';

import { useState } from 'react';
import Image from 'next/image';
import { resetSiteMedia, uploadSiteMedia } from '@/actions/site-media';
import type { SiteMediaSlot } from '@/lib/media/slots';

interface MediaUploaderProps {
  slot: SiteMediaSlot;
  label: string;
  currentUrl: string;
}

export default function MediaUploader({ slot, label, currentUrl }: MediaUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function handleUpload(formData: FormData) {
    setIsBusy(true);
    setMessage('');
    try {
      const result = await uploadSiteMedia(formData);
      setMessage(result.message);
      if (result.success) setPreviewUrl(null);
    } catch (error) {
      console.error('Upload request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  async function handleReset() {
    setIsBusy(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.set('slot', slot);
      const result = await resetSiteMedia(formData);
      setMessage(result.message);
    } catch (error) {
      console.error('Reset request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <article className="staff-card rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-bold text-[#0F5587]">{label}</p>
      <p className="mt-1 text-xs text-slate-500">{slot}</p>

      <div className="relative mt-3 aspect-video overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={previewUrl ?? currentUrl}
          alt=""
          fill
          unoptimized
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
        />
      </div>

      <form
        action={handleUpload}
        className="mt-3 space-y-3"
        onSubmit={() => setIsBusy(true)}
      >
        <input type="hidden" name="slot" value={slot} />
        <label className="block text-sm font-semibold text-slate-700">
          Ảnh mới (JPG, PNG, WEBP, tối đa 5MB)
          <input
            type="file"
            name="file"
            accept="image/jpeg,image/png,image/webp"
            required
            onChange={(event) => {
              const file = event.target.files?.[0];
              setPreviewUrl(file ? URL.createObjectURL(file) : null);
            }}
            className="mt-1 block w-full text-sm"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          Mô tả ảnh (alt)
          <input
            type="text"
            name="alt"
            maxLength={200}
            className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            disabled={isBusy}
            className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22] disabled:opacity-60"
          >
            {isBusy ? 'Đang xử lý...' : 'Tải ảnh lên'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={isBusy}
            className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            Khôi phục ảnh mặc định
          </button>
        </div>
      </form>

      {message && (
        <p role="status" aria-live="polite" className="mt-3 rounded-lg bg-slate-100 p-2 text-sm text-slate-700">
          {message}
        </p>
      )}
    </article>
  );
}
