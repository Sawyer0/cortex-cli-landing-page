"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  return (
    <AnimatedSection id="contact" className="px-4 sm:px-6 md:px-6 lg:px-8 py-6 bg-card scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-base md:text-lg font-semibold tracking-tight mb-2 text-balance leading-tight text-foreground">
          NYSDOH 405.46 requires 72-hour incident reporting.
          <br className="hidden sm:block" />
          <span className="text-muted-foreground"> Manual tracking fails. Cortex automates it.</span>
        </h2>

        <p className="text-[11px] text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
          Schedule a technical review with our engineering team. We&apos;ll walk through your Cisco infrastructure and
          demonstrate detection capabilities on a test VLAN.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center">
          <Button
            size="sm"
            className="w-full sm:w-auto text-xs"
          >
            SCHEDULE TECHNICAL REVIEW
            <ArrowRight className="w-3 h-3 ml-1.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-full sm:w-auto bg-transparent border-border text-foreground hover:bg-muted text-xs"
          >
            <FileText className="w-3 h-3 mr-1.5" />
            DOWNLOAD WHITEPAPER
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
