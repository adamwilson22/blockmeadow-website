import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Block Meadow privacy policy — mixed-audience family game, ads, leaderboards, and optional 13+ social features.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${site.updated}. This policy explains what Block Meadow collects, why, and how families can control it.`}
      />
      <section className={`section ${styles.section}`}>
        <div className={`container legal-prose ${styles.doc}`}>
          <p>
            Block Meadow (“we”, “our”, “the App”) is an offline-first jewel block puzzle for Android
            (package ID {site.packageId}). Core gameplay works without a network connection. Some
            optional features use Google Play, Firebase, AdMob, and RevenueCat.
          </p>
          <p>
            Block Meadow is a <strong>mixed-audience</strong> family game. A one-time in-app age gate
            (birth year) routes players into <strong>Kid Mode</strong> (under 13) or{' '}
            <strong>Full Mode</strong> (13+). Kid Mode never unlocks friends, usernames, or social
            push notifications.
          </p>

          <h2>1. Information we collect</h2>
          <ul>
            <li>
              <strong>Local game data (on device)</strong> — scores, adventure progress, settings,
              cosmetics, booster inventory, daily streak, and similar progress stored in on-device
              preferences. This stays on the device unless you use optional cloud features or export
              a save snapshot.
            </li>
            <li>
              <strong>Age-gate data</strong> — a birth year and the resulting audience mode (child or
              13+) stored locally so we can apply the correct ads and social settings.
            </li>
            <li>
              <strong>Anonymous account</strong> — if online features run, Firebase Authentication may
              create an anonymous user ID. We do not require Google, email, or phone sign-in to play.
            </li>
            <li>
              <strong>Leaderboard profile (all audiences, optional)</strong> — display name, country
              / region code, and scores you choose to publish, stored in Cloud Firestore.
            </li>
            <li>
              <strong>Social profile (13+ only, opt-in)</strong> — a unique username, friend requests,
              confirmed friends (“My Squad”), beat-the-score challenge feed, and (if notifications
              are enabled) a Firebase Cloud Messaging device token so we can send friend-request and
              challenge alerts. There is <strong>no free-text chat</strong>.
            </li>
            <li>
              <strong>Purchases</strong> — handled by Google Play and RevenueCat. We receive
              entitlement / purchase validation to unlock coins, gems, boosters, Remove Ads, Starter
              Pack, and VIP. We do not store your full payment card details.
            </li>
            <li>
              <strong>Advertising</strong> — Google AdMob may use device identifiers for frequency
              capping and fraud prevention. Ads are <strong>non-personalized by default</strong> for
              every audience. We do not sell personal information or use ads data to build
              remarketing profiles for Block Meadow.
            </li>
            <li>
              <strong>Support email</strong> — if you write to {site.supportEmail}, we process the
              message content you send to resolve the request.
            </li>
            <li>
              <strong>Diagnostics</strong> — the App currently logs events locally for debugging. We
              do not currently operate Firebase Analytics or Crashlytics in production. If that
              changes, this policy will be updated.
            </li>
          </ul>

          <h2>2. How we use information</h2>
          <ul>
            <li>Provide gameplay, save progress, and unlock purchased content.</li>
            <li>Apply Kid Mode vs Full Mode (ads configuration and social feature access).</li>
            <li>Operate optional leaderboards and, for 13+, friends / squad / score challenges.</li>
            <li>Show ads unless you purchase Remove Ads, Starter Pack, or an active VIP plan.</li>
            <li>Restore entitlements via Google Play / RevenueCat.</li>
            <li>Respond to privacy, support, and account-deletion requests.</li>
          </ul>

          <h2>3. Advertising (Families / COPPA)</h2>
          <p>
            Ads are served only by <strong>Google AdMob</strong> (a Google Play certified ad network).
            We do not use other ad mediation networks.
          </p>
          <ul>
            <li>
              <strong>All players:</strong> non-personalized ads (NPA). Device identifiers may be used
              for capping and fraud prevention only.
            </li>
            <li>
              <strong>Kid Mode (under 13):</strong> child-directed treatment, under-age-of-consent
              tagging, and a maximum ad content rating of G. Social features and social push are
              off.
            </li>
            <li>
              <strong>Full Mode (13+):</strong> standard (non-child-directed) AdMob configuration with
              a maximum content rating of T. Social features remain opt-in (username + friends).
            </li>
          </ul>
          <p>
            AdMob initializes only after you accept the in-app privacy notice. Core puzzle play works
            if ads fail to load or you are offline.
          </p>

          <h2>4. Children, COPPA, GDPR &amp; Google Play Families</h2>
          <p>
            We designed Kid Mode for Google Play Families policy, COPPA, and child-directed GDPR
            expectations: no social graph, no chat, no social push, and child-safe ads. A parent or
            guardian may contact us about a child&apos;s data. We do not sell personal information.
          </p>
          <p>
            Depending on your region, we rely on performance of a contract (providing the game),
            legitimate interests (security, fraud prevention, product operation), and consent where
            required (privacy notice, optional social features, notification permission).
          </p>

          <h2>5. Sharing</h2>
          <p>
            We do not sell your personal information. We use processors to run the Service:
          </p>
          <ul>
            <li>Google Play (distribution, billing)</li>
            <li>Google Firebase (anonymous auth, Firestore, Cloud Functions, Cloud Messaging)</li>
            <li>Google AdMob (ads)</li>
            <li>RevenueCat (in-app purchase entitlement checks)</li>
          </ul>
          <p>Those providers process data under their own terms and privacy policies.</p>

          <h2>6. Retention</h2>
          <p>
            Local data remains until you clear app storage or uninstall. Cloud leaderboard and social
            profiles are kept while the feature is active, or until you request deletion. FCM tokens
            are kept while notifications are enabled. Support emails are retained as needed to
            resolve requests and meet legal obligations. Purchase records remain with Google Play.
          </p>

          <h2>7. Your rights &amp; deletion</h2>
          <p>
            You may request access or deletion of cloud-associated data. See{' '}
            <Link href="/delete-account">Delete Account</Link> for instructions, or email{' '}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. You can also turn off
            notifications in Settings, and uninstall or clear app storage to remove local progress.
          </p>

          <h2>8. International transfers</h2>
          <p>
            Service providers may process data in other countries (including the United States).
            Where required, those providers apply their own safeguards.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update this policy. The “Last updated” date at the top will change when we do.
            Continued use after an update means you accept the revised policy where permitted by law.
          </p>

          <h2>10. Contact</h2>
          <p>
            Privacy questions: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
            <br />
            Website: <a href={site.url}>{site.domain}</a>
            <br />
            App: <a href={site.playStoreUrl}>{site.packageId}</a>
          </p>
        </div>
      </section>
    </>
  );
}
