import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const editors = [
    {
      id: "quill",
      name: "Quill.js",
      description: "A modern rich text editor built for compatibility and extensibility.",
      specialty: "Rich Text & Customization",
      href: "/playground/quill",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      id: "monaco",
      name: "Monaco Editor",
      description: "The code editor that powers VS Code. Perfect for high-performance code editing.",
      specialty: "Code & IntelliSense",
      href: "/playground/monaco",
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      id: "editorjs",
      name: "Editor.js",
      description: "A block-styled editor with clean JSON output. Built for structured content.",
      specialty: "Block-based & JSON",
      href: "/playground/editorjs",
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Web Editor <span className="text-blue-600 italic">Playground</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Experiment with the most popular web text editors. Discover their features, specialties, and how to get started with them.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="#editors">Explore Editors</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/fapethedev/re-editor-for-coding" target="_blank">View on GitHub</Link>
          </Button>
        </div>
      </section>

      <section id="editors" className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Pick your playground</h2>
          <p className="text-muted-foreground">Choose an editor to start experimenting.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editors.map((editor) => (
            <Card key={editor.id} className="flex flex-col border-2 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={editor.color}>
                    {editor.specialty}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{editor.name}</CardTitle>
                <CardDescription className="text-base line-clamp-2">
                  {editor.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {/* Visual placeholder or icon could go here */}
                <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center border border-dashed">
                  <span className="text-muted-foreground font-mono text-sm">{editor.name} preview</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={editor.href}>Open Playground</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl font-bold">Why use this playground?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Compare Performance</h3>
            <p className="text-sm text-muted-foreground">See how different editors handle large documents and complex formatting in real-time.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Test Integrations</h3>
            <p className="text-sm text-muted-foreground">Understand the output format of each editor and how it fits into your backend architecture.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Quick Start</h3>
            <p className="text-sm text-muted-foreground">Copy pre-configured code snippets to integrate these editors into your own projects instantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
