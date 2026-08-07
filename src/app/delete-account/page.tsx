import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from './delete.module.css';

export const metadata: Metadata = {
  title: 'Delete Account',
  description:
    'How to delete your Block Meadow account and associated cloud data. Required for Google Play users.',
};

export default function DeleteAccountPage() {
  const mailHref = `mailto:${site.supportEmail}?subject=${encodeURIComponent(
    'Block Meadow account deletion request',
  )}&body=${encodeURIComponent(
    'Please delete my Block Meadow cloud account / leaderboard data.\n\nDisplay name (if any):\nCountry (if shown on leaderboard):\nApproximate last play date:\nDevice model:\nAndroid version:\nAdditional notes:\n',
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Delete your account"
        subtitle="Request removal of Block Meadow cloud data tied to your anonymous game profile. Local progress can also be cleared on your device."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.layout}`}>
          <article className={`panel ${styles.card}`}>
            <h2>What gets deleted</h2>
            <ul>
              <li>Anonymous Firebase Auth identity associated with your cloud profile (when identifiable)</li>
              <li>Leaderboard / cloud score documents linked to that identity</li>
              <li>Display name and country code stored for ranking (if present)</li>
            </ul>
            <p className={styles.note}>
              Purchase records remain with Google Play. We cannot erase Google&apos;s billing history. Ads /
              analytics identifiers are controlled by device settings and Google services.
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
                Include your leaderboard display name (if you set one), country, device model, and roughly when
                you last played — so we can find the right record.
              </li>
              <li>
                We will confirm by email and delete matching cloud data within <strong>30 days</strong> (usually
                sooner).
              </li>
              <li>
                On your device, clear Block Meadow app storage or uninstall the app to remove local progress,
                settings, and inventory.
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
              If you never used cloud leaderboard features, there may be no server account to delete. Clearing
              app data or uninstalling removes local save data from that device.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
