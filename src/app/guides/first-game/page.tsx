import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../../marketing.module.css';

export const metadata = pageMeta({
  title: 'Your first Block Meadow game',
  description:
    'First-time Block Meadow: age gate, onboarding, privacy notice, in-game tutorial, and the welcome gift after your first jewel block puzzle round.',
  path: '/guides/first-game',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'First game', href: '/guides/first-game' },
];

export default function FirstGamePage() {
  return (
    <MarketingPage
      eyebrow="Guide"
      title="Your first game"
      subtitle="Age gate, a short how-to, privacy consent, then a guided Classic round. This only happens once."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Download from <Link href="/download">Google Play</Link>, open Block Meadow, and the app
            asks a few things before the meadow. None of it is a quiz about the jewel block puzzle —
            that comes on the board.
          </p>

          <h2>Step 1 — Age group</h2>
          <p>
            Birth year routes <strong>Kid Mode</strong> (under 13) or <strong>Full Mode</strong>{' '}
            (13+). Pick honestly. Kid Mode removes friends search and social push and turns on a
            sticker album. Details: <Link href="/family">family / Kid Mode</Link>.
          </p>

          <h2>Step 2 — Onboarding</h2>
          <p>
            A couple of welcome screens and a tiny practice board. Follow the hand. You are learning
            drag-to-place, not a hidden combo language yet.
          </p>

          <h2>Step 3 — Privacy notice</h2>
          <p>
            Tap Accept to continue. That is the consent gate before ads and optional analytics for
            13+ play. The long version is the <Link href="/privacy">privacy policy</Link>.
          </p>

          <h2>Step 4 — Tutorial in Classic</h2>
          <p>
            Your first Classic game points at placements and a line clear. After that you are on your
            own. Rules live in <Link href="/how-to-play">how to play</Link>.
          </p>

          <h2>Welcome gift</h2>
          <p>
            After you finish that first game, you get a small gift — coins and a couple of boosters.
            Spend them later when the board is actually cramped, not on an empty grid.
          </p>
          <p>
            From Home, try Classic again, peek at Adventure, or set a Daily habit. Line-clear
            hygiene: <Link href="/guides/line-clear-tips">tips</Link>.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.learn, screens.home]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
