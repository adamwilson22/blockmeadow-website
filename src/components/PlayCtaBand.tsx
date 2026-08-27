import Link from 'next/link';
import { site } from '@/lib/site';
import styles from './PlayCtaBand.module.css';

export function PlayCtaBand({
  title = 'Play on Android',
  body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className={styles.band}>
      <div>
        <p className="eyebrow">Google Play</p>
        <h2>{title}</h2>
        <p>
          {body ??
            `Download ${site.name} on Google Play. Jewel block puzzle — clear lines, build combos, and play offline.`}{' '}
          For press, privacy, or account help, email{' '}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        </p>
      </div>
      <div className={styles.actions}>
        <a href={site.playStoreUrl} className="btn btn-primary">
          Get it on Google Play
        </a>
        <Link href="/how-to-play" className="btn btn-ghost">
          How to play
        </Link>
      </div>
    </div>
  );
}
