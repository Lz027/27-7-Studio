# 27/7 Studios by Ahmed Baghni — V1 Prototype Plan

A single-page site at `/` following your updated PRD. Style is fully specified (creamy white, magenta accent, bubble Japanese-inspired font, sewing-stitch touches, playful-premium — Wii Kirby energy), so I'll build directly. All copy comes verbatim from the PRD's content appendix; unresolved items appear as clearly marked `[PLACEHOLDER: …]`.

## Page structure (in order, per PRD §7)

1. **Minimal top nav** — 27/7 Studios wordmark · Work · Services · About · Contact (anchor links)
2. **Hero** — headline, subtitle, support line, primary CTA "View the work"
3. **Theater-style checklist bar** — horizontal marquee with the 12 words from §9, stitch dividers, pauses on hover, respects `prefers-reduced-motion`
4. **Portfolio stories** — intro "Selected work that shows structure, personality, and trust." then 3 items in right–left–right alternating layout. Each item uses the **Before → After → Lesson** structure with CSS-drawn browser-frame mockups (no image gen for V1). Fields: name, type, before, after, lesson, link — all `[PLACEHOLDER]`.
5. **Data / statistics** — intro "Proof through structure, delivery, and measurable output." then 5 stitched stat cards: Websites planned · Websites launched · Average delivery time · Revisions handled · Concepts created (values `[PLACEHOLDER]`)
6. **Services** — 3 tier cards with the exact PRD copy and prices: Basic $29.99 · Full Expand $74.99 · Enterprise (custom). Included scope shown as `[PLACEHOLDER: exact scope]` bullet.
7. **About** — biography using the SEO-friendly version from §13 (mentions 27/7 Studios, Informatics Engineering, Nusa Putra, Genusian Scholarship, AI, UI/UX, frontend logic), plus motto callout "tech as a tool, business as the game", plus `[PLACEHOLDER: about photo]`
8. **Proof magnets** — two small proof cards next to About (per §14): Research proof + Tool proof (Shoseki, 250 selected tools) — both `[PLACEHOLDER]` for title/link
9. **Contact** — intro "Let's talk about your next step." then 4 large icon CTAs: WhatsApp · LinkedIn · X/Twitter · Email (hrefs `[PLACEHOLDER]`)
10. **Footer** — 27/7 Studios wordmark, tagline, tiny stitch line, © year

## Brand & design system

Semantic tokens in `src/styles.css` (no hardcoded colors in components):

- `--background` creamy white (~oklch(0.98 0.02 85))
- `--primary` magenta / purplish-red magenta (~oklch(0.58 0.24 0))
- `--foreground` warm dark neutral
- `--border` soft warm neutral
- Radii bumped up for soft bubbly edges
- Soft "squeezed" shadow token for playful lift
- `.stitch` utility → dashed magenta stitching border for section dividers, cards, buttons
- Marquee `@keyframes` for the checklist bar
- Fonts loaded via `<link>` in `src/routes/__root.tsx`:
  - Display: **Mochiy Pop One** (bubble Japanese-inspired) → `--font-display`
  - Body: **Plus Jakarta Sans** → `--font-sans`

## SEO / head metadata

`src/routes/index.tsx` gets its own `head()` with:
- title: "27/7 Studios by Ahmed Baghni — Creative websites for small businesses"
- description: SEO paragraph naturally including Ahmed Baghni, 27/7 Studios, web design, landing pages, small business websites, UI/UX, AI, frontend logic (per §18)
- og:title, og:description, twitter equivalents
- `__root.tsx` head cleaned up (remove "Lovable App" / "Lovable Generated Project")

## Motion

- Checklist marquee (CSS-only, hover pause, reduced-motion aware)
- Subtle hover lift on portfolio & pricing cards
- Smooth anchor scroll for nav

No JS animation libraries needed for V1.

## Files to change / create

- `src/styles.css` — creamy/magenta tokens, `.stitch` utility, marquee keyframes, radius bumps, `@theme` font mappings
- `src/routes/__root.tsx` — real head meta, Google Fonts preconnect + Mochiy Pop One + Plus Jakarta Sans links
- `src/routes/index.tsx` — replace placeholder with the full one-page site + per-route `head()`
- `src/components/site/` — focused components:
  - `Nav.tsx`
  - `Hero.tsx`
  - `TheaterBar.tsx`
  - `PortfolioStories.tsx` (accepts item + `align: 'left' | 'right'`)
  - `Stats.tsx`
  - `Services.tsx`
  - `About.tsx`
  - `ProofMagnets.tsx`
  - `Contact.tsx`
  - `Footer.tsx`
- `src/lib/site-content.ts` — single source for all copy + placeholders so you can edit in one file

## Out of scope for V1 (per PRD)

No blog, no CMS, no booking, no analytics wiring, no lead form, no fabricated testimonials or stats, no image generation, no payment integration (payment methods are `[PLACEHOLDER]` text only).

## Acceptance check I'll run before finishing

- `/` renders full site; blank-page placeholder is removed
- Index route has unique head meta (not "Lovable App")
- Marquee animates smoothly and pauses on hover
- Portfolio alternates right–left–right; stacks cleanly on mobile
- All 4 contact icon buttons are large/tappable on mobile
- All PRD-final copy present verbatim; all unresolved items marked `[PLACEHOLDER: …]`
- No hardcoded color utilities — all colors flow through tokens

Approve and I'll build it.
