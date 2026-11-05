import { CheckCircle, Eye, EyeOff, Lock, ShieldAlert, ShieldCheck, ShieldOff, type LucideIcon } from "lucide-react"
import type { ComparisonSide, StatIcon } from "@/content/home/visibility"

const statIcons: Record<StatIcon, LucideIcon> = {
  eye: Eye,
  "eye-off": EyeOff,
  "shield-alert": ShieldAlert,
  lock: Lock,
  "check-circle": CheckCircle,
}

export type ComparisonTone = "listrum" | "legacy"

const tones: Record<ComparisonTone, { text: string; border: string; TagIcon: LucideIcon }> = {
  listrum: { text: "text-safety-400", border: "border-safety-500/60", TagIcon: ShieldCheck },
  legacy: { text: "text-critical", border: "border-critical/50", TagIcon: ShieldOff },
}

/** Tag, title and three stats for one side of the visibility comparison. */
export function ComparisonStats({ side, tone }: { side: ComparisonSide; tone: ComparisonTone }) {
  const { text, border, TagIcon } = tones[tone]
  return (
    <div className="space-y-4">
      <p className={`inline-flex items-center gap-2 rounded-tile border bg-graphite-900 px-3 py-1 font-mono text-xs uppercase ${border} ${text}`}>
        <TagIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
        {side.tag}
      </p>
      <h3 className="text-2xl font-bold leading-tight text-steel-50 md:text-3xl">
        {side.title.lead}
        <br />
        {side.title.close}
      </h3>
      <ul className="space-y-3">
        {side.stats.map((stat) => {
          const Icon = statIcons[stat.icon]
          return (
            <li key={stat.value} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-tile border border-graphite-600 bg-graphite-900">
                <Icon aria-hidden="true" className={`h-4 w-4 ${text}`} />
              </span>
              <span>
                <span className={`block font-mono text-sm font-medium tracking-wider ${text}`}>{stat.value}</span>
                <span className="block text-xs uppercase tracking-wider text-steel-400">{stat.label}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
