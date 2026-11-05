/** Site-wide identity, metadata and contact targets. */

export interface NavLink {
  label: string
  /** id of the section on the home page this link scrolls to */
  sectionId: string
}

export const site = {
  name: "Listrum",
  url: "https://listrum.info",
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
    description:
      "Stop ransomware at the edge. Deterministic compliance for NYSDOH 405.46 and CIRCIA. No cloud. No hallucinations.",
  },
  tagline: "Network Sterility for Healthcare",
  motto: { lead: "We do not guess.", close: "We verify." },
  complianceBadge: "NYSDOH 405.46 · CIRCIA 2026",
  /** Business address published in the Listrum pitch deck; listrum.info has live MX records. */
  contactEmail: "dawan.sawyer@listrum.info",
  copyright: "© 2025 Listrum. All rights reserved.",
} as const

export const assessmentHref = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Free Assessment")}`

/** No standalone whitepaper page exists yet; the manifesto page is the long-form read. */
export const whitepaperHref = "/about/"

export const primaryNav: readonly NavLink[] = [
  { label: "Detection", sectionId: "detection" },
  { label: "Deployment", sectionId: "security" },
  { label: "Contact", sectionId: "contact" },
]

export const regulatoryReferences: readonly string[] = [
  "NYSDOH 405.46(b)(5)",
  "NYSDOH 405.46(n)(1)",
  "NYSDOH 405.46(g)(2)",
  "CIRCIA 2026",
]

export function sectionHref(sectionId: string, onHomePage: boolean): string {
  return onHomePage ? `#${sectionId}` : `/#${sectionId}`
}
