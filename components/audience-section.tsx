"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Clock, FileText, Server, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const audiences = [
  {
    id: "01",
    role: "Hospital CISOs",
    benefit:
      "Automate the 72-hour clock. Stop tracking deadlines in spreadsheets. Start proving compliance with evidence.",
    highlight: "72-hour automation",
  },
  {
    id: "02",
    role: "Compliance Officers",
    benefit: "NYSDOH 405.46. CIRCIA 2026. Pre-filled reports. Audit-ready logs. 6-year retention. Merkle integrity.",
    highlight: "Audit-ready",
  },
  {
    id: "03",
    role: "IT Directors",
    benefit:
      "No new hardware. No network changes. Deploy on existing Cisco infrastructure.",
    highlight: "Zero CapEx",
  },
  {
    id: "04",
    role: "Risk Managers",
    benefit: "Formal verification. Mathematical proof. Deterministic response. No AI. No guessing.",
    highlight: "Verifiable",
  },
]

export function AudienceSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-micro font-mono text-secondary-foreground/60">Roles</span>
          <h2 className="text-h2 mt-3 text-secondary-foreground">
            Who Needs Listrum
          </h2>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {audiences.map((audience, index) => {
            const Icon = [Clock, FileText, Server, ShieldCheck][index]
            return (
              <Card
                key={audience.id}
                className="group relative flex flex-col h-full hover:shadow-md transition-shadow duration-200 bg-secondary-foreground/5 border-secondary-foreground/10"
              >
                <CardHeader className="p-3 md:p-6 pb-0 md:pb-0">
                  <CardTitle className="text-h3 text-primary leading-tight">
                    {audience.role}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-3 md:p-6 flex flex-col flex-grow pt-2 md:pt-2">
                  <p className="text-body-sm text-secondary-foreground/80 mb-3 md:mb-4 flex-grow leading-relaxed">
                    {audience.benefit}
                  </p>

                  <div className="mt-auto pt-2 md:pt-3 border-t border-secondary-foreground/10">
                    <div className="flex items-center gap-2">
                      <div className="p-1 md:p-1.5 rounded-md bg-white/5 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                        <Icon className="w-3 h-3 md:w-4 md:h-4 text-secondary-foreground/80 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-ui-xs font-medium text-secondary-foreground truncate block">
                          {audience.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-body text-secondary-foreground/80 max-w-3xl mx-auto">
            One platform. Four roles. Zero ambiguity.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}


