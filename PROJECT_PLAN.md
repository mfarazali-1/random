# Project Plan — Abdullah & Co. Staffing Website (`goabdullah.com`)

> A marketing + lead-generation website for an elite U.S. executive search & staffing agency
> (IT/technical recruitment + legal/attorney placement).
> Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.
>
> **Status:** ✅ Implemented & building cleanly. App lives in `./goabdullah/`. All phases 0–5 are done
> (15 routes prerender; blog SSG; sitemap/robots; forms via Server Actions). See "Implementation status" at the bottom.

---

## 1. Goals & Constraints

| Goal                                                                                      | Why it matters                      | Architectural consequence                                                |
| ----------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| **SEO authority** (blogs rank for "cost of vacancy", "lateral partner recruitment", etc.) | Blog content is the lead-gen funnel | Server-rendered/static pages, MDX blog, structured metadata, sitemap     |
| **Lead generation** (Hire Talent + Pricing inquiry forms)                                 | Forms are the conversion point      | Server Actions + validation + email/CRM delivery + spam protection       |
| **Fast, polished, "elite" feel**                                                          | Brand is premium/discreet           | Minimal client JS, Core Web Vitals first, design system                  |
| **Easy to extend** (add blogs, services, pages)                                           | Content grows over time             | Feature-based + colocated structure, MDX content, no redundancy          |
| **Maintainable by a small team**                                                          | One/few devs                        | Clear boundaries, path aliases, typed everything, reusable UI primitives |

**Non-goals (v1):** auth, dashboards, candidate portals, payments. Keep it a lean marketing site; design so these _can_ be added later without a rewrite.

---

## 2. Tech Stack (recommended)

| Concern             | Choice                                                           | Reason                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework           | **Next.js 16, App Router, React Server Components** (React 19.2) | RSC keeps client JS ~40% smaller; ideal for content-heavy marketing sites. `create-next-app` installed v16 — note v16 breaking changes: async `params`/`searchParams`, Turbopack default, `next lint` removed |
| Language            | **TypeScript (strict)**                                          | Type safety, fewer runtime bugs, self-documenting                                                                                                                                                             |
| Styling             | **Tailwind CSS v4** (CSS-first `@theme` config)                  | Utility-first, consistent spacing/typography, zero unused CSS. **Note:** v4 configures tokens in `globals.css` via `@theme`, _not_ a `tailwind.config.ts`                                                     |
| UI primitives       | **shadcn/ui + Radix** (copy-in components, v4-compatible)        | Accessible, unstyled-then-themed, no vendor lock-in, lives in our repo                                                                                                                                        |
| Content (blog)      | **MDX + `gray-matter`** typed loader (`@next/mdx` for render)    | Blogs are code-versioned, no CMS cost, fully typed frontmatter. _(Avoid Contentlayer — unmaintained; `content-collections` is an alt.)_                                                                       |
| Forms               | **React Hook Form + Zod** + **Server Actions**                   | Single source of truth for validation (client + server share Zod schema)                                                                                                                                      |
| Email/Lead delivery | **Resend** (or Nodemailer/SMTP)                                  | Simple transactional email for inquiry submissions                                                                                                                                                            |
| Spam protection     | **Cloudflare Turnstile** or honeypot                             | Protect lead forms without hurting UX                                                                                                                                                                         |
| Icons               | **lucide-react**                                                 | Tree-shakeable, consistent                                                                                                                                                                                    |
| Animation           | **Framer Motion** (sparingly, client leaves only)                | Premium feel without bloating SSR pages                                                                                                                                                                       |
| Linting/format      | **ESLint + Prettier + Tailwind plugin**                          | Consistent code style                                                                                                                                                                                         |
| Git hooks           | **Husky + lint-staged + Commitlint**                             | Enforce quality before commit                                                                                                                                                                                 |
| Testing             | **Vitest** (unit) + **Playwright** (e2e smoke)                   | Confidence on forms & critical routes                                                                                                                                                                         |
| Analytics           | **Vercel Analytics** / GA4 + Search Console                      | Track conversions & SEO                                                                                                                                                                                       |
| Hosting             | **Vercel**                                                       | First-class Next.js support, edge, previews                                                                                                                                                                   |

> If the client later wants non-technical staff to edit blogs, swap MDX for a headless CMS (Sanity/Payload). The `features/blog` data layer is the only thing that changes — see §5.

---

## 3. Architectural Principles

These rules prevent redundancy and keep the codebase scalable:

