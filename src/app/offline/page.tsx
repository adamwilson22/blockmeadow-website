import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Play block puzzle offline',
  description:
    'Play Block Meadow offline: the jewel block puzzle on an 8×8 board needs no Wi‑Fi. Ads, shop, and leaderboard wait until you are online.',
  path: '/offline',
  keywords: ['offline block puzzle', 'play block puzzle without wifi', 'offline puzzle Android'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Offline play', href: '/offline' },
];

export default function OfflinePage() {
  return (
    <MarketingPage
      eyebrow="Offline"
      title="Play block puzzle offline"
      subtitle="Core jewel block puzzle sessions work without Wi‑Fi. Take the 8×8 board on a plane, a commute, or a dead-zone walk."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Plenty of puzzle apps stall on a splash screen until they can fetch ads. Block Meadow is
            built the other way around: the board, the pieces, Classic, Adventure levels you already
            unlocked, Daily once the seed is stored, and Blitz all run locally. That is what we mean
            by offline-first — not a demo, the actual game.
          </p>
          <p>
            If you searched for an offline block puzzle, start here, then{' '}
            <Link href="/download">download on Google Play</Link>.
          </p>

          <h2>What works without a network</h2>
          <ul>
            <li>Placing gem blocks and clearing rows and columns</li>
            <li>Undo, hint, and boosters you already own</li>
            <li>Classic high-score runs saved on device</li>
            <li>Adventure progress for levels you can reach locally</li>
            <li>Sound, music, haptics, themes you already unlocked</li>
            <li>Kid Mode stickers earned by play, not by a server</li>
          </ul>

          <h2>What still needs a connection</h2>
          <p>
            Ads (banners and optional rewarded videos), Google Play purchases, restore, the cloud
            leaderboard, username friends, beat-the-score challenges, and push notifications need the
            network. If you never tap those systems, you can play a jewel block puzzle for hours
            airborne.
          </p>
          <p>
            The daily puzzle is seeded per calendar day. The first fetch of that day’s board may need
            a clock/network check; after that, finishing the puzzle is local. If you are fully
            offline at midnight, Classic and Adventure still play.
          </p>

          <h2>Why we did it this way</h2>
          <p>
            Commutes, queues, and kids’ tablets in airplane mode are real sessions. Holding the
            puzzle hostage to an ad SDK would break the promise of a calm board. So the 8×8 grid
            never waits on HTTP. Monetization rides on top: watch a rewarded ad when you choose,
            buy VIP when you want banners gone — both require Play services to be reachable.
          </p>
          <p>
            Read <Link href="/guides/offline-play">offline play tips</Link> for travel setups, or{' '}
            <Link href="/how-to-play">how to play</Link> if you are new to line-clear block puzzle.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.offline, screens.classic]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
