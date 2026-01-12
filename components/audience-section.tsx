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
    <AnimatedSection className="px-4 sm:px-6 md:px-6 lg:px-8 py-6 bg-clinical-slate">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-micro font-mono text-muted-foreground">Target Audience</span>
          <h2 className="text-h2 mt-3 text-foreground">
            Who Uses Cortex
          </h2>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((audience, index) => {
            const Icon = [Clock, FileText, Server, ShieldCheck][index]
            return (
              <Card
                key={audience.id}
                className="group relative flex flex-col h-full hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader>
                  <CardTitle className="text-sm text-primary">
                    {audience.role}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  <p className="text-body-sm text-muted-foreground mb-4 flex-grow">
                    {audience.benefit}
                  </p>

                  <div className="mt-auto pt-3 border-t border-border/50">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-secondary/10 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-foreground">
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

        <div className="mt-8 text-center">
          <p className="text-body-sm text-text-body max-w-3xl mx-auto">
            From the C-Suite to the server room, Cortex unifies compliance and security operations into a single pane of glass. Whether you&apos;re a CISO tracking regulatory deadlines, a Compliance Officer preparing for audits, an IT Director managing infrastructure, or a Risk Manager seeking formal verification—Cortex delivers the automated intelligence you need to stay ahead of threats and regulations without adding headcount.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}