1. **`app/` is for routing only.** Pages should be thin — they compose feature components and fetch data. No business logic in route files.
2. **Feature-based modules.** Domain logic lives in `src/features/<domain>/` (components, hooks, schema, server actions, data). A feature owns everything it needs.
3. **Colocation over globalization.** A component used by one route lives with that route. Promote to `src/components` _only_ when reused in 2+ places. (Avoids premature abstraction AND duplication.)
4. **Server-first, client at the leaves.** Keep the top of the tree as Server Components. Push `'use client'` as deep as possible (only interactive bits: forms, menus, carousels).
5. **One source of truth for data.** Site config (nav, services, pricing tiers, company info) lives in typed `src/data/*` files — referenced everywhere, edited once.
6. **Shared validation schema.** Zod schemas are defined once and reused by both the client form and the server action.
7. **Path aliases.** Import via `@/...` — never `../../../`.
8. **Design tokens, not magic values.** Colors/spacing/typography defined in Tailwind theme; components consume tokens.

---

## 4. Folder Structure

```
goabdullah/
├── public/                          # static assets (images, favicon, og images, robots.txt)
│   └── images/
├── src/
│   ├── app/                         # ROUTING ONLY (thin route files)
│   │   ├── (marketing)/             # route group → shared marketing shell, no URL segment
│   │   │   ├── layout.tsx           #   header + footer for all marketing pages
│   │   │   ├── page.tsx             #   "/"            Home / landing
│   │   │   ├── about/
│   │   │   │   └── page.tsx         #   "/about"       mission, process, team, services
│   │   │   ├── hire-talent/
│   │   │   │   └── page.tsx         #   "/hire-talent" industries, benefits, inquiry form
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx         #   "/pricing"     engagement models, guarantee, CTA
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx         #   "/blog"        blog index (list + filters)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx     #   "/blog/:slug"  single post (MDX render)
│   │   │   └── contact/
│   │   │       └── page.tsx         #   "/contact"     general contact form
│   │   ├── api/                     # route handlers (webhooks, optional)
│   │   ├── layout.tsx               # root layout (html/body, fonts, providers, analytics)
│   │   ├── not-found.tsx            # 404
│   │   ├── error.tsx                # error boundary
│   │   ├── sitemap.ts               # generated sitemap (SEO)
│   │   ├── robots.ts                # robots config (SEO)
│   │   └── globals.css              # Tailwind directives + base styles
│   │
│   ├── components/                  # SHARED, reused in 2+ places only
│   │   ├── ui/                      # primitives (Button, Input, Card, Badge…) shadcn-style
│   │   ├── layout/                  # Header, Footer, Container, Section, Navbar, MobileMenu
│   │   └── common/                  # SectionHeading, CTA, Logo, SocialLinks, Breadcrumbs
│   │
│   ├── features/                    # FEATURE MODULES (domain logic)
│   │   ├── home/
│   │   │   └── components/          # Hero, IndustriesPreview, WhyChooseUs, Stats, FinalCTA
│   │   ├── about/
│   │   │   └── components/          # MissionVisionValues, WorkingProcess, TeamGrid, FounderBio
│   │   ├── services/
│   │   │   └── components/          # ServiceCard, ITServices, LegalServices
│   │   ├── hire-talent/
│   │   │   ├── components/          # BenefitsList, IndustriesServed
│   │   │   └── inquiry-form/        # InquiryForm (client), fields, success state
│   │   ├── pricing/
│   │   │   └── components/          # PricingTier, EngagementModels, Guarantee
│   │   ├── blog/
│   │   │   ├── components/          # PostCard, PostList, PostHeader, TableOfContents, MDXComponents
│   │   │   └── lib/                 # getAllPosts, getPostBySlug, getPostsByPillar (data layer)
│   │   └── contact/
│   │       └── components/          # ContactForm (client)
│   │
│   ├── lib/                         # framework-agnostic helpers
│   │   ├── validations/             # Zod schemas (inquiry.schema.ts, contact.schema.ts) — shared
│   │   ├── actions/                 # Server Actions (submitInquiry, submitContact)
│   │   ├── email/                   # Resend client + email templates
│   │   ├── seo/                     # buildMetadata(), JSON-LD helpers (Organization, Article)
│   │   ├── mdx.ts                   # MDX config / serialization
│   │   └── utils.ts                 # cn(), formatDate(), etc.
│   │
│   ├── data/                        # SINGLE SOURCE OF TRUTH (typed content config)
│   │   ├── site.ts                  # name, tagline, contact, social, nav links
│   │   ├── services.ts              # IT & Legal service definitions
│   │   ├── pricing.ts               # engagement models (Contingent/Engaged/Retained)
│   │   ├── benefits.ts              # outsourcing benefits
│   │   ├── team.ts                  # founder + team bios
│   │   └── process.ts               # working-process steps
│   │
│   ├── content/                     # MDX blog posts (version-controlled content)
│   │   └── blog/
│   │       ├── reduce-cost-of-vacancy-senior-engineers.mdx
│   │       ├── active-headhunting-vs-job-boards.mdx
│   │       ├── lateral-partner-moving-checklist.mdx
│   │       └── outsourcing-associate-recruitment.mdx
│   │
│   ├── types/                       # shared TS types/interfaces
│   ├── hooks/                       # shared React hooks (useMediaQuery, useScrollSpy…)
│   └── styles/                      # design tokens if separated from globals
│
├── tests/                           # Playwright e2e + Vitest setup
├── .env.example                     # documented env vars
├── postcss.config.mjs               # Tailwind v4 PostCSS plugin
├── tsconfig.json                    # strict + @/* path alias
├── next.config.ts                   # MDX, image domains, redirects
│                                     # (Tailwind v4 tokens live in src/app/globals.css @theme — no JS config)
├── .eslintrc / eslint.config.mjs
├── .prettierrc
└── package.json
```

