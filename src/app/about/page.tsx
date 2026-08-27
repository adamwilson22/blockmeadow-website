import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import styles from './about.module.css';

export const metadata = pageMeta({
  title: 'About Block Meadow, the jewel block puzzle',
  description:
    'About Block Meadow — a premium offline jewel block puzzle for Android. Fair difficulty, crystal presentation, and mixed-audience Kid Mode.',
  path: '/about',
  keywords: ['about Block Meadow', 'jewel block puzzle', 'offline puzzle Android'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default function AboutPage() {
  return (
    <MarketingPage
      eyebrow="About"
      title="A meadow of crystal puzzles"
      subtitle="Block Meadow is an offline-first jewel block puzzle made for players who want beauty, fairness, and flow — not noise."
      crumbs={crumbs}
    >
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.wrap}`}>
          <article className={`panel ${styles.card}`}>
            <h2>Our intent</h2>
            <p>
              We built Block Meadow for the quiet moments — commute, evening wind-down, a few thoughtful
              placements that turn into a long combo. The board should feel premium. The difficulty should
              feel honest. The game should work even when the network doesn&apos;t.
            </p>
            <p style={{ marginTop: '0.9rem' }}>
              The loop is simple on purpose: an 8×8 grid, gem-shaped blocks, line clears, and combos. Around
              that we added four modes — Classic, Adventure, Daily, and Blitz — so the same jewel block
              puzzle can be a five-minute habit or a thousand-level campaign. Offline-first means the core
              session never holds your play hostage to Wi‑Fi.
            </p>
          </article>
          <article className={`panel ${styles.card}`}>
            <h2>The game, in facts</h2>
            <p>
              Block Meadow is an Android puzzle published as package{' '}
              <strong>{site.packageId}</strong>. It is free to download on{' '}
              <a href={site.playStoreUrl}>Google Play</a>. Optional purchases (coins, cosmetics, Remove Ads,
              VIP) go through Play Billing. Mixed-audience families get a one-time age gate: Kid Mode for
              under 13, Full Mode for 13+.
            </p>
            <p style={{ marginTop: '0.9rem' }}>
              We do not invent social pressure for children. Kid Mode has no friends list, no username
              search, and no beat-the-score pings — stickers and local play instead. Ads, when shown, are
              non-personalized; Kid Mode is child-directed. The full{' '}
              <Link href="/privacy">privacy policy</Link> and <Link href="/family">family page</Link> spell
              that out.
            </p>
          </article>
          <article className={`panel ${styles.card}`}>
            <h2>Press &amp; partnerships</h2>
            <p>
              For assets, preview builds, or listing questions, reach us at{' '}
              <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. A short boilerplate and brand
              files live on the <Link href="/press">press kit</Link> page.
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
    </MarketingPage>
  );
}
