'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks, site } from '@/lib/site';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.shell}`}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.markWrap}>
              <Image
                src="/brand/app_icon.png"
                alt=""
                width={36}
                height={36}
                className={styles.mark}
                priority
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{site.name}</span>
              <span className={styles.brandTag}>Jewel puzzle</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <div className={styles.linkCluster}>
              {navLinks.map((link) => {
                const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link href="/#play" className={`btn btn-primary ${styles.cta}`}>
              Get the game
            </Link>
          </nav>

          <button
            className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${active ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/#play" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setOpen(false)}>
            Get the game
          </Link>
        </nav>
      </div>
      {open ? <button className={styles.backdrop} aria-label="Close menu" onClick={() => setOpen(false)} /> : null}
    </header>
  );
}
