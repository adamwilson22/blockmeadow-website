import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/features',
    '/about',
    '/support',
    '/privacy',
    '/terms',
    '/delete-account',
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/delete-account' ? 0.6 : 0.8,
  }));
}
