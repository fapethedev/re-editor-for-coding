import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Playground <span className="text-primary text-blue-600">Editor</span>
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
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com" target="_blank">GitHub</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
