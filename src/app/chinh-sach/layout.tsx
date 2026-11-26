import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Học phí & Chính sách - IES Sài Gòn',
  description: 'Các thông tư, nghị định, quy chế và chính sách học phí của Trường Trung cấp Tin học Kinh tế Sài Gòn.',
  alternates: { canonical: '/chinh-sach' },
};

export default function ChinhSachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
