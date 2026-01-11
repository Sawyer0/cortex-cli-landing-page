"use client"

import { AlertTriangle, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-secondary text-secondary-foreground relative overflow-hidden min-h-[100svh] flex items-center">
      <div className="absolute inset-0 grid-overlay" />

      <div
        className={`relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-primary/20 border border-primary/40 text-primary mb-4 sm:mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase">
              <span className="hidden sm:inline">CRITICAL: </span>72-HOUR REPORTING WINDOW
            </span>
          </div>

          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-balance leading-tight transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            You Have <span className="font-mono text-primary">72 Hours</span> to Report.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>We Make Sure You Never Miss It.
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg text-secondary-foreground/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Autonomous ransomware detection + compliance automation for hospital networks. No new hardware required.
          </p>

          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span className="font-mono text-xs tracking-widest uppercase">VERUS_VERIFIED</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20">
              <Cpu className="w-4 h-4 flex-shrink-0" />
              <span className="font-mono text-xs tracking-widest uppercase">CISCO_IOX_CERTIFIED</span>
            </div>
          </div>

          <div
            className={`flex flex-col gap-3 sm:flex-row sm:gap-4 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide min-h-[48px] sm:min-h-[44px] h-auto py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              SCHEDULE TECHNICAL REVIEW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-medium tracking-wide min-h-[48px] sm:min-h-[44px] h-auto py-3 px-6 sm:px-8 text-sm sm:text-base bg-transparent w-full sm:w-auto"
            >
              VIEW DOCUMENTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
