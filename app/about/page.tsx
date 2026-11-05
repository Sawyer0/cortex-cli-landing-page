"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronRight, ArrowRight, Shield, CheckCircle,
  FlaskConical, Crosshair, Lock, Eye, AlertTriangle, FileText
} from "lucide-react"
import Link from "next/link"
import { NetflowBackground } from "@/components/ui/netflow-background"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { AnimatedSection } from "@/components/animated-section"

// ─── Animation Variants ────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const barGrow = (pct: number) => ({
  hidden: { scaleX: 0 },
  show: {
    scaleX: pct / 100,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
})

// ─── TiltCard ──────────────────────────────────────────────────────────────

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

// ─── Philosophy Principle Row ──────────────────────────────────────────────

const PRINCIPLES = [
  {
    num: "01",
    icon: FlaskConical,
    name: "Chemical Barrier",
    sub: "Formal Verification",
    desc: "Carbolic acid guaranteed that germs were killed. Formal verification guarantees that code is safe. We replace guessing with mathematical proof.",
    bar: 100,
    color: "#10b981",
  },
  {
    num: "02",
    icon: Crosshair,
    name: "Treatment at the Wound",
    sub: "Edge Deployment",
    desc: "Lister proved that preventing infection at the entry point is far better than treating it after it spreads. We deploy at the network edge to stop contamination before it gets in.",
    bar: 100,
    color: "#3b82f6",
  },
  {
    num: "03",
    icon: Lock,
    name: "Absolute Exclusion",
    sub: "Deterministic Isolation",
    desc: "A surgical field is either sterile or it is not. There is no middle ground. We reject 'acceptable risk' in favor of total isolation.",
    bar: 100,
    color: "#8b5cf6",
  },
]

