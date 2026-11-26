import { notFound } from 'next/navigation';
import { BLANK_LANDING_ENABLED } from '@/lib/landing-toggle';

export const metadata = {
  title: 'Landing trắng - IES',
  robots: { index: false, follow: false },
};

export default function BlankLandingPage() {
  if (!BLANK_LANDING_ENABLED) notFound();

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-2xl font-bold text-[#0F5587]">IES - Landing trắng</h1>
    </main>
  );
}
