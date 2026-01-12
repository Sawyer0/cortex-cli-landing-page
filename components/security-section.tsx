"use client"

import { Shield, Eye } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SecuritySection() {
  return (
    <AnimatedSection
      id="security"
      className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 md:py-24 bg-card relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-micro font-mono text-muted-foreground">Security Model</span>
              <h2 className="text-h2 mt-3 text-foreground">Zero New Hardware. Zero Network. Zero Cloud.</h2>
            </div>

            {/* Visual: Canary Agent */}
            <div className="border border-border bg-background">
              <div className="bg-muted border-b border-border px-2 py-1 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-foreground flex-shrink-0" />
                <span className="text-micro font-mono text-muted-foreground">
                  Isolated Monitoring Agent
                </span>
              </div>

              <div className="p-2">
                <div className="border border-dashed border-muted-foreground/40 p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <Eye className="w-3 h-3 text-foreground" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="font-mono text-ui-xs font-semibold text-foreground">CANARY AGENT</span>
                        <span className="font-mono text-[9px] px-1.5 py-0.5 bg-green-500/20 text-green-600 border border-green-500/40">
                          ACTIVE
                        </span>
                      </div>
                      <p className="font-mono text-[9px] text-muted-foreground leading-relaxed">
                        Passive/Self monitoring · Zero network access
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

            <p className="text-body-sm text-text-body">
              If compromised, the agent executes a &quot;scream-and-die&quot; protocol—alerting the dashboard before instantly terminating.
            </p>
          </div>
          <p className="text-body-sm text-text-body">
            In an era where hospital margins are thin and technical teams are stretched to their limit, the last thing you need is another expensive hardware appliance to rack, stack, and manage. Cortex fundamentally changes the economics of cybersecurity by transforming your existing network infrastructure into an intelligent defense layer. By running as a lightweight, ephemeral container on the Cisco Access Points you already own, we eliminate the need for costly capital expenditures and complex, multi-month deployments. This &quot;Zero New Hardware&quot; approach doesn&apos;t just save money—it drastically reduces your attack surface, providing robust Edge Protection that stops ransomware at the perimeter before it can ever threaten critical patient care systems.
          </p>
        </div>




        {/* 3 Pillars of Security */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Vertical divider lines for desktop */}
          <div className="absolute hidden md:block top-2 bottom-2 left-1/3 w-px bg-border" />
          <div className="absolute hidden md:block top-2 bottom-2 right-1/3 w-px bg-border" />

          {/* Pillar 1: Edge Protection */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-foreground">The &quot;Why&quot;</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Modern ransomware targets IoT/OT devices at the network edge. Cortex stops threats before they enter the core.
            </p>
          </div>

          {/* Pillar 2: Zero Network */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-foreground">The &quot;How&quot;</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              The agent has <strong>no network access</strong>. It can&apos;t scan, spread, or communicate outbound.
            </p>
          </div>

          {/* Pillar 3: Zero Cloud */}
          <div className="space-y-1 px-1">
            <h3 className="text-xs font-semibold text-foreground">The &quot;Where&quot;</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              All processing happens locally on the hardware. No patient data ever leaves the premise.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection >
  )
}
