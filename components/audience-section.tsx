"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Clock, FileText, Server, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const audiences = [
  {
    id: "01",
    role: "Hospital CISOs",
    benefit:
      "Stop manually tracking incident timelines. Automate regulatory deadline adherence without adding headcount.",
    highlight: "72-hour automation",
  },
  {
    id: "02",
    role: "Compliance Officers",
    benefit: "Automate NYSDOH 405.46 and CIRCIA reporting with audit-ready logs. 6-year retention built in.",
    highlight: "Audit-ready logs",
  },
  {
    id: "03",
    role: "IT Directors",
    benefit:
      "Deploy on existing Cisco infrastructure. No new hardware, no capital expenditure, no network reconfiguration.",
    highlight: "Zero new hardware",
  },
  {
    id: "04",
    role: "Risk Managers",
    benefit: "Get formal, auditable proof that your incident response meets regulatory requirements.",
    highlight: "Formal verification",
  },
]

export function AudienceSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-micro font-mono text-secondary-foreground/60">Target Audience</span>
          <h2 className="text-h2 mt-3 text-secondary-foreground">
            Who Uses Cortex
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
            From the C-Suite to the server room, Cortex unifies compliance and security operations into a single pane of glass. Whether you&apos;re a CISO tracking regulatory deadlines, a Compliance Officer preparing for audits, an IT Director managing infrastructure, or a Risk Manager seeking formal verification—Cortex delivers the automated intelligence you need to stay ahead of threats and regulations without adding headcount.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}