function PrincipleRow({ p }: { p: (typeof PRINCIPLES)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = p.icon
  return (
    <motion.div
      variants={fadeUp}
      className="group border-b border-white/[0.05] last:border-0 cursor-pointer"
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="flex items-center gap-5 py-4">
        {/* Index */}
        <span className="font-mono text-[11px] w-5 text-right flex-shrink-0 tabular-nums" style={{ color: `${p.color}70` }}>
          {p.num}
        </span>

        {/* Icon */}
        <div
          className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${p.color}14`, border: `1px solid ${p.color}28` }}
        >
          <Icon className="w-4 h-4" style={{ color: p.color }} />
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <span className="font-mono text-[13px] text-secondary-foreground/75 tracking-wide">
            {p.name.toUpperCase()}
          </span>
          <span className="ml-3 text-[10px] font-mono uppercase tracking-widest hidden sm:inline" style={{ color: `${p.color}60` }}>
            {p.sub}
          </span>
        </div>

        {/* Bar */}
        <div className="flex-1 relative h-[3px] bg-white/[0.06] rounded-full overflow-hidden max-w-[180px] hidden md:block">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full origin-left"
            style={{ backgroundColor: p.color, opacity: 0.7 }}
            variants={barGrow(p.bar)}
          />
          <motion.div
            className="absolute inset-y-0 rounded-full origin-left"
            style={{ backgroundColor: p.color, width: "6px", filter: "blur(2px)", left: `${p.bar - 1}%` }}
            variants={barGrow(p.bar)}
          />
        </div>

        {/* Expand caret */}
        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-secondary-foreground/25 flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-[52px] pr-2">
              <p className="text-sm text-secondary-foreground/50 leading-relaxed border-l-2 pl-4" style={{ borderColor: `${p.color}40` }}>
                {p.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  // Refs for scroll-triggered animation
  const heroRef = useRef<HTMLDivElement>(null)
  const symbolRef = useRef<HTMLDivElement>(null)
  const listerRef = useRef<HTMLDivElement>(null)
  const gapRef = useRef<HTMLDivElement>(null)
  const philosophyRef = useRef<HTMLDivElement>(null)
  const mottoRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" })
  const symbolInView = useInView(symbolRef, { once: true, margin: "-60px" })
  const listerInView = useInView(listerRef, { once: true, margin: "-60px" })
  const gapInView = useInView(gapRef, { once: true, margin: "-60px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-60px" })
  const mottoInView = useInView(mottoRef, { once: true, margin: "-60px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" })

  return (
    <>
      <NetflowBackground className="fixed inset-0 pointer-events-none z-0" />
      <SiteHeader onHomePage={false} />
      <main id="main" className="relative">


      {/* ══════════════════════════════════════════════════
          SECTION 1 — Manifesto Hero
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 section-glow-orange">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-32 pb-20 md:pb-24">
          <motion.div
            ref={heroRef}
            variants={stagger}
            initial="hidden"
            animate={heroInView ? "show" : "hidden"}
            className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12"
          >
            {/* Left — label col */}
            <motion.div variants={fadeRight} className="flex flex-col gap-4 pt-2">
              <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30">
                Manifesto
              </div>
              <div className="w-8 h-[2px] bg-primary/60 rounded-full" />
              {/* Periodic table element */}
              <div className="relative w-16 h-[76px] bg-secondary-foreground/5 border border-secondary-foreground/20 flex flex-col items-center justify-center mt-4">
                <span className="absolute top-1 left-1.5 text-[9px] font-medium text-carbon leading-none font-mono">443</span>
                <span className="text-3xl font-bold text-primary leading-none">Ls</span>
                <span className="text-[9px] font-medium text-carbon/70 mt-1 font-mono">Listrum</span>
              </div>
            </motion.div>

            {/* Right — headline + method */}
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-secondary-foreground leading-[1.06]">
                  Why Listrum
                </h1>
                <p className="text-secondary-foreground/45 mt-4 text-sm leading-relaxed max-w-lg">
                  The carbolic acid of the modern network. Deployed at the edge where contamination enters.
                </p>
              </motion.div>

              {/* Three-phrase method */}
              <motion.div variants={stagger} className="space-y-0">
                {[
                  { phrase: "Monitor without accessing.", color: "#10b981" },
                  { phrase: "Detect without guessing.", color: "#3b82f6" },
                  { phrase: "Report immediately.", color: "#8b5cf6" },
                ].map((item) => (
                  <motion.div
                    key={item.phrase}
                    variants={fadeRight}
                    className="flex items-center gap-4 py-3 border-b border-white/[0.05] last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="font-mono text-sm font-medium text-secondary-foreground/70 tracking-wide">
                      {item.phrase}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Deterministic badge row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {["Deterministic", "Verifiable", "Immutable"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/[0.08] text-secondary-foreground/40"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — The Symbol
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24">
          <motion.div
            ref={symbolRef}
            variants={stagger}
            initial="hidden"
            animate={symbolInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Left — large element card */}
            <motion.div variants={fadeRight} style={{ perspective: 900 }}>
              <TiltCard>
                <div className="relative border border-secondary-foreground/15 bg-white/[0.02] p-10 flex flex-col items-center gap-6">
                  {/* Large element */}
                  <div className="relative w-36 h-40 bg-secondary-foreground/5 border border-secondary-foreground/20 flex flex-col items-center justify-center">
                    <span className="absolute top-2 left-2.5 text-xs font-medium text-carbon font-mono">443</span>
                    <span className="text-6xl font-bold text-primary leading-none">Ls</span>
                    <span className="text-xs font-medium text-carbon/70 mt-2 font-mono">Listrum</span>
                  </div>
                  <p className="text-[11px] font-mono text-secondary-foreground/30 uppercase tracking-widest text-center">
                    The foundational element of network sterility
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Right — symbol explanation */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeLeft}>
                <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-4">
                  The Symbol
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground tracking-tight leading-tight">
                  Three layers of meaning.
                  <br />One element.
                </h2>
              </motion.div>

              <motion.div variants={stagger} className="space-y-0">
                {[
                  { symbol: "Ls", color: "#d97706", label: "A new element on the periodic table" },
                  { symbol: "ls", color: "#3b82f6", label: "The most fundamental command in your terminal" },
                  { symbol: "443", color: "#10b981", label: "The gateway to secure traffic" },
                ].map((item) => (
                  <motion.div
                    key={item.symbol}
                    variants={fadeLeft}
                    className="flex items-center gap-5 py-3.5 border-b border-white/[0.05] last:border-0 group"
                  >
                    <span
                      className="font-mono text-2xl font-black w-14 flex-shrink-0 tabular-nums group-hover:opacity-100 transition-opacity"
                      style={{ color: item.color }}
                    >
                      {item.symbol}
                    </span>
                    <span className="text-sm text-secondary-foreground/55 leading-snug">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — The Lister Legacy
      ══════════════════════════════════════════════════ */}
      <AnimatedSection className="relative z-10 section-glow-red border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28">
          <motion.div
            ref={listerRef}
            variants={stagger}
            initial="hidden"
            animate={listerInView ? "show" : "hidden"}
            className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12"
          >
            {/* Label col */}
            <motion.div variants={fadeRight} className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30">
                Origin
              </div>
              <div className="w-8 h-[2px] bg-destructive/50 rounded-full" />
              {/* Big year */}
              <div className="font-mono text-[4rem] font-black leading-none text-secondary-foreground/[0.07] select-none">
                1865
              </div>
            </motion.div>

            {/* Prose col */}
            <motion.div variants={stagger} className="space-y-5">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground tracking-tight leading-tight mb-6">
                  The Lister Legacy
                </h2>
              </motion.div>

              {[
                "In 1865, surgery was often fatal. At Glasgow Royal Infirmary, nearly half of all patients died after their operations. Doctors blamed \"bad air\" or the patient's own weakness.",
                "Joseph Lister had a different idea. He read Louis Pasteur's work on germs and realized that invisible organisms were entering wounds. The problem wasn't bad luck. It was contamination.",
                "Lister created a new system. He sterilized instruments with carbolic acid and created a sterile field — a zone where germs could not survive.",
                "The results were undeniable. Ward mortality rates fell to 15% within four years.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-sm text-secondary-foreground/60 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* Pull quote */}
              <motion.div
                variants={fadeUp}
                className="relative pl-5 py-1 mt-2"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/40 rounded-full" />
                <p className="text-sm text-secondary-foreground/50 leading-relaxed italic">
                  The medical community was skeptical. They couldn't see the germs, so they didn't believe they existed. But Lister's methods worked, and antiseptic surgery eventually became the global standard.
                </p>
              </motion.div>

              {/* Outcome stat strip */}
              <motion.div
                variants={fadeUp}
                className="mt-6 grid grid-cols-2 gap-px bg-white/[0.04] overflow-hidden border border-white/[0.05]"
              >
                {[
                  { val: "~50%", label: "Pre-Lister mortality rate" },
                  { val: "15%", label: "Post-Lister within 4 years" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary px-5 py-4 group hover:bg-white/[0.02] transition-colors">
                    <div className="text-2xl font-black font-mono text-secondary-foreground group-hover:text-primary transition-colors">
                      {s.val}
                    </div>
                    <div className="text-[10px] text-secondary-foreground/35 mt-1 uppercase tracking-wider font-mono">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — The Visibility Gap
      ══════════════════════════════════════════════════ */}
      <AnimatedSection className="relative z-10 section-glow-blue border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28">
          <motion.div
            ref={gapRef}
            variants={stagger}
            initial="hidden"
            animate={gapInView ? "show" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 mb-12">
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-2">
                  The Problem
                </div>
                <div className="w-8 h-[2px] bg-blue-500/50 rounded-full" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground tracking-tight leading-tight">
                The Visibility Gap
              </h2>
            </motion.div>

            {/* Asymmetric 2-col: giant stats left, prose right */}
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 items-start">

              {/* LEFT — giant mono stats stacked */}
              <motion.div variants={stagger} className="sticky top-28 space-y-1">
                {[
                  { val: "90%", label: "Flows lost", sub: "to cloud sampling", color: "#ef4444" },
                  { val: "30s", label: "SOC delay", sub: "minimum alert latency", color: "#f59e0b" },
                  { val: "45k", label: "Flows/min", sub: "invisible per clinic", color: "#3b82f6" },
                ].map((item) => (
                  <motion.div key={item.val} variants={fadeRight} className="flex items-baseline gap-4 group">
                    <span
                      className="font-mono font-black leading-none text-[5rem] tabular-nums"
                      style={{ color: item.color, textShadow: `0 0 40px ${item.color}25` }}
                    >
                      {item.val}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-secondary-foreground/40 uppercase tracking-wider group-hover:text-secondary-foreground/65 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-secondary-foreground/25 uppercase tracking-widest">
                        {item.sub}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* RIGHT — prose + tilt card */}
              <motion.div variants={stagger} className="space-y-5">
                {[
                  "Hospital CISOs consistently report learning about ransomware attacks only after critical systems begin shutting down. This is not a failure of attention or effort. It is a failure of visibility.",
                  "Cloud-based security monitoring creates an inherent blind spot. Network flows must traverse WAN connections to reach centralized security operations centers. During this transit, 90% of data is lost to sampling.",
                  "The other 45,000 flows? Invisible. That encryption spike at 2 AM? The lateral movement from radiology workstations to the PACS server? By the time your cloud monitor sees the alert, 30–60 seconds have passed. In cybersecurity, that's an eternity.",
                ].map((para, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-sm text-secondary-foreground/55 leading-relaxed">
                    {para}
                  </motion.p>
                ))}

                {/* Pull-quote tilt card */}
                <motion.div variants={fadeUp} style={{ perspective: 900 }}>
                  <TiltCard>
                    <div className="relative border border-blue-500/15 bg-blue-500/[0.04] p-5">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500/50 rounded-l" />
                      <div className="pl-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="w-3.5 h-3.5 text-blue-400/60" />
                          <span className="font-mono text-[9px] uppercase tracking-widest text-blue-400/50">This is the visibility gap</span>
                        </div>
                        <p className="text-xs text-secondary-foreground/50 leading-relaxed">
                          It exists not because detection systems lack sophistication, but because the architectural model of cloud-based monitoring introduces irreconcilable conflicts with healthcare operational requirements.
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

                <motion.p variants={fadeUp} className="text-sm text-secondary-foreground/55 leading-relaxed">
                  When you see the alert, the attack has already encrypted files, moved laterally across VLANs, and established persistence. You are not responding to an incident. You are cleaning up after one.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — The Philosophy
      ══════════════════════════════════════════════════ */}
      <AnimatedSection className="relative z-10 section-glow-purple border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 mb-12"
          >
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/30 mb-2">
                Philosophy
              </div>
              <div className="w-8 h-[2px] bg-purple-500/50 rounded-full" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground tracking-tight leading-tight">
                The Digital Application of Antisepsis
              </h2>
              <p className="text-secondary-foreground/45 mt-3 text-sm leading-relaxed max-w-lg">
                Listrum is built on one idea: applying Lister's antiseptic methods to computer networks. We don't see cybersecurity as a war against hackers. We see it as keeping a digital environment sterile.
              </p>
            </div>
          </motion.div>

          {/* Principle ticker rows */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
            <div className="hidden md:flex flex-col justify-center">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-secondary-foreground/20 rotate-[-90deg] origin-center whitespace-nowrap self-center mt-8">
                Three Core Principles
              </div>
            </div>
            <motion.div
              ref={philosophyRef}
              variants={stagger}
              initial="hidden"
              animate={philosophyInView ? "show" : "hidden"}
            >
              {PRINCIPLES.map((p) => (
                <PrincipleRow key={p.num} p={p} />
              ))}

              {/* Reject AI box */}
              <motion.div variants={fadeUp} style={{ perspective: 900 }} className="mt-8">
                <TiltCard>
                  <div className="relative border border-amber-500/15 bg-amber-500/[0.03] p-5">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500/50 rounded-l" />
                    <div className="pl-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400/60" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400/50">Why We Reject Probabilistic AI</span>
                      </div>
                      <p className="text-xs text-secondary-foreground/50 leading-relaxed">
                        Generative AI is probabilistic. It relies on statistical likelihood rather than verification. In surgery, "likely sterile" allows for infection. Listrum uses formal verification to ensure that every interaction is mathematically proven to be safe.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — Motto Strip
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 border-y border-white/[0.05] overflow-hidden">
        {/* Scan sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-px animate-scan-sweep"
            style={{ background: "linear-gradient(90deg, transparent 10%, rgba(217,119,6,0.18) 50%, transparent 90%)" }}
          />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

        <motion.div
          ref={mottoRef}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={mottoInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 text-center"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/25 mb-6">
            Our Commitment
          </div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground tracking-tight leading-tight">
            We do not guess.
            <br />
            <span className="text-primary">We verify.</span>
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32">
          <motion.div
            ref={ctaRef}
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "show" : "hidden"}
            className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center"
          >
            {/* Left */}
            <motion.div variants={fadeRight} className="space-y-5">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary/70" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                  Free Assessment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground tracking-tight leading-tight">
                See your network
                <br />
                <span className="text-primary">blind spots in 15 minutes.</span>
              </h2>
              <p className="text-secondary-foreground/45 text-sm leading-relaxed max-w-md">
                We deploy on a test VLAN and show you exactly what your current monitoring misses. No commitment. No credit card. Just proof.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-secondary-foreground/35">
                {["No credit card", "15-min setup", "Full report included"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-primary/50 flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeLeft} className="flex flex-col gap-3 min-w-[220px]">
              <div className="relative group">
                <div
                  className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer-border"
                  style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }}
                />
                <Button
                  size="lg"
                  className="relative w-full h-12 px-8 text-sm font-bold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/25 z-10"
                >
                  Get Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full h-12 px-8 text-sm font-bold tracking-wider uppercase border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-secondary-foreground"
              >
                <Link href="/">
                  <FileText className="w-4 h-4 mr-2" />
                  Return to Home
                </Link>
              </Button>
              <div className="text-center pt-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-secondary-foreground/20">
                  NYSDOH 405.46 · CIRCIA 2026
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
      <SiteFooter onHomePage={false} />
    </>
  )
}
