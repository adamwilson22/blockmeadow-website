'use client';

import { useState } from 'react';

export function CopyCodeButton({
  code,
  className,
  variant = 'button',
}: {
  code: string;
  className?: string;
  variant?: 'button' | 'text';
}) {
  const [copied, setCopied] = useState(false);
  const isText = variant === 'text';

  return (
    <button
      type="button"
      className={[isText ? undefined : 'btn btn-ghost', className]
        .filter(Boolean)
        .join(' ')}
      data-copied={copied ? 'true' : 'false'}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard can fail in insecure contexts; digits stay visible.
        }
      }}
    >
      {copied ? 'Copied' : 'Copy code'}
    </button>
  );
}
