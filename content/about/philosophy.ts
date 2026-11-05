export type PrincipleIcon = "flask-conical" | "crosshair" | "lock"

export interface Principle {
  step: string
  icon: PrincipleIcon
  name: string
  subtitle: string
  description: string
}

export const philosophy = {
  eyebrow: "Philosophy",
  headline: "The Digital Application of Antisepsis",
  summary:
    "Listrum is built on one idea: applying Lister's antiseptic methods to computer networks. We don't see cybersecurity as a war against hackers. We see it as keeping a digital environment sterile.",
  listLabel: "Three Core Principles",
  principles: [
    {
      step: "01",
      icon: "flask-conical",
      name: "Chemical Barrier",
      subtitle: "Formal Verification",
      description:
        "Carbolic acid guaranteed that germs were killed. Formal verification guarantees that code is safe. We replace guessing with mathematical proof.",
    },
    {
      step: "02",
      icon: "crosshair",
      name: "Treatment at the Wound",
      subtitle: "Edge Deployment",
      description:
        "Lister proved that preventing infection at the entry point is far better than treating it after it spreads. We deploy at the network edge to stop contamination before it gets in.",
    },
    {
      step: "03",
      icon: "lock",
      name: "Absolute Exclusion",
      subtitle: "Deterministic Isolation",
      description:
        "A surgical field is either sterile or it is not. There is no middle ground. We reject 'acceptable risk' in favor of total isolation.",
    },
  ] satisfies readonly Principle[],
  rejectAi: {
    label: "Why We Reject Probabilistic AI",
    text: "Generative AI is probabilistic. It relies on statistical likelihood rather than verification. In surgery, \"likely sterile\" allows for infection. Listrum uses formal verification to ensure that every interaction is mathematically proven to be safe.",
  },
  commitmentEyebrow: "Our Commitment",
} as const

export const aboutContact = {
  eyebrow: "Free Assessment",
  headline: { lead: "See your network", emphasis: "blind spots in 15 minutes." },
  summary:
    "We deploy on a test VLAN and show you exactly what your current monitoring misses. No commitment. No credit card. Just proof.",
  assurances: ["No credit card", "15-min setup", "Full report included"],
  primaryCta: "Get Free Assessment",
  secondaryCta: "Return to Home",
} as const
