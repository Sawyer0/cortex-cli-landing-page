import { ComparisonStats, type ComparisonTone } from "@/components/sections/home/comparison-stats"
import { NetworkDiagram } from "@/components/sections/home/network-diagram"
import { visibility } from "@/content/home/visibility"

/**
 * One side of the desktop comparison: the hospital topology plus that side's stats. Loaded on demand by
 * CompareSlider only on wide screens, so phones never download or parse it.
 */
export function ComparisonLayer({ tone }: { tone: ComparisonTone }) {
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
