"use client"

import { Router, ShieldCheck, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function WorkflowSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 pt-0 pb-20 md:pb-32 text-secondary-foreground relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-micro font-mono text-secondary-foreground/60">Workflow</span>
          <h2 className="text-h2 mt-3 text-secondary-foreground">How Cortex Works</h2>
          <p className="mt-4 text-body text-secondary-foreground/80 max-w-2xl mx-auto mb-4">
            Turn your existing infrastructure into a 24/7 regulatory watchdog.
          </p>
        </div>

        {/* Step 1: Detect & Route */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">The Compliance Lifecycle</h3>
            <p className="text-body text-secondary-foreground/80">
              When Cortex detects a qualifying incident, it doesn&apos;t just alert you—it{" "}
              <strong className="text-secondary-foreground font-medium">initiates the entire compliance lifecycle automatically</strong>.
              The 72-hour regulatory clock starts ticking the moment we detect a potential threat, and our system tracks it in real-time.
              You&apos;ll see clear status indicators (On Track, Warning, Critical) escalating as the deadline approaches,
              ensuring your team never misses a filing window.
            </p>
          </div>
          <div className="w-full max-w-[280px] mx-auto bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-sm font-mono text-ui-xs leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-2 text-secondary-foreground/40">detection_event.json</span>
            </div>
            <div className="text-white/30">{"{"}</div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;event&quot;</span>: <span className="text-primary/90">&quot;RANSOMWARE_PATTERN&quot;</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;confidence&quot;</span>: <span className="text-emerald-400/90">1.0</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;vlan&quot;</span>: <span className="text-primary/90">&quot;ICU_DEVICES&quot;</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;action&quot;</span>: <span className="text-primary/90">&quot;ROUTE_TO_DASHBOARD&quot;</span>
            </div>
            <div className="text-white/30">{"}"}</div>
          </div>
        </div>

        {/* Step 2: Human Approval */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">Human-in-the-Loop Approval</h3>
            <p className="text-body text-secondary-foreground/80">
              We never auto-submit to regulators. Every detected incident is routed to your CISO dashboard,
              where your compliance team can{" "}
              <strong className="text-secondary-foreground font-medium">review the evidence, assess materiality, and decide whether to file</strong>.
              Cortex pre-fills the NYSDOH 405.46 and CIRCIA reports from detection data,
              but the final approval authority remains with you. Legal signing power never leaves your organization.
            </p>
          </div>
          <div className="w-full max-w-[280px] mx-auto bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-sm font-mono text-[9px] leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-1.5">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <span className="ml-2 text-secondary-foreground/40">terminal</span>
            </div>
            <div className="text-secondary-foreground/60 mb-1">$ cortex status --compliance</div>
            <div className="text-emerald-400/90 font-bold">[✓] NYSDOH-405.46:  ON_TRACK</div>
            <div className="pl-3 text-secondary-foreground/60">
              Time Remaining: <span className="text-white/90">70h 14m 22s</span>
            </div>
            <div className="pl-3 text-secondary-foreground/60">
              Status:         <span className="text-primary/90">AWAITING_APPROVAL</span>
            </div>
            <div className="mt-1 text-primary animate-pulse">_</div>
          </div>
        </div>

        {/* Step 3: Approve & File */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">Audit-Ready Governance</h3>
            <p className="text-body text-secondary-foreground/80">
              Every action—detection, triage, dismissal, approval, submission—is logged in a{" "}
              <strong className="text-secondary-foreground font-medium">tamper-proof Merkle tree audit trail</strong>,
              retained for 6 years per HIPAA and NYSDOH requirements.
              When regulators or auditors come knocking, you&apos;ll have cryptographic proof of exactly what happened,
              when it happened, and who approved it.
            </p>
          </div>
          <div className="w-full max-w-[280px] mx-auto bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-sm font-mono text-[9px] leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-500/80" />
              <span className="ml-1 text-secondary-foreground/40">audit_log.sig</span>
            </div>
            <div className="text-bio-cyan/90 mb-1">[AUDIT_LOG] Signed & Sealed</div>
            <div className="grid grid-cols-[45px_1fr] gap-x-2">
              <span className="text-secondary-foreground/60">Hash:</span>
              <span className="text-primary/90 truncate">0x8f2a...9d4b</span>

              <span className="text-secondary-foreground/60">Time:</span>
              <span className="text-white/90">2025-01-12T14:22:01Z</span>

              <span className="text-secondary-foreground/60">Signer:</span>
              <span className="text-emerald-400/90 truncate">compliance@hospital.org</span>
            </div>
            <div className="mt-1 text-ui-xs text-white/10 break-all leading-tight">
              -----BEGIN CRYPTOGRAPHIC PROOF-----
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection >
  )
}
