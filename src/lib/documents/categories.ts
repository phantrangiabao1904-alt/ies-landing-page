// Danh mục tài liệu. Tách riêng để dùng được cả ở server và client component.
export const DOCUMENT_CATEGORIES = [
  { id: 'hocphi', label: 'Học phí' },
  { id: 'chinhsach', label: 'Chính sách' },
  { id: 'thongtu', label: 'Thông tư / Nghị định' },
  { id: 'quyche', label: 'Quy chế' },
] as const;

export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number]['id'];
