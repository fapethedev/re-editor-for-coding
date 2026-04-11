"use client";

import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function QuillPlayground() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<any>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const initQuill = async () => {
      // Dynamically import Quill to avoid SSR ReferenceError: document is not defined
      const Quill = (await import("quill")).default;

      if (editorRef.current && !quill) {
        const q = new Quill(editorRef.current, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "code-block"],
              ["clean"],
            ],
          },
        });

        q.on("text-change", () => {
          setContent(q.root.innerHTML);
        });

        setQuill(q);
      }
    };

    initQuill();
  }, [quill]);

  const getStartedCode = `
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const quill = new Quill('#editor', {
  theme: 'snow'
});
  `;

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">Quill.js Playground</h1>
          <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-200">
            Rich Text
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle>Editor</CardTitle>
              <CardDescription>Try out the editor below. Format text, add lists, or insert images.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border bg-background">
                <div ref={editorRef} style={{ height: "400px" }} />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="html">
            <TabsList>
              <TabsTrigger value="html">HTML Output</TabsTrigger>
              <TabsTrigger value="delta">JSON (Delta) Output</TabsTrigger>
            </TabsList>
            <TabsContent value="html">
              <Card>
                <CardContent className="pt-6">
                  <pre className="p-4 bg-muted rounded-md overflow-auto max-h-[200px] text-xs">
                    {content || "Start typing to see HTML output..."}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="delta">
              <Card>
                <CardContent className="pt-6">
                  <pre className="p-4 bg-muted rounded-md overflow-auto max-h-[200px] text-xs">
                    {quill ? JSON.stringify(quill.getContents(), null, 2) : "Loading..."}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Specialties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Modular Architecture</h4>
                <p className="text-xs text-muted-foreground">Pick and choose the features you need, or build your own modules.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Parchment Engine</h4>
                <p className="text-xs text-muted-foreground">A powerful document model that allows for custom formats and content.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Cross-Platform</h4>
                <p className="text-xs text-muted-foreground">Consistent behavior across all modern browsers and devices.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">Install via npm:</p>
              <pre className="p-2 bg-muted rounded text-[10px]">npm install quill</pre>
              <p className="text-xs text-muted-foreground mt-2">Basic initialization:</p>
              <pre className="p-2 bg-muted rounded text-[10px] overflow-x-auto">
                {getStartedCode}
              </pre>
              <Button className="w-full mt-2" size="sm" asChild>
                <a href="https://quilljs.com/docs/quickstart/" target="_blank">Full Documentation</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
