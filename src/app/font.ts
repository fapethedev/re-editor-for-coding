import { IBM_Plex_Sans, Playfair_Display } from "next/font/google";

const ibmPlexSansHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  preload: false,
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  preload: false,
})

export { ibmPlexSansHeading, playfairDisplay }