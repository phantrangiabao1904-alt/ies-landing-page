import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hợp Tác Doanh Nghiệp & Việc Làm — IES Saigon',
  description:
    'Hợp tác doanh nghiệp tại IES Sài Gòn: đào tạo theo đơn đặt hàng, thực tập có lương, ký cam kết đầu ra và ngày hội việc làm Job Fair.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
