import type { Metadata } from 'next';
import AnalyticsTracker from '@/components/home/AnalyticsTracker';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trường Trung cấp Tin học Kinh tế Sài Gòn (IES) - Miễn 100% Học Phí',
  description:
    'Tuyển sinh Trung cấp chính quy 2026: Miễn 100% học phí theo Nghị định 81/CP cho học sinh tốt nghiệp THCS. Đào tạo CNTT, Thiết kế đồ họa, Quản trị mạng, Kế toán, Quản trị kinh doanh và Thương mại điện tử.',
  keywords: [
    'Trường Trung cấp Tin học Kinh tế Sài Gòn',
    'IES',
    'học nghề miễn phí 100%',
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
    <html lang="vi" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
