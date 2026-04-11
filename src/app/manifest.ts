import {MetadataRoute} from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	return {
    id: "re-editor-playground",
    name: "Re-Editor",
    short_name: "Re-Editor",
    description: "Experiment with the most popular web text editors. Discover their features, specialties, and how to get started with them.",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay"],
    background_color: "#fff",
    theme_color: "#9ae600",
    orientation: "portrait-primary",
    lang: "en",
    dir: "ltr",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "96x96",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["news", "business"],
    shortcuts: [
      {
        name: "EditorJs",
        short_name: "EJS",
        description: "A block-styled editor with clean JSON output. Built for structured content.",
        url: "/playground/editorjs",
        icons: [
          {
            src: "/shortcuts-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      {
        name: "Monaco Editor",
        short_name: "Monaco",
        description: "The code editor that powers VS Code. Perfect for high-performance code editing.",
        url: "/playground/monaco",
        icons: [
          {
            src: "/shortcuts-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      {
        name: "Quill.Js",
        short_name: "Quill",
        description: "A modern rich text editor built for compatibility and extensibility.",
        url: "/playground/quill",
        icons: [
          {
            src: "/shortcuts-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: "/screenshot-narrow-1.png",
        type: "image/png",
        sizes: "850x1542",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-wide-1.png",
        type: "image/jpg",
        sizes: "1687x988",
        form_factor: "wide",
      },
    ],
  }
}
