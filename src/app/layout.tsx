import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import AnalyticsTracker from '@/components/home/AnalyticsTracker';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) - Tuyển sinh 2026',
  description:
    'Tuyển sinh Trung cấp chính quy 2026 với các ngành CNTT, Thiết kế đồ họa, Quản trị mạng, Kế toán, Quản trị kinh doanh và Thương mại điện tử. Tìm hiểu điều kiện hỗ trợ học phí theo quy định hiện hành.',
  keywords: [
    'Trường Trung cấp Tin học Kinh tế Sài Gòn',
    'IES',
    'hỗ trợ học phí nghề',
    'tuyển sinh trung cấp',
    'xét tuyển học bạ',
    'trung cấp tin học',
  ],
  authors: [{ name: 'Trường Trung cấp Tin học Kinh tế Sài Gòn' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <a className="site-skip-link" href="#main-content">
          Bỏ qua điều hướng, đến nội dung chính
        </a>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
