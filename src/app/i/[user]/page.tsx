import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { OpenAppGate } from '@/components/OpenAppGate';
import { screens, site } from '@/lib/site';
import styles from '../../c/challenge.module.css';

type Params = { user: string };

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
  const { user } = await params;
  const name = displayName(user) || 'a friend';
  return {
    title: { absolute: `Add ${name} in ${site.name}` },
    description: `${name} invited you to Block Meadow. Open the app to add them as a friend.`,
    robots: { index: false, follow: false },
  };
}

export default async function InvitePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { user } = await params;
  const name = displayName(user);
  if (!name) notFound();

  return (
    <section className={styles.stage}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Friend invite</p>
        <h1 className={styles.headline}>Play with {name}</h1>
        <p className={styles.lede}>Opens Block Meadow if the app is installed.</p>

        <article className={styles.card}>
          <Image
            src={screens.home.src}
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
            <Image
              src="/brand/app_icon.png"
              alt=""
              width={72}
              height={72}
              className={styles.inviteMark}
            />
            <p className={styles.handle}>@{name}</p>
            <p className={styles.taunt}>wants to play Block Meadow with you.</p>
            <OpenAppGate kind="invite" user={name} />
          </div>
        </article>
      </div>
    </section>
  );
}
