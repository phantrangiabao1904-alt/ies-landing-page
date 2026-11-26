'use client';

import { useState } from 'react';
import { createDocument, setDocumentStatus, deleteDocument, type DocumentRow } from '@/actions/site-documents';
import { DOCUMENT_CATEGORIES } from '@/lib/documents/categories';

interface DocumentEditorProps {
  document?: DocumentRow;
}

export default function DocumentEditor({ document }: DocumentEditorProps) {
  const [isOpen, setIsOpen] = useState(!document);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function handleCreateDocument(formData: FormData) {
    setIsBusy(true);
    setMessage('');
    try {
      const result = await createDocument(formData);
      setMessage(result.message);
      if (result.success && !document) {
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Create document request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  async function handleToggleStatus(newStatus: 'draft' | 'published') {
    if (!document) return;
    setIsBusy(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.set('id', String(document.id));
      formData.set('status', newStatus);
      const result = await setDocumentStatus(formData);
      setMessage(result.message);
    } catch (error) {
      console.error('Toggle status request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  async function handleDelete() {
    if (!document || !window.confirm('Xóa tài liệu này?')) return;
    setIsBusy(true);
    try {
      const formData = new FormData();
      formData.set('id', String(document.id));
      const result = await deleteDocument(formData);
      setMessage(result.message);
    } catch (error) {
      console.error('Delete document request failed:', error);
      setMessage('Không thể kết nối. Vui lòng thử lại.');
    } finally {
      setIsBusy(false);
    }
  }

  if (!document && !isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22]"
      >
        + Tải lên tài liệu
      </button>
    );
  }

  if (document && !isOpen) {
    return (
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="min-h-[44px] rounded-lg border border-[#0F5587] px-4 font-semibold text-[#0F5587] hover:bg-sky-50"
        >
          Chỉnh sửa
        </button>
        {document.status === 'draft' ? (
          <button
            type="button"
            onClick={() => handleToggleStatus('published')}
            disabled={isBusy}
            className="min-h-[44px] rounded-lg border border-emerald-300 px-4 font-semibold text-emerald-700 hover:bg-emerald-50 disabled:opacity-60"
          >
            Đăng
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleToggleStatus('draft')}
            disabled={isBusy}
            className="min-h-[44px] rounded-lg border border-amber-300 px-4 font-semibold text-amber-700 hover:bg-amber-50 disabled:opacity-60"
          >
            Hủy đăng
          </button>
        )}
        <button
          type="button"
          onClick={handleDelete}
          disabled={isBusy}
          className="min-h-[44px] rounded-lg border border-red-300 px-4 font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
        >
          Xóa
        </button>
        {message && <p role="status" className="self-center text-sm text-slate-700">{message}</p>}
      </div>
    );
  }

  return (
    <form action={handleCreateDocument} className="mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2">
      <label className="block text-sm font-semibold text-slate-700">
        Tên tài liệu
        <input
          name="title"
          required
          minLength={5}
          maxLength={200}
          defaultValue={document?.title}
          disabled={!!document}
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3 disabled:bg-slate-100 disabled:text-slate-500"
        />
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Danh mục
        <select
          name="category"
          required
          defaultValue={document?.category ?? 'chinhsach'}
          disabled={!!document}
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3 disabled:bg-slate-100 disabled:text-slate-500"
        >
          {DOCUMENT_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
        Mô tả (không bắt buộc)
        <textarea
          name="description"
          maxLength={500}
          rows={2}
          defaultValue={document?.description}
          disabled={!!document}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 disabled:bg-slate-100 disabled:text-slate-500"
        />
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Năm phát hành (không bắt buộc)
        <input
          type="number"
          name="published_year"
          min="2000"
          max="2100"
          defaultValue={document?.published_year ?? undefined}
          disabled={!!document}
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3 disabled:bg-slate-100 disabled:text-slate-500"
        />
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Trạng thái
        <select
          name="status"
          defaultValue={document?.status ?? 'draft'}
          disabled={!!document}
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3 disabled:bg-slate-100 disabled:text-slate-500"
        >
          <option value="draft">Lưu nháp</option>
          <option value="published">Đăng ngay</option>
        </select>
      </label>

      {!document && (
        <div className="block text-sm font-semibold text-slate-700">
          <span>File PDF (bắt buộc, tối đa 20MB)</span>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            required={!document}
            className="mt-1 block w-full text-sm"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 md:col-span-2">
        {!document && (
          <>
            <button
              type="submit"
              disabled={isBusy}
              className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22] disabled:opacity-60"
            >
              {isBusy ? 'Đang tải...' : 'Tải lên'}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] rounded-lg border border-slate-300 px-4 font-semibold text-slate-700"
            >
              Đóng
            </button>
          </>
        )}
        {message && <p role="status" className="text-sm text-slate-700">{message}</p>}
      </div>
    </form>
  );
}
