import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { pageMeta } from '@/lib/seo';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Block Meadow guides',
  description:
    'Guides for Block Meadow: how to play, line-clear tips, combos, offline play, and your first jewel block puzzle session on Android.',
  path: '/guides',
  keywords: ['block puzzle guide', 'Block Meadow tips', 'how to play jewel puzzle'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
];

const cards = [
  {
    href: '/how-to-play',
    title: 'How to play',
    body: 'Board, tray, line clears, combos, game over, and helpers — the full rule set.',
  },
  {
    href: '/guides/first-game',
    title: 'Your first game',
    body: 'Age gate, onboarding, tutorial, and the welcome gift after you finish a round.',
  },
  {
    href: '/guides/line-clear-tips',
    title: 'Line-clear tips',
    body: 'Keep the board open, avoid one-cell traps, plan all three pieces before you drop.',
  },
  {
    href: '/guides/combos',
    title: 'Combos',
    body: 'Chain clears, read the meter, and save boosters for the streak you actually care about.',
  },
  {
    href: '/guides/offline-play',
    title: 'Offline play',
    body: 'What works in airplane mode and what still needs Google Play or a signal.',
  },
];

export default function GuidesIndexPage() {
  return (
    <MarketingPage
      eyebrow="Guides"
      title="Block Meadow guides"
      subtitle="Short reads for the jewel block puzzle — rules, first session, line clears, combos, and offline play."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className="container">
          <div className={m.cardGrid}>
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className={`panel ${m.card}`}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
