import { AlertTriangle } from "lucide-react"
import { SectionShell } from "@/components/sections/section-shell"
import { CompareSlider } from "@/components/widgets/visibility-compare/compare-slider"
import { visibility } from "@/content/home/visibility"
import { ComparisonStats, type ComparisonTone } from "./comparison-stats"
import { NetworkDiagram } from "./network-diagram"

function ComparisonLayer({ tone }: { tone: ComparisonTone }) {
  const listrum = tone === "listrum"
  return (
    <div className={`absolute inset-0 ${listrum ? "bg-graphite-900" : "bg-graphite-950"}`}>
      <div aria-hidden="true" className="lab-grid absolute inset-0" />
      <NetworkDiagram tone={tone} />
      <div className={`absolute inset-y-0 flex w-[28%] items-center px-6 ${listrum ? "left-0" : "right-0"}`}>
        <ComparisonStats side={listrum ? visibility.listrum : visibility.legacy} tone={tone} />
      </div>
    </div>
  )
}

export function VisibilitySection() {
  return (
    <SectionShell id="problem" labelledBy="visibility-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{visibility.eyebrow}</p>
        <h2 id="visibility-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-steel-50 sm:text-5xl">
          {visibility.headline.lead} <span className="text-critical">{visibility.headline.emphasis}</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
        {(["listrum", "legacy"] as const).map((tone) => (
          <div key={tone} className="rounded-tile border border-graphite-700 bg-graphite-800 p-5">
            <ComparisonStats side={tone === "listrum" ? visibility.listrum : visibility.legacy} tone={tone} />
          </div>
        ))}
      </div>

      <div className="mt-12 hidden lg:block">
        <CompareSlider
          base={<ComparisonLayer tone="legacy" />}
          overlay={<ComparisonLayer tone="listrum" />}
          label={visibility.sliderLabel}
          overlayName="Listrum view"
        />
      </div>

      <p className="mx-auto mt-10 flex max-w-xl items-start gap-3 rounded-tile border border-graphite-700 bg-graphite-800 px-5 py-3 text-sm text-steel-200 sm:items-center">
        <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-safety-400 sm:mt-0" />
        <span>
          {visibility.insight.lead} <strong className="font-bold text-steel-50">{visibility.insight.emphasis}</strong>
        </span>
      </p>
    </SectionShell>
  )
}
