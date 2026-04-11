"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EditorJSPlayground() {
  const ejInstance = useRef<any>(null);
  const [outputData, setOutputData] = useState<any>(null);

  useEffect(() => {
    const initEditor = async () => {
      // Dynamically import EditorJS and tools to avoid SSR ReferenceError: Element is not defined
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;

      if (!ejInstance.current) {
        const editor = new EditorJS({
          holder: "editorjs",
          tools: {
            header: Header,
            list: List,
          },
          data: {
            blocks: [
              {
                type: "header",
                data: {
                  text: "Welcome to Editor.js",
                  level: 2,
                },
              },
              {
                type: "paragraph",
                data: {
                  text: "Editor.js is a block-styled editor. Click here to add a new block.",
                },
              },
            ],
          },
          async onChange(api) {
            const data = await api.saver.save();
            setOutputData(data);
          },
        });

        ejInstance.current = editor;
      }
    };

    initEditor();

    return () => {
      if (ejInstance.current && typeof ejInstance.current.destroy === "function") {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  const getStartedCode = `
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: Header,
    list: List
  }
});
  `

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">Editor.js Playground</h1>
          <Badge variant="outline" className="bg-orange-500/10 text-orange-600 border-orange-200">
            Block-based & JSON
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Editor.js is a next-generation block-styled editor. It outputs clean JSON data, making it perfect for structured content and modern CMS integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle>Block Editor</CardTitle>
              <CardDescription>Click on blocks to edit or use the (+) button to add new blocks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div id="editorjs" className="prose prose-sm max-w-none min-h-[400px] border rounded-md p-4 bg-background dark:bg-slate-950" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>JSON Output</CardTitle>
              <CardDescription>Clean, structured data format ready for your database.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="p-4 bg-muted rounded-md overflow-auto max-h-[300px] text-xs">
                {outputData ? JSON.stringify(outputData, null, 2) : "Change something to see JSON output..."}
              </pre>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Specialties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Clean Data Output</h4>
                <p className="text-xs text-muted-foreground">Outputs JSON instead of heavy HTML, allowing for flexible rendering.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Block-styled</h4>
                <p className="text-xs text-muted-foreground">Each element (paragraph, image, header) is a separate block.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">API-first</h4>
                <p className="text-xs text-muted-foreground">Everything is a plugin. Easy to extend with your own custom blocks.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">Install core and tools:</p>
              <pre className="p-2 bg-muted rounded text-[10px]">npm install @editorjs/editorjs @editorjs/header</pre>
              <p className="text-xs text-muted-foreground mt-2">Basic initialization:</p>
              <pre className="p-2 bg-muted rounded text-[10px] overflow-x-auto">
                {getStartedCode}
              </pre>
              <Button className="w-full mt-2" size="sm" asChild>
                <a href="https://editorjs.io/getting-started" target="_blank">Full Guide</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
