import { ElementTile } from "@/components/brand/element-tile"
import { SectionShell } from "@/components/sections/section-shell"
import { symbol } from "@/content/about/manifesto"

export function SymbolSection() {
  return (
    <SectionShell labelledBy="symbol-title">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <figure className="flex flex-col items-center gap-6 rounded-tile border border-graphite-700 bg-graphite-800 p-10">
          <ElementTile size="lg" />
          <figcaption className="text-center font-mono text-xs uppercase tracking-[0.16em] text-steel-400">{symbol.caption}</figcaption>
        </figure>
        <div>
          <p className="eyebrow">{symbol.eyebrow}</p>
          <h2 id="symbol-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-steel-50 md:text-3xl">
            {symbol.headline.lead}
            <br />
            {symbol.headline.close}
          </h2>
          <dl className="mt-6 border-t border-graphite-700">
            {symbol.meanings.map((meaning) => (
              <div key={meaning.symbol} className="flex items-center gap-5 border-b border-graphite-700 py-3.5">
                <dt className="w-14 shrink-0 font-mono text-2xl text-safety-400">{meaning.symbol}</dt>
                <dd className="text-sm leading-snug text-steel-200">{meaning.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  )
}
