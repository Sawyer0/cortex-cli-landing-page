"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  return (
    <AnimatedSection id="contact" className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground scroll-mt-24 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-h2 mb-8 text-balance leading-tight text-secondary-foreground">
          The 72-hour clock is ticking.
        </h2>

        <p className="text-body text-secondary-foreground/60 mb-4 max-w-xl mx-auto leading-relaxed">
          Schedule a technical review. We&apos;ll analyze your Cisco infrastructure and deploy Listrum on a test VLAN.<br />No sales pitch. Just a sterile field demo.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center">
          <Button
            size="sm"
            className="w-full sm:w-auto text-xs"
          >
            SCHEDULE REVIEW
            <ArrowRight className="w-3 h-3 ml-1.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-full sm:w-auto bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 text-xs"
          >
            <FileText className="w-3 h-3 mr-1.5" />
            READ THE WHITEPAPER
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
