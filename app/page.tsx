"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { MandateSection } from "@/components/mandate-section"
import { DetectionSection } from "@/components/detection-section"
import { WorkflowSection } from "@/components/workflow-section"
import { SecuritySection } from "@/components/security-section"
import { AudienceSection } from "@/components/audience-section"
import { ProofSection } from "@/components/proof-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
          <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-foreground">
            CORTEX-CLI
          </span>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#mandate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Compliance
            </a>
            <a href="#detection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Detection
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground">
              Contact
            </a>
          </nav>

          {/* Mobile menu button - 44px touch target */}
          <button
            className="md:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              <a
                href="#mandate"
                className="py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance
              </a>
              <a
                href="#detection"
                className="py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Detection
              </a>
              <a
                href="#security"
                className="py-3 px-4 text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </a>
              <a
                href="#contact"
                className="py-3 px-4 text-base font-medium text-foreground hover:bg-muted transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
      <HeroSection />
      <MandateSection />
      <div className="bg-clinical-slate py-6"><div className="ecg-divider on-slate max-w-5xl mx-auto" /></div>
      <DetectionSection />
      <div className="bg-card py-6"><div className="ecg-divider on-white max-w-5xl mx-auto" /></div>
      <WorkflowSection />
      <div className="bg-clinical-slate py-6"><div className="ecg-divider on-slate max-w-5xl mx-auto" /></div>
      <SecuritySection />
      <div className="bg-card py-6"><div className="ecg-divider on-white max-w-5xl mx-auto" /></div>
      <AudienceSection />
      <div className="bg-clinical-slate py-6"><div className="ecg-divider on-slate max-w-5xl mx-auto" /></div>
      <ProofSection />
      <CTASection />
      <Footer />
    </main>
  )
}
