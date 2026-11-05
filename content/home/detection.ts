export type ThreatIcon = "lock" | "radio" | "arrow-left-right" | "shield"

export interface ThreatVector {
  icon: ThreatIcon
  name: string
  metric: string
  metricLabel: string
  /** decorative coverage bar, percent */
  coverage: number
}

export interface WorkflowStep {
  step: string
  title: string
  time: string
  description: string
}

export interface Regulation {
  name: string
  code: string
  detail: string
}

export const detection = {
  eyebrow: "Detection Engine",
  headline: { lead: "Four vectors.", emphasis: "Zero guesswork." },
  summary: "Deterministic. No AI inference. Mathematically proven at Layer 2.",
  listLabel: "Active Threat Coverage",
  threats: [
    { icon: "lock", name: "Ransomware", metric: "<200ns", metricLabel: "Detection latency", coverage: 98 },
    { icon: "radio", name: "C2 Beacon", metric: "100%", metricLabel: "Accuracy", coverage: 100 },
    { icon: "arrow-left-right", name: "Lateral Movement", metric: "0", metricLabel: "False positives", coverage: 100 },
    { icon: "shield", name: "Data Exfiltration", metric: "6yr", metricLabel: "Evidence retained", coverage: 100 },
  ] satisfies readonly ThreatVector[],
} as const

export const workflow = {
  eyebrow: "Compliance Workflow",
  headline: { lead: "Incident to report.", emphasis: "Under an hour." },
  summary: "The 72-hour clock starts the moment an incident occurs.",
  steps: [
    { step: "01", title: "Detect", time: "0.2s", description: "Layer 2 deterministic pattern match. Threat identified before payload executes." },
    { step: "02", title: "Review", time: "5 min", description: "CISO notified with full forensic context. One-click approval, no spreadsheet." },
    { step: "03", title: "Archive", time: "<1 hr", description: "Report sealed with Merkle tree integrity. Audit-ready before the 72-hour clock expires." },
  ] satisfies readonly WorkflowStep[],
} as const

export const regulations = {
  label: "Regulatory Compliance",
  items: [
    { name: "NYSDOH", code: "405.46", detail: "72-hr incident reporting" },
    { name: "CIRCIA", code: "2026", detail: "Federal mandate" },
    { name: "Retention", code: "6 Years", detail: "Immutable audit trails" },
    { name: "PHI", code: "On-Premise", detail: "Zero cloud exposure" },
  ] satisfies readonly Regulation[],
} as const
