import Link from "next/link";
import { Binary } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold italic">Playground Editor</h3>
            <p className="text-sm text-muted-foreground">A collection of playgrounds for popular web text editors. Test and compare Quill.js, Monaco Editor, and Editor.js.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase">Editors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/playground/quill" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Quill.js
                </a>
              </li>
              <li>
                <a href="/playground/monaco" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Monaco Editor
                </a>
              </li>
              <li>
                <a href="/playground/editorjs" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Editor.js
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://quilljs.com/" target="_blank" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Quill Documentation
                </a>
              </li>
              <li>
                <a href="https://microsoft.github.io/monaco-editor/" target="_blank" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Monaco Documentation
                </a>
              </li>
              <li>
                <a href="https://editorjs.io/" target="_blank" className="hover:text-primary hover:underline hover:underline-offset-2">
                  Editor.js Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Playground Editor. Built for developers by
          <Link
            href="https://www.linkedin.com/in/abiola-fatigba-a0532a27b/"
            target="_blank"
            className="inline-flex items-center justify-center gap-1 font-heading font-black tracking-wider text-primary italic underline underline-offset-2 hover:text-primary-foreground hover:underline-offset-4"
          >
            Fapethedev's <Binary className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
