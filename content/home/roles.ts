export type RoleIcon = "clock" | "file-text" | "server" | "shield-check"

export interface Role {
  id: string
  icon: RoleIcon
  role: string
  headline: string
  detail: string
  highlight: string
  metric: string
  metricLabel: string
}

export const roles = {
  eyebrow: "Roles",
  headline: { lead: "Built for the people responsible", emphasis: "when things go wrong." },
  tablistLabel: "Choose a role",
  learnMore: "Learn more",
  items: [
    {
      id: "ciso",
      icon: "clock",
      role: "Hospital CISOs",
      headline: "72-hour mandate. Automated.",
      detail:
        "Incident captured, reviewed, and documented before the compliance clock becomes a liability. Full forensic chain-of-custody generated automatically.",
      highlight: "72-hour automation",
      metric: "72hr",
      metricLabel: "Average close time",
    },
    {
      id: "compliance",
      icon: "file-text",
      role: "Compliance Officers",
      headline: "NYSDOH + CIRCIA. Pre-filled.",
      detail:
        "Reports generated automatically with Merkle-sealed audit trails. Six-year retention built in. Regulators get exactly what they ask for.",
      highlight: "Audit-ready",
      metric: "6yr",
      metricLabel: "Retention guaranteed",
    },
    {
      id: "it",
      icon: "server",
      role: "IT Directors",
      headline: "Existing Cisco infra. Zero CapEx.",
      detail:
        "No new hardware. No network re-architecture. No agents to manage. Deploy on a test VLAN in minutes \u2014 not quarters.",
      highlight: "Zero CapEx",
      metric: "0",
      metricLabel: "New hardware required",
    },
    {
      id: "risk",
      icon: "shield-check",
      role: "Risk Managers",
      headline: "No AI. Mathematical proof.",
      detail:
        "Formal deterministic verification. Every decision is reproducible and explainable. Zero false positives. Insurance carriers accept the reports.",
      highlight: "Verifiable",
      metric: "0",
      metricLabel: "False positives",
    },
  ] satisfies readonly Role[],
} as const
