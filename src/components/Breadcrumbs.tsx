import Link from 'next/link';
import type { Crumb } from '@/lib/site';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className={styles.item}>
              {last ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
