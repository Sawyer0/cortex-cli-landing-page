"use client"

import { motion } from "framer-motion"
import { Search, UserCheck, Archive, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    icon: Search,
    title: "Detect",
    time: "0.2s",
    desc: "Threat identified at Layer 2 via deterministic pattern matching",
    color: "#ef4444",
    borderGlow: "shadow-[0_0_30px_-8px_rgba(239,68,68,0.3)]",
  },
  {
    icon: UserCheck,
    title: "Review",
    time: "5 min",
    desc: "CISO notified with full forensic context for immediate approval",
    color: "#f59e0b",
    borderGlow: "shadow-[0_0_30px_-8px_rgba(245,158,11,0.3)]",
  },
  {
    icon: Archive,
    title: "Archive",
    time: "6 years",
    desc: "Evidence sealed with Merkle tree integrity for audit readiness",
    color: "#10b981",
    borderGlow: "shadow-[0_0_30px_-8px_rgba(16,185,129,0.3)]",
  },
]

export function WorkflowSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 pt-0 pb-20 md:pb-28 text-secondary-foreground relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4">
            <Archive className="w-3 h-3" />
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight">
            Three Steps to Compliance
          </h2>
          <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto text-sm md:text-base">
            Automated workflow. No spreadsheets. No missed deadlines.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Connection arrows (desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-[33%] right-[33%] -translate-y-1/2 justify-around z-0 pointer-events-none">
            <ArrowRight className="w-6 h-6 text-secondary-foreground/15 -ml-3" />
            <ArrowRight className="w-6 h-6 text-secondary-foreground/15 -mr-3" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`relative glass-card rounded-xl p-6 md:p-8 text-center group z-10 ${step.borderGlow}`}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.97 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
              }}
            >
              {/* Step number */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${step.color}12`, border: `1px solid ${step.color}25` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-secondary-foreground mb-1">
                {step.title}
              </h3>

              {/* Time */}
              <div
                className="text-3xl font-bold font-mono mb-3"
                style={{ color: step.color }}
              >
                {step.time}
              </div>

              {/* Description */}
              <p className="text-xs text-secondary-foreground/50 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
