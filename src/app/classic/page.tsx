import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Classic block puzzle — endless high score',
  description:
    'Classic mode in Block Meadow is an untimed jewel block puzzle. Place gems, clear lines, chase combos, and beat your best score on Android.',
  path: '/classic',
  keywords: ['classic block puzzle', 'endless block puzzle', 'high score puzzle'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Classic', href: '/classic' },
];

export default function ClassicPage() {
  return (
    <MarketingPage
      eyebrow="Classic"
      title="Classic block puzzle — endless high score"
      subtitle="No timer. Three gem pieces. An 8×8 board. Play until nothing fits, then try to beat the number."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Classic is the heart of Block Meadow. It is the jewel block puzzle without a clock and
            without a level goal. You place, you clear, you combo, you last as long as the tray still
            has a legal landing. Your best score can go to the optional leaderboard when you opt in.
          </p>
          <p>
            New players should skim <Link href="/how-to-play">how to play</Link> first. Everyone else
            can open Classic from Home and start dropping gems.
          </p>

          <h2>The loop</h2>
          <p>
            The tray offers three shapes. You study all three. You drop the one that either completes
            a line or keeps the board least ugly. The tray refills. Combos grow if you clear on
            consecutive moves. One free undo covers a slip; later undos and hints may cost coins or a
            rewarded ad you choose to watch.
          </p>
          <p>
            Game over is honest: if none of the current pieces fit, the run ends. Continue may offer
            a rescue. Sharing a score card is optional and stays off in Kid Mode social surfaces.
          </p>

          <h2>Why Classic, not only Adventure</h2>
          <p>
            Adventure is excellent when you want a destination. Classic is the mode that still works
            at 1 a.m. when you do not want a star rating staring at you. It is also where combo
            theory lives — the same board as <Link href="/blitz">Blitz</Link>, minus the panic of a
            countdown.
          </p>
          <p>
            Play it <Link href="/offline">offline</Link>. High score on device does not need Wi‑Fi.
            Uploading to the global board does.
          </p>

          <h2>Assists without nagging</h2>
          <p>
            Ghost preview, undo, hint, Hammer, Bomb, Swap, row and column clears — they exist so a
            late-game snarl is not an instant quit. They do not pop every ten seconds. You invoke
            them. That is the difference between a helper and an interruption.
          </p>
          <p>
            For placement hygiene, read <Link href="/guides/line-clear-tips">line-clear tips</Link>{' '}
            and <Link href="/guides/combos">combo chaining</Link>.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.classic, screens.gameplay]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
