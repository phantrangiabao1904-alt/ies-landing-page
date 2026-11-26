import type { MetadataRoute } from 'next';
import { schoolContact } from '@/lib/school-info';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/analytics', '/login', '/reset-password', '/forgot-password'] },
    sitemap: `${schoolContact.websiteUrl}/sitemap.xml`,
  };
}
