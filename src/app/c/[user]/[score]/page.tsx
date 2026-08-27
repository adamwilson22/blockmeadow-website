import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OpenAppGate } from '@/components/OpenAppGate';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import m from '../../../marketing.module.css';
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

  return (
    <>
      <PageHero
        eyebrow="Score challenge"
        title={`Can you beat ${name}?`}
        subtitle={`Classic score to beat. Opens Block Meadow if the app is installed.`}
      />
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p className={styles.handle}>@{name}</p>
          <p className={styles.score}>{parsed.toLocaleString('en-US')}</p>
          <p>
            {name} scored {parsed} in Classic. Tap below to open the same mode in Block Meadow, or
            install the game first.
          </p>
          <OpenAppGate kind="challenge" user={name} score={parsed} />
        </div>
      </section>
    </>
  );
}
