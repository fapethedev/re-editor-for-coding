# Re-Editor: Web Editor Playground

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38b2ac?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Re-Editor** is a modern, high-performance web editor playground built with Next.js 16 and React 19. It provides a centralized environment to explore, compare, and experiment with the most popular web-based rich text and code editors.

---

## Key Features

- **Multi-Editor Support**: Seamlessly switch between and test different editors:
  - **Quill.js**: Modern rich text editor for high-quality content creation.
  - **Monaco Editor**: The powerhouse behind VS Code, perfect for high-performance code editing with IntelliSense.
  - **Editor.js**: Block-styled editor designed for modern, structured content (JSON-first).
- **Modern UI/UX**: Crafted with **shadcn/ui** and **Radix UI** for a sleek, accessible, and responsive experience.
- **PWA Ready**: Offline support and installation capabilities powered by **Serwist**.
- **Theming**: Full dark and light mode support using `next-themes`.
- **Internationalization**: Ready for global use with `next-intl`.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Motion](https://motion.dev/) (Framer Motion)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **PWA**: [Serwist](https://serwist.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Editors**:
  - `@monaco-editor/react`
  - `quill`
  - `@editorjs/editorjs`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)

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

3. Run the development server:
   ```bash
   pnpm dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `pnpm dev`: Starts the development server with Turbopack and Serwist watch mode.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint for code quality checks.
- `pnpm format`: Formats code using Prettier.
- `pnpm typecheck`: Runs TypeScript type checks.

## 📂 Project Structure

```text
src/
├── app/            # Next.js App Router (pages and layouts)
│   ├── playground/ # Individual editor implementations
│   └── globals.css # Global styles and Tailwind imports
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui primitive components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and shared logic
public/         # Static assets and PWA manifest
```

## Contributing

Contributions are welcome! If you have suggestions for new editors to add or features to improve the playground, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created with ❤️ by [fapethedev](https://github.com/fapethedev)

## Contact

- Email [@fapethedev](mailto:mpetrivlin@gmail.com)
- LinkedIn [@fapethedev](https://www.linkedin.com/in/abiola-fatigba-a0532a27b/)