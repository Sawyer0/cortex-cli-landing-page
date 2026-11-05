import { SectionShell } from "@/components/sections/section-shell"
import { listerLegacy } from "@/content/about/history"

export function ListerLegacySection() {
  return (
    <SectionShell labelledBy="lister-title">
      <div className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <div>
          <p className="eyebrow">{listerLegacy.eyebrow}</p>
          <p aria-hidden="true" className="mt-3 font-mono text-6xl leading-none text-steel-400">
            {listerLegacy.year}
          </p>
        </div>
        <div className="max-w-2xl space-y-5">
          <h2 id="lister-title" className="text-2xl font-bold leading-tight tracking-tight text-steel-50 md:text-3xl">
            {listerLegacy.headline}
          </h2>
          {listerLegacy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-steel-200">
              {paragraph}
            </p>
          ))}
          <blockquote className="border-l-2 border-safety-500 pl-5 text-base italic leading-relaxed text-steel-200">
            {listerLegacy.quote}
          </blockquote>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-tile border border-graphite-700 bg-graphite-700">
            {listerLegacy.outcomes.map((outcome) => (
              <div key={outcome.label} className="flex flex-col-reverse bg-graphite-900 px-5 py-4">
                <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-steel-400">{outcome.label}</dt>
                <dd className="font-mono text-2xl text-steel-50">{outcome.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  )
}
