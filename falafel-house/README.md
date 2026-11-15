# Falafel House — Landing Page

React 18 + Tailwind CSS 3 + Vite. Layout modelled on the Griddle Framer template.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

| What | File |
| --- | --- |
| All copy, prices, links, polaroid slides | `src/data.js` |
| Brand colours, fonts, animations | `tailwind.config.js` |
| Buttons, checkerboards, starburst, outlined text | `src/index.css` |
| Sections | `src/components/` (Navbar, Hero, Marquee, SharedSection → PolaroidStack + Receipt, Bestsellers, Tiles, Footer) |
| Logo + illustrations | `src/assets/` |

## Before going live

- **Photos:** the food is illustrated (SVG). Drop real photos into `src/assets/` and point the imports in `src/data.js` at them.
- **Links:** `links` in `src/data.js` points at the Uber Eats / Bolt Food home pages — replace with the store URLs.
- **Newsletter:** `Footer.jsx` has a `TODO` where the email signup should post to your mailing-list provider.

## Brand tokens

- `fh` `#1A852B` — accessible green for text, buttons and the ticker band
- `fh-bright` `#42BD41` — logo green, used on the giant footer wordmark
- `cream` `#F6EFE1`, `ink` `#141414`, `sun` `#FFD23F`, `card` `#EDE3CF`
- Fonts: Anton (headline), Archivo Black (section titles), Oswald (body), Courier Prime (receipt), Permanent Marker (stickers/captions), Fredoka (wordmark)
