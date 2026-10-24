import React from "react";
import { Metadata } from "next"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SerwistProvider } from "@/app/serwist";
import { ibmPlexSansHeading, playfairDisplay } from "@/app/font";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import InsightsProvider from "@/components/InsightsProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
  title: {
    template: `%s | Re-Editor`,
    default: "Re-Editor",
    absolute: "Re-Editor",
  },
  description:
    "Experiment with the most popular web text editors. Discover their features, specialties, and how to get started with them.",
  applicationName: "Re-Editor",
  publisher: "Fapethedev",
  creator: "Fapethedev",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: {
      template: `%s | Re-Editor`,
      default: "Re-Editor",
      absolute: "Re-Editor",
    },
    description:
      "Experiment with the most popular web text editors. Discover their features, specialties, and how to get started with them.",
    type: "website",
  },
  twitter: {
    title: {
      template: `%s | Re-Editor`,
      default: "Re-Editor",
      absolute: "Re-Editor",
    },
    description:
      "Experiment with the most popular web text editors. Discover their features, specialties, and how to get started with them.",
    creator: "Fapethedev",
    card: "summary",
    site: "Re-Editor",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Re-Editor",
    startupImage: "/icon-512x512.png",
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-serif", playfairDisplay.variable, ibmPlexSansHeading.variable)}
    >
      <body className="flex min-h-screen flex-col">
        <SerwistProvider
          swUrl="/sw.js" /* disable={process.env.NODE_ENV === "development"} */
        >
          <ThemeProvider>
            <TooltipProvider>
              <Navbar />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </SerwistProvider>
        <Analytics />
        <SpeedInsights />
        <InsightsProvider />
      </body>
    </html>
  )
}
