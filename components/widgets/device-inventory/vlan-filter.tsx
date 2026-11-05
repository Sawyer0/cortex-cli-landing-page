import type { Vlan } from "@/content/inventory"
import { inventoryCopy } from "@/content/inventory"
import { useRovingTabs } from "@/components/widgets/tabs/use-roving-tabs"

interface VlanFilterProps {
  options: readonly (Vlan | null)[]
  counts: Record<Vlan, number>
  total: number
  selectedIndex: number
  onSelect: (index: number) => void
  idPrefix: string
}

export function vlanTabId(idPrefix: string, index: number): string {
  return `${idPrefix}-tab-${index}`
}

export function VlanFilter({ options, counts, total, selectedIndex, onSelect, idPrefix }: VlanFilterProps) {
  const { onKeyDown, registerTab } = useRovingTabs(options.length, selectedIndex, onSelect)
  return (
    <div
      role="tablist"
      aria-label={inventoryCopy.filterLabel}
      className="flex flex-wrap gap-1 border-b border-graphite-700 px-2 py-2"
    >
      {options.map((vlan, index) => {
        const active = index === selectedIndex
        const label = vlan ?? inventoryCopy.allLabel
        const count = vlan ? counts[vlan] : total
        return (
          <button
            key={label}
            ref={registerTab(index)}
            id={vlanTabId(idPrefix, index)}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown}
            onClick={() => onSelect(index)}
            className={`inline-flex min-h-11 items-center rounded-tile border px-3 font-mono text-xs transition-colors ${
              active
                ? "border-safety-500 bg-graphite-900 text-safety-400"
                : "border-transparent text-steel-200 hover:text-steel-50"
            }`}
          >
            {label} ({count})
          </button>
        )
      })}
    </div>
  )
}
