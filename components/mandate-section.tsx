"use client"

import { FileText, AlertCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"

export function MandateSection() {
  return (
    <AnimatedSection
      id="mandate"
      className="px-4 sm:px-6 md:px-6 lg:px-8 py-6 bg-clinical-slate scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-2">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Regulatory Context</span>
          <h2 className="text-base md:text-lg font-semibold tracking-tight mt-1 text-secondary">
            The Mandate
          </h2>
        </div>

        <p className="text-[13px] text-text-body leading-relaxed mb-8 max-w-3xl">
          <strong className="text-secondary font-semibold">
            The 2025 &quot;Ransomware Paradox&quot; redefined the threat landscape: while global attack volume surged
            ~40%, average payouts plummeted 91% as the industry pivoted to resilience.
          </strong>{" "}
          With 60% of providers now recovering in under a week, the 72-hour reporting window is no longer just a
          mandate—it&apos;s the operational baseline of the new &quot;Recovery Economy&quot;.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {/* NYSDOH Card */}
          <Card className="bg-white/60 h-full">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <FileText className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] font-semibold text-secondary mb-0.5">NYSDOH 405.46</h3>
                <p className="text-[10px] text-text-body leading-relaxed">
                  New York hospitals, nursing homes, and clinics must report qualifying cybersecurity incidents within
                  72 hours of determination. Fines for non-compliance accrue daily.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CIRCIA Card */}
          <Card className="bg-white/60 h-full">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <FileText className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] font-semibold text-secondary mb-0.5">CIRCIA 2026</h3>
                <p className="text-[10px] text-text-body leading-relaxed">
                  Federal mandate for critical infrastructure. Report covered cyber incidents within 72 hours. Ransomware
                  payments within 24 hours. Includes supply chain and third-party breaches. Effective 2026.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ransomware Context Card */}
          <Card className="bg-white/60 h-full">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <AlertCircle className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] font-semibold text-secondary mb-0.5">Ransomware 2025</h3>
                <p className="text-[10px] text-text-body leading-relaxed">
                  The Paradox: Incidents up 36%, but payouts down 91%. <strong className="font-medium">Encryption dropped to 34%</strong> as attackers shifted to extortion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Priority Text */}
        <div className="mt-8 max-w-3xl">
          <p className="text-[13px] text-text-body leading-relaxed">
            <strong className="text-secondary font-semibold">
              Achieving continuous compliance in this hostile landscape demands rigorous, evidence-based governance that
              stands up to regulatory scrutiny.
            </strong>{" "}
            Cortex transforms your compliance posture by automating the{" "}
            <strong className="text-secondary font-medium">6-year audit-ready retention</strong> and{" "}
            <strong className="text-secondary font-medium">precision reporting workflows</strong> required by state and
            federal law. By ensuring every 72-hour filing is accurate, legally reviewed, and defensible, we allow you to
            demonstrate Board-level due diligence—protecting not just your network, but your hospital&apos;s operating
            license.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
