# Block Meadow website

Marketing + legal site for [playblockmeadow.com](https://www.playblockmeadow.com).

Canonical host is **https://www.playblockmeadow.com** (Vercel 308s apex → www).

This folder is gitignored from the Flutter app repo. Deploy it separately (Vercel, auto-deploy from GitHub).

## SEO

- Metadata helper: `src/lib/seo.ts` (`pageMeta`, JSON-LD builders).
- Canonical, Open Graph, and Twitter tags on every page.
- `SoftwareApplication` on Home and `/download`. `FAQPage` on Home and Support. `Organization` + `WebSite` in the root layout. `BreadcrumbList` on inner pages.
- After deploy: add the www (and apex) properties in [Google Search Console](https://search.google.com/search-console), submit `https://www.playblockmeadow.com/sitemap.xml`, request indexing on `/`, `/how-to-play`, `/block-puzzle`, `/download`.
- Optional env (see `.env.example`): `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home + Play CTA |
| `/how-to-play` | Rules |
| `/block-puzzle` | Jewel block puzzle landing |
| `/offline` | Offline play |
| `/classic` `/adventure` `/daily` `/blitz` | Modes |
| `/download` | Google Play + package ID |
| `/family` | Kid Mode |
| `/press` | Press kit |
| `/guides` | Guide index + articles |
| `/features` `/about` `/support` | Product |
| `/privacy` `/terms` `/delete-account` | Legal |
| `/app-ads.txt` | AdMob authorized sellers |
| `/c/:code` | 6-digit challenge landing (`100000`–`999999`) |
| `/c/:user/:score` | Legacy name/score challenge |
| `/i/:user` | Friend invite |
| `/.well-known/assetlinks.json` | Android App Links (upload-key SHA-256). Add the Play App Signing SHA from Play Console if Play re-signs the APK. |

## Local

```bash
npm install
npm run dev
```

SEO smoke check after `npm run build && npm start`:

```bash
node scripts/seo-assert.mjs
```

## Production

```bash
npm run build
npm start
```

`playStoreUrl` in `src/lib/site.ts` is the Play listing.
