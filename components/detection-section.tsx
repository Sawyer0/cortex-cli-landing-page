"use client"

import { useRef, useState, useEffect } from "react"
import { Lock, Key, Upload, ArrowLeftRight, Radio, Search, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionDivider } from "@/components/section-divider"

const detectionTypes = [
  {
    icon: Lock,
    name: "Ransomware",
    description: "Stops hard-to-detect malware aimed at locking your critical patient files.",
    detail: "Blocks encryption attempts before data is lost",
  },
  {
    icon: Key,
    name: "Brute Force",
    description: "Detects unauthorized attempts to guess passwords and access hospital systems.",
    detail: "Prevents hackers from breaking into your accounts",
  },
  {
    icon: Upload,
    name: "Data Exfiltration",
    description: "Watches for sensitive patient records being secretly sent out of your network.",
    detail: "Stops patient data theft in real-time",
  },
  {
    icon: ArrowLeftRight,
    name: "Lateral Movement",
    description: "Identifies attackers trying to jump from one device to another within your hospital.",
    detail: "Confines threats to a single device",
  },
  {
    icon: Radio,
    name: "Command & Control",
    description: "Blocks silent communication between infected devices and external hackers.",
    detail: "Cuts off the attacker's line of communication",
  },
  {
    icon: Search,
    name: "Reconnaissance",
    description: "Spots attackers quietly scanning your network to find weak points.",
    detail: "Catches hackers before they launch an attack",
  },
  {
    icon: Clock,
    name: "Slow-Roll Attacks",
    description: "Uncovers stealthy threats that move slowly to avoid triggering alarms.",
    detail: "Finds attacks designed to slip past standard defenses",
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
            <span className="text-micro font-mono text-secondary-foreground/60">Threat Detection</span>
            <h2 className="text-h2 mt-3 text-secondary-foreground">
              Defense in Depth
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
                    Threat Detection
                  </span>
                  <h2 className="text-h2 mt-3 text-secondary-foreground">
                    Defense in Depth
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
                    Defense in Depth
                  </span>
                  <h2 className="text-h2 mt-3 text-secondary-foreground">
                    Deterministic. Agentic. Edge-First.
                  </h2>
                </div>

                <p className="text-body text-secondary-foreground/80">
                  Cortex deploys{" "}
                  <strong className="text-secondary-foreground font-medium">
                    deterministic, agentic protection at the edge
                  </strong>
                  —directly on your existing Cisco infrastructure. No cloud round-trips, no guessing, no hallucinations. We intercept{" "}
                  <strong className="text-secondary-foreground font-medium">
                    7 distinct attack vectors
                  </strong>{" "}
                  in real-time, catching threats at every layer of the kill chain before they reach your core systems.
                </p>

                <p className="text-body text-secondary-foreground/80">
                  This isn&apos;t a static checklist or a probabilistic model hoping to flag bad behavior. The{" "}
                  <strong className="text-secondary-foreground font-medium">
                    Defense in Depth
                  </strong>{" "}
                  stack runs{" "}
                  <strong className="text-secondary-foreground font-medium">
                    formally verified logic
                  </strong>{" "}
                  that guarantees detection.
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
