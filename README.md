# SteveL3

Personal site for Steve Froehlich at [stevel3.xyz](https://stevel3.xyz).

Static Astro site. Content is Markdown in Git. Cloudflare Pages builds and hosts.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publish writing

1. Add a Markdown file under `src/content/writing/`.
2. Commit and push to GitHub.
3. Cloudflare Pages rebuilds the site.

See `AGENTS.md` for conventions and `specs/implementation-plan-v1.md` for V1 scope.

## Environment

Optional:

```bash
PUBLIC_CF_ANALYTICS_TOKEN=your-cloudflare-web-analytics-token
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22` or newer
- Framework preset: Astro (static)
