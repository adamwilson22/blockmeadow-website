import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import styles from './features.module.css';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore Block Meadow features: classic puzzle, adventure levels, daily challenges, offline play, boosters, and themes.',
};

const groups = [
  {
    title: 'Gameplay',
    items: [
      ['Classic Mode', 'Endless 8×8 jewel puzzle with combos, undo, and high-score chase.'],
      ['Adventure', '1,000 levels with goals — lines, scores, combos, and crystal objectives.'],
      ['Daily Challenge', 'A seeded puzzle each day to keep the habit fresh.'],
      ['Blitz', 'Timed runs for players who want pressure and pace.'],
    ],
  },
  {
    title: 'Feel & polish',
    items: [
      ['Offline-first', 'Core sessions work without a connection.'],
      ['Crystal presentation', 'Premium gem tiles, themes, and smooth motion.'],
      ['Assists that respect flow', 'Hints, boosters, and continues without constant interruption.'],
      ['Accessibility options', 'Reduced motion, larger targets, and readability-minded UI.'],
    ],
  },
  {
    title: 'Progression',
    items: [
      ['Global leaderboard', 'Compete with anonymous name + country after setup.'],
      ['Friends (13+)', 'Username search, My Squad, and beat-the-score challenges. Hidden in Kid Mode.'],
      ['Achievements', 'Milestones that reward mastery over time.'],
      ['Shop & VIP', 'Cosmetics, boosters, and optional ad-free comfort.'],
      ['Daily rewards', 'Come back for streaks, spins, and soft progression.'],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for deep focus"
        subtitle="Everything in Block Meadow is tuned for satisfying placement, fair difficulty, and a premium jewel aesthetic."
      />
      <section className={`section ${styles.section}`}>
        <div className="container">
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
    </>
  );
}
