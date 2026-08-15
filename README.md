# Mahdi Hooshmand — Portfolio

A bilingual, recruiter-focused portfolio for a systems and infrastructure specialist. Built with Astro, deployed to GitHub Pages, and available in English (`/`) and Persian (`/fa/`).

## Local development

Requirements: Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Astro runs the development server in background mode. Manage it with:

```sh
npm run dev:status
npm run dev:logs
npm run dev:stop
```

## Content and localization

All English and Persian facts and copy live in `src/data/portfolio.ts`. Both routes render the shared `src/components/PortfolioPage.astro` component so records cannot drift structurally.

When editing content:

- Update both `en` and `fa` locale records.
- Keep employer and customer identities anonymized.
- Keep technical product names in Latin script.
- Use logical CSS properties so layouts continue to work in both LTR and RTL.
- Do not add the phone number to page content or metadata; it belongs only in the downloadable CV.

## Verification

```sh
npm run check
npm run build
npm run test:e2e
npm audit --omit=dev --audit-level=high
```

The Playwright suite verifies localized metadata, synchronized content records, accessibility, mobile navigation, reduced-motion behavior, privacy rules, and required build artifacts.

## Deployment

Pushes to `main` run type checks, build the site, execute browser tests, and deploy `dist/` through GitHub Pages. The production site is configured as [mahdim43.github.io](https://mahdim43.github.io/).
