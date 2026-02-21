"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, FileCheck, Lock, Fingerprint } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const proofs = [
  {
    icon: CheckCircle,
    label: "Deterministic",
    value: "Zero",
    suffix: "False Positives",
    color: "#10b981",
    desc: "Every detection is mathematically certain, not probabilistic",
  },
  {
    icon: Shield,
    label: "Verified",
    value: "100%",
    suffix: "Mathematically Proven",
    color: "#3b82f6",
    desc: "Formal verification guarantees correctness of every rule",
  },
  {
    icon: FileCheck,
    label: "Auditable",
    value: "6 Years",
    suffix: "Evidence Retention",
    color: "#f59e0b",
    desc: "Complete forensic chain of custody for every incident",
  },
  {
    icon: Lock,
    label: "Immutable",
    value: "Merkle",
    suffix: "Tree Integrity",
    color: "#8b5cf6",
    desc: "Cryptographic proof that evidence has never been altered",
  },
]

export function ProofSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 section-padding text-secondary-foreground relative overflow-hidden z-10">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4">
            <Fingerprint className="w-3 h-3" />
            <span>Proof</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight">
            When We Say Detected, We Mean It
          </h2>
          <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto text-sm md:text-base">
            No AI. No guessing. No &ldquo;confidence scores.&rdquo; Just mathematical proof.
          </p>
        </div>

        {/* Proof Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {proofs.map((proof) => (
            <motion.div
              key={proof.label}
              className="glass-card rounded-xl p-5 md:p-6 text-center group"
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.97 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${proof.color}12`, border: `1px solid ${proof.color}25` }}
              >
                <proof.icon className="w-6 h-6" style={{ color: proof.color }} />
              </div>

              <div className="text-[10px] font-mono text-secondary-foreground/40 uppercase tracking-wider mb-2">
                {proof.label}
              </div>

              <div className="text-3xl font-bold font-mono text-secondary-foreground mb-1">
                {proof.value}
              </div>

              <div className="text-xs font-medium mb-3" style={{ color: proof.color }}>
                {proof.suffix}
              </div>

              <p className="text-[11px] text-secondary-foreground/40 leading-relaxed">
                {proof.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
