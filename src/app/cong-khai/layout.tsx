import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Công khai thông tin - IES Sài Gòn',
  description: 'Công khai cam kết chất lượng giáo dục, tài chính, cơ sở vật chất và kết quả đào tạo của Trường Trung cấp Tin học Kinh tế Sài Gòn.',
  alternates: { canonical: '/cong-khai' },
};

export default function CongKhaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
