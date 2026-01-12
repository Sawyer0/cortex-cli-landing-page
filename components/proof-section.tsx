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
            System Integrity Diagnostic
          </h2>
        </div>

        <p className="text-body text-secondary-foreground/80 leading-relaxed mb-12 max-w-3xl">
          In clinical environments, &quot;probably right&quot; is never enough. While generative AI models rely on probabilistic guesswork that can lead to dangerous hallucinations, Cortex-CLI is built on a foundation of formal verification. We use mathematical logical proofs to validate every state transition in our decision engine at compile time. This ensures that our agent behaves with absolute determinism—producing the exact same security response for the same threat input, every single time, without ambiguity or deviation.
        </p>



        <div className="border border-secondary-foreground/20 bg-secondary-foreground/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Specifications */}
            <div className="p-3 border-b lg:border-b-0 lg:border-r border-secondary-foreground/20">

              <div className="space-y-2">
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">

                    <span className="text-xs font-semibold text-primary">
                      No Hallucinations
                    </span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Formally verified FSM proved with Verus. Mathematical certainty, not probability.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">
                      Mathematically Proven
                    </span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Correctness verified at compile time. Zero undefined behavior paths.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">Predictable</span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Same input → same output. No temperature parameter. No randomness.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-primary">Auditable</span>
                  </div>
                  <p className="text-body-sm text-secondary-foreground/60 pl-4 leading-relaxed">
                    Every decision traces to source code and telemetry. Full chain of custody.
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
