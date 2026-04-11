"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function MonacoPlayground() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(`// Welcome to Monaco Editor Playground
function hello() {
  console.log("Hello, Playground!");
}

hello();`);

  const getStartedCode = `
import Editor from '@monaco-editor/react';

function App() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}
  `;

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">Monaco Editor Playground</h1>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-200">
            Code & IntelliSense
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Monaco Editor is the code editor that powers VS Code. It features rich IntelliSense, code navigation, and high-performance editing for dozens of languages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-2 overflow-hidden">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Code Editor</CardTitle>
                <CardDescription>Experience the VS Code editing experience in the browser.</CardDescription>
              </div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="p-0 border-t">
              <Editor
                height="500px"
                language={language}
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                options={{
                  minimap: { enabled: true },
                  fontSize: 14,
                  lineNumbers: "on",
                  automaticLayout: true,
                }}
              />
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
                <h4 className="font-semibold text-sm">Rich IntelliSense</h4>
                <p className="text-xs text-muted-foreground">Built-in support for JavaScript, TypeScript, CSS, HTML and more.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Diff Editor</h4>
                <p className="text-xs text-muted-foreground">Powerful side-by-side or inline comparison of code changes.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">Performance</h4>
                <p className="text-xs text-muted-foreground">Highly optimized to handle very large source code files smoothly.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground">Install React wrapper:</p>
              <pre className="p-2 bg-muted rounded text-[10px]">npm install @monaco-editor/react</pre>
              <p className="text-xs text-muted-foreground mt-2">Basic initialization:</p>
              <pre className="p-2 bg-muted rounded text-[10px] overflow-x-auto">
                {getStartedCode}
              </pre>
              <Button className="w-full mt-2" size="sm" asChild>
                <a href="https://microsoft.github.io/monaco-editor/" target="_blank">Official Website</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
