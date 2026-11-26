import type { MetadataRoute } from 'next';
import { schoolContact } from '@/lib/school-info';

const routes = ['', '/gioi-thieu', '/chuong-trinh-hoc', '/nganh-dao-tao', '/tuyen-sinh', '/dang-ky', '/giang-vien'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${schoolContact.websiteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
