import Image from 'next/image';
import Link from 'next/link';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';
import { PlayCtaBand } from '@/components/PlayCtaBand';
import { ScreenshotGrid } from '@/components/ScreenshotGrid';
import {
  faqJsonLd,
  graphJsonLd,
  pageMeta,
  softwareApplicationJsonLd,
} from '@/lib/seo';
import { screens, site, type FaqItem } from '@/lib/site';
import styles from './page.module.css';

export const metadata = pageMeta({
  title: site.homeTitle,
  description: site.description,
  path: '/',
  absoluteTitle: true,
  keywords: [
    'jewel block puzzle',
    'block puzzle Android',
    'offline block puzzle',
    'gem block puzzle',
    'Block Meadow',
  ],
});

const modes = [
  {
    href: '/classic',
    label: 'Classic',
    title: 'Endless high-score flow',
    body: 'Drop jewel blocks on an 8×8 board, clear rows and columns, and ride combo chains as far as you can.',
  },
  {
    href: '/adventure',
    label: 'Adventure',
    title: '1,000 goal-driven levels',
    body: 'Clear lines, hit score targets, land combos, and shatter crystals through a long campaign built for mastery.',
  },
  {
    href: '/daily',
    label: 'Daily',
    title: 'A fresh puzzle each day',
    body: 'One seeded challenge every day — perfect for a short, focused ritual that still feels new.',
  },
  {
    href: '/blitz',
    label: 'Blitz',
    title: 'Timed pressure runs',
    body: 'Race the clock when you want sharper decisions, faster clears, and a different kind of score chase.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Place the jewels',
    body: 'Drag gem blocks onto the board. Every shape matters — leave space wisely.',
  },
  {
    n: '02',
    title: 'Clear full lines',
    body: 'Fill a row or column to clear it. Chain clears to grow your combo streak.',
  },
  {
    n: '03',
    title: 'Chase the flow',
    body: 'Use undo, hints, and boosters when you need them — then get back into the rhythm.',
  },
];

const comforts = [
  {
    title: 'Offline-first sessions',
    body: 'Core puzzle play works without Wi‑Fi. Ideal for travel, queues, and quiet evenings.',
  },
  {
    title: 'Assists that respect focus',
    body: 'Hints, undo, continues, and boosters stay available without interrupting every move.',
  },
  {
    title: 'Crystal presentation',
    body: 'Premium gem tiles, board themes, soft motion, and a calm visual language made for long sessions.',
  },
  {
    title: 'Fair difficulty',
    body: 'Simple to learn, hard to master. Adventure goals scale with intention — not cheap traps.',
  },
];

const extras = [
  {
    title: 'Leaderboard',
    body: 'Optional anonymous ranking with a display name and country when you want competition.',
  },
  {
    title: 'Themes & cosmetics',
    body: 'Dress the board in jewel skins and atmospheres that match your mood.',
  },
  {
    title: 'Shop & VIP',
    body: 'Boosters, cosmetics, and optional ad-free comfort — handled securely through Google Play.',
  },
  {
    title: 'Daily rewards',
    body: 'Come back for soft progression, streaks, and little reasons to return tomorrow.',
  },
];

const audiences = [
  {
    title: 'Casual unwinders',
    body: 'Short sessions, soft colors, and satisfying clears after a long day.',
  },
  {
    title: 'Score chasers',
    body: 'Combo theory, Blitz pressure, and Classic runs that keep raising the bar.',
  },
  {
    title: 'Level completers',
    body: 'Adventure’s thousand goals give structure when you want a clear path forward.',
  },
];

