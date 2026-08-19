import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import styles from './support.module.css';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Block Meadow support, FAQ, and contact for account, purchases, and gameplay help.',
};

const faqs = [
  {
    q: 'Where do I download Block Meadow?',
    a: 'On Google Play for Android (com.playblockmeadow.app). Use Get the game in the header, or search Block Meadow.',
  },
  {
    q: 'Does the game work offline?',
    a: 'Yes. Core puzzle gameplay is offline-first. Ads, purchases, and cloud leaderboard features need a connection.',
  },
  {
    q: 'How do purchases and VIP work?',
    a: 'In-app purchases are handled by Google Play. If a purchase fails to unlock, email us from the same Google account used in Play Store.',
  },
  {
    q: 'How do I delete my account / data?',
    a: (
      <>
        Follow the steps on our <Link href="/delete-account">Delete Account</Link> page. Leaderboard,
        username/friends data (13+), and local progress can be removed on request.
      </>
    ),
  },
];

const checklist = [
  'Device model',
  'Android version',
  'What happened + screenshots if useful',
  'Play order ID (for purchases)',
];

export default function SupportPage() {
  const mailHref = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Block Meadow support')}`;

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We’re here to help"
        subtitle="Gameplay questions, purchase issues, privacy requests — send a short note and we’ll respond as soon as we can."
      />
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.layout}`}>
          <aside className={styles.aside}>
            <div className={`panel ${styles.contact}`}>
              <p className={styles.kicker}>Contact</p>
              <h2>Email the team</h2>
              <a className={styles.email} href={mailHref}>
                {site.supportEmail}
              </a>
              <p className={styles.hint}>Helpful details to include:</p>
              <ul className={styles.checklist}>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className={`btn btn-primary ${styles.primary}`} href={mailHref}>
                Email support
              </a>
            </div>

            <div className={`panel ${styles.sideLinks}`}>
              <p className={styles.kicker}>Quick links</p>
              <Link href="/delete-account">Delete account / data</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
            </div>
          </aside>

          <div className={styles.faq}>
            <div className={styles.faqHead}>
              <h2>FAQ</h2>
              <p>Common answers before you write in.</p>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item) => (
                <details key={item.q} className={styles.item}>
                  <summary>
                    <span>{item.q}</span>
                    <span className={styles.chevron} aria-hidden />
                  </summary>
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
