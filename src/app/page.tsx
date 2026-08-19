import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import styles from './page.module.css';

const modes = [
  {
    label: 'Classic',
    title: 'Endless high-score flow',
    body: 'Drop jewel blocks on an 8×8 board, clear rows and columns, and ride combo chains as far as you can.',
  },
  {
    label: 'Adventure',
    title: '1,000 goal-driven levels',
    body: 'Clear lines, hit score targets, land combos, and shatter crystals through a long campaign built for mastery.',
  },
  {
    label: 'Daily',
    title: 'A fresh puzzle each day',
    body: 'One seeded challenge every day — perfect for a short, focused ritual that still feels new.',
  },
  {
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

const homeFaqs = [
  {
    q: 'Is Block Meadow free?',
    a: 'Yes — the game will be free to download on Google Play, with optional in-app purchases for cosmetics, boosters, and VIP comfort.',
  },
  {
    q: 'Do I need an internet connection?',
    a: 'No for core puzzle gameplay. Ads, purchases, and cloud leaderboard features need a connection when you use them.',
  },
  {
    q: 'Where can I download it?',
    a: 'Block Meadow is on Google Play for Android. Search Block Meadow or use the Play Store button on this site.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden>
          <Image
            src="/brand/splash_screen.png"
            alt=""
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
              alt={site.name}
              width={720}
              height={420}
              className={styles.logo}
              priority
            />
            <p className="lead">
              A refined jewel block puzzle — clear rows, build combos, and wander a meadow of crystal
              challenges. Offline-first. Premium feel.
            </p>
            <div className={styles.actions}>
              <a href={site.playStoreUrl} className="btn btn-primary">
                Get it on Google Play
              </a>
              <a href="#modes" className="btn btn-secondary">
                See how it plays
              </a>
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
              <article key={mode.label} className={styles.modeCard}>
                <span>{mode.label}</span>
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
              </article>
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
          <div className={styles.faqList}>
            {homeFaqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="play">
        <div className="container">
          <div className={styles.ctaBand}>
            <div>
              <p className="eyebrow">Google Play</p>
              <h2>Play on Android</h2>
              <p>
                Download Block Meadow on Google Play. For press, privacy, or account help, email{' '}
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
              </p>
            </div>
            <div className={styles.actions}>
              <a href={site.playStoreUrl} className="btn btn-primary">
                Open Google Play
              </a>
              <Link href="/about" className="btn btn-ghost">
                About Block Meadow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
