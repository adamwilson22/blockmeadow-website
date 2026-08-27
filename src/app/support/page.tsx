import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { breadcrumbJsonLd, faqJsonLd, graphJsonLd, pageMeta } from '@/lib/seo';
import { site, type FaqItem } from '@/lib/site';
import styles from './support.module.css';

export const metadata = pageMeta({
  title: 'Block Meadow help — download, offline, purchases',
  description:
    'Block Meadow support: how to download the jewel block puzzle, play offline, restore purchases, use Kid Mode, and delete your account.',
  path: '/support',
});

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Support', href: '/support' },
];

const faqs: FaqItem[] = [
  {
    q: 'Where do I download Block Meadow?',
    a: 'On Google Play for Android (com.playblockmeadow.app). Use Get it on Google Play in the header, open the download page, or search Block Meadow.',
  },
  {
    q: 'Does the game work offline?',
    a: 'Yes. Core jewel block puzzle play on the 8×8 board is offline-first. Ads, purchases, and the cloud leaderboard need a connection when you use them.',
  },
  {
    q: 'Do I have to pay to play?',
    a: 'No. The game is free to download. Coins, VIP, cosmetics, and Remove Ads are optional. You can finish Classic, Adventure, Daily, and Blitz without paying.',
  },
  {
    q: 'How do purchases and VIP work?',
    a: 'In-app purchases are handled by Google Play. If a purchase fails to unlock, open Settings → Restore purchases, then email us from the same Google account used in Play Store with the order ID.',
  },
  {
    q: 'Will I lose progress on a new phone?',
    a: 'Purchases restore with the same Play account. Cloud leaderboard and friends data follow the anonymous profile when we can match it. Local-only progress stays on the original device unless you signed into optional cloud features.',
  },
  {
    q: 'Is it safe for children?',
    a: 'Yes. Under-13 players get Kid Mode: no friends, no username search, no beat-the-score pings, child-directed ads, and a sticker album. See the family page for the full split.',
  },
  {
    q: 'How do I delete my account / data?',
    a: 'Follow the Delete Account page. We can remove leaderboard and 13+ friends data on request. Local progress is cleared by uninstalling or clearing app storage.',
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
      <JsonLd data={graphJsonLd([breadcrumbJsonLd(crumbs), faqJsonLd(faqs)])} />
      <PageHero
        eyebrow="Support"
        title="We’re here to help"
        subtitle="Gameplay questions, purchase issues, privacy requests — send a short note and we’ll respond as soon as we can."
      />
      <div className="container" style={{ paddingTop: '0.25rem' }}>
        <Breadcrumbs items={crumbs} />
      </div>
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
              <Link href="/download">Download on Google Play</Link>
              <Link href="/how-to-play">How to play</Link>
              <Link href="/family">Kid Mode / family</Link>
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
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
