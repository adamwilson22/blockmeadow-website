import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Daily block puzzle challenge',
  description:
    'Play Block Meadow’s daily block puzzle: a seeded jewel board each day, plus a 7-day reward calendar. Free on Google Play for Android.',
  path: '/daily',
  keywords: ['daily block puzzle', 'daily puzzle challenge', 'daily jewel puzzle'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Daily', href: '/daily' },
];

export default function DailyPage() {
  return (
    <MarketingPage
      eyebrow="Daily"
      title="Daily block puzzle challenge"
      subtitle="One seeded jewel board each calendar day — the same puzzle for everyone — plus a 7-day gift calendar if you like a streak."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Daily mode is for people who want a short, fair jewel block puzzle and then get on with
            their day. The board is seeded: players who open the Daily on the same date sit down to
            the same layout. Compare notes later if you want; the puzzle itself is not a random
            unfair spike.
          </p>
          <p>
            It sits beside Classic, not instead of it. Finish the daily, then wander{' '}
            <Link href="/adventure">Adventure</Link> or chase a{' '}
            <Link href="/classic">Classic</Link> high score.
          </p>

          <h2>Why a seed matters</h2>
          <p>
            Random endless modes are great until you blame the shuffle. A daily seed means “I failed
            this board” is about your placements, not a hidden worse bag of pieces than your friend
            got. That is the ritual: same gem shapes, your decisions.
          </p>

          <h2>Daily reward calendar</h2>
          <p>
            Separate from the puzzle, a 7-day gift calendar hands coins, boosters, or small extras if
            you check in. Streaks are a nudge, not a punishment loop. Miss a day and you still have
            Classic. We would rather you open the app because the board feels good.
          </p>
          <p>
            There is also a daily challenge goal on Home when one is armed — a badge when something
            new is waiting. Complete it for a reward. Details live in the player-facing Home cards
            in the app.
          </p>

          <h2>Offline and families</h2>
          <p>
            After the day’s seed is on device, you can finish the puzzle{' '}
            <Link href="/offline">offline</Link>. Kid Mode plays Daily without friends pings. Ads,
            if shown, stay non-personalized.
          </p>
          <p>
            New to line clears? <Link href="/how-to-play">How to play</Link> takes five minutes.
            Ready to install? <Link href="/download">Download Block Meadow</Link>.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.home, screens.gameplay]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
