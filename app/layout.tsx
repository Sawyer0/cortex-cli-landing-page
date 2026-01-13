import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Listrum (Ls-443) | Network Sterility for Healthcare",
  description:
    "Listrum deploys surgical-grade sterility at the network edge. Our deterministic agent treats ransomware as digital sepsis. Its formal verification ensures it never guesses.",
  keywords: [
    "ransomware prevention healthcare",
    "NYSDOH 405.46 compliance",
    "CIRCIA compliance software",
    "healthcare cybersecurity",
    "edge security Cisco IOx",
    "deterministic threat detection",
    "formal verification cybersecurity",
    "hospital ransomware protection",
    "72-hour incident reporting",
    "network sterility",
  ],
  openGraph: {
    title: "Listrum: The Sterile Field",
    description: "Stop ransomware at the edge. Deterministic compliance for NYSDOH 405.46 and CIRCIA. No cloud. No hallucinations.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
