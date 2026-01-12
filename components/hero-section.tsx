"use client"

import { NetflowBackground } from "@/components/ui/netflow-background"
import { AlertTriangle, Shield, Cpu, Lock } from "lucide-react"
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
      <NetflowBackground className="absolute inset-0 opacity-40 pointer-events-none" />

      <div
        className={`relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-14 lg:py-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`inline-flex items-center gap-1.5 px-2 py-1 bg-primary/20 border border-primary/40 text-primary mb-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <AlertTriangle className="w-3 h-3 flex-shrink-0" />
            <span className="text-micro font-mono">
              <span className="hidden sm:inline">CRITICAL: </span>72-HOUR REPORTING WINDOW
            </span>
          </div>

          <h1
            className={`text-xl md:text-2xl font-semibold tracking-tight mb-3 text-balance leading-tight transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            You Have <span className="font-mono text-primary">72 Hours</span> to Report.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>We Make Sure You Never Miss It.
          </h1>

          <p
            className={`text-body-sm sm:text-xs text-secondary-foreground/80 mb-3 max-w-2xl transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Autonomous ransomware detection + compliance automation for hospital networks. No new hardware required.
          </p>

          <div
            className={`flex flex-row flex-wrap gap-1.5 mb-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="inline-flex items-center gap-1 px-1.5 py-1 bg-secondary-foreground/10 border border-secondary-foreground/20">
              <Shield className="w-3 h-3 flex-shrink-0" />
              <span className="text-micro font-mono text-[9px]">VERUS_VERIFIED</span>
            </div>
            <div className="inline-flex items-center gap-1 px-1.5 py-1 bg-secondary-foreground/10 border border-secondary-foreground/20">
              <Lock className="w-3 h-3 flex-shrink-0" />
              <span className="text-micro font-mono text-[9px]">HIPAA_COMPLIANT</span>
            </div>
            <div className="inline-flex items-center gap-1 px-1.5 py-1 bg-secondary-foreground/10 border border-secondary-foreground/20">
              <Cpu className="w-3 h-3 flex-shrink-0" />
              <span className="text-micro font-mono text-[9px]">CISCO_IOX_COMPATIBLE</span>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 sm:flex-row sm:gap-3 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Button
              size="sm"
              className="w-full sm:w-auto font-medium tracking-wide text-xs"
            >
              SCHEDULE TECHNICAL REVIEW
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-medium tracking-wide bg-transparent text-xs"
            >
              VIEW DOCUMENTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
