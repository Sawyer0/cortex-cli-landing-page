import type { ReactNode } from "react"

interface SectionShellProps {
  id?: string
  labelledBy: string
  children: ReactNode
  className?: string
}

/** A full-width page band with the shared container, spacing and hairline divider. */
export function SectionShell({ id, labelledBy, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative border-t border-graphite-700 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  id: string
  eyebrow: string
  lead: string
  emphasis?: string
  summary?: string
  align?: "start" | "center"
}

export function SectionHeading({ id, eyebrow, lead, emphasis, summary, align = "start" }: SectionHeadingProps) {
  const centered = align === "center"
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold leading-tight tracking-tight text-steel-50 sm:text-4xl">
        {lead}
        {emphasis && <span className="text-safety-400"> {emphasis}</span>}
      </h2>
      {summary && <p className="mt-3 text-base leading-relaxed text-steel-400">{summary}</p>}
    </div>
  )
}
