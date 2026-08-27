import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { breadcrumbJsonLd, graphJsonLd, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata = pageMeta({
  title: 'Terms of Service',
  description: 'Block Meadow terms of service — rules for playing, purchasing, and using social features.',
  path: '/terms',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Terms', href: '/terms' },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={graphJsonLd([breadcrumbJsonLd(crumbs)])} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${site.updated}. Please read these terms before using Block Meadow.`}
      />
      <div className="container" style={{ paddingTop: '0.25rem' }}>
        <Breadcrumbs items={crumbs} />
      </div>
      <section className={`section ${styles.section}`}>
        <div className={`container legal-prose ${styles.doc}`}>
          <p>
            These Terms of Service (“Terms”) govern your use of the Block Meadow mobile application
            ({site.packageId}) and website at {site.domain} (together, the “Service”). By
            downloading, accessing, or using the Service, you agree to these Terms.
          </p>

          <h2>1. The Service</h2>
          <p>
            Block Meadow is a jewel block puzzle with Classic, Adventure, Daily Challenge, and Blitz
            modes, plus optional cosmetics, boosters, VIP / ad-free options, daily rewards, and
            optional online features (leaderboards). Players 13+ who opt in may also use username
            friends, My Squad ranking, and beat-the-score challenges. Features may change, improve,
            or be discontinued over time.
          </p>

          <h2>2. Eligibility &amp; age gate</h2>
          <p>
            You must be able to form a binding contract in your jurisdiction and meet Google Play and
            applicable-law age rules. If you are under the age of majority, a parent or guardian must
            review and agree to these Terms.
          </p>
          <p>
            The App uses a one-time birth-year gate. Under-13 players receive Kid Mode (no social
            graph, no social push). Do not misrepresent age to unlock Full Mode.
          </p>

          <h2>3. License</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable license to use the
            App for entertainment on devices you own or control, subject to these Terms and Google
            Play’s terms.
          </p>

          <h2>4. Purchases</h2>
          <ul>
            <li>In-app purchases (coins, gems, boosters, Remove Ads, Starter Pack, VIP) are processed by Google Play and validated via RevenueCat.</li>
            <li>Prices and availability may change.</li>
            <li>Refunds are handled under Google Play’s refund policies unless local law requires otherwise.</li>
            <li>Virtual items and currency have no cash value outside the App and are not transferable between players.</li>
            <li>VIP and Remove Ads are entitlements. Restore purchases from Settings after reinstall.</li>
          </ul>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Cheat, reverse engineer, or exploit bugs to gain unfair advantage.</li>
            <li>Interfere with servers, leaderboards, friends, or other players.</li>
            <li>Use offensive, impersonating, or illegal display names or usernames.</li>
            <li>Harass others via friend requests or challenge spam.</li>
            <li>Use the Service for anything unlawful or harmful.</li>
          </ul>

          <h2>6. Accounts, social features &amp; deletion</h2>
          <p>
            Play does not require a traditional login. Optional features may create an anonymous
            Firebase identity. 13+ players may claim a unique username. Friendships and challenges
            are opt-in and can be declined or dismissed. There is no public chat.
          </p>
          <p>
            You can request deletion of cloud-associated data via our{' '}
            <Link href="/delete-account">Delete Account</Link> page.
          </p>

          <h2>7. Ads &amp; third-party services</h2>
          <p>
            The free version may show a banner, interstitial, and rewarded ads from Google AdMob
            (non-personalized by default). Third-party SDKs are governed by their own terms. See our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            The App, website, brand, art, audio, and code are owned by us or our licensors. You may
            not copy, redistribute, or create derivative works except as allowed by law or with
            written permission.
          </p>

          <h2>9. Disclaimer</h2>
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, TO THE MAXIMUM EXTENT PERMITTED BY LAW. We do not guarantee
            uninterrupted or error-free operation, including leaderboards, social features, ads, or
            purchases when you are offline.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL
            ARISING FROM YOUR USE OF THE SERVICE.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate access if you violate these Terms or abuse the Service
            (including leaderboard or social abuse). You may stop using the App at any time and
            uninstall it.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may update these Terms. Continued use after changes become effective constitutes
            acceptance where permitted by law.
          </p>

          <h2>13. Contact</h2>
          <p>
            Questions: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
        </div>
      </section>
    </>
  );
}
