import { HeroSection } from "@/components/sections/home/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { SecuritySection } from "@/components/security-section"
import { AudienceSection } from "@/components/audience-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { NetflowBackground } from "@/components/ui/netflow-background"

export default function HomePage() {
  return (
    <>
      <NetflowBackground className="fixed inset-0 pointer-events-none z-0" />
      <SiteHeader onHomePage />
      <main id="main" className="relative">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SecuritySection />
        <AudienceSection />
        <CTASection />
      </main>
      <SiteFooter onHomePage />
    </>
  )
}
