import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import { pageMeta } from '@/lib/seo';
import { screens } from '@/lib/site';
import styles from './features.module.css';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Block puzzle features — Classic, Adventure, Blitz, Daily',
  description:
    'Explore Block Meadow features: classic jewel block puzzle, 1,000 adventure levels, daily challenges, Blitz, offline play, boosters, and board themes.',
  path: '/features',
  keywords: ['block puzzle features', 'adventure block puzzle', 'offline puzzle', 'Blitz'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
];

const groups = [
  {
    title: 'Gameplay',
    items: [
      [
        'Classic Mode',
        'Endless 8×8 jewel puzzle with combos, undo, and a high-score chase. No timer — think, place, and clear at your own pace. Open the Classic page for the full loop.',
      ],
      [
        'Adventure',
        '1,000 levels with goals — lines, scores, combos, and crystal objectives. Stars mark how well you finished. The map is a long campaign, not a single run.',
      ],
      [
        'Daily Challenge',
        'A seeded puzzle each day, the same board for everyone that calendar day. Pair it with the daily reward calendar so coming back feels worthwhile.',
      ],
      [
        'Blitz',
        'Timed runs for players who want pressure and pace. Score before the clock ends; a continue can add time when a run is worth saving.',
      ],
    ],
  },
  {
    title: 'Feel & polish',
    items: [
      [
        'Offline-first',
        'Core sessions work without a connection. Ads, the shop, and cloud ranking wait until you are online — the board itself does not.',
      ],
      [
        'Crystal presentation',
        'Premium gem tiles, themes, and smooth motion. Color-blind patterns and reduced motion live in Settings if you need them.',
      ],
      [
        'Assists that respect flow',
        'Hints, boosters, and continues without constant interruption. Undo is there for a mis-drop; Hammer, Bomb, Swap, and line clears wait in the tray.',
      ],
      [
        'Accessibility options',
        'Reduced motion, larger targets, tap-to-place, left-handed layout, and readability-minded UI so the jewel block puzzle stays comfortable.',
      ],
    ],
  },
  {
    title: 'Progression',
    items: [
      [
        'Global leaderboard',
        'Compete with an anonymous name and country after setup. Kid Mode stays off the public social graph.',
      ],
      [
        'Friends (13+)',
        'Username search, My Squad, and beat-the-score challenges. Hidden in Kid Mode — no chat, no stranger lists for under-13 players.',
      ],
      [
        'Achievements',
        'Milestones that reward mastery over time: clears, combos, adventure stars, and daily habits.',
      ],
      [
        'Shop & VIP',
        'Cosmetics, boosters, and optional ad-free comfort through Google Play. Restore purchases from Settings on a new device.',
      ],
      [
        'Daily rewards',
        'A 7-day gift calendar, streaks, and spins — soft reasons to return tomorrow without a hard paywall.',
      ],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <MarketingPage
      eyebrow="Features"
      title="Built for deep focus"
      subtitle="Everything in Block Meadow is tuned for satisfying placement, fair difficulty, and a premium jewel aesthetic — four modes on one 8×8 board."
      crumbs={crumbs}
    >
      <section className={`section ${styles.section}`}>
        <div className="container">
          <p className={m.prose} style={{ marginBottom: '2rem', maxWidth: '40rem' }}>
            Block Meadow is a jewel block puzzle: you place gem shapes, clear full rows and columns,
            and chase combos. Start with{' '}
            <Link href="/classic">Classic</Link>, climb{' '}
            <Link href="/adventure">Adventure</Link>, keep a{' '}
            <Link href="/daily">Daily</Link> habit, or race{' '}
            <Link href="/blitz">Blitz</Link>. New to the board? Read{' '}
            <Link href="/how-to-play">how to play</Link>.
          </p>
          <div className={m.shots} style={{ marginBottom: '2.5rem' }}>
            <ScreenshotGrid shots={[screens.gameplay, screens.adventure, screens.classic, screens.goals]} />
          </div>
          <div className={styles.groups}>
            {groups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <div className={styles.list}>
                  {group.items.map(([title, body]) => (
                    <article key={title} className={`panel ${styles.card}`}>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
