"use client"

import { motion } from "framer-motion"
import { FileText, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    icon: FileText,
    time: "0h",
    label: "Incident",
    detail: "Clock starts",
    color: "#ef4444",
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: Clock,
    time: "1m",
    label: "Detected",
    detail: "Auto-captured",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: Shield,
    time: "5m",
    label: "Reviewed",
    detail: "CISO approved",
    color: "#3b82f6",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: CheckCircle,
    time: "<1h",
    label: "Documented",
    detail: "Report ready",
    color: "#10b981",
    gradient: "from-emerald-500 to-emerald-600",
  },
]

const regulations = [
  { name: "NYSDOH", code: "405.46", detail: "72-hour reporting" },
  { name: "CIRCIA", code: "2026", detail: "Federal mandate" },
  { name: "Retention", code: "6 Years", detail: "Audit trails" },
]

export function MandateSection() {
  return (
    <AnimatedSection
      id="mandate"
      className="px-4 sm:px-6 md:px-8 lg:px-12 pb-20 md:pb-28 pt-0 text-secondary-foreground scroll-mt-24 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4">
            <Clock className="w-3 h-3" />
            <span>Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight">
            Meet the 72-Hour Deadline
          </h2>
          <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto text-sm md:text-base">
            From incident to documented report in under an hour.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-red-500/30 via-amber-500/30 via-blue-500/30 to-emerald-500/30 rounded-full" />
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.label}
                className="relative flex flex-col items-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                {/* Circle */}
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center z-10 border-2 transition-transform hover:scale-105"
                  style={{
                    backgroundColor: `${step.color}10`,
                    borderColor: `${step.color}40`,
                  }}
                >
                  <step.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: step.color }} />

                  {/* Step number badge */}
                  <div
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {idx + 1}
                  </div>
                </div>

                {/* Time */}
                <div
                  className="text-2xl md:text-3xl font-bold font-mono mt-4"
                  style={{ color: step.color }}
                >
                  {step.time}
                </div>

                {/* Label */}
                <h3 className="text-sm md:text-base font-semibold text-secondary-foreground mt-1">
                  {step.label}
                </h3>

                {/* Detail */}
                <p className="text-[11px] md:text-xs text-secondary-foreground/50 mt-0.5">
                  {step.detail}
                </p>

                {/* Arrow between steps (mobile only) */}
                {idx < steps.length - 1 && idx % 2 === 0 && (
                  <ArrowRight className="absolute -right-3 top-8 w-4 h-4 text-secondary-foreground/20 hidden md:hidden" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Regulation cards */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-6 mt-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          {regulations.map((reg) => (
            <motion.div
              key={reg.name}
              className="glass-card rounded-xl p-4 md:p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
            >
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">{reg.name}</div>
              <div className="text-sm text-secondary-foreground/60 font-mono">{reg.code}</div>
              <div className="text-[10px] md:text-xs text-secondary-foreground/40 mt-1">{reg.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
