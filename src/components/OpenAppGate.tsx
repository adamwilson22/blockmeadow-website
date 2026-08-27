'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import styles from './OpenAppGate.module.css';

type ChallengeProps = {
  kind: 'challenge';
  user: string;
  score: number;
};

type InviteProps = {
  kind: 'invite';
  user: string;
};

type Props = ChallengeProps | InviteProps;

function customUri(props: Props): string {
  if (props.kind === 'challenge') {
    return `${site.deepLinkScheme}://c/${encodeURIComponent(props.user)}/${props.score}`;
  }
  return `${site.deepLinkScheme}://i/${encodeURIComponent(props.user)}`;
}

function intentUri(props: Props): string {
  const path =
    props.kind === 'challenge'
      ? `c/${encodeURIComponent(props.user)}/${props.score}`
      : `i/${encodeURIComponent(props.user)}`;
  const fallback = encodeURIComponent(site.playStoreUrl);
  return `intent://${path}#Intent;scheme=${site.deepLinkScheme};package=${site.packageId};S.browser_fallback_url=${fallback};end`;
}

export function OpenAppGate(props: Props) {
  const custom = customUri(props);
  const intent = intentUri(props);
  const [openHref, setOpenHref] = useState(custom);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    if (!/Android/i.test(ua)) return;
    setOpenHref(intent);
    window.location.href = intent;
  }, [intent]);

  const label = props.kind === 'challenge' ? 'Open in Block Meadow' : 'Open invite in the app';

  return (
    <div className={styles.wrap}>
      <a className="btn btn-primary" href={openHref}>
        {label}
      </a>
      <a className="btn btn-ghost" href={site.playStoreUrl}>
        Get it on Google Play
      </a>
    </div>
  );
}
