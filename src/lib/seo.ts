import type { Metadata } from 'next';
import type { Crumb, FaqItem } from '@/lib/site';
import { screens, site } from '@/lib/site';

export function canonicalUrl(path: string): string {
  if (!path || path === '/') return site.url;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** When true, do not apply the layout `%s · Block Meadow` template. */
  absoluteTitle?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const canonical = canonicalUrl(path);
  const displayTitle = absoluteTitle ? title : `${title} · ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: site.name,
      title: displayTitle,
      description,
      locale: 'en_US',
      images: [
        {
          url: site.ogImage.url,
          width: site.ogImage.width,
          height: site.ogImage.height,
          alt: site.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description,
      images: [site.ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.supportEmail,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/brand/app_icon.png'),
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en',
  };
}

export function softwareApplicationJsonLd(): Record<string, unknown> {
  const shots = Object.values(screens).map((shot) => absoluteUrl(shot.src));
  return {
    '@type': 'SoftwareApplication',
    name: site.name,
    operatingSystem: 'ANDROID',
    applicationCategory: 'GameApplication',
    applicationSubCategory: 'PuzzleGame',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    downloadUrl: site.playStoreUrl,
    installUrl: site.playStoreUrl,
    url: canonicalUrl('/download'),
    description: site.description,
    screenshot: shots,
    image: absoluteUrl(site.ogImage.url),
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function faqJsonLd(items: readonly FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: readonly Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function graphJsonLd(
  nodes: Record<string, unknown>[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
