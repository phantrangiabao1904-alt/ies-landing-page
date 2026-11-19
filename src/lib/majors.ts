export const admissionMajors = [
  'Công nghệ thông tin',
  'Thiết kế đồ họa',
  'Quản trị mạng',
  'Kế toán',
  'Quản trị kinh doanh',
  'Thương mại điện tử',
] as const;

const majorAliases: Record<(typeof admissionMajors)[number], string[]> = {
  'Công nghệ thông tin': ['cntt', 'information technology'],
  'Thiết kế đồ họa': ['thiết kế đồ họa & đa phương tiện', 'graphic design'],
  'Quản trị mạng': ['quản trị mạng & an ninh mạng', 'network administration'],
  'Kế toán': ['kế toán doanh nghiệp số', 'digital accounting'],
  'Quản trị kinh doanh': ['business administration'],
  'Thương mại điện tử': ['thương mại điện tử & logistics', 'e-commerce'],
};

export function resolveAdmissionMajor(value: string | null | undefined) {
  const normalized = value?.trim().toLocaleLowerCase('vi-VN');
  if (!normalized) return '';

  return (
    admissionMajors.find((major) =>
      [major, ...majorAliases[major]].some(
        (candidate) => candidate.toLocaleLowerCase('vi-VN') === normalized,
      ),
    ) ?? ''
  );
}
