"use client"

import { AnimatedSection } from "@/components/animated-section"

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
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Target Audience</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-3 sm:mt-4 text-foreground">
            Who Uses Cortex
          </h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          Built for healthcare security professionals who need to meet strict regulatory deadlines without adding
          complexity or headcount.
        </p>

        <div className="border border-border bg-card">
          {/* Table Header - Hidden on mobile */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-4 py-3 bg-muted/50 border-b border-border font-mono text-xs text-muted-foreground uppercase tracking-wider">
            <div className="col-span-3">Role</div>
            <div className="col-span-6">What You Get</div>
            <div className="col-span-3">Key Benefit</div>
          </div>

          {/* Audience Rows */}
          <div className="relative">
            {/* Vertical bus line connecting all rows */}
            <div className="absolute left-[1.35rem] sm:left-6 top-6 bottom-6 w-px bg-border" />

            {audiences.map((audience, index) => (
              <div
                key={audience.id}
                className={`
                  group relative
                  flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4
                  px-4 py-4 sm:py-5
                  hover:bg-sky-50 dark:hover:bg-sky-950/20
                  transition-colors duration-200
                  ${index !== audiences.length - 1 ? "border-b border-border" : ""}
                `}
              >
                {/* Column 1: Role */}
                <div className="sm:col-span-3 flex items-center gap-3">
                  {/* Status dot - appears green on hover */}
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-green-500 transition-colors duration-200 flex-shrink-0" />

                  <div className="min-w-0">
                    <span className="font-mono text-[10px] sm:text-xs text-muted-foreground block">{audience.id}</span>
                    <span className="text-sm sm:text-base text-foreground font-semibold block">{audience.role}</span>
                  </div>
                </div>

                {/* Column 2: Benefit Description */}
                <div className="sm:col-span-6 flex items-center pl-5 sm:pl-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.benefit}</p>
                </div>

                {/* Column 3: Key Highlight */}
                <div className="sm:col-span-3 flex items-center pl-5 sm:pl-0">
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 border border-primary/20 font-mono text-[10px] sm:text-xs text-primary font-medium">
                    {audience.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ecg-divider mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto" />
    </AnimatedSection>
  )
}
