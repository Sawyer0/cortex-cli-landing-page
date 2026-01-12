export function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <span className="font-semibold text-secondary-foreground">Cortex-CLI</span>
            <p className="text-secondary-foreground/60 text-xs sm:text-sm mt-1 md:mt-0 md:ml-2 md:inline">
              Autonomous Healthcare Cybersecurity Compliance
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2 sm:gap-6 text-sm">
            <a
              href="#"
              className="py-2 sm:py-0 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors flex items-center"
            >
              Documentation
            </a>
            <a
              href="#"
              className="py-2 sm:py-0 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors flex items-center"
            >
              GitHub
            </a>
            <a
              href="#"
              className="py-2 sm:py-0 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors flex items-center"
            >
              Security
            </a>
            <a
              href="#"
              className="py-2 sm:py-0 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors flex items-center"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Regulatory References */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-secondary-foreground/20">
          <p className="font-mono text-[10px] sm:text-xs text-secondary-foreground/60 mb-2 sm:mb-3">
            Regulatory References
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-4 font-mono text-[10px] sm:text-xs text-secondary-foreground/60">
            <span>NYSDOH 405.46(b)(5)</span>
            <span>NYSDOH 405.46(n)(1)</span>
            <span>NYSDOH 405.46(g)(2)</span>
            <span>CIRCIA 2026</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-secondary-foreground/50">
          <p>© 2025 Cortex-CLI. All rights reserved.</p>
          <p className="mt-1">This software is mission-critical. Every bug could impact patient safety.</p>
        </div>
      </div>
    </footer>
  )
}
