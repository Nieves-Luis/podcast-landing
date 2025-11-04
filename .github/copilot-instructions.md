## Repo snapshot

- Framework: Next.js (app router) — project uses `next`@16 and React 19.
- TypeScript-enabled. Tailwind CSS is configured (see `postcss.config.mjs` and `tailwindcss` in devDependencies).
- Entry points:
  - `src/app/layout.tsx` — root layout (fonts + globals.css). Fonts loaded via `next/font/google` and exposed as CSS variables (e.g. `--font-geist-sans`).
  - `src/app/page.tsx` — default landing page. Use this file as the main app example.

## What to know to be productive

- Run & build:
  - Development: `npm run dev` (uses `next dev`).
  - Build: `npm run build` then `npm start` for production.
  - Lint: `npm run lint` (uses ESLint).

- File structure & conventions:
  - Uses the Next.js app directory at `src/app/`. Follow the app-router patterns: `page.tsx`, `layout.tsx`, nested folders for routes.
  - Keep shared UI in `src/components/` and small utilities in `src/lib/`.
  - Global CSS is `src/app/globals.css`. Tailwind utility classes are used directly in JSX (see `page.tsx`).
  - Static assets live in `public/` and are referenced with `/asset-name` (e.g. `<Image src="/next.svg" />`).

## Patterns & examples from this repo (copy/paste friendly)

- Root layout sets fonts as CSS variables so components can reference them in className:

  - File: `src/app/layout.tsx` — uses `Geist()` and `Geist_Mono()` from `next/font/google` and applies variables on <body>:

    - CSS variables created: `--font-geist-sans`, `--font-geist-mono` — prefer using these rather than importing fonts elsewhere.

- Component style: Tailwind-first

  - Example: `src/app/page.tsx` uses utility classes like `flex min-h-screen items-center justify-center bg-zinc-50` — prefer small, focused components that accept className props and compose Tailwind utilities.

## Next.js specifics to respect

- Server vs Client components: the app router defaults to server components. Add `"use client"` at the top of a file if a component requires client-only behavior (state/hooks, event handlers).
- Image handling: uses `next/image`. Keep images in `public/` for simple static assets.
- next.config.ts is present but empty — avoid assumptions about custom runtime settings.

## Integrations & deployment

- Project targets Vercel defaults (README suggests Vercel). Keep runtime-compatible patterns (no custom server code expected).

## Scaffolding and small edits guidance

- When adding a new route, create `src/app/your-route/page.tsx` and, if needed, `layout.tsx` inside that folder for nested layouts.
- For shared UI create `src/components/Button.tsx` that accepts `className?: string` and composes Tailwind classes.
- For utilities add small files under `src/lib/` and export named helpers.

## Files to reference when editing or making suggestions

- `package.json` — scripts and dependency versions.
- `src/app/layout.tsx` — root layout, font loading pattern.
- `src/app/page.tsx` — example usage of Tailwind and `next/image`.
- `public/*` — static assets referenced by pages/components.

## What not to change without confirmation

- Do not change Next.js major settings or swap routing modes (app → pages) without PR and tests — the repo is app-router-based.
- Avoid introducing global CSS outside `src/app/globals.css` that could conflict with Tailwind utility classes.

If anything here is unclear or you want the instructions to be more prescriptive (for example, adding automatic lint/fix or a code-generation helper), tell me what to include and I will update this file.
