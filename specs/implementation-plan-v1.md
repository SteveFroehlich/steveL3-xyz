# SteveL3 V1 Implementation Plan

## 1. Objective

Build **SteveL3** at `stevel3.xyz` as a professional personal website whose primary purpose is to establish 
**professional online presence and credibility**.

Secondary goals:

1. Publish durable thinking and technical writing.
2. Provide a lightweight view into selected projects.

The site should communicate technical depth while making it clear that Steve's interests extend beyond software 
engineering into emerging technology, organization design, and institutions.

### V1 Principles

The site should be:

- Simple
- Fast
- Durable
- Agent-friendly
- Content-first
- Easy to evolve

Avoid infrastructure or abstractions that are not required by current needs.

---

## 2. Technology Stack

Use:

- **Astro** with **static output** (`output: 'static'`)
- **TypeScript**
- **Markdown** for content (not MDX)
- **Astro Content Collections** for structured content
- **GitHub** as the source of truth for code and Markdown
- **Cloudflare Pages** for hosting and deployment of the static build
- **Cloudflare Web Analytics**
- Minimal custom CSS

Deploy the static build artifacts to Cloudflare Pages. Do not add `@astrojs/cloudflare`,
Workers, or SSR unless a concrete requirement emerges that static hosting cannot meet.

Do not introduce unless a concrete requirement emerges:

- React, Vue, Svelte, or another client framework
- MDX
- CMS
- Database
- Authentication
- Server-side application layer
- Comments
- Newsletter infrastructure

### Publishing Workflow

The repository is the publishing system.

    Create/edit Markdown
            ↓
       Commit to Git
            ↓
       Push to GitHub
            ↓
    Cloudflare builds Astro (static)
            ↓
        stevel3.xyz

Humans and coding agents should be able to use the same workflow.

### Images

Do not commit content images (article figures, diagrams, photos) to Git.

Account for images as follows:

- Site chrome assets that belong in the repo (favicon, default social preview) may live under `public/`.
- Article and project content images are hosted outside the repository (for example Cloudflare R2 or Cloudflare Images).
- Markdown references those images by stable absolute URL.
- Alt text remains required in Markdown for accessibility.
- Optimize and size images at the hosting layer where practical; avoid large unoptimized payloads.

V1 does not require a custom image pipeline in the Astro build beyond correct remote URL rendering.

---

## 3. Information Architecture

Primary navigation:

    SteveL3     Writing     Projects

Routes:

    /
    /writing
    /writing/[slug]
    /projects
    /projects/[slug]
    /tags/[tag]

Do not create an About page for V1.

The homepage should provide enough context for a visitor to understand who Steve is, what he does, and what he 
thinks about.

---

## 4. Homepage

The homepage's primary job is to establish identity and professional credibility quickly.

It should not begin by explaining what "L3" means.

### First viewport (hero only)

The first viewport is identity and navigation only:

    Steve Froehlich

    Engineering leader exploring emerging technology,
    organization design, and the institutions we build.

    [Writing] [Projects]

Do not place selected writing, selected projects, professional identity, stats, or secondary
marketing content in the first viewport. Those sections belong below the fold.

Treat hero copy as editable content rather than a permanent design constraint.

### Selected Writing

Below the fold, display approximately 3 recent or featured pieces.

Each entry should contain:

- Title
- Description
- Publication date
- Tags
- Reading time

V1 ships with one real published article. The selected-writing section should render gracefully
with a single entry.

### Selected Projects

Below the fold, display approximately 2–4 selected projects when projects exist.

Each entry should contain:

- Project name
- One-sentence description
- Status/category where useful
- Link to project detail page or external project

If no published projects exist yet, omit this section rather than showing an empty state.

### Professional Identity

Below the fold, include a short section establishing Steve's professional background, expertise,
and current areas of interest.

Keep this concise.

Do not turn the homepage into a résumé.

---

## 5. Writing

Use **Writing**, not **Blog**, throughout the site.

The `/writing` page displays all published writing in reverse chronological order.

