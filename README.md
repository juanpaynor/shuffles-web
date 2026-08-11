# Adventure Axis

Website for **Adventure Axis Incorporated** and its two entertainment hubs in
Roxas City, Capiz — **Shuffles** and **BayRox**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:9002
```

## Routes

| Route | Brand |
| --- | --- |
| `/` | Adventure Axis — company landing |
| `/shuffles` | Shuffles — nightlife hub |
| `/bayrox` | BayRox — bayside hub |

## Logos

Drop the brand logo files into `public/images/`:

- `adventure-axis.png`
- `shuffles.png`
- `bayrox.png`

Paths and dimensions are configured in [`src/lib/brands.ts`](src/lib/brands.ts).
Until a file exists, `<Logo />` renders a styled text wordmark in its place.

## Theming

Brand palettes are CSS custom properties in `src/app/globals.css`, scoped by a
`data-brand` attribute. See [`docs/blueprint.md`](docs/blueprint.md) for the full
design system.
