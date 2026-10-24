# Contributing to Re-Editor

Thank you for your interest in contributing to **Re-Editor**! Whether you want to fix a bug, improve performance, propose a new web editor to evaluate, or polish documentation, contributions are warmly welcomed.

---

## Code of Conduct

Please help maintain a respectful, inclusive, and harassment-free environment. Be welcoming, construct constructive feedback, and treat all community members with empathy and professional respect.

---

## How Can I Contribute?

### 1. Reporting Bugs
- Check the [existing Issues](https://github.com/fapethedev/re-editor-for-coding/issues) to avoid duplicates.
- Open a new issue including:
  - Clear and descriptive title.
  - Steps to reproduce the behavior.
  - Expected vs actual behavior.
  - Environment details (browser, OS, device).
  - Screenshots or console logs if applicable.

### 2. Suggesting Features & New Editors
- Open a feature request issue describing the proposed editor or enhancement.
- Explain why this addition would benefit developers evaluating web editors.

### 3. Submitting Pull Requests
- Keep PRs focused on a single logical change or feature.
- Follow the project conventions outlined below.

---

## Development Setup

### Prerequisites
- **Node.js**: v20 or higher.
- **pnpm**: v9 or higher (pnpm is the required package manager).

### Local Setup Steps

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/re-editor-for-coding.git
   cd re-editor-for-coding
   ```

2. **Create a topic branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start development server**:
   ```bash
   pnpm dev
   ```
   This command starts Next.js with Turbopack and watches Serwist service worker changes concurrently at `http://localhost:3000`.

---

## Project Architectural Guidelines

### Next.js 16 & React 19 Boundaries
- **Server Components for Routes**:
  All `page.tsx` files must be **Server Components** to export route `metadata` (`import type { Metadata } from "next"`).
  Do not place `"use client"` in a route `page.tsx`.
- **Client Components**:
  Place interactive client components inside `src/app/playground/_components/` or private directories prefixed with an underscore (`_folder`).
- **Dynamic Imports for DOM Libraries**:
  Heavy web editor libraries (Quill, Editor.js, Monaco) must use dynamic imports (`await import(...)` or `next/dynamic`) inside `useEffect` or client components to avoid SSR errors (`document is not defined`, `window is not defined`).
- **Styling**:
  - Use Tailwind CSS 4 utility classes.
  - Merge classes using `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`).
- **Path Aliases**:
  Always use `@/*` to reference files within `src/*`.

---

## Verification & Quality Checks

Before submitting a pull request, ensure all quality checks pass cleanly:

```bash
# Verify TypeScript types
pnpm typecheck

# Check code linting
pnpm lint

# Check code formatting
pnpm format

# Verify production build
pnpm build
```

> [!IMPORTANT]
> Both `pnpm typecheck` and `pnpm build` must pass without any errors or warnings.

---

## Commit Guidelines

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
<type>[optional scope]: <description>

[optional body]
```

### Common Types:
- `feat`: A new feature (e.g., adding a new editor playground).
- `fix`: A bug fix.
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `build`: Changes that affect the build system or external dependencies.
- `docs`: Documentation updates.
- `style`: Formatting, missing semicolons, etc.
- `perf`: Performance improvements.

---

## Submitting Your Pull Request

1. Push your branch to GitHub:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Open a Pull Request against the `dev` branch.
3. Describe the problem solved or feature added, referencing any related issues (`Closes #123`).
4. Wait for review feedback and continuous integration checks.

Thank you for contributing to Re-Editor!
