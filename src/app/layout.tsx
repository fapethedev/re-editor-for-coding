import { Geist, Geist_Mono, Playfair_Display, IBM_Plex_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const ibmPlexSansHeading = IBM_Plex_Sans({subsets:['latin'],variable:'--font-heading'});

const playfairDisplay = Playfair_Display({subsets:['latin'],variable:'--font-serif'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SerwistProvider } from "@/app/serwist"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", playfairDisplay.variable, ibmPlexSansHeading.variable)}
    >
      <body className="flex flex-col min-h-screen">
      <SerwistProvider swUrl="/sw.js" /* disable={process.env.NODE_ENV === "development"} */>
        <ThemeProvider>
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
      </SerwistProvider>
      </body>
    </html>
  )
}
