# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2026.0.0.3] - 2026-10-24

### Added
- **Social Meta Images**: Added high-resolution preview images for Editor.js, Monaco, and Quill in `public/meta/`.
- **OpenGraph & Twitter Cards**: Integrated full OpenGraph and Twitter Card metadata for all playground routes.
- **Root Metadata Base**: Configured `metadataBase` in root layout for automated fully qualified URL resolution across social sharing tags.

### Changed
- **Playground Architecture**: Refactored playground pages (`editorjs`, `monaco`, `quill`) to Next.js Server Components.
- **Client Component Colocation**: Extracted interactive editor code into dedicated client components under `src/app/playground/_components/`.
- **Dependency Upgrades**:
  - Upgraded Next.js to `16.4.3` and React / React-DOM to `19.3.1`.
  - Upgraded Tailwind CSS and PostCSS plugin to `4.3.3`.
  - Upgraded Serwist packages to `9.5.13`.
  - Upgraded Radix UI, shadcn, and icon libraries.
- **Workspace Configuration**: Added `minimumReleaseAgeExclude` in `pnpm-workspace.yaml` for Next.js packages.

## [v2026.0.0.2] - 2026-10-18

### Added
- **Analytics & Observability**: Integrated Vercel Analytics, Vercel Speed Insights, and self-hosted analytics tracking via `InsightsProvider`.

## [2026-05-03]

### Fixed
- **Security**: Patched PostCSS dependency vulnerability.

## [v2026.1.3.1] - 2026-04-11

### Added
- **Repository Links**: Added direct GitHub repository links in the global navigation and hero section.

## [2026-04-11]

### Added
- **PWA Capabilities**: Added offline service worker caching and installable progressive web app support with Serwist.
- **PWA Manifest & Icons**: Generated web app manifest and multi-resolution responsive icons.
- **Revamped Navigation**: Added global responsive navbar with brand logo and theme mode toggle (light/dark).
- **Revamped Footer**: Added comprehensive footer with editor documentation links and author credits.
- **Editor Playgrounds**:
  - **Quill.js**: WYSIWYG rich text editor with toolbar customization and HTML/Delta JSON output preview.
  - **Monaco Editor**: High-performance VS Code editor with language selector, syntax highlighting, and theme support.
  - **Editor.js**: Block-based editor with JSON data output viewer and modular block tools.
- **SEO Support**: Added dynamic `robots.ts` and `sitemap.ts` handlers.
- **Project Initial Release**: Setup Next.js App Router project with Tailwind CSS and shadcn/ui.
