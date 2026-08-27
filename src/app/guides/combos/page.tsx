import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../../marketing.module.css';

export const metadata = pageMeta({
  title: 'Combos in Block Meadow',
  description:
    'How combos work in Block Meadow: chain line clears on consecutive placements, read the combo meter, and save boosters for a streak worth keeping.',
  path: '/guides/combos',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Combos', href: '/guides/combos' },
];

export default function CombosPage() {
  return (
    <MarketingPage
      eyebrow="Guide"
      title="Combos"
      subtitle="Clear on back-to-back placements and the jewel block puzzle pays extra. The meter shows the streak; the board decides if you deserve it."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            A combo in Block Meadow is not a match-3 explosion. It is consecutive line-clearing
            placements. Drop a gem that completes a row, then another that completes a column before
            the streak resets, and the meter climbs. Words like COMBO x2 are feedback, not a separate
            mini-game.
          </p>
          <p>
            Classic and Blitz care the most because score is the point.{' '}
            <Link href="/adventure">Adventure</Link> sometimes asks for combo goals explicitly.
          </p>

          <h2>How the chain starts</h2>
          <p>
            You need a clear, then another clear on the next piece. If you place a gem that only
            fills space with no line, the combo drops. Plan the second clear before you take the
            first when you are hunting a high number.
          </p>

          <h2>Keep Combo offers</h2>
          <p>
            If a streak is about to break, the game may offer to keep it — sometimes via an optional
            rewarded ad. That is a choice. Taking it on a tiny x2 is rarely worth interrupting flow;
            taking it on a late Classic run can be.
          </p>

          <h2>Boosters vs the meter</h2>
          <p>
            Row Clear can manufacture a combo step. Using it early to “start” a streak you cannot
            continue wastes the item. Pair boosters with{' '}
            <Link href="/guides/line-clear-tips">line-clear hygiene</Link> so the board can actually
            accept the next gem.
          </p>

          <h2>Blitz vs Classic</h2>
          <p>
            In <Link href="/blitz">Blitz</Link> you have fewer seconds to set up a chain. Prefer
            obvious doubles. In Classic you can wait a placement for a cleaner two-line hit. Neither
            mode changes the combo math — only the patience you can afford.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.gameplay, screens.complete]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
