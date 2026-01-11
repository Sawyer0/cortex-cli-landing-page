"use client"

import { CheckCircle, Shield, Cpu, Activity } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function ProofSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs text-secondary-foreground/60 tracking-widest uppercase">Verification</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-3 sm:mt-4 text-secondary-foreground">
            System Integrity Diagnostic
          </h2>
        </div>

        <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          Cortex-CLI uses deterministic AI with mathematical verification—not probabilistic models that can hallucinate
          or produce inconsistent results.
        </p>

        <div className="border-2 border-secondary-foreground/20 bg-secondary-foreground/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b-2 border-secondary-foreground/20">
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-secondary-foreground/20">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <div className="font-mono text-[10px] sm:text-xs min-w-0">
                <span className="text-secondary-foreground font-medium">VERUS_VERIFIED</span>
                <span className="text-secondary-foreground/50 ml-1 sm:ml-2 hidden xs:inline">| CONFIRMED</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-secondary-foreground/20">
              <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <div className="font-mono text-[10px] sm:text-xs min-w-0">
                <span className="text-secondary-foreground font-medium">CISCO_IOX</span>
                <span className="text-secondary-foreground/50 ml-1 sm:ml-2 hidden xs:inline">| CERTIFIED</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 shrink-0 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <div className="font-mono text-[10px] sm:text-xs min-w-0">
                <span className="text-secondary-foreground font-medium">HIPAA_COMPLIANT</span>
                <span className="text-secondary-foreground/50 ml-1 sm:ml-2 hidden xs:inline">| AES-256</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Specifications */}
            <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-secondary-foreground/20">
              <h3 className="font-mono text-[10px] sm:text-xs text-secondary-foreground/60 tracking-widest uppercase mb-4 sm:mb-6">
                Deterministic AI Specification
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">01</span>
                    <span className="text-sm sm:text-base font-semibold text-secondary-foreground">
                      No Hallucinations
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 pl-5 sm:pl-6 leading-relaxed">
                    Formally verified Finite State Machine proved with Verus. Mathematical certainty, not statistical
                    probability.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">02</span>
                    <span className="text-sm sm:text-base font-semibold text-secondary-foreground">
                      Mathematically Proven
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 pl-5 sm:pl-6 leading-relaxed">
                    Correctness verified at compile time, not runtime. Zero undefined behavior paths.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">03</span>
                    <span className="text-sm sm:text-base font-semibold text-secondary-foreground">Predictable</span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 pl-5 sm:pl-6 leading-relaxed">
                    Same input → same output. No temperature parameter. No randomness. No surprises.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">04</span>
                    <span className="text-sm sm:text-base font-semibold text-secondary-foreground">Auditable</span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 pl-5 sm:pl-6 leading-relaxed">
                    Every decision traces to source code and telemetry events. Full chain of custody.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-black/30">
              <h3 className="font-mono text-[10px] sm:text-xs text-secondary-foreground/60 tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2">
                <Activity className="w-3 h-3 text-green-400" />
                Live Telemetry Sample
              </h3>
              <div className="bg-black/50 border border-secondary-foreground/10 p-3 sm:p-4 font-mono text-[10px] sm:text-xs overflow-x-auto max-h-[250px] sm:max-h-none sm:h-[calc(100%-2rem)]">
                <pre className="text-green-400/90 whitespace-pre leading-relaxed">
                  {`{
  "timestamp": "2025-01-11T14:32:17.892Z",
  "event_type": "INCIDENT_DETECTED",
  "threat_class": "RANSOMWARE_SYMMETRIC",
  "vlan_id": 100,
  "vlan_name": "Infusion Pumps",
  "criticality": "CRITICAL",
  "affected_endpoints": 12,
  "compliance_deadline": "2025-01-14T14:32:17.892Z",
  "hours_remaining": 72,
  "merkle_root": "a3f2...8b91",
  "fsm_state": "ALERT_DISPATCHED",
  "verification": "VERUS_FSM_STATE_VALID"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
