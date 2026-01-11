"use client"

import { useRef, useEffect, useState } from "react"
import { Lock, Key, Upload, ArrowLeftRight, Radio, Search, Clock, Bell, FileText, Archive } from "lucide-react"

const detectionTypes = [
  {
    icon: Lock,
    name: "Ransomware",
    description: "Symmetric traffic spikes across multiple endpoints. Encrypt-in-place signatures.",
    detail: "Detects encryption patterns before files are locked",
  },
  {
    icon: Key,
    name: "Brute Force",
    description: "Authentication failures against critical medical device VLANs.",
    detail: "Monitors failed login attempts across your network",
  },
  {
    icon: Upload,
    name: "Data Exfiltration",
    description: "Sustained upload spikes indicating PHI leaving the network perimeter.",
    detail: "Tracks unusual outbound data transfers in real-time",
  },
  {
    icon: ArrowLeftRight,
    name: "Lateral Movement",
    description: "East-west traffic propagating between devices.",
    detail: "Identifies attackers moving through your network",
  },
  {
    icon: Radio,
    name: "C2 Beacons",
    description: "Periodic communication with command servers via DNS/HTTP.",
    detail: "Detects malware phoning home to attackers",
  },
  {
    icon: Search,
    name: "Reconnaissance",
    description: "Port sweeps, host sweeps, and failed handshake spikes.",
    detail: "Catches attackers mapping your network",
  },
  {
    icon: Clock,
    name: "Slow-Roll Attacks",
    description: "Low-and-slow encryption designed to evade burst thresholds.",
    detail: "Identifies stealthy, time-spread attack patterns",
  },
]

const responseActions = [
  {
    icon: Bell,
    label: "Alert Routing",
    desc: "CISO dashboard for human review",
  },
  {
    icon: Clock,
    label: "Deadline Tracking",
    desc: "Tamper-proof 72-hour compliance clock",
  },
  {
    icon: FileText,
    label: "Report Generation",
    desc: "Pre-filled NYSDOH/CIRCIA reports",
  },
  {
    icon: Archive,
    label: "Audit Trail",
    desc: "6-year regulatory inspection logs",
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
      <div id="detection" className="bg-card px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Detection Header */}
          <div className="mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Threat Detection</span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-3 text-foreground">
              What Cortex Detects
            </h2>
          </div>

          {/* Horizontal scrollable threat cards */}
          <div className="mb-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {detectionTypes.map((type, index) => (
                <div
                  key={type.name}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] bg-background border border-border p-4 sm:p-5 snap-start"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary text-primary-foreground flex-shrink-0">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{type.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{type.description}</p>
                  <p className="text-xs text-foreground font-medium">{type.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">Swipe to explore threats</p>
          </div>

          {/* Response Protocol */}
          <div className="mb-6">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Response Protocol</span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-3 text-foreground">Upon Detection</h2>
          </div>

          <div className="space-y-3">
            {responseActions.map((action, index) => (
              <div key={action.label} className="bg-background border border-border p-4 flex items-start gap-3">
                <div className="p-2 bg-green-700/10 text-green-700 flex-shrink-0">
                  <action.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">{action.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ecg-divider mt-12 max-w-5xl mx-auto" />
      </div>
    )
  }

  // Desktop layout - sticky scroll
  return (
    <div ref={containerRef} id="detection" className="relative bg-card" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
              <div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  Threat Detection
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-4 text-foreground">
                  What Cortex Detects
                </h2>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  Response Protocol
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-4 text-foreground">
                  Upon Detection
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="relative h-[400px]">
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
                      <div className="bg-background border-2 border-border p-8 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-primary text-primary-foreground">
                            <type.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-muted-foreground">
                              {String(index + 1).padStart(2, "0")} / {String(totalThreats).padStart(2, "0")}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">{type.name}</h3>
                          </div>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed flex-grow">{type.description}</p>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-sm text-foreground font-medium leading-relaxed">{type.detail}</p>
                        </div>

                        <div className="flex gap-1 mt-6">
                          {detectionTypes.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 transition-colors duration-300 ${i <= activeCard ? "bg-primary" : "bg-border"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="space-y-4">
                {responseActions.map((action, index) => (
                  <div
                    key={action.label}
                    className="bg-background border border-border p-5 flex items-start gap-4 transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="p-2 bg-green-700/10 text-green-700 flex-shrink-0">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-foreground">{action.label}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{action.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-green-700">
              <span className="font-mono text-xs font-medium tracking-wide">Scroll to explore threats</span>
              <div className="w-4 h-6 border border-green-700/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-1.5 bg-green-700 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 lg:px-12">
        <div className="ecg-divider max-w-5xl mx-auto" />
      </div>
    </div>
  )
}
