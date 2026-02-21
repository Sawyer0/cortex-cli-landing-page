"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import { NetworkVisualization } from "@/components/network-visualization"

export function HeroSection() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Subtle parallax: viz floats up slightly on scroll
  const vizY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[94vh] flex items-center py-16 lg:py-0"
    >
      {/* Faint top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/[0.025] to-transparent pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">

            {/* Left Column */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 28 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Compliance tag — replaces trust badge row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.45 }}
              >
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] tracking-widest uppercase text-secondary-foreground/50 border-white/10 bg-white/[0.03] px-3 py-1"
                >
                  NYSDOH 405.46 · CIRCIA 2026
                </Badge>
              </motion.div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold tracking-tight text-secondary-foreground leading-[1.07]">
                  Your network is dark.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400">
                    By the time you know,
                  </span>
                  <br />
                  it&apos;s already done.
                </h1>
              </div>

              {/* Single-line sub */}
              <p className="text-base sm:text-lg text-secondary-foreground/60 leading-relaxed max-w-lg">
                Listrum deploys at the network edge. No new hardware. No cloud. Ransomware detection in nanoseconds — before encryption starts.
              </p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="h-12 px-8 text-sm font-bold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/20 transition-all hover:shadow-primary/30"
                >
                  Get a Free Assessment
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-sm font-bold tracking-wider uppercase border-white/15 bg-white/[0.03] hover:bg-white/[0.07] text-secondary-foreground transition-all hover:border-white/25"
                  onClick={() => router.push("/about")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Read the Whitepaper
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column — Network Visualization with scroll parallax */}
            <motion.div
              className="relative"
              style={{ y: vizY }}
              initial={{ opacity: 0, y: 28 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-16 -right-16 w-[320px] h-[320px] bg-primary/[0.035] rounded-full blur-[90px] pointer-events-none" />
              <NetworkVisualization />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
