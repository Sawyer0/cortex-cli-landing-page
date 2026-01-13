"use client"

import { Shield, Eye } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SecuritySection() {
  return (
    <AnimatedSection
      id="security"
      className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground relative overflow-hidden scroll-mt-24 z-10"
    >
      <div className="max-w-5xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-micro font-mono text-secondary-foreground/60">Security Model</span>
              <h2 className="text-h2 mt-3 text-secondary-foreground">Zero New Hardware. Zero Network. Zero Cloud.</h2>
            </div>

            {/* Visual: Canary Agent */}
            <div className="border border-secondary-foreground/10 bg-secondary-foreground/5">
              <div className="bg-secondary-foreground/10 border-b border-secondary-foreground/10 px-2 py-1 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-secondary-foreground flex-shrink-0" />
                <span className="text-micro font-mono text-secondary-foreground/60">
                  Isolated Monitoring Agent
                </span>
              </div>

              <div className="p-2">
                <div className="border border-dashed border-secondary-foreground/20 p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <Eye className="w-3 h-3 text-secondary-foreground" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="font-mono text-ui-xs font-semibold text-secondary-foreground">STERILITY MONITOR</span>
                        <span className="font-mono text-ui-xs px-1.5 py-0.5 bg-green-500/20 text-green-600 border border-green-500/40">
                          ACTIVE
                        </span>
                      </div>
                      <p className="font-mono text-ui-xs text-secondary-foreground/60 leading-relaxed">
                        Passive observation · Zero network access · Self-terminating
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 h-4 overflow-hidden relative">
                    <svg className="w-full h-full" viewBox="0 0 400 20" preserveAspectRatio="none">
                      <path
                        d="M0,10 L80,10 L90,10 L100,3 L110,17 L120,6 L130,14 L140,10 L260,10 L270,10 L280,3 L290,17 L300,6 L310,14 L320,10 L400,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-green-500 animate-ecg-line"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-body text-secondary-foreground/80">
              If compromised, the agent executes a &quot;scream-and-die&quot; protocol. This alerts the dashboard before instantly terminating. No persistence. No lateral movement. No risk.
            </p>
          </div>
          <p className="text-body text-secondary-foreground/80">
            The safest agent is the one that cannot spread.<br /><br />
            Listrum runs as an ephemeral container on Cisco IOx. It has no network stack. It cannot scan. It cannot beacon. It cannot exfiltrate.<br /><br />
            All processing is local. Patient data never leaves the premise. No third-party dependencies. No cloud outages.
          </p>
        </div>




        {/* 3 Pillars of Security */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Vertical divider lines for desktop */}
          <div className="absolute hidden md:block top-2 bottom-2 left-1/3 w-px bg-secondary-foreground/10" />
          <div className="absolute hidden md:block top-2 bottom-2 right-1/3 w-px bg-secondary-foreground/10" />

          {/* Pillar 1: Edge Protection */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-secondary-foreground">Zero Hardware</h3>
            <p className="text-body-sm text-secondary-foreground/60 leading-relaxed">
              Deploys on infrastructure you already own. No appliances. No rack space. No CapEx.
            </p>
          </div>

          {/* Pillar 2: Zero Network */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-secondary-foreground">Zero Cloud</h3>
            <p className="text-body-sm text-secondary-foreground/60 leading-relaxed">
              All processing is local. Patient data never leaves the premise. No third-party dependencies.
            </p>
          </div>

          {/* Pillar 3: Zero Cloud */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-secondary-foreground">Zero Network</h3>
            <p className="text-body-sm text-secondary-foreground/60 leading-relaxed">
              The agent is intentionally network-blind. It observes metadata. It cannot initiate connections.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection >
  )
}
