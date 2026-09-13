'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Share landings stay one screen — hide the marketing footer on /c and /i. */
export function FooterGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/c/') || pathname.startsWith('/i/')) return null;
  return children;
}
