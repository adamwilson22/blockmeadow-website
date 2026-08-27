import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta, softwareApplicationJsonLd } from '@/lib/seo';
import { screens, site } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Download Block Meadow on Google Play',
  description:
    'Download Block Meadow, a free jewel block puzzle for Android. Package com.playblockmeadow.app. Play offline on an 8×8 gem board.',
  path: '/download',
  keywords: ['download Block Meadow', 'Block Meadow Google Play', 'block puzzle Android download'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Download', href: '/download' },
];

export default function DownloadPage() {
  return (
    <MarketingPage
      eyebrow="Download"
      title="Download Block Meadow on Google Play"
      subtitle="Free Android jewel block puzzle. Search Block Meadow or tap through to the listing. Package ID com.playblockmeadow.app."
      crumbs={crumbs}
      extraJsonLd={[softwareApplicationJsonLd()]}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Block Meadow is the jewel block puzzle we make for Android. It is free to install. Optional
            purchases live in the shop. Core play — the 8×8 board, Classic, Adventure, Daily, Blitz —
            does not require you to spend.
          </p>
          <p>
            <a className="btn btn-primary" href={site.playStoreUrl} style={{ marginTop: '0.75rem' }}>
              Get it on Google Play
            </a>
          </p>

          <h2>What you are installing</h2>
          <ul>
            <li>Name: {site.name}</li>
            <li>Package: {site.packageId}</li>
            <li>Platform: Android via Google Play</li>
            <li>Price: Free to download</li>
            <li>Genre: Puzzle — jewel / gem block puzzle, line clear</li>
          </ul>
          <p>
            After install, an age gate routes Kid Mode or Full Mode. A short tutorial teaches place
            and clear. Then Home offers the four modes. Read{' '}
            <Link href="/guides/first-game">your first game</Link> if you want the walkthrough before
            you tap.
          </p>

          <h2>Device notes</h2>
          <p>
            You need a device that can run a current Android Play build and has enough storage for
            the app and art. A stable Play Store account is required for installs and for restore.
            The puzzle itself can run <Link href="/offline">offline</Link> after install.
          </p>
          <p>
            Purchases and ads use Google Play and AdMob. We never see your card number. Restore is in
            Settings. Support: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with a
            Play order ID if a grant is missing.
          </p>

          <h2>Before you download</h2>
          <p>
            Skim <Link href="/how-to-play">how to play</Link>,{' '}
            <Link href="/block-puzzle">what a jewel block puzzle is</Link>, and the{' '}
            <Link href="/privacy">privacy policy</Link> if you are installing for a family. Mixed
            audience, Kid Mode, non-personalized ads — that is the contract.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.home, screens.classic, screens.adventure]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
