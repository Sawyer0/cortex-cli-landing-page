"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  return (
    <AnimatedSection id="contact" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3 sm:mb-4 text-balance leading-tight text-foreground">
          NYSDOH 405.46 requires 72-hour incident reporting.
          <br className="hidden sm:block" />
          <span className="text-muted-foreground"> Manual tracking fails. Cortex automates it.</span>
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Schedule a technical review with our engineering team. We&apos;ll walk through your Cisco infrastructure and
          demonstrate detection capabilities on a test VLAN.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide min-h-[48px] sm:min-h-[44px] h-auto py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
          >
            SCHEDULE TECHNICAL REVIEW
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted font-medium tracking-wide min-h-[48px] sm:min-h-[44px] h-auto py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto bg-transparent"
          >
            <FileText className="w-4 h-4 mr-2" />
            DOWNLOAD WHITEPAPER
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
