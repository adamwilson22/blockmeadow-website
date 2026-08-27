import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Blitz — timed block puzzle',
  description:
    'Blitz mode in Block Meadow is a timed jewel block puzzle: score before the clock ends, chain combos, and continue for extra seconds on Android.',
  path: '/blitz',
  keywords: ['timed block puzzle', 'blitz puzzle', 'fast block puzzle'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blitz', href: '/blitz' },
];

export default function BlitzPage() {
  return (
    <MarketingPage
      eyebrow="Blitz"
      title="Blitz — timed block puzzle"
      subtitle="Same 8×8 gem board, now against the clock. Fast clears, sharper decisions, a different kind of score chase."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Blitz is Classic’s impatient sibling. The jewel block puzzle rules do not change: place
            gems, clear rows and columns, chain combos. The timer does. You are scoring before time
            runs out, not surviving until the tray bricks.
          </p>
          <p>
            Play it when you have five loud minutes. Play{' '}
            <Link href="/classic">Classic</Link> when you want silence. Both are the same gem
            language.
          </p>

          <h2>Clock pressure, not cheap fail</h2>
          <p>
            The clock forces you to stop over-planning every cell. Combos still pay. A messy board
            still kills the run — only faster. Continue can add time (about ten seconds in the
            current design) so a hot streak is not wasted on a single freeze. That continue is
            optional; you can take the score and leave.
          </p>

          <h2>Boosters under time</h2>
          <p>
            Swap and Hammer feel different when seconds remain. Dumping a booster early is even more
            expensive than in Classic because you may need it for a last-second line. Ghost preview
            still works; your thumbs just move quicker.
          </p>

          <h2>Who Blitz is for</h2>
          <p>
            Score chasers, people who already know{' '}
            <Link href="/how-to-play">how to play</Link>, and anyone bored of untimed wood-block
            clones. It is not the onboarding mode. If the timer stresses you, stay in Classic or
            <Link href="/adventure"> Adventure</Link> — we will not hide those behind Blitz.
          </p>
          <p>
            Offline: the timer is local. You do not need Wi‑Fi to race.{' '}
            <Link href="/download">Get it on Google Play</Link> when you want the clock.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.gameplay, screens.classic]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
