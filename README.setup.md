# Samuel Juan Portfolio

Single-page portfolio built with Next.js (App Router). Designed for a Technical Product Associate focus with clean UI, strong SEO, and a contact form powered by Formspree.

## Tech Stack
- Next.js (App Router) + React
- TypeScript
- CSS Modules
- Formspree (email form)

## Features
- Responsive layout with dark/light toggle
- Typewriter hero headline
- Proof metrics, case studies, and skills grid
- Email form with inline validation + toast feedback
- SEO metadata (OG/Twitter/JSON-LD)

## Getting Started
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

## Scripts
- `npm run dev` – local dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint

## Deploy
Deploy to Vercel with standard Next.js settings. Add the Formspree endpoint as an environment variable in Vercel.

## Project Structure
- `app/` – routes, layout, metadata, globals
- `components/` – UI sections
- `data/` – content and configuration
- `hooks/` – form + UI hooks
- `utils/` – shared helpers (validation)
- `public/` – static assets (logos, CV)
