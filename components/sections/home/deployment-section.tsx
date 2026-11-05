import { Ban, CheckCircle, Cloud, Shield, type LucideIcon } from "lucide-react"
import { SectionShell } from "@/components/sections/section-shell"
import { deployment, type ZeroIcon } from "@/content/home/deployment"

const zeroIcons: Record<ZeroIcon, LucideIcon> = { ban: Ban, cloud: Cloud, shield: Shield }

export function DeploymentSection() {
  return (
    <SectionShell id="security" labelledBy="deployment-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 id="deployment-title" className="eyebrow">
            {deployment.eyebrow}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-steel-200">{deployment.summary}</p>
          <p className="mt-6 flex items-center gap-2 font-mono text-sm text-safety-400">
            <CheckCircle aria-hidden="true" className="h-4 w-4" />
            {deployment.assertion}
          </p>
        </div>
        <ul className="grid gap-4">
          {deployment.zeros.map((zero) => {
            const Icon = zeroIcons[zero.icon]
            return (
              <li key={zero.title} className="flex gap-5 rounded-tile border border-graphite-700 bg-graphite-800 p-5">
                <span className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-tile border border-graphite-600 bg-graphite-900">
                  <span className="font-mono text-2xl leading-none text-safety-400">{zero.value}</span>
                  <Icon aria-hidden="true" className="mt-1.5 h-3.5 w-3.5 text-steel-400" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-steel-50">
                    <span className="sr-only">{zero.value} </span>
                    {zero.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel-200">{zero.description}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-safety-400">{zero.proof}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-tile border border-graphite-700 bg-graphite-700 md:grid-cols-4">
        {deployment.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse bg-graphite-900 px-4 py-5 text-center">
            <dt className="mt-1 font-mono text-xs uppercase tracking-wider text-steel-400">{stat.label}</dt>
            <dd className="font-mono text-2xl text-steel-50">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  )
}