const homeFaqs: FaqItem[] = [
  {
    q: 'Is Block Meadow free?',
    a: 'Yes. Block Meadow is free to download on Google Play. Optional in-app purchases cover cosmetics, boosters, Remove Ads, and VIP. You can play the full jewel block puzzle without paying.',
  },
  {
    q: 'Do I need an internet connection?',
    a: 'No for core puzzle gameplay on the 8×8 board. Ads, purchases, and the cloud leaderboard need a connection when you use them. See the offline play page for details.',
  },
  {
    q: 'Where can I download it?',
    a: 'Block Meadow is on Google Play for Android (com.playblockmeadow.app). Search Block Meadow or use Get it on Google Play on this site.',
  },
  {
    q: 'Is it safe for children?',
    a: 'Yes. A one-time age gate routes under-13 players into Kid Mode: no friends, no username search, child-directed ads, and a sticker album instead of social features.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graphJsonLd([softwareApplicationJsonLd(), faqJsonLd(homeFaqs)])}
      />
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/brand/splash_screen.png"
            alt="Block Meadow jewel block puzzle board on Android"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          />
        </div>
        <div className={styles.heroShade} aria-hidden />
        <div className={`container ${styles.heroContent}`}>
          <div className="fade-up">
            <span className="badge">On Google Play</span>
            <Image
              src="/brand/logo_wordmark.png"
              alt=""
              width={720}
              height={420}
              className={styles.logo}
              priority
            />
            <h1 className={styles.heroH1}>Jewel block puzzle. Play offline.</h1>
            <p className="lead">
              Block Meadow is a jewel block puzzle for Android. Place gem blocks on an 8×8 board,
              clear rows and columns, chain combos, and play offline — free on Google Play.
            </p>
            <div className={styles.actions}>
              <a href={site.playStoreUrl} className="btn btn-primary">
                Get it on Google Play
              </a>
              <Link href="/how-to-play" className="btn btn-secondary">
                How to play
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.modes}`} id="modes">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Modes</p>
            <h2>One crystal board. Four ways to play.</h2>
            <p>Switch between endless flow, structured goals, a daily ritual, and timed Blitz — same beautiful grid.</p>
          </div>
          <div className={styles.modeGrid}>
            {modes.map((mode) => (
              <Link key={mode.label} href={mode.href} className={styles.modeCard}>
                <article>
                  <span>{mode.label}</span>
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.play}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it plays</p>
            <h2>Easy to start. Hard to put down.</h2>
            <p>Three beats — place, clear, flow — and the board does the rest.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.n} className={styles.step}>
                <span className={styles.stepNum}>{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.showcase}`}>
        <div className={`container ${styles.showcaseGrid}`}>
          <div className={styles.showcaseCopy}>
            <p className="eyebrow">The board</p>
            <h2>Jewel clarity on every placement.</h2>
            <p>
              Block Meadow is built around a premium 8×8 puzzle surface — gem blocks that feel tactile,
              clears that sparkle, and motion tuned for calm concentration rather than chaos.
            </p>
            <ul className={styles.bullets}>
              <li>Crystal tiles with readable colors and clean silhouettes</li>
              <li>Combo feedback that rewards smart sequencing</li>
              <li>Themes that change the mood without changing the rules</li>
            </ul>
            <Link href="/features" className="btn btn-secondary">
              Browse all features
            </Link>
          </div>
          <figure className={styles.showcaseVisual}>
            <Image
              src="/brand/splash_screen.png"
              alt="Block Meadow jewel puzzle atmosphere"
              width={960}
              height={1200}
              className={styles.showcaseImage}
            />
            <figcaption className={styles.showcaseCaption}>
              Crystal atmosphere from the Block Meadow world
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">See the board</p>
            <h2>Screens from the jewel block puzzle.</h2>
            <p>Home, Classic play, gem clears, and offline sessions — the same 8×8 grid in every mode.</p>
          </div>
          <ScreenshotGrid
            shots={[screens.home, screens.gameplay, screens.classic, screens.offline]}
          />
        </div>
      </section>

      <section className={`section ${styles.adventure}`}>
        <div className="container">
          <div className={styles.adventureInner}>
            <div>
              <p className="eyebrow">Adventure</p>
              <h2>A thousand reasons to keep placing.</h2>
              <p>
                Adventure mode turns the jewel board into a long journey — goals that ask for lines, scores,
                combos, and crystal clears. Progress feels earned, not rushed.
              </p>
            </div>
            <div className={styles.adventureStats}>
              <div>
                <strong>1,000</strong>
                <span>handcrafted level goals</span>
              </div>
              <div>
                <strong>4</strong>
                <span>play modes on one board</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Wi‑Fi required for core play</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Designed for focus</p>
            <h2>Calm strategy. Crystal clarity.</h2>
            <p>Everything around the board exists to protect flow — not interrupt it.</p>
          </div>
          <div className={styles.comfortGrid}>
            {comforts.map((item) => (
              <article key={item.title} className={styles.comfortItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.extras}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Progression</p>
            <h2>More than a single high score.</h2>
            <p>Optional systems for players who want cosmetics, competition, and daily rhythm.</p>
          </div>
          <div className={styles.extraGrid}>
            {extras.map((item) => (
              <article key={item.title} className={styles.extraItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who it’s for</p>
            <h2>Built for different puzzle moods.</h2>
            <p>Whether you have two minutes or twenty, Block Meadow meets you where you are.</p>
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map((item) => (
              <article key={item.title} className={styles.audienceItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className={`container ${styles.faqGrid}`}>
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Before you download.</h2>
            <p>Quick answers now — full help in Support when you need it.</p>
            <Link href="/support" className="btn btn-ghost">
              Visit support
            </Link>
          </div>
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      <section className="section" id="play">
        <div className="container">
          <PlayCtaBand />
        </div>
      </section>
    </>
  );
}
