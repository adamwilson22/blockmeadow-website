import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Block Meadow terms of service — rules for using the game and this website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${site.updated}. Please read these terms before using Block Meadow.`}
      />
      <section className={`section ${styles.section}`}>
        <div className={`container legal-prose ${styles.doc}`}>
          <p>
            These Terms of Service (“Terms”) govern your use of the Block Meadow mobile application and
            website at {site.domain} (together, the “Service”). By downloading, accessing, or using the
            Service, you agree to these Terms.
          </p>

          <h2>1. The Service</h2>
          <p>
            Block Meadow is a puzzle game with optional modes, cosmetics, boosters, VIP/ad-free options, and
            optional online features such as leaderboards. Features may change, improve, or be discontinued
            over time.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be able to form a binding contract in your jurisdiction and meet any age requirements of
            Google Play and applicable law. If you are under the age of majority, a parent or guardian must
            review and agree to these Terms.
          </p>

          <h2>3. License</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable license to use the App for
            entertainment on devices you own or control, subject to these Terms and Google Play’s terms.
          </p>

          <h2>4. Purchases</h2>
          <ul>
            <li>In-app purchases are processed by Google Play.</li>
            <li>Prices and availability may change.</li>
            <li>Refunds are handled under Google Play’s refund policies unless local law requires otherwise.</li>
            <li>Virtual items have no cash value outside the App and are not transferable.</li>
          </ul>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Cheat, reverse engineer, or exploit bugs to gain unfair advantage.</li>
            <li>Interfere with servers, leaderboards, or other players.</li>
            <li>Use offensive or illegal display names on public leaderboards.</li>
            <li>Use the Service for anything unlawful or harmful.</li>
          </ul>

          <h2>6. Accounts & deletion</h2>
          <p>
            Some features may use anonymous authentication. You can request deletion of cloud-associated data
            via our <Link href="/delete-account">Delete Account</Link> page.
          </p>

          <h2>7. Ads & third-party services</h2>
          <p>
            The free version may show ads. Third-party SDKs (for example ad and analytics providers) are
            governed by their own terms. See our <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            The App, website, brand, art, audio, and code are owned by us or our licensors. You may not copy,
            redistribute, or create derivative works except as allowed by law or with written permission.
          </p>

          <h2>9. Disclaimer</h2>
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
            IMPLIED, TO THE MAXIMUM EXTENT PERMITTED BY LAW. We do not guarantee uninterrupted or error-free
            operation.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL ARISING FROM YOUR
            USE OF THE SERVICE.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate access if you violate these Terms or abuse the Service. You may stop
            using the App at any time and uninstall it.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may update these Terms. Continued use after changes become effective constitutes acceptance
            where permitted by law.
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
