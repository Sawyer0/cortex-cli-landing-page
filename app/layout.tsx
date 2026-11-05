import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/content/site"
import "./globals.css"

// IBM Plex (SIL OFL 1.1, see app/fonts/OFL.txt), self-hosted and subset (app/fonts/SUBSET.md) so the
// fonts the first paint needs are small and builds never depend on Google Fonts.
const plexSans = localFont({
  src: [{ path: "./fonts/plex-sans-subset-wght-400-700.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
})

const plexMono = localFont({
  src: [{ path: "./fonts/plex-mono-subset-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
  adjustFontFallback: false,
  // Preloaded too: the hero badge, CTAs and inventory use Mono, and discovering it only after style
  // calculation put a second font round trip on the path to first paint.
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.openGraph.title,
    description: site.openGraph.description,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.openGraph.title,
    description: site.openGraph.description,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e293b",
  colorScheme: "dark",
}

// Vercel Web Analytics only exists on Vercel deployments; elsewhere its script 404s.
const analyticsEnabled = process.env.VERCEL === "1"

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-tile focus:bg-safety-500 focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:text-graphite-950"
        >
          Skip to content
        </a>
        {children}
        {analyticsEnabled && <Analytics />}
      </body>
    </html>
  )
}
