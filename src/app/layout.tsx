import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/lib/site';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Jewel Block Puzzle`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'block puzzle',
    'jewel puzzle',
    'gem blocks',
    'offline puzzle',
    'Block Meadow',
    'brain game',
    'adventure puzzle',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Jewel Block Puzzle`,
    description: site.description,
    images: [{ url: '/brand/app_icon.png', width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Jewel Block Puzzle`,
    description: site.description,
    images: ['/brand/app_icon.png'],
  },
  icons: {
    icon: '/brand/app_icon.png',
    apple: '/brand/app_icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sora.variable} style={{ fontFamily: 'var(--font-sora), Sora, system-ui, sans-serif' }}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
