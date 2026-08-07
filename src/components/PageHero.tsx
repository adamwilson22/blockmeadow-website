import styles from './PageHero.module.css';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        <div className={styles.rule} aria-hidden />
      </div>
    </div>
  );
}
