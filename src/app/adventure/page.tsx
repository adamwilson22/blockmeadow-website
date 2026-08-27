import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: '1,000 adventure levels',
  description:
    'Adventure mode in Block Meadow: 1,000 jewel block puzzle levels with line, score, combo, and crystal goals. Play on Android, including offline.',
  path: '/adventure',
  keywords: ['1000 level block puzzle', 'adventure block puzzle', 'block puzzle campaign'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Adventure', href: '/adventure' },
];

export default function AdventurePage() {
  return (
    <MarketingPage
      eyebrow="Adventure"
      title="1,000 adventure levels"
      subtitle="A crystal path of goals — clear lines, hit scores, land combos, shatter crystals. Stars mark how cleanly you finished."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Adventure turns the same 8×8 jewel block puzzle into a campaign. Each level has a goal,
            not merely “survive.” You might need a number of line clears, a score threshold, a combo
            streak, or crystal objectives. Do well and you earn stars. Finish a node to unlock the
            next stretch of the map.
          </p>
          <p>
            If you like a destination more than an endless run, start here after{' '}
            <Link href="/how-to-play">how to play</Link>. Classic remains one tap away when you want
            a sandbox.
          </p>

          <h2>Goals, not cheap traps</h2>
          <p>
            Levels are authored as targets on the familiar board. We do not hide the win condition.
            You can see what the level asks before you burn boosters. Difficulty ramps with
            intention: early nodes teach space, later nodes demand looking at the whole tray.
          </p>
          <p>
            Continue and boosters still exist. They are for a level you almost had, not a requirement
            to pay-to-clear the path. Kid Mode plays the same campaign without the 13+ social layer.
          </p>

          <h2>Stars and the map</h2>
          <p>
            Stars are a quality rating on that level’s goal, not a second currency that gates the
            next hundred nodes behind a purchase. The map is a long walk — one thousand reasons to
            keep placing gems — which is the opposite of a three-level tutorial dressed as a
            campaign.
          </p>

          <h2>Offline campaign</h2>
          <p>
            Once levels are on the device, you can push the path without Wi‑Fi. That matches the{' '}
            <Link href="/offline">offline block puzzle</Link> promise. Cloud extras (leaderboard,
            friends) are unrelated to whether level 437 will load in a tunnel.
          </p>
          <p>
            Pair Adventure with the <Link href="/daily">daily puzzle</Link> if you want a short
            ritual plus a long road. Download from the{' '}
            <Link href="/download">Google Play page</Link> when you are ready to walk the meadow.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.adventure, screens.goals, screens.complete]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
