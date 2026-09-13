import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CopyCodeButton } from '@/components/CopyCodeButton';
import { OpenAppGate } from '@/components/OpenAppGate';
import { isSixDigitCode } from '@/lib/sixDigit';
import { screens, site } from '@/lib/site';
import styles from '../challenge.module.css';

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
    title: { absolute: `Challenge ${user} · ${site.name}` },
    description: `Open Block Meadow and enter challenge code ${user} to play this board.`,
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
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Score challenge</p>
        <h1 className={styles.headline}>Your challenge code</h1>
        <p className={styles.lede}>
          Open Block Meadow if the app is installed, or copy the code and
          paste it on Home.
        </p>

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
            <p className={styles.mode}>Challenge code</p>
            <p className={styles.score}>{user}</p>
            <p className={styles.taunt}>
              Codes last 96 hours. Copy and paste on Home if the app does not
              open.
            </p>
            <div className={styles.copyRow}>
              <CopyCodeButton code={user} />
            </div>
            <OpenAppGate kind="code" code={user} />
          </div>
        </article>
      </div>
    </section>
  );
}
