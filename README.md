# Stratexim

Corporate website for Stratexim — strategic textile manufacturing. Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployed to [GitHub Pages](https://pages.github.com/).

Live at **https://stratexim.com**

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm

## Development

```bash
npm install
npm run dev
```

The dev server starts with hot reload enabled.

## Build & Preview

```bash
npm run build
npm run preview
```

The production build outputs static HTML/CSS/assets to `dist/`.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages automatically.

## Project Structure

```
src/
├── components/   # Astro components (Header, Hero, About, Products, Team, Contact, Footer)
├── layouts/      # Page layout wrapper
├── pages/        # File-based routing (index.astro)
└── styles/       # Global CSS and animations
public/           # Static assets (fonts, favicons, manifest, sitemap)
```

## Key Details

- **Bilingual** — English/Czech toggle, preference stored in localStorage
- **Static output** — no client-side JS runtime required
- **Fonts** — self-hosted Raleway (woff2)
