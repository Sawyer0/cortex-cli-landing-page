"use client"

import { FileText, AlertCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function MandateSection() {
  return (
    <AnimatedSection
      id="mandate"
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Regulatory Context</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-3 sm:mt-4 text-foreground">
            The Mandate
          </h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          New federal and state regulations require healthcare organizations to report cyber incidents within strict
          deadlines. Non-compliance means fines and legal exposure.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* NYSDOH Card */}
          <div className="bg-card border border-border p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 bg-muted flex-shrink-0">
                <FileText className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-2">NYSDOH 405.46</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  New York hospitals, nursing homes, and clinics must report qualifying cybersecurity incidents within
                  72 hours of determination.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-1 bg-muted text-muted-foreground">
                    405.46(n)(1)
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-1 bg-muted text-muted-foreground">
                    6-YEAR AUDIT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCIA Card */}
          <div className="bg-card border border-border p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 bg-muted flex-shrink-0">
                <FileText className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-2">CIRCIA 2026</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Federal mandate for critical infrastructure. Report covered cyber incidents within 72 hours. Effective
                  2026.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-1 bg-muted text-muted-foreground">
                    FEDERAL
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-1 bg-muted text-muted-foreground">
                    CRITICAL INFRA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mt-8 sm:mt-10 bg-warning/5 border border-warning/30 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Manual tracking fails.</strong> Your team is already stretched thin. Missing the 72-hour
                deadline means regulatory fines. The networks you&apos;re protecting connect to{" "}
                <span className="font-mono text-warning">infusion pumps</span>,
                <span className="font-mono text-warning"> patient monitors</span>, and
                <span className="font-mono text-warning"> life-support systems</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ecg-divider mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto" />
    </AnimatedSection>
  )
}
