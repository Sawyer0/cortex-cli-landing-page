"use client"

import { FileText, AlertCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"

export function MandateSection() {
  return (
    <AnimatedSection
      id="mandate"
      className="px-4 sm:px-6 md:px-8 lg:px-12 pb-20 md:pb-32 pt-0 text-secondary-foreground scroll-mt-24 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12">
          <span className="text-micro font-mono text-secondary-foreground/60">The Problem</span>
          <h2 className="text-h2 mt-1 text-secondary-foreground">
            Networks Are Dirty.
          </h2>
        </div>

        <p className="text-body text-secondary-foreground/80 leading-relaxed mb-12 max-w-3xl">
          Modern ransomware attacks typically enter through vulnerable edge devices and propagate laterally across network segments. Like a biological infection spreading through a system, these attacks move from initial compromise to critical infrastructure. Prevention requires maintaining network sterility at entry points rather than relying solely on post-infection remediation.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {/* NYSDOH Card */}
          <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 h-full text-secondary-foreground">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <FileText className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-h4 font-semibold text-secondary-foreground mb-0.5">NYSDOH 405.46</h3>
                <p className="text-body-sm text-secondary-foreground/70 leading-relaxed">
                  New York mandates 72-hour incident reporting. Fines accrue daily. The clock starts when you detect.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CIRCIA Card */}
          <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 h-full text-secondary-foreground">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <FileText className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-h4 font-semibold text-secondary-foreground mb-0.5">CIRCIA 2026</h3>
                <p className="text-body-sm text-secondary-foreground/70 leading-relaxed">
                  Federal mandate. 72 hours for incidents. 24 hours for ransom payments. No exceptions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ransomware Context Card */}
          <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 h-full text-secondary-foreground">
            <CardContent className="p-4 flex items-start gap-2 h-full">
              <div className="p-1.5 bg-bio-cyan-light rounded-full flex-shrink-0">
                <AlertCircle className="w-3 h-3 text-bio-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-h4 font-semibold text-secondary-foreground mb-0.5">The Paradox</h3>
                <p className="text-body-sm text-secondary-foreground/70 leading-relaxed">
                  2025: Incidents up 36%. Payouts down 91%. The industry learned to recover. Now you must learn to report.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Priority Text */}
        <div className="mt-12 max-w-3xl">
          <p className="text-body text-secondary-foreground/80 leading-relaxed">
            Manual tracking of security incidents is prone to human error and missed deadlines. Listrum automates incident detection and reporting timelines, maintaining complete audit trails with 6-year retention using Merkle-tree data structures for cryptographic integrity verification.<br /><br />
            Regulatory compliance requires documented evidence, not retroactive explanations. The system maintains tamper-evident logs of all security events and compliance actions.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
