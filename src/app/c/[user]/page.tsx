import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CopyCodeButton } from '@/components/CopyCodeButton';
import { OpenAppGate } from '@/components/OpenAppGate';
import {
  handleFor,
  headlineFor,
  peekChallenge,
} from '@/lib/challengePeek';
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
  const peek = await peekChallenge(user);
  const title = headlineFor(peek);
  const handle = handleFor(peek);
  const description = handle
    ? `${handle} left you a Block Meadow board. Open the app with code ${user}.`
    : `A friend left you a Block Meadow board. Open the app with code ${user}.`;
  return {
    title: { absolute: `${title} · ${site.name}` },
    description,
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

  const peek = await peekChallenge(user);
  const handle = handleFor(peek);
  const score = peek && !peek.expired ? peek.targetScore : 0;
  const modeLabel = peek?.mode === 'blitz' ? 'Blitz' : 'Classic';

  return (
    <section className={styles.stage}>
      <div className={`container ${styles.shell}`}>
        <p className={`eyebrow ${styles.kicker}`}>
          {peek?.expired ? 'Challenge expired' : 'Challenge · 96h'}
        </p>
        <h1 className={styles.headline}>{headlineFor(peek)}</h1>
        {handle ? <p className={styles.handle}>{handle}</p> : null}
        <p className={styles.lede}>
          {peek?.expired
            ? 'Ask them to share a new code.'
            : score > 0
              ? `${modeLabel} · ${score.toLocaleString('en-US')} to beat`
              : 'Same Classic board. Beat their score.'}
        </p>

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
