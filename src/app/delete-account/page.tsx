import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from './delete.module.css';

export const metadata: Metadata = {
  title: 'Delete Account',
  description:
    'How to delete your Block Meadow account, leaderboard profile, friends data, and local progress.',
};

export default function DeleteAccountPage() {
  const mailHref = `mailto:${site.supportEmail}?subject=${encodeURIComponent(
    'Block Meadow account deletion request',
  )}&body=${encodeURIComponent(
    'Please delete my Block Meadow cloud data.\n\nUsername (if any):\nDisplay name:\nCountry shown on leaderboard:\nApproximate last play date:\nDevice model:\nAndroid version:\nI also want local progress removed (yes/no — I can uninstall myself):\nAdditional notes:\n',
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Delete your account"
        subtitle="Request removal of Block Meadow cloud data (leaderboard, username, friends). Local progress can be cleared on your device."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.layout}`}>
          <article className={`panel ${styles.card}`}>
            <h2>What gets deleted</h2>
            <ul>
              <li>Anonymous Firebase Auth identity tied to your cloud profile (when we can identify it)</li>
              <li>Leaderboard / score documents linked to that identity</li>
              <li>Display name and country code stored for ranking</li>
              <li>
                If you used Full Mode (13+): username registry entry, friend requests, squad edges,
                challenge feed items, and stored FCM push tokens
              </li>
            </ul>
            <p className={styles.note}>
              Purchase records remain with Google Play / RevenueCat. We cannot erase Google&apos;s
              billing history or restore a consumed coin pack. Ads identifiers are controlled by
              device settings and Google. Kid Mode players typically have no social documents to
              delete.
            </p>
          </article>

          <article className={`panel ${styles.card}`}>
            <h2>How to request deletion</h2>
            <ol className={styles.steps}>
              <li>
                Email <a href={mailHref}>{site.supportEmail}</a> with subject{' '}
                <em>Block Meadow account deletion request</em>.
              </li>
              <li>
                Include your username (if you set one), leaderboard display name, country, device
                model, and roughly when you last played — so we can find the right record.
              </li>
              <li>
                We will confirm by email and delete matching cloud data within <strong>30 days</strong>{' '}
                (usually sooner).
              </li>
              <li>
                On your device, open Settings or uninstall Block Meadow / clear app storage to remove
                local progress, boosters, and the age-gate choice.
              </li>
            </ol>
            <div className={styles.actions}>
              <a className="btn btn-primary" href={mailHref}>
                Email deletion request
              </a>
            </div>
          </article>

          <article className={`panel ${styles.card}`}>
            <h2>Local-only players</h2>
            <p>
              If you never used cloud leaderboard or friends features, there may be no server account
              to delete. Clearing app data or uninstalling removes local save data from that device.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
