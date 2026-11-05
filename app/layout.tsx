import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/content/site"
import "./globals.css"

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
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
