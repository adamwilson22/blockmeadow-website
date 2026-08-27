import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { OpenAppGate } from '@/components/OpenAppGate';
import { screens, site } from '@/lib/site';
import styles from '../../challenge.module.css';

type Params = { user: string; score: string };

function parseScore(raw: string): number | null {
  if (!/^\d{1,9}$/.test(raw)) return null;
  const n = Number(raw);
  if (!Number.isInteger(n) || n <= 0) return null;
  return n;
}

function displayName(raw: string): string {
  try {
    return decodeURIComponent(raw).replace(/^@/, '').trim();
  } catch {
    return raw.replace(/^@/, '').trim();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { user, score } = await params;
  const name = displayName(user) || 'a friend';
  const parsed = parseScore(score);
  const title = parsed
    ? `Beat ${name}'s ${parsed} in ${site.name}`
    : `Challenge · ${site.name}`;
  const description = parsed
    ? `${name} scored ${parsed} in Classic. Open Block Meadow to try to beat it.`
    : `Open Block Meadow to take this score challenge.`;
  return {
    title: { absolute: title },
    description,
    robots: { index: false, follow: false },
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { user, score } = await params;
  const name = displayName(user);
  const parsed = parseScore(score);
  if (!name || parsed == null) notFound();

  const pretty = parsed.toLocaleString('en-US');

  return (
    <section className={styles.stage}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Score challenge</p>
        <h1 className={styles.headline}>Can you beat {name}?</h1>
        <p className={styles.lede}>Classic score to beat. Opens the app if it is installed.</p>

        <article className={styles.card}>
          <Image
            src={screens.classic.src}
            alt=""
            fill
            priority
            sizes="380px"
            className={styles.cardBg}
          />
          <div className={styles.cardShade} aria-hidden />
          <div className={styles.cardInner}>
            <div className={styles.brand}>
              <Image
                src="/brand/app_icon.png"
                alt=""
                width={28}
                height={28}
                className={styles.brandIcon}
              />
              {site.name}
            </div>
            <p className={styles.mode}>Classic score</p>
            <p className={styles.score}>{pretty}</p>
            <p className={styles.pill}>Best {pretty}</p>
            <p className={styles.handle}>@{name}</p>
            <p className={styles.taunt}>Can you beat me?</p>
            <OpenAppGate kind="challenge" user={name} score={parsed} />
          </div>
        </article>
      </div>
    </section>
  );
}
