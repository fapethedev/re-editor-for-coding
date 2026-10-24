import type { Metadata } from "next";
import QuillPlayground from "@/app/playground/_components/quill-playground";

export const metadata: Metadata = {
  title: "Quill.js Playground",
  description:
    "Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.",
  openGraph: {
    title: "Quill.js Playground",
    description:
      "Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.",
    url: "/playground/quill",
    images: [
      {
        url: "/meta/quill.png",
        width: 1903,
        height: 848,
        alt: "Quill.js Playground preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quill.js Playground",
    description:
      "Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.",
    images: ["/meta/quill.png"],
  },
};

export default function Page() {
  return <QuillPlayground />;
}
