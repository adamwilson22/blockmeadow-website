export const site = {
  name: 'Block Meadow',
  shortName: 'BlockMeadow',
  domain: 'playblockmeadow.com',
  url: 'https://www.playblockmeadow.com',
  supportEmail: 'support@playblockmeadow.com',
  tagline: 'Jewel block puzzle · play offline',
  description:
    'Play Block Meadow, a jewel block puzzle for Android. Clear rows and columns on an 8×8 board, chain combos, climb 1,000 adventure levels, and play offline. Free on Google Play.',
  homeTitle: 'Block Meadow — Offline Jewel Block Puzzle for Android',
  packageId: 'com.playblockmeadow.app',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.playblockmeadow.app',
  updated: 'August 27, 2026',
  updatedIso: '2026-08-27',
  ogImage: {
    url: '/brand/og-image.png',
    width: 1080,
    height: 540,
    alt: 'Block Meadow — jewel block puzzle for Android',
  },
  social: {
    // Add profile URLs here when they exist; empty values are omitted from JSON-LD.
  },
} as const;

export const screens = {
  home: {
    src: '/brand/screens/01_home.png',
    alt: 'Block Meadow home screen with Classic, Adventure, Daily, and Blitz block puzzle modes',
  },
  gameplay: {
    src: '/brand/screens/02_gameplay_jewels.png',
    alt: 'Block Meadow jewel block puzzle gameplay on an 8×8 gem board',
  },
  adventure: {
    src: '/brand/screens/03_adventure.png',
    alt: 'Block Meadow adventure map with 1,000 jewel block puzzle levels',
  },
  complete: {
    src: '/brand/screens/04_level_complete.png',
    alt: 'Block Meadow level complete screen after clearing a block puzzle goal',
  },
  classic: {
    src: '/brand/screens/05_classic_board.png',
    alt: 'Classic block puzzle board in Block Meadow with gem pieces in the tray',
  },
  learn: {
    src: '/brand/screens/06_easy_to_learn.png',
    alt: 'Block Meadow tutorial showing how to place gem blocks and clear lines',
  },
  goals: {
    src: '/brand/screens/07_level_goals.png',
    alt: 'Adventure level goals in Block Meadow block puzzle — lines, score, and combos',
  },
  offline: {
    src: '/brand/screens/08_offline_board.png',
    alt: 'Block Meadow offline block puzzle board — core play without Wi‑Fi',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-to-play', label: 'How to Play' },
  { href: '/features', label: 'Features' },
  { href: '/guides', label: 'Guides' },
  { href: '/support', label: 'Support' },
] as const;

export const playLinks = [
  { href: '/classic', label: 'Classic' },
  { href: '/adventure', label: 'Adventure' },
  { href: '/daily', label: 'Daily' },
  { href: '/blitz', label: 'Blitz' },
  { href: '/download', label: 'Download' },
  { href: '/offline', label: 'Offline play' },
] as const;

export const guideLinks = [
  { href: '/guides', label: 'All guides' },
  { href: '/how-to-play', label: 'How to play' },
  { href: '/guides/line-clear-tips', label: 'Line-clear tips' },
  { href: '/guides/combos', label: 'Combos' },
  { href: '/guides/offline-play', label: 'Offline play' },
  { href: '/guides/first-game', label: 'Your first game' },
] as const;

export const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/delete-account', label: 'Delete Account' },
  { href: '/family', label: 'Kid Mode' },
  { href: '/press', label: 'Press' },
] as const;

export type FaqItem = {
  q: string;
  a: string;
};

export type Crumb = {
  name: string;
  href: string;
};
