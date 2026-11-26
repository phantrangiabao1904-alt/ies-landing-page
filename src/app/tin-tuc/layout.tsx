import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tin Tức & Sự Kiện — IES Saigon',
  description: 'Tin tức tuyển sinh, hoạt động học tập, hợp tác doanh nghiệp và đời sống sinh viên tại IES Sài Gòn.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
