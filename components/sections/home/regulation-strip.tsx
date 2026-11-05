import { regulations } from "@/content/home/detection"

export function RegulationStrip() {
  return (
    <div className="mt-16 border-t border-graphite-700 pt-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-steel-400">{regulations.label}</h3>
      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-tile border border-graphite-700 bg-graphite-700 md:grid-cols-4">
        {regulations.items.map((item) => (
          <div key={item.name} className="bg-graphite-900 px-4 py-5 text-center">
            <dt className="font-mono text-base text-safety-400">{item.name}</dt>
            <dd className="font-mono text-sm text-steel-50">{item.code}</dd>
            <dd className="mt-1 text-xs uppercase tracking-wider text-steel-400">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
