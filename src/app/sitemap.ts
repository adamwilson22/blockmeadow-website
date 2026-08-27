import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const lastModified = new Date(`${site.updatedIso}T00:00:00.000Z`);

const entries: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/how-to-play', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/block-puzzle', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/download', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/features', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/classic', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/adventure', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/daily', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blitz', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/offline', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/family', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/guides/line-clear-tips', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/combos', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/offline-play', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/first-game', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/support', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/press', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/delete-account', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: entry.path ? `${site.url}${entry.path}` : site.url,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
