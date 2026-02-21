"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lock, Radio, ArrowLeftRight, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

// ─── Data ──────────────────────────────────────────────────────────────────

const THREAT_VECTORS = [
  {
    icon: Lock,
    name: "Ransomware",
    metric: "<200ns",
    metricLabel: "Detection latency",
    bar: 98,
    color: "#ef4444",
  },
  {
    icon: Radio,
    name: "C2 Beacon",
    metric: "100%",
    metricLabel: "Accuracy",
    bar: 100,
    color: "#f59e0b",
  },
  {
    icon: ArrowLeftRight,
    name: "Lateral Movement",
    metric: "0",
    metricLabel: "False positives",
    bar: 100,
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    name: "Data Exfiltration",
    metric: "6yr",
    metricLabel: "Evidence retained",
    bar: 100,
    color: "#3b82f6",
  },
]

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Detect",
    time: "0.2s",
    desc: "Layer 2 deterministic pattern match. Threat identified before payload executes.",
    color: "#ef4444",
  },
  {
    num: "02",
    title: "Review",
    time: "5 min",
    desc: "CISO notified with full forensic context. One-click approval, no spreadsheet.",
    color: "#f59e0b",
  },
  {
    num: "03",
    title: "Archive",
    time: "<1 hr",
    desc: "Report sealed with Merkle tree integrity. Audit-ready before the 72-hour clock expires.",
    color: "#10b981",
  },
]

const REGULATIONS = [
  { name: "NYSDOH", code: "405.46", detail: "72-hr incident reporting" },
  { name: "CIRCIA", code: "2026", detail: "Federal mandate" },
  { name: "Retention", code: "6 Years", detail: "Immutable audit trails" },
  { name: "PHI", code: "On-Premise", detail: "Zero cloud exposure" },
]

// ─── Animation Variants ─────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const barGrow = (pct: number) => ({
  hidden: { scaleX: 0 },
  show: {
    scaleX: pct / 100,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
})

// ─── Threat Ticker Row ───────────────────────────────────────────────────────

