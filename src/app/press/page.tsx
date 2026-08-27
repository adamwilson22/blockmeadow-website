import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Press kit',
  description:
    'Block Meadow press kit: boilerplate, package ID, icon and feature graphic, contact for the jewel block puzzle on Android.',
  path: '/press',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Press', href: '/press' },
];

export default function PressPage() {
  return (
    <MarketingPage
      eyebrow="Press"
      title="Press kit"
      subtitle="Short facts, brand files, and a contact for listing questions. Block Meadow is a jewel block puzzle for Android."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <h2>Boilerplate</h2>
          <p>
            Block Meadow is a free-to-play jewel block puzzle for Android. Players place gem-shaped
            blocks on an 8×8 board, clear full rows and columns, and chain combos. Four modes —
            Classic, Adventure (1,000 levels), Daily, and Blitz — share one board. Core play works
            offline. A mixed-audience age gate enables Kid Mode for under-13 players.
          </p>
          <p>
            Developer site: {site.url}. Store:{' '}
            <a href={site.playStoreUrl}>{site.playStoreUrl}</a>. Package: {site.packageId}.
          </p>

          <h2>Facts</h2>
          <ul>
            <li>Genre: Puzzle / block puzzle / jewel puzzle</li>
            <li>Platform: Android (Google Play)</li>
            <li>Price: Free download, optional IAP</li>
            <li>Modes: Classic, Adventure, Daily, Blitz</li>
            <li>Contact: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></li>
          </ul>

          <h2>Assets</h2>
          <p>
            App icon:{' '}
            <a href="/brand/app_icon.png" target="_blank" rel="noreferrer">
              /brand/app_icon.png
            </a>
            . Feature / OG image:{' '}
            <a href="/brand/og-image.png" target="_blank" rel="noreferrer">
              /brand/og-image.png
            </a>
            . Wordmark:{' '}
            <a href="/brand/logo_wordmark.png" target="_blank" rel="noreferrer">
              /brand/logo_wordmark.png
            </a>
            . Phone screenshots live under{' '}
            <Link href="/brand/screens/01_home.png">/brand/screens/</Link>.
          </p>
          <p>
            For preview builds or extra stills, email the address above. Legal:{' '}
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>.
          </p>
        </div>
      </section>
    </MarketingPage>
  );
}
