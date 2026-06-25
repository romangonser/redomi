# Re-Do-Mi Design System

**Re-Do-Mi** is a Swiss online marketplace for **upcycling creations** — handmade,
circular-economy products. It positions itself not as a shop but as a *Vermittler*
(intermediary / matchmaker) between **Gestalter:innen** (designers/makers) and the
community that buys, commissions and champions their work. Everything is in
**German (Swiss tone)**, prices are in **CHF**, and the company is based in **Zürich**.

The brand voice is warm, grounded and quietly editorial: think independent design
studio, not e-commerce mega-store. The visual world is built around a single
saturated **brand yellow** (`#f0c93c`) set against ink black, sage-tinted neutrals
and real, warm-toned product/maker photography.

> Tagline: *"Der Markt für Upcycling-Kreationen."*
> Mission line: *"Re-Do-Mi ist der Vermittler innerhalb der Upcycle-Szene — eine
> Plattform, wo Gestalter:innen ihre Kreationen zeigen, und Kund:innen direkt in
> Kontakt treten können."*

## Sources

This system was reconstructed from a Figma file the user provided:

- **Figma file:** `re_do_mi-claude_20260619.fig`
- **Scope (9 frames):** `Design-System` page — `COLORS`, `TYPOGRAPHY`,
  `SPACING`, `BUTTONS`, `BADGES-LINKS`, `CARDS`, `NAVIGATION`, `FOOTER` — plus the
  `Home / Homepage-Guest` frame and the `Components` page (ProductCard, CategoryCard,
  DesignerCard, Header Guest / Angemeldet) for the live product UI.

Token values, type specs and component anatomy were read directly from that file.
The reader is not assumed to have access; everything needed is captured here.

---

## Products / surfaces

- **Marketplace website** (the only product in scope). Key views: a guest homepage
  (hero, category grid, new arrivals, designer spotlight, testimonials, partners,
  footer), product listings, designer profiles, and an "Anschlagbrett" (community
  pinboard / commissions). A logged-in ("Angemeldet") header variant exists with
  notifications, cart and account actions.

---

## CONTENT FUNDAMENTALS

How Re-Do-Mi writes:

- **Language:** German, Swiss spelling (`ss`, never `ß`). Prices `CHF 99`.
- **Address:** Speaks to the reader as **du** ("Was findest du hier?", "deine@email.ch"),
  warm and direct — never the formal *Sie*. Refers to the community in the third
  person with **gender-inclusive colon forms**: *Designer:innen*, *Gestalter:innen*,
  *Kund:innen*. This is a load-bearing brand signal — always use it.
- **Tone:** Editorial, grounded, a little poetic. Headlines can be playful
  ("Frisch aus dem Ofen" = "fresh out of the oven" for new arrivals). Body copy is
  plain and human — explains the *why* (circularity, makers, direct contact).
- **Casing:** UI labels and eyebrows are **UPPERCASE and tracked out**
  (PRODUKTE, NEUHEITEN, MODE). Headlines are sentence/title case. Body is normal case.
- **Emoji:** none. The only "emoji-like" glyphs are a **→ arrow** (in links and CTAs)
  and a typographic **" quote mark** (yellow, oversized) on testimonials.
- **Sample microcopy:** CTA *"Produkte entdecken →"*, *"Designer:innen kennenlernen"*,
  link *"Alle ansehen →"*, location *"Zürich →"*, announcement *"Neue Plattform —
  Jetzt als Designer:in registrieren & Profil erstellen"*, legal *"© 2026 Re-Do-Mi,
  Zürich — Alle Rechte vorbehalten"*.

---

## VISUAL FOUNDATIONS

- **Colour:** One brand colour does the heavy lifting — **yellow `#f0c93c`** for
  primary CTAs, the announcement bar text, footer headings and the oversized quote
  mark. Everything else is restrained: **ink `#1a1a1a`** (text + footer), a family of
  **sage-tinted greys** (`#f4f7f5` → `#d4dcd5`) for surfaces and image placeholders,
  **medium `#474747`** for body and the announcement bar background, and **muted
  `#888888`** for captions, tag outlines and icon strokes. A single **forest-green
  `#3a5a40`** is reserved for inline / "see all" link underlines.
