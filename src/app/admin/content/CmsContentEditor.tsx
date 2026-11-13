'use client';

import { useState } from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { saveHomepageCmsContent } from '@/actions/cms-content';
import type { CmsContentItem } from '@/lib/cms/content';

interface CmsContentEditorProps {
  initialItems: CmsContentItem[];
}

interface SortableContentItemProps {
  item: CmsContentItem;
  onChange: (id: string, field: 'title' | 'body' | 'is_active', value: string | boolean) => void;
}

function SortableContentItem({ item, onChange }: SortableContentItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  return (
    <article
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`rounded-xl border bg-white p-4 shadow-sm ${
        isDragging ? 'z-10 border-[#F58232] opacity-90 shadow-lg' : 'border-slate-200'
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#F58232]">
            {item.kind === 'banner' ? 'Banner trang chủ' : 'Ngành đào tạo'}
          </p>
          <p className="mt-1 text-xs text-slate-500">{item.id}</p>
        </div>
        <button
          type="button"
          {...attributes}
          {...listeners}
          aria-label={`Kéo để sắp xếp ${item.title}`}
          className="inline-flex min-h-[44px] min-w-[44px] touch-none items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-600 hover:bg-slate-50"
        >
          ⠿
        </button>
      </div>

      <label className="block text-sm font-semibold text-slate-700">
        Tiêu đề
        <input
          value={item.title}
          maxLength={120}
          onChange={(event) => onChange(item.id, 'title', event.target.value)}
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3 text-slate-900 outline-none focus:border-[#0F5587] focus:ring-2 focus:ring-[#0F5587]/20"
        />
      </label>

      <label className="mt-3 block text-sm font-semibold text-slate-700">
        Mô tả
        <textarea
          value={item.body}
          maxLength={300}
          rows={3}
          onChange={(event) => onChange(item.id, 'body', event.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-[#0F5587] focus:ring-2 focus:ring-[#0F5587]/20"
        />
      </label>

      <label className="mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-slate-700">
        <input
          type="checkbox"
          checked={item.is_active}
          onChange={(event) => onChange(item.id, 'is_active', event.target.checked)}
          className="h-4 w-4 accent-[#0F5587]"
        />
        Hiển thị trên trang chủ
      </label>
    </article>
  );
}

export default function CmsContentEditor({ initialItems }: CmsContentEditorProps) {
  const [items, setItems] = useState(initialItems);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function updateItem(
    id: string,
    field: 'title' | 'body' | 'is_active',
    value: string | boolean,
  ) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((current) => {
      const oldIndex = current.findIndex((item) => item.id === active.id);
      const newIndex = current.findIndex((item) => item.id === over.id);
      return arrayMove(current, oldIndex, newIndex).map((item, sort_order) => ({
        ...item,
        sort_order,
      }));
    });
  }

  async function saveChanges() {
    setIsSaving(true);
    setMessage('');
    try {
      const result = await saveHomepageCmsContent(items);
      setMessage(result.message);
    } catch (error) {
      console.error('CMS save request failed:', error);
      setMessage('Không thể kết nối để lưu nội dung. Vui lòng thử lại.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          Kéo thẻ để thay đổi thứ tự banner và ngành học trên trang chủ. Nội dung được kiểm tra
          trước khi lưu.
        </p>
        <button
          type="button"
          onClick={saveChanges}
          disabled={isSaving}
          className="min-h-[44px] rounded-lg bg-[#F58232] px-5 font-bold text-white hover:bg-[#df6f22] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>

      {message && (
        <p role="status" aria-live="polite" className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
          {message}
        </p>
      )}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {items.map((item) => (
              <SortableContentItem key={item.id} item={item} onChange={updateItem} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
}