Each entry should display:

    TITLE

    Short description

    DATE · READING TIME

    [tag] [tag]

Writing should be navigable by tag.

Do not build complicated client-side filtering for V1.

Tags should link to statically generated tag pages.

---

## 6. Tags and Content Channels

Tags provide the site's content taxonomy without forcing that taxonomy into the primary navigation.

Steve's broad content territories are:

- Emerging technology
- Organization design
- Institutions

These do not need to appear as explicit site sections.

Individual pieces can use more specific tags such as:

    AI
    software-engineering
    reliability
    organization-design
    local-government
    nonprofits
    institutions

A piece may have multiple tags.

Generate static pages at:

    /tags/[tag]

Each tag page should list all associated published writing.

The taxonomy should remain flexible.

Do not create separate top-level channel pages in V1.

---

## 7. Article Experience

Articles are a core credibility surface and should receive significant design attention.

An article header should conceptually resemble:

    WRITING / SOFTWARE-ENGINEERING

    Service Level Objectives (SLI, SLO, SLA)
    Explained Simply

    A practical explanation of...

    APR 10 2023 · 6 MIN

    [software-engineering] [reliability]

Article bodies must support:

- H2/H3 headings
- Paragraphs
- Ordered and unordered lists
- Blockquotes
- Links
- Images
- Diagrams
- Inline code
- Code blocks
- Tables
- Bold and italic emphasis

Typography should prioritize long-form readability.

Generate reading time automatically rather than storing it manually.

---

## 8. Initial Article

Migrate Steve's existing article:

**Service Level Objectives (SLI, SLO, SLA) Explained Simply**

Original:

https://froehlich.medium.com/service-level-objectives-sli-slo-sla-explained-simply-fb4b91dd4a07

Use this as the first real piece of content and as reference material while developing the article experience.

Preserve the original publication date.

Convert the content into Markdown while preserving its semantic structure.

Host any required images/diagrams outside Git and reference them by URL in the Markdown.
Preserve alt text and figure meaning from the original.

This is the one required real article for V1. Additional writing can follow the same pattern later.

Do not make Medium part of the ongoing publishing architecture.

The SteveL3 Markdown copy should become the canonical version maintained in the repository.

---

## 9. Projects

The `/projects` page provides a curated view into things Steve has built, is building, or is exploring.

Projects are intentionally secondary to Writing.

A project should support:

    title
    description
    status
    tags
    featured
    externalUrl
    order

A project can either:

1. Have a native `/projects/[slug]` page.
2. Link directly to an external project.

The content model should support both without requiring separate architectures.

Projects are optional for the V1 launch content bar. The Writing experience must ship with the
one real SLO article; projects may be added when there is something worth featuring.

Tag pages list associated published writing only. Project tags may exist in frontmatter for
future use but do not drive `/tags/[tag]` in V1.

---

## 10. Content Model

Use Astro Content Collections with Markdown files (`.md`), not MDX.

Suggested structure:

    src/
      content/
        writing/
          service-level-objectives.md

        projects/
          ...

Writing frontmatter should resemble:

    ---
    title: "Service Level Objectives (SLI, SLO, SLA) Explained Simply"
    description: "A simple explanation of service level indicators, objectives, and agreements."
    publishedAt: 2023-04-10
    tags:
      - software-engineering
      - reliability
    featured: true
    draft: false
    ---

Use schema validation for content metadata.

The build should fail when required metadata is invalid.

Content marked:

    draft: true

must never appear in the production build.

---

## 11. Visual Identity

The design direction is:

**Minimal professional publishing with subtle computational-infrastructure influences.**

The initial impression should be:

> Thoughtful technology and engineering leader.

Avoid making the site resemble:

- A terminal
- Hacker-themed portfolio
- Developer documentation
- Cyberpunk UI
- Generic SaaS landing page

Technical references should reward closer inspection rather than dominate the experience.

---

## 12. SteveL3 / L3 Design Concept

The brand is **SteveL3**.

"L3" references the L1–L3 CPU cache hierarchy.

