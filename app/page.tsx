"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { SecuritySection } from "@/components/security-section"
import { AudienceSection } from "@/components/audience-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { NetflowBackground } from "@/components/ui/netflow-background"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "#detection", label: "Detection" },
  { href: "#security", label: "Deployment" },
  { href: "#contact", label: "Contact" },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen relative">
        <NetflowBackground className="fixed inset-0 pointer-events-none z-0" />

      <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 border-b border-white/5">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-12 bg-secondary-foreground/10 border border-secondary-foreground/20 flex flex-col items-center justify-center">
              <span className="absolute top-0.5 left-1 text-[7px] font-medium text-carbon leading-none">443</span>
              <span className="text-xl font-bold text-primary leading-none mt-1">Ls</span>
              <span className="text-[6px] font-medium text-carbon leading-none mt-0.5">Listrum</span>
            </div>
            <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-secondary-foreground hidden sm:inline">
              LISTRUM
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-secondary-foreground/55 hover:text-secondary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-4 text-xs font-bold tracking-wider uppercase border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-secondary-foreground"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-secondary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md border-b border-white/[0.06]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-3 px-4 text-base text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-white/[0.04] transition-colors rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SecuritySection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
