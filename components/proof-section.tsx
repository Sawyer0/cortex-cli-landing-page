"use client"

import { CheckCircle, Shield, Cpu, Activity } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function ProofSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground relative overflow-hidden z-10">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12">
          <span className="text-micro font-mono text-secondary-foreground/60">Verification</span>
          <h2 className="text-h2 mt-1 text-secondary-foreground">
            Formally Verified. Mathematically Proven.
          </h2>
        </div>

        <p className="text-body text-secondary-foreground/80 leading-relaxed mb-12 max-w-3xl">
          In surgery, &quot;probably sterile&quot; means infected. In compliance, &quot;probably detected&quot; means liable.<br /><br />
          Listrum uses <strong className="text-secondary-foreground font-medium">Verus</strong>, a formal verification system, to prove our state machine logic correct at compile time. Not at runtime. <strong className="text-secondary-foreground font-medium">At compile time.</strong><br /><br />
          This is not AI. There is no training data. There are no edge cases. The proof is the product.
        </p>



        <div className="border border-secondary-foreground/20 bg-secondary-foreground/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Specifications */}
            <div className="p-3 border-b lg:border-b-0 lg:border-r border-secondary-foreground/20">

              <div className="space-y-2">
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">

                    <span className="text-xs font-semibold text-primary">
                      Deterministic
                    </span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Same input → same output. No temperature. No randomness. No probability.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">
                      Proven
                    </span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Logic verified with mathematical proof. Every state transition validated at compile time.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">Auditable</span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Every decision traces to source code. Every log entry traces to telemetry. Full chain of custody.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">Immutable</span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    6 years of Merkle-tree storage. Tamper-evident by design. Cryptographic proof of integrity.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-black/30">
              <h3 className="font-mono text-ui-xs text-secondary-foreground/60 tracking-widest uppercase mb-2 flex items-center gap-1.5">
                <Activity className="w-2.5 h-2.5 text-green-400" />
                Compliance_Report
              </h3>
              <div className="bg-black/50 border border-secondary-foreground/10 p-2 font-mono text-ui-xs overflow-x-auto max-h-[180px]">
                <pre className="text-green-400/90 whitespace-pre leading-relaxed">
                  {`{
  "event_type": "INCIDENT_DETECTED",
  "threat_class": "RANSOMWARE_SYMMETRIC",
  "vlan_name": "Infusion Pumps",
  "criticality": "CRITICAL",
  "hours_remaining": 72,
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
