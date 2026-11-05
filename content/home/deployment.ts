export type ZeroIcon = "ban" | "cloud" | "shield"

export interface ZeroClaim {
  icon: ZeroIcon
  value: string
  title: string
  description: string
  proof: string
}

export interface TechStat {
  value: string
  label: string
}

export const deployment = {
  eyebrow: "Deployment",
  summary:
    "Deploy on your existing Cisco infrastructure in minutes. Nothing leaves your perimeter. No agents, no cloud, no new attack surface.",
  assertion: "PHI never leaves your network",
  zeros: [
    { icon: "ban", value: "$0", title: "New Hardware", description: "Runs on existing Cisco infrastructure. No CapEx.", proof: "No CapEx required" },
    { icon: "cloud", value: "0", title: "Cloud Dependencies", description: "All processing on-premise. PHI never leaves the perimeter.", proof: "PHI stays local" },
    { icon: "shield", value: "0", title: "Network Risk", description: "Self-terminating runtime. Zero lateral movement surface.", proof: "Self-terminating" },
  ] satisfies readonly ZeroClaim[],
  stats: [
    { value: "<50MB", label: "Memory footprint" },
    { value: "11MB", label: "Binary size" },
    { value: "Minutes", label: "Deployment time" },
    { value: "100%", label: "On-premise" },
  ] satisfies readonly TechStat[],
} as const
