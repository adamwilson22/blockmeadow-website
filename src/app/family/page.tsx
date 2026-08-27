import Link from 'next/link';
import { MarketingPage } from '@/components/MarketingPage';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import m from '../marketing.module.css';

export const metadata = pageMeta({
  title: 'Family-friendly block puzzle (Kid Mode)',
  description:
    'Block Meadow Kid Mode: a family-friendly jewel block puzzle for under-13 players — no friends search, child-directed ads, stickers, offline play.',
  path: '/family',
  keywords: ['kids block puzzle', 'family puzzle game', 'Kid Mode'],
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Kid Mode', href: '/family' },
];

export default function FamilyPage() {
  return (
    <MarketingPage
      eyebrow="Family"
      title="Family-friendly block puzzle (Kid Mode)"
      subtitle="A one-time birth-year gate. Under 13 get Kid Mode. 13+ get Full Mode. The jewel block puzzle is the same board either way."
      crumbs={crumbs}
    >
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            Block Meadow is a mixed-audience family game. The first launch asks for birth year. That
            choice is meant to be honest: it picks the privacy and social surface, not a second
            “easy physics” game. Both modes place gem blocks on an 8×8 board and clear lines.
          </p>
          <p>
            This page matches the in-app privacy summary. The full legal text is the{' '}
            <Link href="/privacy">privacy policy</Link>.
          </p>

          <h2>Kid Mode (under 13)</h2>
          <ul>
            <li>No friends, no username search, no beat-the-score challenges, no chat (there is no public chat in any mode).</li>
            <li>Sticker album instead of social competition — local collection goals.</li>
            <li>Ads, when shown, are child-directed, under-age-of-consent tagged, max rating G, and non-personalized.</li>
            <li>Core puzzle, Adventure, Daily, Blitz, and offline play remain available.</li>
          </ul>
          <p>
            Parents can email {site.supportEmail} about a child’s data. Deletion steps are on{' '}
            <Link href="/delete-account">delete account</Link>.
          </p>

          <h2>Full Mode (13+)</h2>
          <p>
            Username friends, My Squad, optional leaderboard with a display name and country, and
            FCM if notifications are on. Ads stay non-personalized for everyone; Full Mode uses
            standard AdMob configuration with a max rating of T. Social is opt-in, not a forced wall.
          </p>

          <h2>What we collect (short)</h2>
          <p>
            Device identifiers for ad frequency and fraud. Anonymous Firebase IDs for cloud
            leaderboard if used. Purchase tokens via Play / RevenueCat. Crashlytics without name or
            email. We do not sell personal information. Kid Mode is designed around Play Families,
            COPPA, and child-directed GDPR expectations.
          </p>
          <p>
            The jewel block puzzle does not need a social graph. We kept it that way on purpose.
            Download from <Link href="/download">Google Play</Link>, read{' '}
            <Link href="/how-to-play">how to play</Link>, and pick the age gate truthfully.
          </p>
        </div>
      </section>
    </MarketingPage>
  );
}
