import type { Metadata } from 'next';
import Script from 'next/script';
import { Sora } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { FooterGate } from '@/components/FooterGate';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { graphJsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION || site.gscVerification;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.homeTitle,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'block puzzle',
    'jewel block puzzle',
    'gem blocks',
    'offline puzzle',
    'Block Meadow',
    'block puzzle Android',
    'adventure puzzle',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.homeTitle,
    description: site.description,
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
    title: site.homeTitle,
    description: site.description,
    images: [site.ogImage.url],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/brand/app_icon.png', type: 'image/png' },
    ],
    apple: '/brand/app_icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: { google: gsc },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sora.variable} style={{ fontFamily: 'var(--font-sora), Sora, system-ui, sans-serif' }}>
        <JsonLd data={graphJsonLd([organizationJsonLd(), websiteJsonLd()])} />
        <Header />
        <main id="main">{children}</main>
        <FooterGate>
          <Footer />
        </FooterGate>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
