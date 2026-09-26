# SteveL3 repository guide

Instructions for humans and coding agents working in this repository.

## Purpose

SteveL3 (`stevel3.xyz`) is a static personal site. Publishing workflow:

```
write Markdown → commit → push → Cloudflare Pages builds Astro
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Architecture

- **Astro static output only** (`output: 'static'`). Do not add `@astrojs/cloudflare`, Workers, SSR, React, Vue, Svelte, MDX, CMS, auth, or a database unless requirements explicitly change.
- Content lives in Astro Content Collections under `src/content/`.
- Writing is Markdown (`.md`) only.
- Implementation plans live in `specs/`. Do not move them to `docs/`.

## Content conventions

### Writing (`src/content/writing/*.md`)

Required frontmatter:

- `title` (string)
- `description` (string)
- `publishedAt` (date)
- `tags` (string array)
- `featured` (boolean)
- `draft` (boolean)

`draft: true` must never appear in production pages, RSS, or sitemaps.

### Projects (`src/content/projects/*.md`)

Optional for V1. Supported fields: `title`, `description`, `status`, `tags`, `featured`, `externalUrl`, `order`, `draft`.

- Native project pages: omit `externalUrl`, write Markdown body.
- External projects: set `externalUrl`; listing links out directly.
- Homepage omits the projects section when none are published.

### Images

- Do **not** commit article/project content images to Git.
- Host content images externally (e.g. Cloudflare R2 / Images) and reference absolute URLs in Markdown.
- Always include meaningful `alt` text.
- Site chrome (`public/favicon.*`, `public/og-default.svg`) may live in the repo.

### Tags

`/tags/[tag]` pages are generated from writing tags only.

## Design constraints

- Minimal professional publishing with subtle L3/cache motifs.
- Do not make the site look like a terminal, hacker portfolio, cyberpunk UI, developer docs theme, or generic SaaS landing page.
- Homepage first viewport: identity + CTAs only. Selected writing, projects, and professional identity belong below the fold.
- Prefer readable serif for article text; monospace for metadata/labels only.
- Accessibility is required: semantic HTML, one H1 per page, visible focus, keyboard navigation, contrast, meaningful link text.

## Dependencies

Avoid new dependencies unless they clearly serve a current requirement. Prefer zero client-side JavaScript. Analytics: Cloudflare Web Analytics via `PUBLIC_CF_ANALYTICS_TOKEN` only.

## Agent expectations

- Preserve static-first architecture.
- Prefer editing existing components over adding new abstractions.
- Do not invent CMS workflows, Medium sync, comments, search, newsletters, or an About/résumé page unless asked.
- Keep `AGENTS.md` durable; put V1 intent in `specs/implementation-plan-v1.md`.
