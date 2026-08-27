import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OpenAppGate } from '@/components/OpenAppGate';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import m from '../../marketing.module.css';

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
    <>
      <PageHero
        eyebrow="Friend invite"
        title={`Play with ${name}`}
        subtitle="Opens Block Meadow if the app is installed."
      />
      <section className={`section ${m.tightSection}`}>
        <div className={`container ${m.prose}`}>
          <p>
            @{name} sent you an invite. Open Block Meadow to add them, or install the game on Google
            Play first.
          </p>
          <OpenAppGate kind="invite" user={name} />
        </div>
      </section>
    </>
  );
}
