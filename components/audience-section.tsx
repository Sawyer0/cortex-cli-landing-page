"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Clock, FileText, Server, ShieldCheck, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const AUDIENCES = [
  {
    icon: Clock,
    role: "Hospital CISOs",
    roleShort: "CISO",
    headline: "72-hour mandate. Automated.",
    detail:
      "Incident captured, reviewed, and documented before the compliance clock becomes a liability. Full forensic chain-of-custody generated automatically.",
    highlight: "72-hour automation",
    metric: "72hr",
    metricLabel: "Average close time",
    color: "#ef4444",
  },
  {
    icon: FileText,
    role: "Compliance Officers",
    roleShort: "Compliance",
    headline: "NYSDOH + CIRCIA. Pre-filled.",
    detail:
      "Reports generated automatically with Merkle-sealed audit trails. Six-year retention built in. Regulators get exactly what they ask for.",
    highlight: "Audit-ready",
    metric: "6yr",
    metricLabel: "Retention guaranteed",
    color: "#f59e0b",
  },
  {
    icon: Server,
    role: "IT Directors",
    roleShort: "IT",
    headline: "Existing Cisco infra. Zero CapEx.",
    detail:
      "No new hardware. No network re-architecture. No agents to manage. Deploy on a test VLAN in minutes — not quarters.",
    highlight: "Zero CapEx",
    metric: "0",
    metricLabel: "New hardware required",
    color: "#3b82f6",
  },
  {
    icon: ShieldCheck,
    role: "Risk Managers",
    roleShort: "Risk",
    headline: "No AI. Mathematical proof.",
    detail:
      "Formal deterministic verification. Every decision is reproducible and explainable. Zero false positives. Insurance carriers accept the reports.",
    highlight: "Verifiable",
    metric: "0",
    metricLabel: "False positives",
    color: "#10b981",
  },
]

const panelVariants = {
  enter: { opacity: 0, x: 16, filter: "blur(4px)" },
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -16,
    filter: "blur(4px)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

export function AudienceSection() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-60px" })

  const current = AUDIENCES[active]
  const Icon = current.icon

  return (
    <AnimatedSection className="relative z-10 section-glow-purple">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-3">
            Roles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-tight leading-tight">
            Built for the people responsible
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-foreground/70 to-secondary-foreground/40">
              {" "}when things go wrong.
            </span>
          </h2>
        </motion.div>

        {/* ── 2-col layout: role list | featured panel ─── */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10"
        >
          {/* LEFT — role selector list */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
            {AUDIENCES.map((a, i) => {
              const RoleIcon = a.icon
              const isActive = active === i
              return (
                <button
                  key={a.role}
                  onClick={() => setActive(i)}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 flex-shrink-0 md:flex-shrink group"
                  style={{
                    backgroundColor: isActive ? `${a.color}0f` : "transparent",
                    border: `1px solid ${isActive ? `${a.color}30` : "transparent"}`,
                  }}
                >
                  {/* Active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="role-bar"
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      style={{ backgroundColor: a.color }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  <RoleIcon
                    className="w-4 h-4 flex-shrink-0 transition-colors"
                    style={{ color: isActive ? a.color : "rgba(255,255,255,0.3)" }}
                  />

                  <div className="min-w-0">
                    <div
                      className="text-xs font-semibold transition-colors truncate"
                      style={{
                        color: isActive ? a.color : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {a.role}
                    </div>
                    {isActive && (
                      <div className="text-[9px] font-mono uppercase tracking-widest mt-0.5" style={{ color: `${a.color}80` }}>
                        {a.highlight}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT — featured panel */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 rounded-xl border overflow-hidden"
                style={{
                  borderColor: `${current.color}20`,
                  backgroundColor: `${current.color}06`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                  style={{
                    background: `linear-gradient(90deg, ${current.color}00, ${current.color}80, ${current.color}00)`,
                  }}
                />

                <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Role + icon header */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${current.color}14`, border: `1px solid ${current.color}28` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: current.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-widest" style={{ color: `${current.color}90` }}>
                          {current.role}
                        </div>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground leading-snug">
                      {current.headline}
                    </h3>

                    {/* Detail */}
                    <p className="text-sm text-secondary-foreground/50 leading-relaxed">
                      {current.detail}
                    </p>
                  </div>

                  {/* Bottom row: metric + CTA */}
                  <div className="flex items-end justify-between mt-6 pt-5 border-t border-white/[0.05]">
                    <div>
                      <div
                        className="text-3xl font-black font-mono"
                        style={{ color: current.color }}
                      >
                        {current.metric}
                      </div>
                      <div className="text-[10px] text-secondary-foreground/35 uppercase tracking-widest font-mono mt-0.5">
                        {current.metricLabel}
                      </div>
                    </div>

                    <button
                      className="flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-lg transition-all hover:gap-2.5"
                      style={{
                        color: current.color,
                        backgroundColor: `${current.color}12`,
                        border: `1px solid ${current.color}25`,
                      }}
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Step indicator dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {AUDIENCES.map((a, i) => (
            <button
              key={a.role}
              onClick={() => setActive(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: active === i ? a.color : "rgba(255,255,255,0.2)",
                transform: active === i ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>

      </div>
    </AnimatedSection>
  )
}
