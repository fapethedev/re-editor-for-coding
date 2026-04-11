import Link from "next/link";
import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/10 backdrop-blur-xl shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex flex-row items-center justify-center gap-1 text-sm font-bold tracking-tight md:gap-4 md:text-xl">
            <div className="relative h-12 w-12 overflow-hidden md:h-14 md:w-14">
              <Image src="/icon-transparent.png" alt="icon" fill />
            </div>
            <h1 className="font-heading whitespace-nowrap">
              Playground <span className="text-primary">Editor</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/playground/quill" className="text-sm font-medium hover:text-primary transition-colors">
            Quill.js
          </Link>
          <Link href="/playground/monaco" className="text-sm font-medium hover:text-primary transition-colors">
            Monaco
          </Link>
          <Link href="/playground/editorjs" className="text-sm font-medium hover:text-primary transition-colors">
            Editor.js
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com" target="_blank">
              <FaGithubAlt />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ModeToggle variant="outline" size="icon" />
        </div>
      </div>
    </nav>
  );
}
