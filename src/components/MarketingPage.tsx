import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PlayCtaBand } from '@/components/PlayCtaBand';
import type { Crumb } from '@/lib/site';
import { breadcrumbJsonLd, graphJsonLd } from '@/lib/seo';
import styles from './MarketingPage.module.css';

export function MarketingPage({
  eyebrow,
  title,
  subtitle,
  crumbs,
  extraJsonLd,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbs: readonly Crumb[];
  extraJsonLd?: Record<string, unknown>[];
  children: ReactNode;
}) {
  const jsonLd = graphJsonLd([breadcrumbJsonLd(crumbs), ...(extraJsonLd ?? [])]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className={`container ${styles.crumbs}`}>
        <Breadcrumbs items={crumbs} />
      </div>
      {children}
      <section className="section">
        <div className="container">
          <PlayCtaBand />
        </div>
      </section>
    </>
  );
}
