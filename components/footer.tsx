export function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 text-secondary-foreground relative overflow-hidden z-10">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex items-center gap-3">
            {/* Periodic Table Element Logo */}
            <div className="relative w-9 h-10 bg-secondary-foreground/10 border border-secondary-foreground/20 flex flex-col items-center justify-center flex-shrink-0">
              <span className="absolute top-0.5 left-0.5 text-[6px] font-medium text-carbon leading-none">443</span>
              <span className="text-base font-bold text-primary leading-none mt-1">Ls</span>
              <span className="text-[5px] font-medium text-carbon leading-none mt-0.5">Listrum</span>
            </div>
            <div>
              <span className="font-semibold text-secondary-foreground">LISTRUM</span>
              <p className="text-secondary-foreground/60 text-xs sm:text-sm">
                Network Sterility for Healthcare
              </p>
            </div>
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
          <p className="font-mono text-ui-xs text-secondary-foreground/60 mb-2 sm:mb-3">
            Regulatory References
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-4 font-mono text-ui-xs text-secondary-foreground/60">
            <span>NYSDOH 405.46(b)(5)</span>
            <span>NYSDOH 405.46(n)(1)</span>
            <span>NYSDOH 405.46(g)(2)</span>
            <span>CIRCIA 2026</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 text-ui-xs text-secondary-foreground/50">
          <p>© 2025 Listrum. All rights reserved.</p>
          <p className="mt-1">We do not guess. We verify.</p>
        </div>
      </div>
    </footer>
  )
}
