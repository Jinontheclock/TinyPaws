# TinyPaws — kitten rescue website

A volunteer-run kitten rescue site for Vancouver, BC, rebuilt as a fully
static site after the original WordPress build was retired. Live demo for
the TinyPaws case study on [hajin's portfolio](https://jinontheclock.github.io/Portfolio/).

**Small paws, safe homes.**

## Stack — and why

- **[Astro](https://astro.build) (static output)** — a content-first
  multi-page site is exactly what Astro's zero-JS-by-default model is for.
  A React SPA would be overhead with no payoff here.
- **Pure CSS with custom properties** — the design-system tokens from the
  style tile live in `src/styles/tokens.css`. No CSS framework: the
  token file *is* part of the case-study story (design system → code).
- **Vanilla TypeScript islands** — small inline scripts for the mobile
  nav, gallery filters, form validation, and the match-quiz scoring.
  Nothing else ships JavaScript.
- **Astro Content Collections** — cats and events are schema-validated
  JSON in `src/content/`, not hardcoded markup.

## Design tokens

From the TinyPaws style tile (Figma):

| Token | Value |
| --- | --- |
| Orange | `#DC6E00` |
| Orange (small-text ink) | `#A65300` — AA-contrast variant for text on cream |
| Dark brown | `#301800` |
| Cream | `#F5ECD8` |
| Black / White | `#000000` / `#FFFFFF` |
| Display type | Fredoka 64 / 40 / 32 / 24 / 20 |
| Body type | Lexend Regular 16 |

**Font note:** Both faces are self-hosted via Fontsource under the SIL
Open Font License — **Fredoka** (a rounded geometric sans) for display,
**Lexend** (designed for reading proficiency) for body copy. The build
ships no licence-restricted webfonts.

**Contrast:** raw orange on cream measures 2.85:1, below WCAG AA — so
body-size orange text uses the darkened `#A65300` (4.6:1) and orange
buttons carry dark-brown labels (5.0:1) instead of white (3.3:1).

## Content

- `src/content/cats/*.json` — name, age, sex, breed, temperament, story,
  medical record, adoption status, and quiz-matching attributes.
- `src/content/events/*.json` — adoption days, fundraisers, orientations.
- Cat portraits are **brand-palette SVG illustrations** standing in until
  the rescue's own photos are supplied (no third-party rescue photos are
  used). Swap them by replacing `CatPortrait` usage with `<img>` per cat.

## Honest-demo boundaries

- Forms validate client-side and confirm success **without sending
  anything** — stated in the UI.
- The match quiz is transparent additive scoring over the cats' JSON
  attributes. It is labelled a *match quiz*, not "AI".
- Donation buttons are marked as demo; no payment provider is attached.
- Shop / forum / login from the original sitemap are out of scope and do
  not appear anywhere (no dead links).

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
npm run preview    # serve the build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`
(`withastro/action` → GitHub Pages). The site is served from
`https://<owner>.github.io/TinyPaws/` — the `base` is set in
`astro.config.mjs`.

## Cat photos

Cat pictures run through `astro:assets` (`photos` in each cat's JSON,
files in `src/assets/cats/<slug>-1.jpg`) and ship as responsive webp.
Cats without photos automatically fall back to their illustrated
portrait — deliberate, since a new rescue often has no photos yet.
Photos must be committed local assets (no hotlinking, no runtime cat
APIs) so profiles stay stable and the site stays static.

## Photo credits

Cat and banner photos are carried over from the original TinyPaws
student project's hi-fi design files, where the team sourced them
during the course. They are used here in the same demo context.
