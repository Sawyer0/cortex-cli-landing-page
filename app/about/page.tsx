import type { Metadata } from "next"
import { Home } from "lucide-react"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CommitmentStrip } from "@/components/sections/about/commitment-strip"
import { ListerLegacySection } from "@/components/sections/about/lister-legacy-section"
import { ManifestoHero } from "@/components/sections/about/manifesto-hero"
import { PhilosophySection } from "@/components/sections/about/philosophy-section"
import { SymbolSection } from "@/components/sections/about/symbol-section"
import { VisibilityGapSection } from "@/components/sections/about/visibility-gap-section"
import { ContactPanel } from "@/components/sections/contact-panel"
import { ActionLink } from "@/components/ui/action-link"
import { manifesto } from "@/content/about/manifesto"
import { aboutContact } from "@/content/about/philosophy"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: `${manifesto.headline} | ${site.name}`,
  description: manifesto.summary,
  alternates: { canonical: "/about/" },
  openGraph: { title: `${manifesto.headline} | ${site.name}`, description: manifesto.summary, url: "/about/" },
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader onHomePage={false} />
      <main id="main">
        <ManifestoHero />
        <SymbolSection />
        <ListerLegacySection />
        <VisibilityGapSection />
        <PhilosophySection />
        <CommitmentStrip />
        <ContactPanel
          headingId="about-contact-title"
          copy={aboutContact}
          secondary={
            <ActionLink href="/" variant="secondary">
              <Home aria-hidden="true" className="h-4 w-4" />
              {aboutContact.secondaryCta}
            </ActionLink>
          }
        />
      </main>
      <SiteFooter onHomePage={false} />
    </>
  )
}
