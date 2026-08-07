import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Block Meadow — a premium offline jewel block puzzle for calm, focused play.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A meadow of crystal puzzles"
        subtitle="Block Meadow is an offline-first jewel block puzzle made for players who want beauty, fairness, and flow — not noise."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.wrap}`}>
          <article className={`panel ${styles.card}`}>
            <h2>Our intent</h2>
            <p>
              We built Block Meadow for the quiet moments — commute, evening wind-down, a few thoughtful
              placements that turn into a long combo. The board should feel premium. The difficulty should
              feel honest. The game should work even when the network doesn&apos;t.
            </p>
          </article>
          <article className={`panel ${styles.card}`}>
            <h2>Press & partnerships</h2>
            <p>
              For assets, preview builds, or listing questions, reach us at{' '}
              <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
            </p>
            <div className={styles.actions}>
              <Link href="/support" className="btn btn-secondary">
                Support center
              </Link>
              <Link href="/privacy" className="btn btn-ghost">
                Privacy policy
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
