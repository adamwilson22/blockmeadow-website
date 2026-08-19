export const site = {
  name: 'Block Meadow',
  shortName: 'BlockMeadow',
  domain: 'playblockmeadow.com',
  url: 'https://playblockmeadow.com',
  supportEmail: 'support@playblockmeadow.com',
  tagline: 'Jewel block puzzle · play offline',
  description:
    'Block Meadow is a relaxing jewel block puzzle. Clear rows, build combos, conquer adventure levels, and play offline anytime.',
  packageId: 'com.playblockmeadow.app',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.playblockmeadow.app',
  updated: 'August 19, 2026',
  social: {
    // Reserved for later
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
] as const;

export const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/delete-account', label: 'Delete Account' },
  { href: '/support', label: 'Support' },
] as const;