- **Type:** Three families. **Josefin Sans** (geometric humanist sans) for ALL UI,
  headings, labels and buttons — almost always tracked out, labels uppercase.
  **Playfair Display italic** appears *only* as the middle line of the hero H1 and as
  pull-quotes — a single editorial flourish. **Lato Light (300)** is the body face,
  warm and quiet. **Courier New** is used for spec/code chips in docs only.
- **Backgrounds:** Mostly flat **white** and **sage `#f4f7f5`** in alternating
  full-width sections. Real **photography** (warm, natural light, product- and
  maker-focused) fills hero and card image areas; image placeholders are flat sage.
  No gradients, no patterns, no textures.
- **Borders & depth:** The system is **shadowless**. Depth comes from **1px hairline
  borders** (`rgba(26,26,26,0.10)`) and the sage/white surface contrast. Cards have no
  drop shadow. A featured testimonial uses a **1px yellow border**; the active nav item
  uses a **2px ink underline**; product cards reveal a **2px ink top-rule on hover**.
- **Corner radius:** Tiny and crisp — **2px** default (cards, buttons, inputs), **4px**
  for larger panels, **0.5px** for the near-square category tag. Nothing is pill-shaped.
- **Buttons:** Primary = solid yellow, ink label, 2px radius, generous 14×32 padding.
  Ghost = transparent with 1px ink outline. Nav/Login = white with 1px ink outline.
  All use Josefin 600 uppercase with wide tracking.
- **Animation & states:** Subtle and quick (~0.18s ease). Hover = colour shift
  (primary darkens slightly to `#e0b92e`; ghost/nav invert to ink fill + white text;
  icon buttons pick up a sage wash; images dim ~4%). No bounces, no large motion, no
  decorative loops. Press states are colour-only — the brand stays crisp, no shrink.
- **Layout:** Centered content, **max width 1440px**, **64px** horizontal page padding,
  **68px** nav bar, sections padded **80–96px** vertically. Product grids use a **24px**
  gap; the design sits on an **8px spacing grid**.
- **Imagery vibe:** Warm, natural, documentary — real makers and real objects, daylight,
  earthy oranges and greens. Never cool, never b&w, never stocky.

---

## ICONOGRAPHY

Re-Do-Mi uses a **thin geometric line-icon set** (~1.5px stroke, rounded joins) for
header actions — **search, cart, account, notifications** — plus a small **→ arrow**
used inline in CTAs and links. Icons inherit `currentColor` (usually ink, or white on
the footer). There is **no icon font**, **no emoji**, and **no decorative unicode**.

> ⚠️ **Substitution flag:** the original icon vectors extracted from the Figma file were
> incomplete fragments (stroke-expanded partial paths), so this system ships a small
> inline **Lucide** (MIT) set as `components/icons/Icon.jsx` — a near-identical
> thin-geometric match. If you have the real Re-Do-Mi icon SVGs, drop them in and update
> `Icon.jsx`. See the **Icons** component card.

The brand **logo** is a wordmark — *Re-Do-Mi* in Josefin Sans Bold, tracked out — paired
with a mark of **three equal yellow bars** (the "Re-Do-Mi" musical notes). See
`components/brand/Logo.jsx`.

---

## File index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s all tokens + base.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**`tokens/`** — `fonts.css` (Google Fonts: Josefin Sans, Lato, Playfair Display),
`colors.css`, `typography.css`, `spacing.css`, `base.css`.

**`assets/`** — `images/` (hero shop, product sneaker, category, designer portrait),
`icons/` (reserved for real brand SVGs).

**`components/`** (namespace `window.ReDoMiDesignSystem_e4680b`)
- `brand/Logo`
- `buttons/Button`, `buttons/IconButton`
- `badges/CategoryBadge`, `badges/SeeAllLink`
- `cards/ProductCard`, `cards/CategoryCard`, `cards/DesignerCard`, `cards/SocialProofCard`
- `icons/Icon`
- `navigation/Navbar`
- `footer/Footer`

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing) shown in the
Design System tab.

**`ui_kits/website/`** — interactive guest-homepage recreation (`index.html` + screens).

---

## Caveats

- **Fonts** load from Google Fonts CDN (all three are free Google families and match the
  Figma file exactly — no substitution). For a fully self-hosted system, replace the
  `@import` in `tokens/fonts.css` with local `@font-face` + binaries.
- **Icons** are a Lucide substitute (see ICONOGRAPHY) pending the real SVGs.
