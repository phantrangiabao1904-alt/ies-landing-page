// Danh mục tin tức. Tách riêng để dùng được cả ở server và client component.
export const POST_CATEGORIES = [
  { id: 'tuyensinh', label: 'Thông báo tuyển sinh' },
  { id: 'hoctap', label: 'Hoạt động học tập' },
  { id: 'doanhnghiep', label: 'Hợp tác doanh nghiệp' },
  { id: 'doisong', label: 'Đời sống sinh viên' },
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number]['id'];

export function getCategoryLabel(id: string): string {
  return POST_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
