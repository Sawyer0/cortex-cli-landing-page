"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Terminal, ChevronRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [isScanning, setIsScanning] = useState(false)
  const [scanTarget, setScanTarget] = useState("VLAN 40 - Radiology")
  
  const fullText = "cortex watch --active --verbose"

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        startInitialization()
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  const startInitialization = async () => {
    const lines = [
      "Initializing edge defense protocols...",
      "• [OK] Connected to 142 Cisco switches",
      "• [OK] Policy Sync: NYSDOH-405.46",
      "• [OK] Real-time heuristics active",
      "------------------------------------------",
      "Monitoring network traffic flow..."
    ]

    for (let i = 0; i < lines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 400))
      setTerminalLines(prev => [...prev, lines[i]])
    }
    
    setIsScanning(true)
  }

  // Live scanning effect
  useEffect(() => {
    if (!isScanning) return
    const targets = ["VLAN 40 - Radiology", "VLAN 12 - ICU", "VLAN 22 - Pharmacy", "VLAN 04 - Administration"]
    let i = 0
    const interval = setInterval(() => {
      setScanTarget(targets[i % targets.length])
      i++
    }, 3000)
    return () => clearInterval(interval)
  }, [isScanning])

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-0 lg:pb-0">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              
              {/* Top Tags (Replacing Badge) */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-secondary-foreground/60 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Cisco Verified</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-secondary-foreground/60 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>HIPAA Ready</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-secondary-foreground/60 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Edge Native</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-secondary-foreground leading-[1.1]">
                Autonomous Defense. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Clinical Precision.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-xl">
                Transform your existing infrastructure into a resilient security fabric. 
                Cortex CLI intercepts threats at the edge and automates your regulatory reporting—
                so you can focus on patient care, not compliance audits.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="h-12 px-8 text-sm font-bold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/20">
                  Deploy Cortex
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-bold tracking-wider uppercase border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  Read the Manifesto
                </Button>
              </div>
            </div>

            {/* Right Column: Terminal Visualization */}
            <div className={`relative transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Terminal Window */}
              <div className="relative rounded-xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-2xl shadow-black/50">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    cortex-cli — admin@hospital-net
                  </div>
                  <div className="w-12" />
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed min-h-[360px] text-slate-300">
                  <div className="mb-4">
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> {typedText}
                    {typedText.length < fullText.length && <span className="animate-pulse bg-slate-400 w-2 h-4 inline-block align-middle ml-1" />}
                  </div>

                  <div className="space-y-1">
                    {terminalLines.map((line, i) => (
                      <div key={i} className={`animate-in fade-in slide-in-from-left-2 duration-300 ${line.startsWith('• [OK]') ? 'text-green-400' : 'text-slate-400'}`}>
                        {line}
                      </div>
                    ))}
                    
                    {isScanning && (
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary animate-pulse">●</span>
                          <span className="text-slate-300 italic">Scanning {scanTarget}...</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] gap-2 mt-2 border-l-2 border-primary/30 pl-3 py-1">
                          <span className="text-slate-500">PACKET:</span>
                          <span className="text-slate-300 truncate">TCP 192.168.{Math.floor(Math.random()*255)}.{Math.floor(Math.random()*255)} -&gt; OUT</span>
                          <span className="text-slate-500">STATUS:</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            Verified Safe
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}