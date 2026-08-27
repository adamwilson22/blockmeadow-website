import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'How to play Block Meadow',
  description:
    'Learn how to play Block Meadow: place gem blocks on an 8×8 board, clear rows and columns, chain combos, and use undo, hints, and boosters.',
  path: '/how-to-play',
  keywords: ['how to play block puzzle', 'jewel block puzzle rules', 'line clear puzzle'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'How to play', href: '/how-to-play' },
];

export default function HowToPlayPage() {
  return (
    <MarketingPage
      eyebrow="Guide"
      title="How to play Block Meadow"
      subtitle="Place gem blocks, clear full lines, and keep the 8×8 board alive. The same rules power Classic, Adventure, Daily, and Blitz."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Block Meadow is a jewel block puzzle. You are not racing a falling tetromino. You choose
            where each gem shape lands. When a row or a column fills completely, it disappears and you
            score. The run ends when none of the pieces in your tray can fit.
          </p>
          <p>
            Read this once and every mode makes sense. Then open{' '}
            <Link href="/classic">Classic</Link> for an untimed session, or{' '}
            <Link href="/guides/first-game">your first game</Link> if you have not finished onboarding.
          </p>

          <h2>The 8×8 board</h2>
          <p>
            The board is a square grid — eight cells across, eight down. Empty cells are legal landing
            spots. Occupied cells are already jewels. You cannot overlap pieces. A faint ghost preview
            shows where a dragged piece will sit so you can aim before you commit.
          </p>
          <p>
            Under the board sits the tray. You usually hold three pieces at a time. When the tray is
            empty, it refills automatically. VIP or a coin unlock can add a fourth slot so you see one
            extra shape while you plan.
          </p>

          <h2>Place gem blocks</h2>
          <p>
            Drag and drop is the default: press a piece, move it onto the board, release. In Settings you
            can switch to tap-to-place — tap the piece, then tap the cell — which is kinder for one-hand
            play. Left-handed layout moves controls if you need them on the other side.
          </p>
          <p>
            Always glance at all three tray pieces before you drop the first. A shape that looks awkward
            now might be the only piece that seals a line two moves later.
          </p>

          <h2>Clear rows and columns</h2>
          <p>
            Fill every cell in a row (left to right) or a column (top to bottom). That line vanishes and
            you earn points. Clearing more than one line with a single placement pays extra. Unlike some
            match games, color does not matter for the clear — only whether the line is full.
          </p>
          <p>
            The skill is negative space. Isolated one-cell holes are hard to fill. Keep corridors open.
            Our <Link href="/guides/line-clear-tips">line-clear tips</Link> go deeper on gaps and corners.
          </p>

          <h2>Combos</h2>
          <p>
            If you clear on consecutive placements, you build a combo. The meter on screen shows the
            streak. Words like COMBO x2 flash when you chain well. Combos are the fastest way to inflate
            a Classic or Blitz score. See <Link href="/guides/combos">how combos work</Link>.
          </p>

          <h2>Game over</h2>
          <p>
            When none of the current tray pieces can fit anywhere, the round ends. You see score and
            best. From there you can play again, share a score card, or — sometimes — continue: undo the
            last move or take a rescue, often by watching an optional rewarded ad.
          </p>

          <h2>Helpers (undo, hint, boosters)</h2>
          <p>
            Undo takes back the last placement. One undo is usually free; later undos may cost coins.
            Hint highlights a reasonable landing when you are stuck. Boosters change the board:
          </p>
          <ul>
            <li>Hammer — remove one cell you tap.</li>
            <li>Bomb — clear a small neighborhood.</li>
            <li>Swap — replace tray pieces.</li>
            <li>Row Clear / Column Clear — wipe an entire line.</li>
          </ul>
          <p>
            Save boosters for cramped boards. Spending them on an open grid wastes the resource that
            would have saved a high combo later.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.learn, screens.gameplay]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
