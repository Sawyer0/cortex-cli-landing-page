import { Eye } from "lucide-react"
import { SectionShell } from "@/components/sections/section-shell"
import { visibilityGap } from "@/content/about/history"

export function VisibilityGapSection() {
  return (
    <SectionShell labelledBy="gap-title">
      <div className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <p className="eyebrow">{visibilityGap.eyebrow}</p>
        <h2 id="gap-title" className="text-2xl font-bold leading-tight tracking-tight text-steel-50 md:text-3xl">
          {visibilityGap.headline}
        </h2>
      </div>
      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
        <dl className="space-y-4 md:sticky md:top-24 md:self-start">
          {visibilityGap.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse gap-1 border-l-2 border-safety-500 pl-4">
              <dt>
                <span className="block text-sm font-semibold uppercase tracking-wider text-steel-200">{stat.label}</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-steel-400">{stat.sub}</span>
              </dt>
              <dd className="font-mono text-6xl font-medium leading-none text-safety-400">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-5">
          {visibilityGap.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-steel-200">
              {paragraph}
            </p>
          ))}
          <aside className="rounded-tile border border-graphite-700 border-l-safety-500 border-l-2 bg-graphite-800 p-5">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-safety-400">
              <Eye aria-hidden="true" className="h-3.5 w-3.5" />
              {visibilityGap.callout.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-steel-200">{visibilityGap.callout.text}</p>
          </aside>
          <p className="text-base leading-relaxed text-steel-200">{visibilityGap.closing}</p>
        </div>
      </div>
    </SectionShell>
  )
}
