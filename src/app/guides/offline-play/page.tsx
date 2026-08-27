import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../../marketing.module.css';

export const metadata = pageMeta({
  title: 'Offline play guide',
  description:
    'Play Block Meadow in airplane mode: the jewel block puzzle works offline. Learn what still needs Wi‑Fi — ads, shop, and leaderboard.',
  path: '/guides/offline-play',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Offline play', href: '/guides/offline-play' },
];

export default function OfflinePlayGuidePage() {
  return (
    <MarketingPage
      eyebrow="Guide"
      title="Offline play"
      subtitle="Travel, queues, and dead zones. The 8×8 jewel board does not wait on a tower. Some extras do."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            This guide is the practical companion to the{' '}
            <Link href="/offline">offline block puzzle</Link> landing page. Use it when you are about
            to board a plane or you are explaining the game to someone who thinks every mobile puzzle
            is an always-online live-ops feed.
          </p>

          <h2>Before you go offline</h2>
          <ul>
            <li>Install from Google Play while you still have signal.</li>
            <li>Open the app once so assets and your local save initialize.</li>
            <li>If you care about today’s Daily, open Daily once on Wi‑Fi so the seed can store.</li>
            <li>Buy or restore VIP / Remove Ads beforehand if you want a banner-free cabin.</li>
          </ul>

          <h2>In the air</h2>
          <p>
            Classic, Adventure, Blitz, undo, owned boosters, themes, Kid Mode stickers, and local
            best scores all run. You will not see a fresh rewarded-ad grant if the SDK cannot reach
            the network — play without that crutch, or wait until you land.
          </p>

          <h2>What will fail politely</h2>
          <p>
            Shop, restore, cloud leaderboard submit, friend search, challenge notifications, and
            some daily-reward server checks. The board still plays. That is the contract.
          </p>
          <p>
            Back on the ground, restore purchases if needed (Settings) and upload a Classic score if
            you opted into ranking. More on the <Link href="/download">download</Link> page and{' '}
            <Link href="/support">support</Link>.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.offline, screens.home]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
