import Image from 'next/image';
import Link from 'next/link';
import { guideLinks, legalLinks, playLinks, site } from '@/lib/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/brand/app_icon.png"
              alt=""
              width={40}
              height={40}
              className={styles.mark}
            />
            <span>
              <strong>{site.name}</strong>
              <span className={styles.tag}>{site.tagline}</span>
            </span>
          </Link>
        </div>

        <nav className={styles.col} aria-label="Play">
          <p className={styles.label}>Play</p>
          {playLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className={styles.col} aria-label="Guides">
          <p className={styles.label}>Guides</p>
          {guideLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className={styles.col} aria-label="Legal">
          <p className={styles.label}>Legal</p>
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
