"use client"

import { Wifi, Brain, Bell, FileText, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    title: "Connect",
    description:
      "Cortex connects to your existing Cisco access points. No new hardware, no network changes, no disruption to patient care.",
    icon: Wifi,
    time: "5 min setup",
  },
  {
    title: "Monitor",
    description:
      "The system passively watches network traffic patterns. It never probes devices or interferes with medical equipment operations.",
    icon: Brain,
    time: "24/7 passive",
  },
  {
    title: "Alert",
    description:
      "When suspicious activity is detected, your security team receives an immediate notification with all relevant details.",
    icon: Bell,
    time: "Real-time",
  },
  {
    title: "Document",
    description:
      "Every incident is automatically logged with timestamps and evidence, ready for compliance review and regulatory filing.",
    icon: FileText,
    time: "Auto-generated",
  },
]

export function WorkflowSection() {
  return (
    <AnimatedSection className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Operational Flow</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-3 sm:mt-4 text-foreground">
            Simple Setup, Continuous Protection
          </h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-3xl">
          Cortex integrates with your existing infrastructure in minutes—not months. Once connected, it works silently
          in the background, giving your team visibility without adding complexity to daily operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step) => (
            <div key={step.title} className="bg-card border border-border p-4 sm:p-5 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <step.icon className="w-4 h-4 text-green-700 flex-shrink-0" />
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{step.description}</p>
              <span className="font-mono text-xs text-green-700 mt-auto">{step.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 bg-muted border border-border p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm sm:text-base text-foreground font-semibold mb-1">You Stay in Control</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cortex detects and documents—your team decides what action to take. The system never makes compliance
                decisions or submits reports without human approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ecg-divider mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto" />
    </AnimatedSection>
  )
}
