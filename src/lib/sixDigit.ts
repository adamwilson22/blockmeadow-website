/** Minted challenge codes are 100000–999999. */
export function isSixDigitCode(raw: string): boolean {
  if (!/^\d{6}$/.test(raw)) return false;
  const n = Number(raw);
  return Number.isInteger(n) && n >= 100000 && n <= 999999;
}
