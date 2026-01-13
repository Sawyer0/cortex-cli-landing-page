"use client"

import { useRef, useState, useEffect } from "react"
import { Lock, Key, Upload, ArrowLeftRight, Radio, Search, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionDivider } from "@/components/section-divider"

const detectionTypes = [
  {
    icon: Lock,
    name: "Encryption Pathogen",
    description: "File-locking malware attempting to encrypt patient data.",
    detail: "Isolated before replication",
  },
  {
    icon: Key,
    name: "Credential Hemorrhage",
    description: "Brute-force attempts to guess access credentials.",
    detail: "Arterial bleed stopped at source",
  },
  {
    icon: Upload,
    name: "Data Exfiltration",
    description: "Sensitive records moving toward external destinations.",
    detail: "Containment protocol engaged",
  },
  {
    icon: ArrowLeftRight,
    name: "Lateral Spread",
    description: "Infection attempting to move between hosts.",
    detail: "Quarantine boundaries enforced",
  },
  {
    icon: Radio,
    name: "C2 Beacon",
    description: "Outbound communication to command infrastructure.",
    detail: "Signal terminated",
  },
  {
    icon: Search,
    name: "Network Probing",
    description: "Reconnaissance activity mapping internal topology.",
    detail: "Scan detected and logged",
  },
  {
    icon: Clock,
    name: "Slow-Burn Infection",
    description: "Low-velocity contamination designed to evade detection.",
    detail: "Pattern recognized",
  },
]

export function DetectionSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const totalThreats = detectionTypes.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInternalScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current

    // Calculate progress (0 to 1) based on internal scroll
    const maxScroll = scrollHeight - clientHeight
    const progress = Math.min(1, Math.max(0, scrollTop / maxScroll))

    // Map progress to card index
    const index = Math.min(totalThreats - 1, Math.floor(progress * totalThreats))
    setActiveCard(index)
  }

  if (isMobile) {
    return (
      <div id="detection" className="px-4 sm:px-6 py-6 scroll-mt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Detection Header */}
          <div className="mb-6">
            <span className="text-micro font-mono text-secondary-foreground/60">Contamination Vectors</span>
            <h2 className="text-h2 mt-3 text-secondary-foreground">
              Seven Pathways. One Sterile Field.
            </h2>
          </div>

          {/* Horizontal scrollable threat cards */}
          <div className="mb-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {detectionTypes.map((type, index) => (
                <Card
                  key={type.name}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground snap-start"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary text-primary-foreground flex-shrink-0 rounded-md">
                        <type.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-micro font-mono text-secondary-foreground/60">
                          {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                        </span>
                        <h3 className="text-h3 text-secondary-foreground">{type.name}</h3>
                      </div>
                    </div>
                    <p className="text-body-sm text-secondary-foreground/80 leading-relaxed mb-3 text-center flex items-center justify-center min-h-[3rem]">
                      {type.description}
                    </p>
                    <p className="text-xs text-secondary-foreground font-medium">{type.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">Swipe to explore threats</p>
          </div>
          <SectionDivider variant="card-to-slate" className="mt-12" />
        </div>
      </div>
    )
  }

  // Desktop layout - Internal Scroll Driver
  return (
    <div id="detection" className="relative scroll-mt-24 z-10 pb-20 md:pb-32 pt-0">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Column: Interactive Card Stack with Internal Scroll */}
            <div className="space-y-12">
              <div>
                <div className="mb-4">
                  <span className="text-micro font-mono text-secondary-foreground/60">
                    Contamination Vectors
                  </span>
                  <h2 className="text-h2 mt-3 text-secondary-foreground">
                    Seven Pathways. One Sterile Field.
                  </h2>
                </div>

                {/* Card Stack Container */}
                <div className="relative h-[320px]">
                  {/* Invisible Scroll Overlay */}
                  <div
                    ref={scrollContainerRef}
                    onScroll={handleInternalScroll}
                    className="absolute inset-0 z-20 overflow-y-auto scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {/* Scroll Track - height determines scroll sensitivity */}
                    <div className="h-[3000px] w-full" />
                  </div>

                  {/* Cards (Visuals) */}
                  {detectionTypes.map((type, index) => {
                    const isActive = index === activeCard
                    const isPast = index < activeCard

                    return (
                      <div
                        key={type.name}
                        className="absolute inset-0 transition-all duration-500 ease-out overflow-hidden"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive
                            ? "translateY(0) scale(1)"
                            : isPast
                              ? "translateY(-100px) scale(0.95)"
                              : "translateY(100px) scale(0.95)",
                          zIndex: isActive ? 10 : 0,
                          pointerEvents: "none", // Allow clicks to pass through to scroll container if needed
                          visibility: isActive ? "visible" : "hidden",
                        }}
                      >
                        <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 h-full flex flex-col shadow-sm">
                          <CardContent className="p-4 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary text-primary-foreground rounded-md">
                                  <type.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-h3 font-semibold text-secondary-foreground">{type.name}</h3>
                              </div>
                              <span className="text-micro font-mono text-secondary-foreground/60">
                                {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                              </span>
                            </div>                            <p className="text-body-sm text-secondary-foreground/80 leading-relaxed flex-grow flex items-center justify-center text-center">
                              {type.description}
                            </p>
                            <div className="mt-3 pt-3 border-t border-secondary-foreground/10">
                              <p className="text-body-sm text-secondary-foreground font-medium leading-relaxed">{type.detail}</p>
                            </div>

                            <div className="flex gap-0.5 mt-3">
                              {detectionTypes.map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-0.5 flex-1 transition-colors duration-300 rounded-full ${i <= activeCard ? "bg-primary" : "bg-border"
                                    }`}
                                />
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-primary">
                  <span className="text-micro font-mono font-medium tracking-wide">Scroll over cards to explore</span>
                  <div className="w-3 h-4 border border-primary/50 rounded-full flex items-start justify-center p-0.5">
                    <div className="w-0.5 h-1 bg-primary rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="">
              <div className="space-y-6">
                <div>
                  <span className="text-micro font-mono text-secondary-foreground/60">
                    Methodology
                  </span>
                  <h2 className="text-h2 mt-3 text-secondary-foreground">
                    Deterministic. Verifiable. Immutable.
                  </h2>
                </div>

                <p className="text-body text-secondary-foreground/80">
                  This is not a probabilistic model.
                  There is no &quot;confidence score.&quot;
                  There are no hallucinations.<br /><br />
                  Listrum runs{" "}
                  <strong className="text-secondary-foreground font-medium">
                    formally verified state machines
                  </strong>.
                  Each transition is proven correct at compile time.
                  The logic is auditable. The behavior is predictable.
                </p>

                <p className="text-body text-secondary-foreground/80">
                  When we say &quot;detected,&quot; we mean detected.<br />
                  Not &quot;probably detected.&quot; Not &quot;likely detected.&quot;<br />
                  <strong className="text-secondary-foreground font-medium">Detected.</strong>
                </p>
              </div>
            </div>
          </div>
          <SectionDivider variant="card-to-slate" className="mt-12" />
        </div>
      </div>
    </div>
  )
}