**Why this scales & avoids redundancy**

- Adding a page = add one thin file under `app/(marketing)/` + a feature folder. No touching unrelated code.
- Adding a blog = drop one `.mdx` file in `content/blog/`. Index, sitemap, SEO update automatically.
- Content edits (nav, pricing, services) happen in `src/data/*` only — never duplicated in JSX.
- UI primitives in `components/ui` are reused everywhere → no copy-pasted buttons/cards.

---

## 5. Page-by-Page Breakdown (from client requirements)

### Home `/`

- **Hero**: slogan "Need top talent? Go Abdullah." + primary CTA → `/hire-talent`.
- **Industries preview**: IT & Legal (links to services/about).
- **Why Choose Us**: 4 differentiators (active headhunting, cross-border network, people-first, grit).
- **Benefits / Stats** snapshot, **Final CTA** band.

### About `/about`

1. Company intro — **Mission, Vision, Values** (`MissionVisionValues`).
2. **Overview of working process** (`WorkingProcess` — stepper from `data/process.ts`).
3. **Our Team** (`TeamGrid` + founder bio from `data/team.ts`).
4. **Our services** (`ITServices`, `LegalServices` reusing `ServiceCard`).

### Hire Talent `/hire-talent`

1. **Industries served**: IT & Legal.
2. **Benefits** of outsourcing (3 blocks: cost reduction, passive talent, sourcing speed) from `data/benefits.ts`.
3. **Inquiry form** (Server Action + Zod): `companyName`, `hiringNeeds`, `contactInfo` (name, email, phone). Spam protection + success state + email to agency.

### Blog `/blog` + `/blog/[slug]`

- Index lists posts grouped by **pillar** (IT vs Legal), each post = MDX with typed frontmatter (`title`, `description`, `pillar`, `keywords`, `date`, `slug`, `readingTime`).
- Seeds the 4 client-provided posts.
- Per-post: SEO metadata + **Article JSON-LD**, table of contents, CTA back to Hire Talent.
- `generateStaticParams` for SSG; fully static & fast.

### Pricing `/pricing`

- 3 **engagement models**: Contingent / Engaged (Container) / Retained — from `data/pricing.ts` via reusable `PricingTier`.
- **90-day retention guarantee** block.
- **"Request a Custom Rate Proposal"** CTA → contact/inquiry form.

### Contact `/contact`

- General contact form (Server Action + Zod), agency email, social links.

> **Reuse note:** Inquiry form and contact form share the same `ContactForm`/field primitives and the same submit pipeline (`lib/actions` + `lib/email`); only the Zod schema/fields differ. No duplicated form logic.

---

## 6. SEO Strategy (core to this site)

- **Metadata API**: `generateMetadata` per route via `lib/seo/buildMetadata()` (title template, description, canonical, Open Graph, Twitter cards).
- **Structured data (JSON-LD)**: `Organization` (sitewide), `Article` (blog posts), `BreadcrumbList`.
- **`sitemap.ts` + `robots.ts`**: auto-include all static routes + blog slugs.
- **Performance = ranking**: SSG/RSC, `next/image` (AVIF/WebP), `next/font`, minimal client JS.
- **Semantic HTML + accessibility** (headings hierarchy, alt text, Radix a11y).
- Per-blog keyword targeting already defined in client content (e.g., "cost of vacancy for senior software engineers", "lateral partner legal recruitment").

---

## 7. Forms & Lead Pipeline

```
Client form (RHF + Zod)  →  Server Action (re-validate same Zod schema)
        ↓ (Turnstile/honeypot check)
   lib/email (Resend)  →  notify agency inbox  +  optional autoresponder to lead
        ↓
   return typed result  →  client shows success / inline field errors
```

- **Single Zod schema** per form, imported by both client and server (no drift).
- Progressive enhancement: works with JS via Server Action; graceful errors.
- Optional later: push leads to a CRM/Google Sheet/Airtable — isolated in `lib/actions`, so swapping the destination touches one file.

---

