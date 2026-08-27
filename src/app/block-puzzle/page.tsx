import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Jewel block puzzle for Android',
  description:
    'Block Meadow is a jewel block puzzle for Android: place gem shapes on an 8×8 board, clear lines, and play offline. Free on Google Play.',
  path: '/block-puzzle',
  keywords: ['jewel block puzzle', 'gem block puzzle', 'block puzzle Android'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Jewel block puzzle', href: '/block-puzzle' },
];

export default function BlockPuzzlePage() {
  return (
    <MarketingPage
      eyebrow="Genre"
      title="Jewel block puzzle for Android"
      subtitle="The mechanic is classic block puzzle. The presentation is crystal — gem tiles, calm motion, and an 8×8 board built for focus."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            A block puzzle asks you to place shapes so full lines disappear. Wood-block and “blast”
            variants use the same grammar: tray of pieces, grid, line clear, game over when nothing
            fits. Block Meadow is that grammar with a jewel skin — readable gem colors, a meadow
            atmosphere, and modes that are not all the same endless run.
          </p>
          <p>
            If you searched for a jewel block puzzle or gem block puzzle on Android, this is the
            product: package <strong>com.playblockmeadow.app</strong>, free on{' '}
            <Link href="/download">Google Play</Link>.
          </p>

          <h2>What you actually do</h2>
          <p>
            You get three gem pieces (sometimes four). You drag them onto an 8×8 board. Fill a row or
            a column and it clears. Chain clears to combo. There is no gravity and no falling timer in
            Classic — you think, then place. That is the difference from Tetris-likes, and the overlap
            with games people describe as block puzzle or block blast.
          </p>
          <p>
            We do not pretend to be those other titles. We built an original board, original adventure
            goals, and original presentation. The search language is shared because the mechanic is
            shared: place blocks, clear lines.
          </p>

          <h2>Why jewels instead of wood</h2>
          <p>
            Wood palettes can muddy on a bright phone. Faceted gems stay distinct even in a crowded
            late-game board. Color-blind patterns sit on top of hues if you enable them in Settings.
            Themes change atmosphere without changing the rules, so a “gem block puzzle” session can
            look like sunset or neon without a new tutorial.
          </p>

          <h2>Four modes, one puzzle language</h2>
          <p>
            <Link href="/classic">Classic</Link> is untimed high score.{' '}
            <Link href="/adventure">Adventure</Link> is 1,000 goal levels.{' '}
            <Link href="/daily">Daily</Link> is one seeded board per day.{' '}
            <Link href="/blitz">Blitz</Link> is the clock. If you only want the pure jewel block
            puzzle, start Classic. If you want a path, start Adventure.
          </p>
          <p>
            Core play is <Link href="/offline">offline</Link>. You can sit on a train without a
            signal and still place gems. Ads and the shop wait for a connection; they do not own the
            board.
          </p>

          <h2>Families and fair ads</h2>
          <p>
            Mixed-audience means a birth-year gate. Kid Mode is a jewel block puzzle without friends
            search. Ads are non-personalized; under-13 traffic is child-directed. That is policy, not
            a slogan — details on the <Link href="/family">family page</Link> and{' '}
            <Link href="/privacy">privacy policy</Link>.
          </p>
          <p>
            Learn the rules in <Link href="/how-to-play">how to play</Link>, then download and keep a
            board open until the tray cannot fit.
          </p>
          <div className={m.shots}>
            <ScreenshotGrid shots={[screens.gameplay, screens.classic]} />
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
