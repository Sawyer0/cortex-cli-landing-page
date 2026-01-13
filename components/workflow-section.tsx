"use client"

import { Router, ShieldCheck, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function WorkflowSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 pt-0 pb-20 md:pb-32 text-secondary-foreground relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-micro font-mono text-secondary-foreground/60">Protocol</span>
          <h2 className="text-h2 mt-3 text-secondary-foreground">The Compliance Lifecycle</h2>
          <p className="mt-4 text-body text-secondary-foreground/80 max-w-2xl mx-auto mb-4">
            Incident → Triage → Approval → Filing → Retention.<br />Automated. Auditable. Immutable.
          </p>
        </div>

        {/* Step 1: Detect & Route */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">01: Detection</h3>
            <p className="text-body text-secondary-foreground/80">
              Listrum monitors NetFlow telemetry at the edge.
              When contamination is detected, the 72-hour clock starts.
              <strong className="text-secondary-foreground font-medium"> Automatically.</strong><br /><br />
              No human has to remember. No spreadsheet has to be updated. The system knows.
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
              <span className="text-bio-cyan/90">&quot;event&quot;</span>: <span className="text-primary/90">&quot;CONTAMINATION_DETECTED&quot;</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;class&quot;</span>: <span className="text-primary/90">&quot;ENCRYPTION_PATHOGEN&quot;</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;vlan&quot;</span>: <span className="text-primary/90">&quot;ICU_DEVICES&quot;</span>,
            </div>
            <div className="pl-3">
              <span className="text-bio-cyan/90">&quot;clock_started&quot;</span>: <span className="text-primary/90">&quot;2025-01-12T14:22:01Z&quot;</span>
            </div>
            <div className="text-white/30">{"}"}</div>
          </div>
        </div>

        {/* Step 2: Human Approval */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">02: Human Approval</h3>
            <p className="text-body text-secondary-foreground/80">
              We never auto-submit to regulators.<br /><br />
              Every incident routes to your CISO dashboard.
              Your team reviews the evidence. Your team assesses materiality.
              <strong className="text-secondary-foreground font-medium"> Your team approves or dismisses.</strong><br /><br />
              Legal signing authority never leaves your organization.
            </p>
          </div>
          <div className="w-full max-w-[280px] mx-auto bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-sm font-mono text-[9px] leading-relaxed">
            <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-1.5">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <span className="ml-2 text-secondary-foreground/40">terminal</span>
            </div>
            <div className="text-secondary-foreground/60 mb-1">$ listrum status --pending</div>
            <div className="text-emerald-400/90 font-bold">[!] INC-2025-0412</div>
            <div className="pl-3 text-secondary-foreground/60">
              Class:     <span className="text-primary/90">ENCRYPTION_PATHOGEN</span>
            </div>
            <div className="pl-3 text-secondary-foreground/60">
              VLAN:      <span className="text-white/90">ICU_DEVICES</span>
            </div>
            <div className="pl-3 text-secondary-foreground/60">
              Remaining: <span className="text-white/90">68h 14m</span>
            </div>
            <div className="pl-3 text-secondary-foreground/60">
              Status:    <span className="text-primary/90">AWAITING_CISO_APPROVAL</span>
            </div>
            <div className="mt-1 text-primary animate-pulse">_</div>
          </div>
        </div>

        {/* Step 3: Approve & File */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-h3 text-secondary-foreground mb-2">03: Immutable Record</h3>
            <p className="text-body text-secondary-foreground/80">
              Every action is logged. Detection. Triage. Dismissal. Approval. Submission.<br /><br />
              Stored in a{" "}
              <strong className="text-secondary-foreground font-medium">Merkle tree</strong>.
              Retained for 6 years. Cryptographically tamper-evident.<br /><br />
              When auditors ask &quot;prove it,&quot; you can.
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
