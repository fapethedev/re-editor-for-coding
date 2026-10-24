<p align="center">
  <img src="public/icon-transparent.png" alt="Re-Editor Logo" width="96" height="96" />
</p>

<h1 align="center">Re-Editor</h1>

<p align="center">
  A high-performance web editor playground built with Next.js 16 and React 19 to experiment, compare, and integrate modern text and code editors.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.4-black?logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.3-blue?logo=react" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4.3-38b2ac?logo=tailwind-css" alt="Tailwind CSS" /></a>
  <a href="https://serwist.js.org/"><img src="https://img.shields.io/badge/PWA-Serwist-orange" alt="Serwist PWA" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" /></a>
</p>

---

## Overview

**Re-Editor** is an interactive playground providing a unified environment to evaluate and compare leading web editors for modern web applications. Each playground route delivers live editing, formatted outputs, feature comparisons, and initialization recipes.

> [!NOTE]
> All playground routes are structured as Next.js App Router Server Components, exposing full OpenGraph and Twitter Card metadata alongside colocated client components.

## Supported Editors

| Editor | Focus Area | Output Format | Key Specialties | Route |
| :--- | :--- | :--- | :--- | :--- |
| **Quill.js** | Rich Text | HTML & Delta JSON | Modular architecture, custom formats, inline styling | [`/playground/quill`](src/app/playground/quill) |
| **Monaco Editor** | Code Editing | Source code / Text | VS Code engine, multi-language IntelliSense, diff views | [`/playground/monaco`](src/app/playground/monaco) |
| **Editor.js** | Block-styled Content | Clean JSON | Block-based workflow, headless CMS ready, pluggable tools | [`/playground/editorjs`](src/app/playground/editorjs) |

## Features

- **Live Evaluation**: Test formatting, block creation, syntax highlighting, and data serialization in real-time.
- **PWA & Offline Support**: Offline service worker caching and installable progressive web app capabilities powered by **Serwist**.
- **Modern Design System**: Built with **Tailwind CSS 4**, **shadcn/ui**, and **Radix UI** primitives with seamless dark and light mode themes.
- **Optimized SEO & Metadata**: Fully configured Server Component routes with OpenGraph and Twitter cards, dynamic sitemap, and robots configuration.
- **Performance Focused**: Next.js Turbopack compilation with code-splitting and dynamic client component imports for heavy browser-only dependencies.

## Architecture & Directory Structure

```text
src/
├── app/
│   ├── playground/
│   │   ├── _components/     # Isolated Client Components for editors
│   │   ├── editorjs/        # Editor.js route & metadata
│   │   ├── monaco/          # Monaco route & metadata
│   │   └── quill/           # Quill route & metadata
│   ├── layout.tsx           # Root layout, theme, metadataBase & analytics
│   ├── page.tsx             # Landing page & editor selector
│   ├── robots.ts            # Dynamic robots.txt generation
│   ├── sitemap.ts           # Dynamic sitemap.xml generation
│   └── sw.ts                # Serwist service worker definition
├── components/
│   ├── ui/                  # Reusable shadcn/ui components
│   ├── navbar.tsx           # Navigation bar with theme toggle
│   └── footer.tsx           # Global footer
└── lib/
    └── utils.ts             # Styling and class merge utilities
public/
├── meta/                    # OpenGraph / Twitter preview assets
└── icon-*.png               # PWA application icons
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (v9 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fapethedev/re-editor-for-coding.git
   cd re-editor-for-coding
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application runs by default at [http://localhost:3000](http://localhost:3000).

> [!TIP]
> Use `pnpm dev` to run Turbopack and the Serwist service worker watcher concurrently. If you only need a single build run before starting Next.js dev, use `pnpm dev:once`.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts Next.js development server with Turbopack and Serwist in watch mode |
| `pnpm dev:once` | Builds the service worker once and starts Next.js development server |
| `pnpm build` | Compiles Next.js for production and builds the Serwist service worker |
| `pnpm start` | Starts the production server |
| `pnpm typecheck` | Validates TypeScript types across the project (`tsc --noEmit`) |
| `pnpm lint` | Runs ESLint checks |
| `pnpm format` | Formats code using Prettier |