function ThreatRow({
  threat,
  index,
}: {
  threat: (typeof THREAT_VECTORS)[number]
  index: number
}) {
  const Icon = threat.icon
  return (
    <motion.div
      variants={fadeLeft}
      className="group flex items-center gap-5 py-4 border-b border-white/[0.05] last:border-0"
    >
      {/* Index */}
      <span
        className="font-mono text-[11px] w-5 text-right flex-shrink-0 tabular-nums"
        style={{ color: `${threat.color}70` }}
      >
        0{index + 1}
      </span>

      {/* Icon */}
      <div
        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${threat.color}14`, border: `1px solid ${threat.color}28` }}
      >
        <Icon className="w-4 h-4" style={{ color: threat.color }} />
      </div>

      {/* Name */}
      <span className="font-mono text-[13px] text-secondary-foreground/75 w-36 flex-shrink-0 tracking-wide">
        {threat.name.toUpperCase()}
      </span>

      {/* Progress bar */}
      <div className="flex-1 relative h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full origin-left"
          style={{ backgroundColor: threat.color, opacity: 0.7 }}
          variants={barGrow(threat.bar)}
        />
        {/* Bright trailing edge */}
        <motion.div
          className="absolute inset-y-0 rounded-full origin-left"
          style={{
            backgroundColor: threat.color,
            width: "6px",
            filter: `blur(2px)`,
            left: `${threat.bar - 1}%`,
          }}
          variants={barGrow(threat.bar)}
        />
      </div>

      {/* Metric */}
      <div className="text-right flex-shrink-0 w-28">
        <div
          className="font-mono text-lg font-bold leading-none"
          style={{ color: threat.color }}
        >
          {threat.metric}
        </div>
        <div className="text-[9px] text-secondary-foreground/35 uppercase tracking-widest mt-0.5 font-mono">
          {threat.metricLabel}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Horizontal Timeline ─────────────────────────────────────────────────────

function TimelineStep({
  step,
  index,
  total,
}: {
  step: (typeof WORKFLOW_STEPS)[number]
  index: number
  total: number
}) {
  return (
    <motion.div variants={fadeUp} className="relative flex-1 group">
      {/* Connector line — not last */}
      {index < total - 1 && (
        <div className="absolute top-5 left-[calc(50%+28px)] right-0 h-px bg-white/[0.08]">
          {/* Animated dot travelling the line */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full animate-packet"
            style={{ backgroundColor: step.color, animationDelay: `${index * 1.1}s` }}
          />
        </div>
      )}

      {/* Node */}
      <div className="flex flex-col items-center text-center gap-3 px-3">
        {/* Circle */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[11px] font-bold border-2 relative z-10 transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: step.color,
            backgroundColor: `${step.color}12`,
            color: step.color,
            boxShadow: `0 0 16px -4px ${step.color}50`,
          }}
        >
          {step.num}
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-secondary-foreground/40 mb-1">
            {step.title}
          </div>
          <div className="text-2xl font-bold font-mono leading-none" style={{ color: step.color }}>
            {step.time}
          </div>
        </div>

        <p className="text-[11px] text-secondary-foreground/45 leading-relaxed max-w-[160px]">
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}

// ─── Main Section ───────────────────────────────────────────────────────────

export function SolutionSection() {
  const threatRef = useRef<HTMLDivElement>(null)
  const workflowRef = useRef<HTMLDivElement>(null)
  const regRef = useRef<HTMLDivElement>(null)

  const threatInView = useInView(threatRef, { once: true, margin: "-60px" })
  const workflowInView = useInView(workflowRef, { once: true, margin: "-60px" })
  const regInView = useInView(regRef, { once: true, margin: "-60px" })

  return (
    <AnimatedSection
      id="detection"
      className="relative z-10 scroll-mt-24 section-glow-red"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ── Block 1: Threat Vectors ─────────────────────── */}
        <div className="pt-24 md:pt-32 pb-20 md:pb-24">
          {/* Asymmetric header — label left, title right */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 mb-10">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-2">
                Detection Engine
              </div>
              <div className="w-8 h-[2px] bg-primary/60 rounded-full" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight leading-tight">
                Four vectors.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                  Zero guesswork.
                </span>
              </h2>
              <p className="text-secondary-foreground/45 mt-2 text-sm">
                Deterministic. No AI inference. Mathematically proven at Layer 2.
              </p>
            </div>
          </div>

          {/* Threat ticker rows */}
          <motion.div
            ref={threatRef}
            className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12"
            variants={stagger}
            initial="hidden"
            animate={threatInView ? "show" : "hidden"}
          >
            {/* Side label */}
            <div className="hidden md:flex flex-col justify-center">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-secondary-foreground/20 rotate-[-90deg] origin-center whitespace-nowrap self-center mt-8">
                Active Threat Coverage
              </div>
            </div>

            {/* Rows */}
            <div>
              {THREAT_VECTORS.map((t, i) => (
                <ThreatRow key={t.name} threat={t} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="border-t border-white/[0.05]" />

        {/* ── Block 2: Workflow Timeline ──────────────────── */}
        <div className="py-20 md:py-24">
          <div className="text-center mb-14">
            <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-3">
              Compliance Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight">
              Incident to report.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
                Under an hour.
              </span>
            </h2>
            <p className="text-secondary-foreground/45 mt-2 text-sm max-w-sm mx-auto">
              The 72-hour clock starts the moment an incident occurs.
            </p>
          </div>

          <motion.div
            ref={workflowRef}
            className="flex flex-col md:flex-row gap-8 md:gap-0"
            variants={stagger}
            initial="hidden"
            animate={workflowInView ? "show" : "hidden"}
          >
            {WORKFLOW_STEPS.map((step, i) => (
              <TimelineStep key={step.num} step={step} index={i} total={WORKFLOW_STEPS.length} />
            ))}
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="border-t border-white/[0.05]" />

        {/* ── Block 3: Regulation Strip ───────────────────── */}
        <motion.div
          ref={regRef}
          className="py-8 md:py-10"
          variants={stagger}
          initial="hidden"
          animate={regInView ? "show" : "hidden"}
        >
          <div className="flex flex-wrap md:flex-nowrap items-center gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {/* Label */}
            <motion.div variants={fadeUp} className="w-full md:w-auto md:pr-8 md:mr-2 py-4 md:py-0">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-secondary-foreground/25">
                Regulatory
                <br />
                Compliance
              </div>
            </motion.div>

            {REGULATIONS.map((reg) => (
              <motion.div
                key={reg.name}
                variants={fadeUp}
                className="flex-1 min-w-[120px] px-6 py-3 text-center group cursor-default"
              >
                <div className="text-base font-bold text-primary font-mono group-hover:text-amber-400 transition-colors">
                  {reg.name}
                </div>
                <div className="text-sm text-secondary-foreground/60 font-mono">{reg.code}</div>
                <div className="text-[9px] text-secondary-foreground/30 mt-0.5 uppercase tracking-widest">
                  {reg.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </AnimatedSection>
  )
}
