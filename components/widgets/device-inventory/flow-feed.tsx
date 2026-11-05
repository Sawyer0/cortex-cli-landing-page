import { ChevronRight } from "lucide-react"
import { inventoryCopy } from "@/content/inventory"
import type { FlowEvent } from "./inventory-model"

export function FlowFeed({ flows }: { flows: readonly FlowEvent[] }) {
  return (
    <div className="min-h-0 flex-1 overflow-hidden p-2">
      <p className="px-1 pb-2 font-mono text-xs uppercase tracking-wider text-steel-400">{inventoryCopy.flowsTitle}</p>
      <ol className="space-y-1" data-flow-feed>
        {flows.map((flow) => (
          <li
            key={flow.id}
            className={`rounded-tile border px-2 py-1.5 font-mono text-xs ${
              flow.risk === "alert" ? "border-critical/40 text-critical" : "border-graphite-700 text-steel-200"
            }`}
          >
            <span className="flex items-center justify-between gap-1">
              <span className="truncate">{flow.from}</span>
              <ChevronRight aria-hidden="true" className="h-3 w-3 shrink-0 text-steel-400" />
              <span className="truncate">{flow.to}</span>
            </span>
            <span className="mt-0.5 flex justify-between gap-2 text-steel-400">
              <span>{flow.protocol}</span>
              <span>{flow.bytes}</span>
              <span>{flow.timestamp}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
