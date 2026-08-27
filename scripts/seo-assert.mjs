#!/usr/bin/env node
/**
 * Smoke-check SEO tags on a running production server (npm start).
 * Usage: node scripts/seo-assert.mjs [baseUrl]
 */
const base = process.argv[2] || 'http://localhost:3000';

const pages = [
  { path: '/', expectH1Block: true },
  { path: '/how-to-play', expectH1Block: true },
  { path: '/block-puzzle', expectH1Block: true },
  { path: '/download', expectH1Block: false },
];

function count(html, re) {
  return (html.match(re) || []).length;
}

async function check(path, expectH1Block) {
  const url = `${base}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  const html = await res.text();
  const h1s = count(html, /<h1\b/gi);
  if (h1s !== 1) throw new Error(`${path}: expected 1 h1, found ${h1s}`);
  if (!/rel="canonical"/i.test(html) && !/rel=canonical/i.test(html)) {
    throw new Error(`${path}: missing rel=canonical`);
  }
  if (!html.includes('https://www.playblockmeadow.com')) {
    throw new Error(`${path}: canonical host https://www.playblockmeadow.com not found`);
  }
  if (!html.includes('application/ld+json')) {
    throw new Error(`${path}: missing JSON-LD`);
  }
  if (!html.includes('og-image')) {
    throw new Error(`${path}: og:image should include og-image`);
  }
  if (expectH1Block) {
    const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const text = (m ? m[1] : '').replace(/<[^>]+>/g, '');
    if (!/block/i.test(text)) {
      throw new Error(`${path}: h1 should include "block", got "${text.trim()}"`);
    }
  }
  console.log(`ok  ${path}`);
}

async function main() {
  for (const page of pages) {
    await check(page.path, page.expectH1Block);
  }
  console.log('seo-assert passed');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
