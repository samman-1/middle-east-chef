# Middle East Chef — Brand Identity Kit

> Premium meat distribution. Quality you can taste, service you can trust.

This document is the single source of truth for the Middle East Chef (MEC) brand.
All colors are **extracted directly from the official logo** and drive the website's design tokens.

---

## 1. Brand Essence

| | |
|---|---|
| **Name** | Middle East Chef (MEC) |
| **Industry** | Meat distribution / wholesale supply |
| **Audience** | Restaurants, retailers, hotels, and wholesalers |
| **Promise** | Premium, Halal-certified meat delivered fresh through a reliable cold chain |
| **Personality** | Premium · Trustworthy · Energetic · Appetizing |
| **Tagline** | *Premium Meat Distribution* |

---

## 2. Logo

The MEC mark is a bold **"MEC" monogram** with a multi-colour **flame/swoosh** rising from it,
above the **"MIDDLE EAST CHEF"** wordmark. The flame represents cooking, energy, and variety.

**Assets**
- `public/logo.png` — full-colour logo, **transparent background** (use everywhere)
- `MEC.JPG` — original source (white background; do not use directly on the site)

**Usage rules**
- ✅ Always use the transparent `logo.png` on dark or photographic backgrounds.
- ✅ Keep clear space around the logo equal to the height of the letter "M".
- ✅ Minimum size: 32 px tall (mark) / 120 px wide (full lockup).
- ❌ Do not re-colour, stretch, rotate, add shadows, or place on a busy low-contrast area.
- ❌ Do not put the white-background version on coloured surfaces.

---

## 3. Colour Palette

### Brand colours (extracted from the logo)

| Token | Name | HEX | RGB | Use for |
|---|---|---|---|---|
| `brand-red` | **Flame Red** | `#FC5454` | 252, 84, 84 | **Primary** — CTAs, links, highlights |
| `brand-orange` | **Saffron** | `#FC9018` | 252, 144, 24 | **Secondary** — accents, gradients, eyebrows |
| `brand-teal` | **Teal** | `#48A8C0` | 72, 168, 192 | Category accent, icons |
| `brand-green` | **Lime** | `#90CC48` | 144, 204, 72 | Success states, category accent |
| `brand-blue` | **Steel Blue** | `#4878B4` | 72, 120, 180 | Supporting accent, category accent |

### Neutrals (light theme — matches the white-background logo)

| Token | Name | HEX | Use for |
|---|---|---|---|
| `white` | White | `#FFFFFF` | Page background |
| `stone-50` | Cloud | `#FAFAF9` | Alternating sections / surfaces |
| `stone-200` | Mist | `#E7E5E4` | Borders / dividers |
| `stone-600` | Slate | `#57534E` | Body text |
| `stone-900` | Ink | `#1C1917` | Headings |

### Signature gradient

```
MEC Flame:  linear-gradient(90deg, #FC5454 → #FC9018)
```
Used on the word "Distribution", primary emphasis, and progress accents.

### Usage ratio (the 60-30-10 rule)
- **60%** white / light neutral backgrounds (like the logo's white field)
- **30%** charcoal/stone text
- **10%** brand colour (Flame Red primary, Saffron secondary, with teal/green/blue as occasional category accents)

---

## 4. Typography

| Role | Typeface | Weight | Notes |
|---|---|---|---|
| Display / Headings | **Geist Sans** | 800–900 (Black) | Tight tracking, uppercase eyebrows |
| Body | **Geist Sans** | 300–400 | Relaxed line-height (~1.6) |
| UI / Buttons | **Geist Sans** | 600 (Semibold) | |
| Code / Mono | **Geist Mono** | 400 | |

**Type scale (desktop):** H1 `clamp(2.5rem→4.5rem)` · H2 `2.25rem` · H3 `1.25rem` · Body `1rem–1.125rem` · Eyebrow `0.75rem` uppercase, letter-spacing `0.2em`.

---

## 5. Voice & Tone

- **Confident, not boastful** — "Quality you can taste, service you can trust."
- **Clear & practical** — speak to chefs and buyers: cuts, freshness, delivery, Halal.
- **Warm & premium** — appetizing language, never cheap or gimmicky.
- Prefer short, active sentences. Lead with the customer benefit.

---

## 6. Imagery

- **Bright, appetizing meat photography** (steaks, cuts, platters) on clean white/light backgrounds.
- Each product category card carries a real photo with a brand-colour gradient label.
- High contrast, warm tones; subjects lit so the meat is the hero.
- A floating hero image card + an interactive **WebGL globe** showing global sourcing routes into Saudi Arabia.
- Avoid clip-art, washed-out stock, or cluttered compositions.

---

## 7. UI Components

| Element | Spec |
|---|---|
| Corner radius | Buttons/CTAs: pill (`9999px`); cards: `1rem–1.5rem` |
| Primary button | `bg-brand-red`, white text, soft red shadow, hover scale 1.03 |
| Secondary button | White, `1px` stone border, charcoal text, hover → brand-red |
| Card | White, `1px` stone-200 border, soft shadow, hover shadow-lg |
| Icon chips | Tinted brand colour at 15% opacity background |
| Section rhythm | Vertical padding `6rem` (`py-24`) on desktop |

---

## 8. Design Tokens (implementation)

Defined in [`app/globals.css`](app/globals.css) under `@theme` and consumed via Tailwind utilities
(`bg-brand-red`, `text-brand-orange`, etc.):

```css
--color-brand-red:    #fc5454;
--color-brand-orange: #fc9018;
--color-brand-teal:   #48a8c0;
--color-brand-green:  #90cc48;
--color-brand-blue:   #4878b4;
```

---

## 9. Tech / Running the Site

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion ·
COBE** (interactive WebGL globe in the global-sourcing section).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

**Key files:** brand tokens → `app/globals.css` · logo component → `components/logo.tsx` ·
hero → `components/sections/site-hero.tsx` + `components/sections/meat-scene.tsx` ·
content data → `lib/products.ts`.

---

*Colours in this kit were sampled directly from the logo via `scripts/extract-colors.mjs`.*
