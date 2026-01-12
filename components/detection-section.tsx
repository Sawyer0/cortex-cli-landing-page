"use client"

import { useRef, useEffect, useState } from "react"
import { Lock, Key, Upload, ArrowLeftRight, Radio, Search, Clock, Bell, FileText, Archive } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const totalThreats = detectionTypes.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Skip scroll logic on mobile

    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerTop = rect.top
      const containerHeight = rect.height
      const viewportHeight = window.innerHeight

      const scrollProgress = Math.max(0, Math.min(1, -containerTop / (containerHeight - viewportHeight)))

      const cardIndex = Math.min(totalThreats - 1, Math.floor(scrollProgress * totalThreats))
      setActiveCard(cardIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [totalThreats, isMobile])

  if (isMobile) {
    return (
      <div id="detection" className="bg-card px-4 sm:px-6 py-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Detection Header */}
          <div className="mb-6">
            <span className="text-micro font-mono text-muted-foreground">Threat Detection</span>
            <h2 className="text-h2 mt-3 text-foreground">
              Defense in Depth
            </h2>
          </div>

          {/* Horizontal scrollable threat cards */}
          <div className="mb-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {detectionTypes.map((type, index) => (
                <Card
                  key={type.name}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] bg-background snap-start"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary text-primary-foreground flex-shrink-0 rounded-md">
                        <type.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-micro font-mono text-muted-foreground">
                          {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                        </span>
                        <h3 className="text-h3 text-foreground">{type.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 text-center flex items-center justify-center min-h-[3rem]">
                      {type.description}
                    </p>
                    <p className="text-xs text-foreground font-medium">{type.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">Swipe to explore threats</p>
          </div>


        </div>
      </div>
    )
  }

  // Desktop layout - sticky scroll
  return (
    <div ref={containerRef} id="detection" className="relative bg-card scroll-mt-24" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Interactive Components */}
              <div className="space-y-12">
                {/* Defense in Depth Component */}
                <div>
                  <div className="mb-4">
                    <span className="text-micro font-mono text-muted-foreground">
                      Threat Detection
                    </span>
                    <h2 className="text-h2 mt-3 text-foreground">
                      Defense in Depth
                    </h2>
                  </div>

                  <div className="relative h-[260px]">
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
                            pointerEvents: isActive ? "auto" : "none",
                            visibility: isActive ? "visible" : "hidden",
                          }}
                        >
                          <Card className="bg-background h-full flex flex-col shadow-sm">
                            <CardContent className="p-4 flex flex-col h-full">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-primary text-primary-foreground rounded">
                                  <type.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-micro font-mono text-muted-foreground">
                                    {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                                  </span>
                                  <h3 className="text-sm font-semibold text-foreground">{type.name}</h3>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed flex-grow flex items-center justify-center text-center">
                                {type.description}
                              </p>
                              <div className="mt-3 pt-3 border-t border-border">
                                <p className="text-[11px] text-foreground font-medium leading-relaxed">{type.detail}</p>
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
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-green-700">
                    <span className="font-mono text-[10px] font-medium tracking-wide">Scroll to explore threats</span>
                    <div className="w-3 h-4 border border-green-700/50 rounded-full flex items-start justify-center p-0.5">
                      <div className="w-0.5 h-1 bg-green-700 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Copy */}
              <div className="sticky top-24">
                <div className="space-y-6">
                  <div>
                    <span className="text-micro font-mono text-muted-foreground">
                      Defense in Depth
                    </span>
                    <h2 className="text-h2 mt-3 text-foreground">
                      Deterministic. Agentic. Edge-First.
                    </h2>
                  </div>

                  <p className="text-body-sm text-muted-foreground">
                    Cortex deploys{" "}
                    <strong className="text-foreground font-medium">
                      deterministic, agentic protection at the edge
                    </strong>
                    —directly on your existing Cisco infrastructure. No cloud round-trips, no guessing, no hallucinations. We intercept{" "}
                    <strong className="text-foreground font-medium">
                      7 distinct attack vectors
                    </strong>{" "}
                    in real-time, catching threats at every layer of the kill chain before they reach your core systems.
                  </p>

                  <p className="text-body-sm text-muted-foreground">
                    This isn&apos;t a static checklist or a probabilistic model hoping to flag bad behavior. The{" "}
                    <strong className="text-foreground font-medium">
                      Defense in Depth
                    </strong>{" "}
                    stack runs{" "}
                    <strong className="text-foreground font-medium">
                      formally verified logic
                    </strong>{" "}
                    that guarantees detection.{" "}
                    <span className="text-primary font-medium">Scroll through</span> to see the anatomy of what we stop—from initial reconnaissance to the final encryption attempt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
