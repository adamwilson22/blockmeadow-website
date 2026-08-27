import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../../marketing.module.css';

export const metadata = pageMeta({
  title: 'Line-clear tips for Block Meadow',
  description:
    'Block Meadow line-clear tips: leave space, avoid blocking both axes, save one-cell gaps, and look at all three gem pieces before you place.',
  path: '/guides/line-clear-tips',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Line-clear tips', href: '/guides/line-clear-tips' },
];

export default function LineClearTipsPage() {
  return (
    <MarketingPage
      eyebrow="Guide"
      title="Line-clear tips"
      subtitle="The jewel block puzzle rewards empty corridors. These habits keep the 8×8 board playable longer."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Every Classic or Adventure stall starts as a hole you could not fill. Line-clear block
            puzzle is less about flashy last placements and more about not painting yourself into a
            corner. Use this with the basic rules in <Link href="/how-to-play">how to play</Link>.
          </p>

          <h2>Look at all three pieces first</h2>
          <p>
            The tray is information. Dropping the “obvious” first shape can waste the only piece that
            sealed a column. Spend two seconds on all three gems, then move.
          </p>

          <h2>Do not block both axes</h2>
          <p>
            A fat piece in the center can freeze rows and columns at once. Prefer edges when a shape
            is awkward. Keep at least one long corridor — a nearly empty row or column — as an escape
            hatch for large bars.
          </p>

          <h2>One-cell gaps are debt</h2>
          <p>
            Isolated holes need a 1×1. If you do not have one in the tray, you just created a cell
            that may sit dead until game over. Fill or avoid creating single gaps unless you already
            see the 1×1 coming.
          </p>

          <h2>Clear more than one line when you can</h2>
          <p>
            Multi-line placements score more and open space. Sometimes waiting one move for a double
            clear is better than a nervous single clear that leaves a worse shape.
          </p>

          <h2>Use the ghost preview</h2>
          <p>
            The faint outline is there so you do not mis-drop a gem by a cell. Combine it with undo
            (one is usually free) instead of panic-boosting.
          </p>

          <h2>Boosters are late-game tools</h2>
          <p>
            Hammer a truly stuck cell. Do not Bomb an open board. Swap when the tray is all awkward
            S-shapes and the grid is already tight. See <Link href="/guides/combos">combos</Link>{' '}
            before you spend a booster just to keep a streak that was already dying.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.classic, screens.learn]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
