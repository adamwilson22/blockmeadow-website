# Block Meadow website

Marketing + legal site for [playblockmeadow.com](https://playblockmeadow.com).

This folder is gitignored from the Flutter app repo. Deploy it separately (recommended: Vercel).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home + Coming soon Play CTA |
| `/features` | Feature overview |
| `/about` | About |
| `/support` | Support + FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/delete-account` | Account / cloud data deletion (Play requirement) |

## Local

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

Point the domain `playblockmeadow.com` at your host. After the Play listing is live, set `playStoreUrl` in `src/lib/site.ts`.
