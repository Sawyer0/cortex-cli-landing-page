import { AlertTriangle, ChevronRight, Crosshair, FlaskConical, Lock, type LucideIcon } from "lucide-react"
import { SectionShell } from "@/components/sections/section-shell"
import { philosophy, type PrincipleIcon } from "@/content/about/philosophy"

const principleIcons: Record<PrincipleIcon, LucideIcon> = {
  "flask-conical": FlaskConical,
  crosshair: Crosshair,
  lock: Lock,
}

export function PhilosophySection() {
  return (
    <SectionShell labelledBy="philosophy-title">
      <div className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <p className="eyebrow">{philosophy.eyebrow}</p>
        <div>
          <h2 id="philosophy-title" className="text-2xl font-bold leading-tight tracking-tight text-steel-50 md:text-3xl">
            {philosophy.headline}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-steel-200">{philosophy.summary}</p>
        </div>
      </div>
      <div className="mt-10 md:ml-[calc(12rem+3rem)]">
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-steel-400">{philosophy.listLabel}</h3>
        <ol className="mt-3 border-t border-graphite-700">
          {philosophy.principles.map((principle) => {
            const Icon = principleIcons[principle.icon]
            return (
              <li key={principle.step} className="border-b border-graphite-700">
                <details className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-3 [&::-webkit-details-marker]:hidden">
                    <span aria-hidden="true" className="font-mono text-xs text-steel-400">{principle.step}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-tile border border-graphite-600 bg-graphite-800">
                      <Icon aria-hidden="true" className="h-4 w-4 text-safety-400" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-sm uppercase tracking-wider text-steel-50">{principle.name}</span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-safety-400">{principle.subtitle}</span>
                    </span>
                    <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 text-steel-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mb-5 ml-[3.25rem] border-l-2 border-safety-500 pl-4 text-sm leading-relaxed text-steel-200">
                    {principle.description}
                  </p>
                </details>
              </li>
            )
          })}
        </ol>
        <aside className="mt-8 rounded-tile border border-graphite-700 border-l-2 border-l-safety-500 bg-graphite-800 p-5">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-safety-400">
            <AlertTriangle aria-hidden="true" className="h-3.5 w-3.5" />
            {philosophy.rejectAi.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-steel-200">{philosophy.rejectAi.text}</p>
        </aside>
      </div>
    </SectionShell>
  )
}
