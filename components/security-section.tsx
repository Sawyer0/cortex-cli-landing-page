"use client"

import { Shield, Eye } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SecuritySection() {
  return (
    <AnimatedSection
      id="security"
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-card relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Security Model</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-3 sm:mt-4 text-foreground">
            Defense That Never Sleeps
          </h2>
        </div>

        <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4 max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
            Cortex-CLI runs inside a <strong>sealed container</strong>—completely isolated from your hospital network.
            It watches for threats without ever touching your patient data or medical devices.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            If an attacker somehow compromises the container, it self-destructs instantly and respawns clean. No lateral
            movement. No persistence. No breach window.
          </p>
        </div>

        <div className="border border-border bg-background mb-8 sm:mb-10">
          <div className="bg-muted border-b border-border px-3 sm:px-4 py-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-foreground flex-shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">
              Isolated Monitoring Agent
            </span>
          </div>

          <div className="p-3 sm:p-4">
            <div className="border border-dashed border-muted-foreground/40 p-3 sm:p-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <Eye className="w-4 h-4 text-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-foreground">CANARY AGENT</span>
                    <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 bg-green-500/20 text-green-600 border border-green-500/40">
                      ACTIVE
                    </span>
                  </div>
                  <p className="font-mono text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                    Passive monitoring · Zero network access · Self-monitoring
                  </p>
                </div>
              </div>

              <div className="mt-3 h-5 overflow-hidden relative">
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

        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Incident Response: Under 1 Second</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
            When a threat is detected, our three-phase protocol executes in milliseconds—faster than any attacker can
            react. Your security team is notified before the threat has time to spread.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-border">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-border" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Step 1: Alert */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative z-10 flex-shrink-0 w-10 sm:w-12 flex items-center justify-center">
                <span className="font-mono text-xs sm:text-sm font-bold text-red-500">0ms</span>
              </div>
              <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base font-semibold text-foreground">Alert Dispatched</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CISO dashboard and designated contacts receive immediate notification with threat classification.
                </p>
              </div>
            </div>

            {/* Step 2: Contain */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative z-10 flex-shrink-0 w-10 sm:w-12 flex items-center justify-center">
                <span className="font-mono text-xs sm:text-sm font-bold text-amber-500">10ms</span>
              </div>
              <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base font-semibold text-foreground">Container Terminates</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Compromised container self-destructs. No data exfiltration possible—attacker loses all foothold.
                </p>
              </div>
            </div>

            {/* Step 3: Restore */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative z-10 flex-shrink-0 w-10 sm:w-12 flex items-center justify-center">
                <span className="font-mono text-xs sm:text-sm font-bold text-green-500">500ms</span>
              </div>
              <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base font-semibold text-foreground">Clean Respawn</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fresh container boots from cryptographically verified baseline. Monitoring resumes automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-muted border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Why this matters:</strong> Traditional security tools take minutes or
            hours to respond. Cortex-CLI's sub-second containment means attackers never get the time they need to move
            laterally through your network or access sensitive systems.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
