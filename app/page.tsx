import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ContactSection } from "@/components/sections/home/contact-section"
import { DeploymentSection } from "@/components/sections/home/deployment-section"
import { DetectionSection } from "@/components/sections/home/detection-section"
import { HeroSection } from "@/components/sections/home/hero-section"
import { RolesSection } from "@/components/sections/home/roles-section"
import { VisibilitySection } from "@/components/sections/home/visibility-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader onHomePage />
      <main id="main">
        <HeroSection />
        <VisibilitySection />
        <DetectionSection />
        <DeploymentSection />
        <RolesSection />
        <ContactSection />
      </main>
      <SiteFooter onHomePage />
    </>
  )
}
