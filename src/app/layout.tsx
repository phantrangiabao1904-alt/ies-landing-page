import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google';
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

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
    <html
      lang="vi"
      className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
