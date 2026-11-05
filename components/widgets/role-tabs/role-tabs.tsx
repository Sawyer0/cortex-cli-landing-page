"use client"

import { useState } from "react"
import { ArrowRight, Clock, FileText, Server, ShieldCheck, type LucideIcon } from "lucide-react"
import { useRovingTabs } from "@/components/widgets/tabs/use-roving-tabs"
import { SiteLink } from "@/components/ui/site-link"
import { roles, type RoleIcon } from "@/content/home/roles"

const roleIcons: Record<RoleIcon, LucideIcon> = {
  clock: Clock,
  "file-text": FileText,
  server: Server,
  "shield-check": ShieldCheck,
}

/** WAI-ARIA tabs: arrow keys move between roles, Tab moves into the panel. */
export function RoleTabs({ learnMoreHref }: { learnMoreHref: string }) {
  const [selected, setSelected] = useState(0)
  const { onKeyDown, registerTab } = useRovingTabs(roles.items.length, selected, setSelected)

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10">
      <div role="tablist" aria-label={roles.tablistLabel} aria-orientation="vertical" className="grid grid-cols-2 gap-2 md:grid-cols-1 md:content-start">
        {roles.items.map((role, index) => {
          const Icon = roleIcons[role.icon]
          const active = index === selected
          return (
            <button
              key={role.id}
              ref={registerTab(index)}
              id={`role-tab-${role.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`role-panel-${role.id}`}
              tabIndex={active ? 0 : -1}
              onKeyDown={onKeyDown}
              onClick={() => setSelected(index)}
              className={`flex min-h-12 items-center gap-3 rounded-tile border px-3 py-2 text-left text-sm transition-colors ${
                active
                  ? "border-safety-500 bg-graphite-800 text-steel-50"
                  : "border-graphite-700 text-steel-200 hover:border-graphite-600 hover:text-steel-50"
              }`}
            >
              <Icon aria-hidden="true" className={`h-4 w-4 shrink-0 ${active ? "text-safety-400" : "text-steel-400"}`} />
              <span className="font-bold">{role.role}</span>
            </button>
          )
        })}
      </div>

      {roles.items.map((role, index) => {
        const Icon = roleIcons[role.icon]
        return (
          <div
            key={role.id}
            id={`role-panel-${role.id}`}
            role="tabpanel"
            aria-labelledby={`role-tab-${role.id}`}
            tabIndex={0}
            hidden={index !== selected}
            className="rounded-tile border border-graphite-700 bg-graphite-800 p-6 md:p-8"
          >
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-safety-400">
              <Icon aria-hidden="true" className="h-4 w-4" />
              {role.role} · {role.highlight}
            </p>
            <h3 className="mt-4 text-xl font-bold leading-snug text-steel-50 md:text-2xl">{role.headline}</h3>
            <p className="mt-3 text-base leading-relaxed text-steel-200">{role.detail}</p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-graphite-700 pt-5">
              <p>
                <span className="block font-mono text-3xl text-safety-400">{role.metric}</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-steel-400">{role.metricLabel}</span>
              </p>
              <SiteLink
                href={learnMoreHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-tile border border-graphite-600 px-4 font-mono text-xs uppercase tracking-[0.12em] text-steel-50 transition-colors hover:border-safety-400 hover:text-safety-400"
              >
                {roles.learnMore}
                <span className="sr-only"> about Listrum for {role.role}</span>
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </SiteLink>
            </div>
          </div>
        )
      })}
    </div>
  )
}
