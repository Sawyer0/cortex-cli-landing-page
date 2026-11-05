import { ArrowLeftRight, Lock, Radio, Shield, type LucideIcon } from "lucide-react"
import { SectionHeading, SectionShell } from "@/components/sections/section-shell"
import { detection, type ThreatIcon } from "@/content/home/detection"
import { RegulationStrip } from "./regulation-strip"
import { WorkflowTimeline } from "./workflow-timeline"

const threatIcons: Record<ThreatIcon, LucideIcon> = {
  lock: Lock,
  radio: Radio,
  "arrow-left-right": ArrowLeftRight,
  shield: Shield,
}

function ThreatList() {
  return (
    <ol aria-label={detection.listLabel} className="mt-10 divide-y divide-graphite-700 border-y border-graphite-700">
      {detection.threats.map((threat, index) => {
        const Icon = threatIcons[threat.icon]
        return (
          <li key={threat.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-4 sm:grid-cols-[2rem_auto_12rem_minmax(0,1fr)_8rem]">
            <span aria-hidden="true" className="hidden font-mono text-xs text-steel-400 sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-tile border border-graphite-600 bg-graphite-800">
              <Icon aria-hidden="true" className="h-4 w-4 text-safety-400" />
            </span>
            <h3 className="font-mono text-sm uppercase tracking-wider text-steel-50">{threat.name}</h3>
            <span aria-hidden="true" className="col-span-3 h-0.5 bg-graphite-700 sm:col-span-1">
              <span className="block h-full bg-safety-500" style={{ width: `${threat.coverage}%` }} />
            </span>
            <p className="col-start-3 row-start-1 text-right sm:col-start-auto sm:row-start-auto">
              <span className="block font-mono text-lg font-medium leading-none text-safety-400">{threat.metric}</span>
              <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-steel-400">{threat.metricLabel}</span>
            </p>
          </li>
        )
      })}
    </ol>
  )
}

export function DetectionSection() {
  return (
    <SectionShell id="detection" labelledBy="detection-title">
      <SectionHeading
        id="detection-title"
        eyebrow={detection.eyebrow}
        lead={detection.headline.lead}
        emphasis={detection.headline.emphasis}
        summary={detection.summary}
      />
      <ThreatList />
      <WorkflowTimeline />
      <RegulationStrip />
    </SectionShell>
  )
}
