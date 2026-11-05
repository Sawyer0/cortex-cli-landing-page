export const listerLegacy = {
  eyebrow: "Origin",
  year: "1865",
  headline: "The Lister Legacy",
  paragraphs: [
    "In 1865, surgery was often fatal. At Glasgow Royal Infirmary, nearly half of all patients died after their operations. Doctors blamed \"bad air\" or the patient's own weakness.",
    "Joseph Lister had a different idea. He read Louis Pasteur's work on germs and realized that invisible organisms were entering wounds. The problem wasn't bad luck. It was contamination.",
    "Lister created a new system. He sterilized instruments with carbolic acid and created a sterile field \u2014 a zone where germs could not survive.",
    "The results were undeniable. Ward mortality rates fell to 15% within four years.",
  ],
  quote:
    "The medical community was skeptical. They couldn't see the germs, so they didn't believe they existed. But Lister's methods worked, and antiseptic surgery eventually became the global standard.",
  outcomes: [
    { value: "~50%", label: "Pre-Lister mortality rate" },
    { value: "15%", label: "Post-Lister within 4 years" },
  ],
} as const

export const visibilityGap = {
  eyebrow: "The Problem",
  headline: "The Visibility Gap",
  stats: [
    { value: "90%", label: "Flows lost", sub: "to cloud sampling" },
    { value: "30s", label: "SOC delay", sub: "minimum alert latency" },
    { value: "45k", label: "Flows/min", sub: "invisible per clinic" },
  ],
  paragraphs: [
    "Hospital CISOs consistently report learning about ransomware attacks only after critical systems begin shutting down. This is not a failure of attention or effort. It is a failure of visibility.",
    "Cloud-based security monitoring creates an inherent blind spot. Network flows must traverse WAN connections to reach centralized security operations centers. During this transit, 90% of data is lost to sampling.",
    "The other 45,000 flows? Invisible. That encryption spike at 2 AM? The lateral movement from radiology workstations to the PACS server? By the time your cloud monitor sees the alert, 30\u201360 seconds have passed. In cybersecurity, that's an eternity.",
  ],
  callout: {
    label: "This is the visibility gap",
    text: "It exists not because detection systems lack sophistication, but because the architectural model of cloud-based monitoring introduces irreconcilable conflicts with healthcare operational requirements.",
  },
  closing:
    "When you see the alert, the attack has already encrypted files, moved laterally across VLANs, and established persistence. You are not responding to an incident. You are cleaning up after one.",
} as const