The underlying metaphor is:

> SteveL3 is the public, larger cache of what Steve is working on and thinking about.

Do not prominently explain this metaphor in the homepage hero.

Instead, incorporate it subtly into the visual system.

Potential motifs include:

- Monospace typography for metadata
- Small uppercase system-style labels
- `L3` identifiers
- Cache/grid-inspired spacing or graphical elements
- Restrained `L1 → L2 → L3` references
- Small technical details embedded in headers, footers, or metadata
- Structured content labels such as:

      WRITING / ORGANIZATION-DESIGN

These elements should be subtle.

Primary headings and article text should use highly readable normal typography rather than monospace.

The L3 concept should feel like an Easter egg for technically inclined visitors, not a prerequisite for 
understanding the site.

---

## 13. Responsive Design

Design mobile-first.

The site must work well on:

- Phones
- Tablets
- Laptops
- Large desktop displays

Article readability is particularly important.

Set a sensible maximum line length for long-form text.

Navigation should remain simple enough that a complex mobile navigation system is unnecessary.

---

## 14. Performance

Prefer static HTML wherever possible.

Target excellent Core Web Vitals.

Avoid unnecessary:

- Client-side JavaScript
- Large dependencies
- Third-party scripts
- Font payloads
- Image payloads

Optimize images during the build where practical.

The site should remain usable with JavaScript disabled except for nonessential enhancements such as analytics.

---

## 15. SEO and Metadata

Every public page should generate appropriate:

- `<title>`
- Meta description
- Canonical URL
- Open Graph metadata
- Social sharing metadata

Article pages should additionally expose:

- Publication date
- Author
- Article description

Generate:

    /sitemap-index.xml
    /rss.xml

Add appropriate `robots.txt`.

Use semantic HTML.

Use exactly one primary H1 per page.

---

## 16. Social Sharing

Articles should produce useful link previews when shared on:

- LinkedIn
- Slack
- X
- Messages and other Open Graph consumers

Implement a default social preview image for V1.

Architecture should allow article-specific social images later without requiring a redesign.

---

## 17. Analytics

Use **Cloudflare Web Analytics**.

Do not add Google Analytics for V1.

The goal is lightweight visibility into:

- Page views
- Popular writing
- Referrers
- General traffic patterns

Avoid adding complex behavioral tracking.

---

## 18. Accessibility

Use semantic HTML and accessible defaults.

Requirements include:

- Keyboard-accessible navigation
- Visible focus states
- Appropriate contrast
- Alt text support for content images
- Proper heading hierarchy
- Meaningful link text
- No essential interaction dependent solely on hover

Accessibility should be part of the implementation rather than a later retrofit.

---

## 19. Repository Structure

Target approximately:

    /
    ├── AGENTS.md
    ├── README.md
    ├── astro.config.*
    ├── package.json
    ├── tsconfig.json
    │
    ├── specs/
    │   └── implementation-plan-v1.md
    │
    ├── public/
    │   ├── favicon.*
    │   ├── og-default.*
    │   └── ...
    │
    └── src/
        ├── components/
        ├── content/
        │   ├── writing/
        │   └── projects/
        ├── layouts/
        ├── pages/
        │   ├── index.astro
        │   ├── writing/
        │   ├── projects/
        │   └── tags/
        └── styles/

Keep implementation plans under `specs/`. Do not use `docs/` for V1 planning artifacts.

Do not over-componentize.

Create components when they represent meaningful reusable concepts rather than simply extracting every piece of 
markup.

---

## 20. AGENTS.md

Create an `AGENTS.md` separately from this implementation plan.

`AGENTS.md` should contain durable repository instructions such as:

- Development commands
- Build/test commands
- Architectural conventions
- Content conventions
- TypeScript expectations
- Accessibility expectations
- Design-system constraints
- Rules around introducing dependencies
- Requirement to preserve static-first architecture

Do not copy the entire implementation plan into `AGENTS.md`.

