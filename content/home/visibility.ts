export type StatIcon = "eye" | "eye-off" | "shield-alert" | "lock" | "check-circle"

export interface ComparisonStat {
  icon: StatIcon
  value: string
  label: string
}

export interface ComparisonSide {
  tag: string
  title: { lead: string; close: string }
  stats: readonly ComparisonStat[]
}

export type NodeKind = "device" | "server" | "router" | "iot"

export interface DiagramNode {
  id: string
  /** % of the comparison canvas width */
  x: number
  /** % of the comparison canvas height */
  y: number
  kind: NodeKind
  label: string
  compromised: boolean
}

export const visibility = {
  eyebrow: "The Visibility Gap",
  headline: { lead: "What you can\u2019t see", emphasis: "is already moving." },
  listrum: {
    tag: "Listrum Hypervisor Edge",
    title: { lead: "Total", close: "Visibility" },
    stats: [
      { icon: "eye", value: "100% VISIBLE", label: "Every Packet & Device" },
      { icon: "check-circle", value: "INSTANT BLOCK", label: "Pre-Encryption Stop" },
      { icon: "lock", value: "PHI SECURE", label: "Data Stays On-Premise" },
    ],
  } satisfies ComparisonSide,
  legacy: {
    tag: "Legacy Monitoring",
    title: { lead: "Blind &", close: "Vulnerable" },
    stats: [
      { icon: "eye-off", value: "90% DARK", label: "Unmanaged Traffic" },
      { icon: "shield-alert", value: "TOO LATE", label: "Ransomware Impact" },
      { icon: "lock", value: "PHI EXPOSED", label: "Data Sent to Cloud" },
    ],
  } satisfies ComparisonSide,
  insight: { lead: "Most hospitals learn about ransomware only", emphasis: "after systems begin shutting down." },
  sliderLabel: "Compare Listrum and legacy monitoring",
} as const

/** Same hospital, seen through Listrum (left of the divider) and legacy monitoring (right). */
export const diagramNodes: readonly DiagramNode[] = [
  { id: "pacs", x: 34, y: 12, kind: "server", label: "PACS", compromised: false },
  { id: "core-sw", x: 44, y: 26, kind: "router", label: "Core SW", compromised: false },
  { id: "ct", x: 33, y: 44, kind: "device", label: "CT Scanner", compromised: true },
  { id: "pump-4", x: 46, y: 58, kind: "iot", label: "Pump #4", compromised: false },
  { id: "workstation", x: 35, y: 74, kind: "device", label: "Workstation", compromised: false },
  { id: "monitor", x: 48, y: 88, kind: "iot", label: "Monitor", compromised: true },
  { id: "ehr", x: 58, y: 12, kind: "server", label: "EHR DB", compromised: false },
  { id: "edge-fw", x: 68, y: 27, kind: "router", label: "Edge FW", compromised: false },
  { id: "mri", x: 60, y: 46, kind: "device", label: "MRI Unit", compromised: true },
  { id: "pump-7", x: 70, y: 60, kind: "iot", label: "Pump #7", compromised: false },
  { id: "or", x: 60, y: 76, kind: "device", label: "OR Station", compromised: true },
  { id: "vent", x: 69, y: 88, kind: "iot", label: "Ventilator", compromised: false },
]