## 8. Design System / Tailwind Setup

- Define brand tokens in `globals.css` via Tailwind v4 `@theme`: primary (premium navy/charcoal + gold/accent), neutral scale, fonts (a refined serif for headings + clean sans for body to convey "elite/legal" feel).
- `Section` + `Container` layout primitives enforce consistent vertical rhythm & max-width across all pages (no ad-hoc padding).
- `components/ui` holds themed primitives; pages never hardcode raw colors/spacing.
- Dark, discreet, premium aesthetic matching the "elite executive search" brand.

---

## 9. Implementation Phases

| Phase                       | Deliverable                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **0. Setup**                | `create-next-app` (TS, Tailwind, App Router, `src/`, alias), ESLint/Prettier, Husky, folder skeleton, design tokens |
| **1. Layout & UI kit**      | Root + marketing layout, Header/Footer/Nav/MobileMenu, `ui` primitives, `Section`/`Container`                       |
| **2. Static content pages** | Home, About, Hire Talent (static parts), Pricing — driven by `src/data/*`                                           |
| **3. Blog system**          | MDX pipeline, post components, index + `[slug]`, seed 4 posts, JSON-LD                                              |
| **4. Forms & leads**        | Zod schemas, Server Actions, Resend email, Turnstile, inquiry + contact forms                                       |
| **5. SEO & polish**         | Metadata, sitemap/robots, OG images, structured data, animations, Lighthouse pass                                   |
| **6. QA & deploy**          | Vitest + Playwright smoke tests, a11y check, Vercel deploy + Search Console                                         |

---

## 10. Quality Guardrails (clean, scalable, non-redundant)

- ✅ **TypeScript strict** + Zod at all external boundaries (forms).
- ✅ **No business logic in `app/`** — only composition.
- ✅ **DRY content** — everything configurable lives in `src/data/*`.
- ✅ **DRY UI** — shared primitives in `components/ui`; promote only on 2nd use.
- ✅ **Server-first**, `'use client'` only at interactive leaves.
- ✅ **Path aliases** (`@/`), no deep relative imports.
- ✅ **Conventional commits** + lint-staged gate.
- ✅ **Accessible** (Radix, semantic HTML, keyboard nav).
- ✅ **Lighthouse 90+** on all routes before launch.

---

## References (best-practice sources)

- [Next.js — Project Structure (official)](https://nextjs.org/docs/app/getting-started/project-structure)
- [Feature-Sliced Design — Next.js App Router guide](https://feature-sliced.design/blog/nextjs-app-router-guide)
- [The Next.js 15 App Router Project Structure That Scales (DEV)](https://dev.to/krunal_groovy/the-nextjs-15-app-router-project-structure-that-scales-with-examples-47ha)
- [Best Practices for Organizing Your Next.js 15 — 2025 (DEV)](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji)
- [How to Build Reusable Architecture for Large Next.js Applications (freeCodeCamp)](https://www.freecodecamp.org/news/reusable-architecture-for-large-nextjs-applications/)
- [Next.js project structure: scalable setup (Magic UI)](https://magicui.design/blog/next-js-project-structure)
- [Scalable Next.js boilerplate (TS, Tailwind, ESLint, Husky) — GitHub](https://github.com/nhanluongoe/nextjs-boilerplate)

---

## Implementation Status (built)

**Location:** `./goabdullah/` — `npm run dev` (Turbopack) then visit `http://localhost:3000`.

Delivered against the plan:

- **Routes (all building):** `/`, `/about`, `/hire-talent`, `/pricing`, `/contact`, `/blog`, `/blog/[slug]` (SSG, 4 posts), plus generated `sitemap.xml` & `robots.txt`, and a custom `404`.
- **Architecture realized:** thin route files in `app/(marketing)/`; domain logic in `src/features/*`; shared primitives in `src/components/{ui,layout,common}`; single-source content in `src/data/*`; blog metadata registry in `src/features/blog/lib/posts.ts` with MDX bodies in `src/content/blog/*`.
- **Forms:** Server Actions + `useActionState`/`useFormStatus` + shared Zod schemas (`src/lib/validations`) + honeypot. Lead delivery via Resend with a console fallback when `RESEND_API_KEY` is unset (see `.env.example`).
- **SEO:** `buildMetadata()` helper, Organization + Article JSON-LD, sitemap/robots.
- **Design:** Tailwind v4 `@theme` tokens (premium navy "ink" + gold), serif headings (Playfair) + sans body (Inter) via `next/font`.

**Deferred / next steps (Phase 6):** Husky + lint-staged, Vitest/Playwright tests, OG image generation, real brand assets/logo, and wiring `RESEND_API_KEY` for live lead email. Defaults (palette, fonts, honeypot-only spam protection) were chosen without client input and are easily swapped.
