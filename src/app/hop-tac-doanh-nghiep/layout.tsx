import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hợp tác doanh nghiệp - IES Sài Gòn',
  description: 'Mô hình hợp tác doanh nghiệp của IES: thực tập có lương, ngày hội việc làm và đặt hàng nhân lực theo chuẩn kỹ năng.',
  alternates: { canonical: '/hop-tac-doanh-nghiep' },
};

export default function HopTacLayout({ children }: { children: React.ReactNode }) {
  return children;
}