The distinction is:

    specs/implementation-plan-v1.md
        = what V1 is intended to accomplish

    AGENTS.md
        = how agents should work within this repository

The implementation plan may eventually become historical.

`AGENTS.md` should remain useful throughout the lifetime of the project.

---

## 21. V1 Implementation Sequence

Implement in roughly this order.

### Phase 1 — Foundation

- Initialize Astro + TypeScript with static output
- Establish repository structure
- Configure formatting/linting
- Configure Astro Content Collections (Markdown)
- Establish global CSS variables and typography
- Create base page and article layouts

### Phase 2 — Content Architecture

- Implement Writing collection
- Implement Projects collection
- Implement tags (writing-only for `/tags/[tag]`)
- Implement draft handling
- Implement automatic reading time
- Migrate the initial SLO article to Markdown with externally hosted images

### Phase 3 — Core Pages

Implement:

- Homepage
- Writing index
- Article detail
- Projects index
- Project detail
- Tag pages

### Phase 4 — Visual System

Apply the SteveL3 visual language:

- Typography
- Spacing
- Metadata styling
- L3-inspired details
- Responsive behavior
- Article typography

Keep the L3 references restrained.

### Phase 5 — Publishing Infrastructure

Implement:

- SEO metadata
- Open Graph metadata
- RSS
- Sitemap
- robots.txt
- Social preview image
- Cloudflare Web Analytics

### Phase 6 — Deployment

- Configure Cloudflare Pages
- Connect GitHub repository
- Configure `stevel3.xyz`
- Enable HTTPS
- Verify production build behavior

### Phase 7 — Validation

Test:

- Mobile
- Desktop
- Keyboard navigation
- Production build
- Draft exclusion
- RSS
- Sitemap
- Social previews
- Metadata
- Broken links
- Article rendering
- Performance
- Accessibility basics

---

## 22. V1 Acceptance Criteria

V1 is complete when:

1. `stevel3.xyz` is publicly accessible over HTTPS.
2. The homepage clearly establishes Steve's professional identity and areas of interest.
3. Visitors can navigate to Writing and Projects.
4. Writing is stored as Markdown in Git.
5. The existing SLO article is published natively on SteveL3 as the one required real V1 article.
6. Content images are referenced by URL and are not committed to Git; site chrome assets may live in `public/`.
7. Articles support the required long-form content elements.
8. Tags generate navigable static pages for writing.
9. Projects can be represented either by native pages or external links; empty project listings are omitted from the homepage.
10. Draft content cannot appear in production.
11. RSS and sitemap generation work.
12. Pages contain appropriate SEO/social metadata.
13. Cloudflare Web Analytics is active.
14. The site works well on mobile and desktop.
15. The production site is a static build with minimal client-side JavaScript and no Cloudflare Workers/SSR adapter.
16. The homepage first viewport is identity + CTAs only.
17. The visual identity contains subtle L3/cache-inspired elements without resembling a developer gimmick.
18. A new article can be published by adding a Markdown file and pushing it to Git.
19. A coding agent can understand and modify the repository without requiring external CMS access.

---

## 23. Explicitly Out of Scope for V1

Do not implement unless requirements change:

- CMS
- Newsletter
- Email capture
- User accounts
- Authentication
- Comments
- Search
- Database
- Dynamic backend
- Complex animations
- Client-side application framework
- MDX
- Automatic cross-posting
- Medium synchronization
- Content images stored in Git
- Résumé/CV page
- Dedicated About page
- Admin interface
- Cloudflare Workers / SSR adapter for the site

These can be reconsidered after V1 based on actual usage and publishing needs.

---

## 24. Definition of Success

V1 should make it possible for someone encountering Steve professionally to visit `stevel3.xyz` and quickly 
understand:

1. Who Steve is.
2. The kinds of problems he works on.
3. The subjects he thinks seriously about.
4. The quality of his thinking and communication.
5. Where to explore his writing and selected work.

The site should feel credible enough to represent Steve professionally while remaining simple enough that 
publishing a new idea is essentially:

    write → commit → push

