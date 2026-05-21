# Lewis Garden and Suites

Premium luxury hotel website for **Lewis Garden and Suites** — Karu, Nasarawa, Nigeria.

Live-style marketing site with WhatsApp enquiries, room pricing, gallery, and location highlights near Bingham University and Goshen City.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript

## Features

- Dark luxury UI with gold accents and glassmorphism
- Cinematic hero with your hotel photography
- Room cards with nightly prices and WhatsApp enquire buttons
- Amenities, filterable gallery, proximity map
- Google Maps embed, testimonials, contact form
- Mobile-first layout with working mobile navigation
- Floating WhatsApp conversion button

## Quick start

```bash
git clone https://github.com/cyberjay0/Lewis-Garden-Suites.git
cd Lewis-Garden-Suites
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

| What | Where |
|------|--------|
| Room **prices**, names, photos | `src/lib/constants.ts` → `ROOMS` |
| Phone, WhatsApp, email | `src/lib/constants.ts` → `HOTEL` |
| Hero hotel photo | `public/images/hotel-hero.png` |
| Room photos | `public/images/rooms/` (`standard.jpg`, `deluxe.jpg`, `executive.jpg`) |

See **[CUSTOMIZE.md](./CUSTOMIZE.md)** for step-by-step instructions.

## Deploy

See **[DEPLOY.md](./DEPLOY.md)** for Vercel deployment (recommended).

```bash
npm run build
npm start
```

## Project structure

```
public/images/          # Hotel hero, logo, room photos
src/lib/constants.ts    # Hotel info, rooms, gallery, nav
src/components/         # Page sections (Hero, Rooms, etc.)
src/app/                # Next.js app router entry
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run production build locally |
| `npm run lint` | ESLint |

## License

Private project for Lewis Garden and Suites.
