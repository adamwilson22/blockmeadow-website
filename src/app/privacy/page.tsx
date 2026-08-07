import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Block Meadow privacy policy — how we collect, use, and protect player data.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${site.updated}. This policy explains what Block Meadow collects and why.`}
      />
      <section className={`section ${styles.section}`}>
        <div className={`container legal-prose ${styles.doc}`}>
          <p>
            Block Meadow (“we”, “our”, “the App”) is an offline-first puzzle game for Android. We design
            the product to keep most progress on your device. Some optional features use network services.
          </p>

          <h2>1. Information we collect</h2>
          <ul>
            <li>
              <strong>Local game data</strong> — scores, levels, settings, cosmetics, and inventory stored on
              your device.
            </li>
            <li>
              <strong>Optional cloud profile</strong> — if you use the leaderboard, we may store an anonymous
              player ID, display name, country code, and score data via Firebase Authentication (anonymous)
              and Cloud Firestore.
            </li>
            <li>
              <strong>Purchases</strong> — handled by Google Play. We receive purchase validation signals to
              unlock products; we do not store your full payment card details.
            </li>
            <li>
              <strong>Advertising & analytics</strong> — when ads or analytics SDKs are enabled, those providers
              may collect device identifiers, coarse location, and interaction data under their own policies
              (for example Google AdMob / Firebase).
            </li>
            <li>
              <strong>Support email</strong> — if you contact {site.supportEmail}, we process the message
              content you send to help resolve your request.
            </li>
          </ul>

          <h2>2. How we use information</h2>
          <ul>
            <li>Provide gameplay, save progress, and unlock purchased content.</li>
            <li>Operate optional leaderboards and related fairness checks.</li>
            <li>Show ads (unless you purchase an ad-free / VIP option where offered).</li>
            <li>Improve stability, balance, and support quality.</li>
            <li>Respond to privacy and account deletion requests.</li>
          </ul>

          <h2>3. Legal bases (where applicable)</h2>
          <p>
            Depending on your region, we rely on performance of a contract (providing the game), legitimate
            interests (security, product improvement), and consent (where required for advertising / analytics
            identifiers).
          </p>

          <h2>4. Sharing</h2>
          <p>
            We do not sell your personal information. We use processors such as Google (Play, Firebase,
            AdMob) to run core services. Those providers process data under their terms and privacy policies.
          </p>

          <h2>5. Retention</h2>
          <p>
            Local data remains until you clear app storage or uninstall. Cloud leaderboard profiles are kept
            while the feature is active, or until you request deletion. Support emails are retained as needed
            to resolve requests and meet legal obligations.
          </p>

          <h2>6. Children</h2>
          <p>
            Block Meadow is not directed at children under 13 (or the equivalent minimum age in your
            country). If you believe a child provided personal data, contact us and we will delete it.
          </p>

          <h2>7. Your rights & deletion</h2>
          <p>
            You may request access or deletion of cloud-associated data. See{' '}
            <Link href="/delete-account">Delete Account</Link> for instructions, or email{' '}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>

          <h2>8. International transfers</h2>
          <p>
            Service providers may process data in other countries. Where required, appropriate safeguards
            are applied by those providers.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update this policy. The “Last updated” date at the top will change when we do. Continued
            use after an update means you accept the revised policy where permitted by law.
          </p>

          <h2>10. Contact</h2>
          <p>
            Privacy questions: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
            <br />
            Website: <a href={site.url}>{site.domain}</a>
          </p>
        </div>
      </section>
    </>
  );
}
