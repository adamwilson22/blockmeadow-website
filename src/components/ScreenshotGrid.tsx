import Image from 'next/image';
import styles from './ScreenshotGrid.module.css';

export type Shot = {
  src: string;
  alt: string;
};

export function ScreenshotGrid({ shots }: { shots: readonly Shot[] }) {
  return (
    <div className={styles.grid}>
      {shots.map((shot) => (
        <figure key={shot.src} className={styles.figure}>
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1080}
            height={1920}
            className={styles.image}
          />
        </figure>
      ))}
    </div>
  );
}
