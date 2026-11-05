import type { ReactNode } from "react"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"
import { ActionLink } from "@/components/ui/action-link"
import { assessmentHref, site } from "@/content/site"

interface ContactPanelProps {
  id?: string
  headingId: string
  copy: {
    eyebrow: string
    headline: { lead: string; emphasis: string }
    summary: string
    assurances: readonly string[]
    primaryCta: string
  }
  secondary: ReactNode
}

/** The free-assessment call to action shared by the home and manifesto pages. */
export function ContactPanel({ id, headingId, copy, secondary }: ContactPanelProps) {
  return (
    <section id={id} aria-labelledby={headingId} className="relative border-t border-safety-500/40 bg-graphite-950">
      <div aria-hidden="true" className="lab-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:py-24">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <Shield aria-hidden="true" className="h-3.5 w-3.5" />
            {copy.eyebrow}
          </p>
          <h2 id={headingId} className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-steel-50 sm:text-5xl">
            {copy.headline.lead}
            <br />
            <span className="text-safety-400">{copy.headline.emphasis}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-steel-200">{copy.summary}</p>
          <ul className="mt-6 flex flex-col gap-3 font-mono text-xs text-steel-200 sm:flex-row sm:gap-6">
            {copy.assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-safety-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:min-w-64">
          <ActionLink href={assessmentHref}>
            {copy.primaryCta}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ActionLink>
          {secondary}
          <p className="pt-1 text-center font-mono text-xs uppercase tracking-[0.16em] text-steel-400">{site.complianceBadge}</p>
        </div>
      </div>
    </section>
  )
}
