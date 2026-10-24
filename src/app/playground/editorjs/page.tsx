import type { Metadata } from "next";
import EditorJSPlayground from "@/app/playground/_components/editorjs-playground";

export const metadata: Metadata = {
  title: "Editor.js Playground",
  description:
    "Editor.js is a next-generation block-styled editor. It outputs clean JSON data, making it perfect for structured content and modern CMS integrations.",
  openGraph: {
    title: "Editor.js Playground",
    description:
      "Editor.js is a next-generation block-styled editor. It outputs clean JSON data, making it perfect for structured content and modern CMS integrations.",
    url: "/playground/editorjs",
    images: [
      {
        url: "/meta/editorjs.png",
        width: 1903,
        height: 911,
        alt: "Editor.js Playground preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editor.js Playground",
    description:
      "Editor.js is a next-generation block-styled editor. It outputs clean JSON data, making it perfect for structured content and modern CMS integrations.",
    images: ["/meta/editorjs.png"],
  },
};

export default function Page() {
  return <EditorJSPlayground />;
}
