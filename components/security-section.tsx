"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Server, Cloud, Shield, Ban, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const ZEROS = [
  {
    icon: Ban,
    value: "$0",
    title: "New Hardware",
    desc: "Runs on existing Cisco infrastructure. No CapEx.",
    proof: "No CapEx required",
    color: "#10b981",
  },
  {
    icon: Cloud,
    value: "0",
    title: "Cloud Dependencies",
    desc: "All processing on-premise. PHI never leaves the perimeter.",
    proof: "PHI stays local",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    value: "0",
    title: "Network Risk",
    desc: "Self-terminating runtime. Zero lateral movement surface.",
    proof: "Self-terminating",
    color: "#8b5cf6",
  },
]

const TECH_STATS = [
  { value: "<50MB", label: "Memory footprint" },
  { value: "11MB", label: "Binary size" },
  { value: "Minutes", label: "Deployment time" },
  { value: "100%", label: "On-premise" },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-40, 40], [4, -4]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-40, 40], [-4, 4]), { stiffness: 200, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SecuritySection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const leftInView = useInView(leftRef, { once: true, margin: "-60px" })
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" })

  return (
    <AnimatedSection
      id="security"
      className="relative z-10 scroll-mt-24 section-glow-blue"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32">

        {/* ── 2-col asymmetric layout ──────────────────────── */}
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">

          {/* LEFT — giant typographic statement */}
          <motion.div
            ref={leftRef}
            variants={stagger}
            initial="hidden"
            animate={leftInView ? "show" : "hidden"}
            className="sticky top-28 space-y-8"
          >
            <motion.div variants={fadeRight}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-4">
                Deployment
              </div>

              {/* Giant mono numerals stacked */}
              <div className="space-y-1">
                {[
                  { val: "$0", label: "Hardware", color: "#10b981" },
                  { val: "0", label: "Cloud", color: "#3b82f6" },
                  { val: "0", label: "Risk", color: "#8b5cf6" },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4 group">
                    <span
                      className="font-mono font-black leading-none text-[5.5rem] tabular-nums"
                      style={{ color: item.color, textShadow: `0 0 40px ${item.color}30` }}
                    >
                      {item.val}
                    </span>
                    <span className="text-lg font-semibold text-secondary-foreground/35 uppercase tracking-wider group-hover:text-secondary-foreground/60 transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeRight}
              className="text-secondary-foreground/45 text-sm leading-relaxed max-w-xs"
            >
              Deploy on your existing Cisco infrastructure in minutes. Nothing leaves your perimeter. No agents, no cloud, no new attack surface.
            </motion.p>

            {/* Compliance assertion */}
            <motion.div
              variants={fadeRight}
              className="flex items-center gap-2 text-xs font-mono text-emerald-400/70"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              PHI never leaves your network
            </motion.div>
          </motion.div>

          {/* RIGHT — vertical card stack */}
          <motion.div
            ref={cardsRef}
            className="space-y-4"
            variants={stagger}
            initial="hidden"
            animate={cardsInView ? "show" : "hidden"}
          >
            {ZEROS.map((z) => {
              const Icon = z.icon
              return (
                <motion.div key={z.title} variants={fadeUp} style={{ perspective: 800 }}>
                  <TiltCard>
                    <div
                      className="relative rounded-xl border bg-white/[0.025] overflow-hidden group"
                      style={{ borderColor: `${z.color}20` }}
                    >
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                        style={{ backgroundColor: z.color, opacity: 0.6 }}
                      />

                      <div className="flex items-center gap-5 pl-6 pr-5 py-5">
                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${z.color}12`, border: `1px solid ${z.color}25` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: z.color }} />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-3">
                            <span
                              className="font-mono text-3xl font-black leading-none"
                              style={{ color: z.color }}
                            >
                              {z.value}
                            </span>
                            <span className="text-sm font-semibold text-secondary-foreground/75">
                              {z.title}
                            </span>
                          </div>
                          <p className="text-xs text-secondary-foreground/45 mt-1.5 leading-relaxed">
                            {z.desc}
                          </p>
                        </div>

                        {/* Proof badge */}
                        <div
                          className="text-[9px] font-mono font-semibold px-2 py-1 rounded flex-shrink-0 hidden sm:block"
                          style={{ color: z.color, backgroundColor: `${z.color}10` }}
                        >
                          {z.proof}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* ── Stats strip ──────────────────────────────────── */}
        <motion.div
          ref={statsRef}
          className="mt-16 border-t border-white/[0.05] pt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden"
          variants={stagger}
          initial="hidden"
          animate={statsInView ? "show" : "hidden"}
        >
          {TECH_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-secondary px-6 py-5 text-center group hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-2xl font-bold text-secondary-foreground font-mono group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] text-secondary-foreground/35 mt-1 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AnimatedSection>
  )
}
