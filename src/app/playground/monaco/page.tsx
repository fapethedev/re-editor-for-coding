import type { Metadata } from "next";
import MonacoPlayground from "@/app/playground/_components/monaco-playground";

export const metadata: Metadata = {
  title: "Monaco Editor Playground",
  description:
    "Monaco Editor is the code editor that powers VS Code. It features rich IntelliSense, code navigation, and high-performance editing for dozens of languages.",
  openGraph: {
    title: "Monaco Editor Playground",
    description:
      "Monaco Editor is the code editor that powers VS Code. It features rich IntelliSense, code navigation, and high-performance editing for dozens of languages.",
    url: "/playground/monaco",
    images: [
      {
        url: "/meta/monaco.png",
        width: 1903,
        height: 911,
        alt: "Monaco Editor Playground preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaco Editor Playground",
    description:
      "Monaco Editor is the code editor that powers VS Code. It features rich IntelliSense, code navigation, and high-performance editing for dozens of languages.",
    images: ["/meta/monaco.png"],
  },
};

export default function Page() {
  return <MonacoPlayground />;
}
