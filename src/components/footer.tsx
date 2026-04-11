export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold italic">Playground Editor</h3>
            <p className="text-sm text-muted-foreground">
              A collection of playgrounds for popular web text editors.
              Test and compare Quill.js, Monaco Editor, and Editor.js.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Editors</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/playground/quill" className="hover:text-primary">Quill.js</a></li>
              <li><a href="/playground/monaco" className="hover:text-primary">Monaco Editor</a></li>
              <li><a href="/playground/editorjs" className="hover:text-primary">Editor.js</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://quilljs.com/" target="_blank" className="hover:text-primary">Quill Documentation</a></li>
              <li><a href="https://microsoft.github.io/monaco-editor/" target="_blank" className="hover:text-primary">Monaco Documentation</a></li>
              <li><a href="https://editorjs.io/" target="_blank" className="hover:text-primary">Editor.js Documentation</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Playground Editor. Built for developers.
        </div>
      </div>
    </footer>
  );
}
