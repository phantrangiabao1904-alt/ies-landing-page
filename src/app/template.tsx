import type { ReactNode } from 'react';
import SitePageMotion from '@/components/layout/SitePageMotion';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="route-transition">
      <SitePageMotion>{children}</SitePageMotion>
    </div>
  );
}
