# userland.tech

The UserLAnd Technologies website: UserLAnd, Linux apps for Android, and classic game apps.
Built with [Astro](https://astro.build) as a fully static site and hosted on Firebase Hosting.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to dist/ and runs the game-naming check
npm run deploy    # build + firebase deploy --only hosting
```

Requires Node 22.22 or newer (Astro 7).

## Where things live

| What | Where |
|---|---|
| App facts (name, Play id, price, what it runs, disclaimer) | `src/data/apps.ts` |
| Answer pages ("How to run GIMP on Android") | `src/content/pages/<section>/<slug>.md`, served at `/<section>/<slug>/` |
| Answer page template | `src/pages/[section]/[slug].astro` |
| Section hubs | `src/pages/{linux,apps,games,guides}/index.astro` |
| Legal pages | `src/content/legal/*/index.md` |
| App icons | `public/icons/<playId>.png` |
| JSON-LD (SoftwareApplication, HowTo, FAQPage, Breadcrumbs) | `src/lib/schema.ts` |
| `llms.txt`, `robots.txt` | `src/pages/*.txt.ts` |
| Old-URL redirects | `firebase.json` |

## Adding an app or game

1. Add an entry to `src/data/apps.ts` and its icon to `public/icons/`.
2. Add `src/content/pages/<section>/<search-term>.md`. Name the file after what people search for
   (`oregon-trail`, `gimp`), not the app name. Frontmatter fields are defined in `src/content.config.ts`.

## Game naming rule

Pages may say "OG Trail runs The Oregon Trail on Android". They must never say "OG Trail is The Oregon Trail"
or use the original title as the app's name. `src/lib/naming.ts` fails the build on unsafe page titles, and
`scripts/check-naming.mjs` scans the built HTML after every build.
