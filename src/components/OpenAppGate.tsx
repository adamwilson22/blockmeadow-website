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

type CodeProps = {
  kind: 'code';
  code: string;
};

type Props = (ChallengeProps | InviteProps | CodeProps) & {
  className?: string;
  compact?: boolean;
};

function customUri(props: Props): string {
  if (props.kind === 'challenge') {
    return `${site.deepLinkScheme}://c/${encodeURIComponent(props.user)}/${props.score}`;
  }
  if (props.kind === 'code') {
    return `${site.deepLinkScheme}://c/${props.code}`;
  }
  return `${site.deepLinkScheme}://i/${encodeURIComponent(props.user)}`;
}

function intentUri(props: Props): string {
  if (props.kind === 'code') {
    // Stay on this page if the app is missing — digits + copy must remain visible.
    return `intent://c/${props.code}#Intent;scheme=${site.deepLinkScheme};package=${site.packageId};end`;
  }
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
    // 6-digit codes stay in the browser unless the user taps Open — Play Store
    // is not the happy path while testers still sideload.
    if (props.kind === 'code') return;
    window.location.href = intent;
  }, [intent, props.kind]);

  const label =
    props.kind === 'invite'
      ? 'Open invite in the app'
      : props.kind === 'code'
        ? 'Play this board'
        : 'Open in Block Meadow';

  return (
    <div
      className={[
        styles.wrap,
        props.kind === 'code' || props.compact ? styles.tight : '',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <a className="btn btn-primary" href={openHref}>
        {label}
      </a>
      {props.compact ? (
        <a className={styles.storeLink} href={site.playStoreUrl}>
          Need the app? Google Play
        </a>
      ) : (
        <a className="btn btn-ghost" href={site.playStoreUrl}>
          Get it on Google Play
        </a>
      )}
    </div>
  );
}
