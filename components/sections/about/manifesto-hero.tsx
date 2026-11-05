import { ElementTile } from "@/components/brand/element-tile"
import { manifesto } from "@/content/about/manifesto"

export function ManifestoHero() {
  return (
    <section aria-labelledby="manifesto-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="lab-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12 md:py-24">
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          <p className="eyebrow">{manifesto.eyebrow}</p>
          <ElementTile size="md" />
        </div>
        <div>
          <h1 id="manifesto-title" className="text-4xl font-bold leading-[1.06] tracking-tight text-steel-50 sm:text-5xl md:text-6xl">
            {manifesto.headline}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-steel-200">{manifesto.summary}</p>
          <ul className="mt-8 border-y border-graphite-700">
            {manifesto.method.map((phrase) => (
              <li key={phrase} className="flex items-center gap-4 border-b border-graphite-700 py-3 font-mono text-sm text-steel-50 last:border-b-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-safety-500" />
                {phrase}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {manifesto.tags.map((tag) => (
              <li key={tag} className="rounded-tile border border-graphite-600 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-steel-200">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
