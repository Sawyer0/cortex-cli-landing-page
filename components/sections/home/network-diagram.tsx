import { Activity, Radio, Server, Wifi, type LucideIcon } from "lucide-react"
import { diagramNodes, type NodeKind } from "@/content/home/visibility"
import type { ComparisonTone } from "./comparison-stats"

const kindIcons: Record<NodeKind, LucideIcon> = { server: Server, router: Radio, iot: Wifi, device: Activity }

/** Decorative hospital topology drawn behind one side of the comparison. */
export function NetworkDiagram({ tone }: { tone: ComparisonTone }) {
  const listrum = tone === "listrum"
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {diagramNodes.flatMap((from, index) =>
          diagramNodes.slice(index + 1, index + 3).map((to) => (
            <line
              key={`${from.id}-${to.id}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke={listrum ? "#f97316" : "#fca5a5"}
              strokeOpacity={listrum ? 0.3 : 0.15}
              strokeDasharray={listrum ? undefined : "4 4"}
            />
          )),
        )}
      </svg>
      {diagramNodes.map((node) => {
        const Icon = kindIcons[node.kind]
        const state = listrum ? "visible" : node.compromised ? "compromised" : "hidden"
        const box = {
          visible: "border-safety-500/60 text-safety-400",
          compromised: "border-critical/60 text-critical",
          hidden: "border-dashed border-graphite-600 text-graphite-600",
        }[state]
        return (
          <div
            key={node.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className={`relative flex h-9 w-9 items-center justify-center rounded-tile border bg-graphite-900 ${box}`}>
              <Icon className="h-4 w-4" />
              {state === "compromised" && (
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-critical motion-safe:animate-live-pulse" />
              )}
            </span>
            <span className={`font-mono text-xs whitespace-nowrap ${state === "hidden" ? "text-steel-400" : "text-steel-200"}`}>
              {node.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
