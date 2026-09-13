import { isSixDigitCode } from './sixDigit';

export type ChallengePeek = {
  fromName: string;
  fromUsername: string;
  targetScore: number;
  mode: 'classic' | 'blitz';
  expiresAtMs: number;
  expired: boolean;
};

const DEFAULT_PEEK_URL =
  'https://us-central1-luminablocks-7395d.cloudfunctions.net/peekChallengeCode';

function peekUrl(): string {
  return process.env.CHALLENGE_PEEK_URL || DEFAULT_PEEK_URL;
}

function named(name: string): boolean {
  const n = name.trim();
  return n.length > 0 && n.toLowerCase() !== 'player';
}

export function headlineFor(peek: ChallengePeek | null): string {
  if (peek && named(peek.fromName)) {
    return peek.expired
      ? `${peek.fromName}'s challenge expired.`
      : `${peek.fromName} challenged you.`;
  }
  return peek?.expired ? 'This challenge expired.' : "You've been challenged.";
}

export function handleFor(peek: ChallengePeek | null): string {
  if (!peek?.fromUsername) return '';
  return `@${peek.fromUsername}`;
}

export async function peekChallenge(code: string): Promise<ChallengePeek | null> {
  if (!isSixDigitCode(code)) return null;
  try {
    const res = await fetch(
      `${peekUrl()}?code=${encodeURIComponent(code)}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as Partial<ChallengePeek>;
    const targetScore = Number(data.targetScore);
    if (!Number.isFinite(targetScore) || targetScore <= 0) return null;
    return {
      fromName: String(data.fromName ?? '').trim() || 'Player',
      fromUsername: String(data.fromUsername ?? '')
        .trim()
        .toLowerCase(),
      targetScore: Math.floor(targetScore),
      mode: data.mode === 'blitz' ? 'blitz' : 'classic',
      expiresAtMs: Number(data.expiresAtMs) || 0,
      expired: data.expired === true,
    };
  } catch {
    return null;
  }
}
