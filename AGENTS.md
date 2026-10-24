<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Agent Guidelines for Re-Editor

This document provides AI coding agents and automated tools with technical context, project conventions, and actionable instructions to work effectively in this repository.

## Project Overview

**Re-Editor** is a modern web playground built with Next.js 16 (Turbopack, App Router) and React 19. It allows developers to test, evaluate, and compare popular web-based editors (Quill.js, Monaco Editor, Editor.js).

### Core Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Runtime / UI Library**: React 19
- **CSS / Styling**: Tailwind CSS 4 (`@tailwindcss/postcss`)
- **Component Primitives**: Radix UI, shadcn/ui
- **Service Worker / PWA**: Serwist (`@serwist/next`, `@serwist/cli`)
- **Package Manager**: pnpm

## Setup Commands

Always use `pnpm` as the package manager in this project.

- **Install dependencies**:
  ```bash
  pnpm install
  ```
- **Start development server** (Next.js Turbopack + Serwist watch):
  ```bash
  pnpm dev
  ```
- **Single build & dev run** (builds SW once, then starts Next.js):
  ```bash
  pnpm dev:once
  ```
- **Production build**:
  ```bash
  pnpm build
  ```
- **Run production server**:
  ```bash
  pnpm start
  ```

## Development Workflow & Environment

- **Environment variables**:
  - `NEXT_PUBLIC_SERVER_URL`: Base server URL used by `metadataBase` in `layout.tsx` and for `robots.ts` / `sitemap.ts` (defaults to `http://localhost:3000`).
- **PWA / Service Worker**:
  - The service worker source is at `src/app/sw.ts`.
  - Built output is placed into `public/sw.js`.
  - Development mode runs `serwist build --watch` concurrently with `next dev --turbopack`.

## Next.js 16 & React 19 Architectural Rules

1. **Next.js Documentation**:
   - Reference `node_modules/next/dist/docs/` when in doubt about API changes or conventions.
2. **Server vs Client Components**:
   - Route `page.tsx` files should be **Server Components** to allow exporting the static or dynamic `metadata` object (`import type { Metadata } from "next"`).
   - Never place `"use client"` in a `page.tsx` file that needs to export `metadata`. Next.js disallows exporting metadata from Client Components.
3. **Colocated Client Components & Private Folders**:
   - Interactive components (such as editors that require browser globals `window` or `document`) must have `"use client"` and be placed in `_components/` or private directories (e.g. `src/app/playground/_components/`).
   - Private folders prefixed with an underscore (`_folder`) are ignored by Next.js App Router routing.
4. **Dynamic Imports for Heavy Browser-only Libraries**:
   - Dynamic imports with `await import(...)` inside `useEffect` or `next/dynamic` must be used for libraries that access the DOM upon initialization (e.g., `quill`, `@editorjs/*`).
5. **Metadata & OpenGraph**:
   - `metadataBase` is defined at the root in `src/app/layout.tsx`.
   - Route-specific OpenGraph and Twitter images should point to `/meta/{editor}.png` in the `public/meta/` folder with proper dimensions and alt text.

## Verification & Quality Checks

Run these commands before committing any code changes:

- **Type Check**:
  ```bash
  pnpm typecheck
  ```
- **Linting**:
  ```bash
  pnpm lint
  ```
- **Formatting**:
  ```bash
  pnpm format
  ```
- **Full Build**:
  ```bash
  pnpm build
  ```

> [!IMPORTANT]
> Both `pnpm typecheck` and `pnpm build` must pass cleanly without TypeScript or Next.js build errors.

## Code Style & Conventions

- **Language**: TypeScript with strict mode enabled (`"strict": true` in `tsconfig.json`).
- **Path Aliases**: Always use `@/*` to reference modules under `src/*` (e.g. `@/components/ui/button`, `@/lib/utils`).
- **Styling**:
  - Use Tailwind CSS 4 utility classes.
  - Merge classes using `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`).
- **Icons**:
  - Prefer `lucide-react` for standard icons.
  - Use `react-icons` for brand/provider-specific icons.
- **Component Architecture**:
  - Follow shadcn/ui patterns in `src/components/ui/`.
  - Keep components modular, accessible, and theme-aware (supporting `next-themes` dark/light modes).

## Project Structure

```text
src/
├── app/
│   ├── font.ts              # Custom Google Fonts (Playfair Display, IBM Plex Sans)
│   ├── layout.tsx           # Root layout: metadataBase, theme provider, analytics
│   ├── page.tsx             # Home landing page with editor cards
│   ├── playground/          # Playground routes
│   │   ├── _components/     # Client Components for live editors
│   │   │   ├── editorjs-playground.tsx
│   │   │   ├── monaco-playground.tsx
│   │   │   └── quill-playground.tsx
│   │   ├── editorjs/page.tsx # Editor.js Server Component route + metadata
│   │   ├── monaco/page.tsx   # Monaco Server Component route + metadata
│   │   └── quill/page.tsx    # Quill Server Component route + metadata
│   ├── robots.ts            # Robots.txt route handler
│   ├── serwist.ts           # Client-side Serwist service worker provider
│   ├── sitemap.ts           # Dynamic sitemap route handler
│   └── sw.ts                # Service worker configuration
├── components/
│   ├── ui/                  # shadcn/ui primitive components
│   ├── navbar.tsx           # Global navigation
│   ├── footer.tsx           # Global footer
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # cn helper for Tailwind class merging
public/
├── meta/                    # Preview images for OpenGraph/Twitter (editorjs.png, monaco.png, quill.png)
└── sw.js                    # Compiled service worker (generated at build time)
```

## Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- Format: `<type>[optional scope]: <description>`
- Types: `feat`, `fix`, `refactor`, `build`, `chore`, `docs`, `style`, `perf`, `test`
- Example: `refactor(playground): integrate metadata and preview images`
- Never commit secrets or unintended local files (`.env`, credentials, cache directories).
