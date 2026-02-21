"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Shield, CheckCircle } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      id="contact"
      className="relative z-10 overflow-hidden scroll-mt-24"
      style={{
        background:
          "linear-gradient(135deg, #150900 0%, #1c0f00 30%, #1a1200 60%, #141414 100%)",
      }}
    >
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,119,6,0.5), rgba(251,191,36,0.3), rgba(217,119,6,0.5), transparent)",
        }}
      />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(217,119,6,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Scan sweep line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px animate-scan-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(217,119,6,0.25) 50%, transparent 90%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          {/* LEFT — copy block, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                Free Assessment
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold tracking-tight leading-[1.07]">
              <span className="text-secondary-foreground">See your network</span>
              <br />
              <span
                className="text-transparent bg-clip-text animate-shimmer-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #d97706, #fbbf24, #f59e0b, #d97706, #fbbf24)",
                }}
              >
                blind spots in 15 minutes.
              </span>
            </h2>

            {/* Sub */}
            <p className="text-secondary-foreground/50 text-sm leading-relaxed max-w-md">
              We deploy on a test VLAN and show you exactly what your current monitoring misses. No commitment. No credit card. Just proof.
            </p>

            {/* Trust bullets */}
            <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-secondary-foreground/35">
              {["No credit card", "15-min setup", "Full report included"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-primary/50 flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CTA button block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 min-w-[220px]"
          >
            {/* Primary CTA — shimmer border */}
            <div className="relative group">
              {/* Shimmer border layer */}
              <div
                className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer-border"
                style={{
                  background:
                    "linear-gradient(90deg, #d97706, #fbbf24, #d97706)",
                  borderRadius: "inherit",
                }}
              />
              <Button
                size="lg"
                className="relative w-full h-13 px-8 text-sm font-bold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white border-none shadow-2xl shadow-primary/30 transition-all hover:shadow-primary/40 z-10"
              >
                Get Free Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="w-full h-12 px-8 text-sm font-bold tracking-wider uppercase border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-secondary-foreground transition-all hover:border-primary/25"
            >
              <FileText className="w-4 h-4 mr-2" />
              Read the Whitepaper
            </Button>

            {/* Compliance badge */}
            <div className="text-center pt-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-secondary-foreground/20">
                NYSDOH 405.46 · CIRCIA 2026
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom border gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,119,6,0.2), transparent)",
        }}
      />
    </section>
  )
}
