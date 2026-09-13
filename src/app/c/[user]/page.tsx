import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CopyCodeButton } from '@/components/CopyCodeButton';
import { OpenAppGate } from '@/components/OpenAppGate';
import { isSixDigitCode } from '@/lib/sixDigit';
import { site } from '@/lib/site';
import styles from '../codeLanding.module.css';

type Params = { user: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { user } = await params;
  if (!isSixDigitCode(user)) {
    return {
      title: { absolute: `Challenge · ${site.name}` },
      robots: { index: false, follow: false },
    };
  }
  return {
    title: { absolute: `You've been challenged · ${user}` },
    description: `A friend left you a Block Meadow board. Open the app with code ${user} and try to beat their Classic score.`,
    robots: { index: false, follow: false },
  };
}

export default async function ChallengeCodePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { user } = await params;
  if (!isSixDigitCode(user)) notFound();

  return (
    <section className={styles.stage}>
      <div className={`container ${styles.shell}`}>
        <p className={`eyebrow ${styles.kicker}`}>Challenge · 96h</p>
        <h1 className={styles.headline}>You&apos;ve been challenged.</h1>
        <p className={styles.lede}>Same Classic board. Beat their score.</p>

        <p className={styles.code} aria-label={`Challenge code ${user}`}>
          {user.slice(0, 3)}
          <span className={styles.codeGap} aria-hidden>
            {' '}
          </span>
          {user.slice(3)}
        </p>
        <CopyCodeButton code={user} variant="text" className={styles.copy} />
        <OpenAppGate kind="code" code={user} compact className={styles.actions} />
      </div>
    </section>
  );
}
