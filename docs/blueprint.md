# **App Name**: Adventure Axis

Adventure Axis Incorporated is the parent brand. It operates two entertainment
hubs in Roxas City, Capiz: **Shuffles** and **BayRox**. The site is an umbrella
landing page plus one page per hub, each carrying its own palette.

## Structure

| Route | Brand | Purpose |
| --- | --- | --- |
| `/` | Adventure Axis | Company landing — hero, hub picker, about, contact |
| `/shuffles` | Shuffles | Nightlife hub — bowling, billiards, darts, karaoke, bar |
| `/bayrox` | BayRox | Bayside hub — food park, live music, sunset deck, events |

Shared chrome (`SiteHeader`, `SiteFooter`) wraps every route via the root layout.

## Theming

Each brand is a set of CSS custom properties in `src/app/globals.css`, scoped by a
`data-brand` attribute (`axis` is the `:root` default). A page opts in by setting
`data-brand` on its `<main>`; shared chrome reads the active brand from the route.
Two extra tokens, `--brand` and `--brand-contrast`, let shared components (scroll
progress, sticky CTA, selection colour) follow whichever brand is in view.

Brand-literal Tailwind colours also exist for one-off use: `axis-*`, `shuffles-*`,
`bayrox-*` in `tailwind.config.ts`.

## Style Guidelines

### Adventure Axis — parent
- Background: Axis ink (#0E0E10), secondary surface Axis slate (#191920).
- Accent and CTA: Axis gold (#F2A93B), with Axis amber (#EE8B4E) for gradients.
- Neutral, premium and quiet — it has to sit comfortably around both hub palettes.

### Shuffles — nightlife hub
- Background: deep maroon (#5E1626) for a premium nightlife feel.
- Accent and CTA: neon orange / coral (#FB6241); dark maroon (#AA3A2F) for depth.
- Cinematic and dark. Sticky scroll experience panels, spotlight hovers.

### BayRox — bayside hub
- Background: warm cream (#FFF6E5) with ink text (#1F2933) — bright and daytime.
- Accents pulled straight from the logo: red (#E8412E), blue (#3B8FD4),
  yellow (#F9D949), green (#5FB55A), orange (#F08A32).
- Rounded, playful, generous. Uses `font-display` (Fredoka) for headings.

### Shared
- Body and headline font: 'Space Grotesk'.
- Clean grid layout with dramatic spacing. Mobile-first.
- Subtle scroll and hover animation; nothing gimmicky.

## Logos

Logo files live in `/public/images` and are referenced from `src/lib/brands.ts`:

- `adventure-axis.png`
- `shuffles.png`
- `bayrox.png`

`<Logo brand="..." />` renders a styled text wordmark if a file is missing, so
pages stay presentable before the assets land.

## Core Features

- Hub picker on the umbrella page, each card in its own brand colours.
- Venue showcase per hub using animated cards and sticky scroll panels.
- "Book Now" CTAs with thumb-friendly mobile sticky bar.
- Scroll-based fade / slide / scale animations, plus a brand-tinted progress bar.
- Subtle hover and tap micro-interactions.
