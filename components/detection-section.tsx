"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Radio, ArrowLeftRight, AlertTriangle, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const threats = [
  {
    icon: Lock,
    name: "Ransomware",
    desc: "Encryption pattern detected at Layer 2 before payload executes",
    color: "#ef4444",
    metric: "<200ns",
    metricLabel: "Detection",
  },
  {
    icon: Radio,
    name: "C2 Beacon",
    desc: "Command & control callback identified via deterministic flow analysis",
    color: "#f59e0b",
    metric: "100%",
    metricLabel: "Accuracy",
  },
  {
    icon: ArrowLeftRight,
    name: "Lateral Movement",
    desc: "Unauthorized cross-VLAN traffic blocked before reaching target",
    color: "#8b5cf6",
    metric: "0",
    metricLabel: "False Positives",
  },
  {
    icon: Shield,
    name: "Data Exfiltration",
    desc: "Outbound PHI transfer intercepted at network edge",
    color: "#3b82f6",
    metric: "6yr",
    metricLabel: "Evidence Kept",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export function DetectionSection() {
  return (
    <AnimatedSection id="detection" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 scroll-mt-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4">
            <Zap className="w-3 h-3" />
            <span>Detection Engine</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight">
            See Every Threat
          </h2>
          <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto text-sm md:text-base">
            Deterministic detection across four critical attack vectors. No AI. No guessing.
          </p>
        </div>

        {/* Threat Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {threats.map((threat) => (
            <motion.div
              key={threat.name}
              variants={item}
              className="glass-card rounded-xl p-5 md:p-6 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${threat.color}15`, border: `1px solid ${threat.color}25` }}
              >
                <threat.icon className="w-6 h-6" style={{ color: threat.color }} />
              </div>

              {/* Title */}
              <h3 className="font-bold text-secondary-foreground text-base mb-1.5">
                {threat.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-secondary-foreground/50 leading-relaxed mb-4">
                {threat.desc}
              </p>

              {/* Metric */}
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-xl font-bold font-mono" style={{ color: threat.color }}>
                  {threat.metric}
                </div>
                <div className="text-[10px] text-secondary-foreground/40 uppercase tracking-wider font-mono">
                  {threat.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-secondary-foreground/50">
          <AlertTriangle className="w-4 h-4 text-primary" />
          <span>Deterministic detection. Zero false positives. Mathematically proven.</span>
        </div>
      </div>
    </AnimatedSection>
  )
}
