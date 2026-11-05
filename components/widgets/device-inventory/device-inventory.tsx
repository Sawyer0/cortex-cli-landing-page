"use client"

import { useId, useMemo, useRef, useState } from "react"
import { devices, inventoryCopy, vlans, type Vlan } from "@/content/inventory"
import { DeviceDetail } from "./device-detail"
import { DeviceTable } from "./device-table"
import { FlowFeed } from "./flow-feed"
import { countDevicesByVlan, filterDevices } from "./inventory-model"
import { useLiveFlows } from "./use-live-flows"
import { VlanFilter, vlanTabId } from "./vlan-filter"

const filterOptions: readonly (Vlan | null)[] = [null, ...vlans]

export function DeviceInventory() {
  const rootRef = useRef<HTMLDivElement>(null)
  const idPrefix = useId().replace(/:/g, "")
  const { flows, flowsPerSecond, alerts } = useLiveFlows(rootRef)
  const [vlanIndex, setVlanIndex] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const counts = useMemo(() => countDevicesByVlan(devices), [])

  const visible = filterDevices(devices, filterOptions[vlanIndex] ?? null)
  const selected = visible.find((device) => device.id === selectedId) ?? null

  const selectVlan = (index: number) => {
    setVlanIndex(index)
    setSelectedId(null)
  }
  const toggleDevice = (id: string) => setSelectedId((current) => (current === id ? null : id))

  return (
    <div
      ref={rootRef}
      role="region"
      aria-labelledby={`${idPrefix}-title`}
      className="@container w-full min-w-0 rounded-tile border border-graphite-700 bg-graphite-800"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite-700 px-4 py-3">
        <h2 id={`${idPrefix}-title`} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-steel-200">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-safety-500 motion-safe:animate-live-pulse" />
          {inventoryCopy.title}
        </h2>
        <dl className="flex gap-5 text-right font-mono">
          {(
            [
              ["Devices", devices.length.toString(), "text-steel-50"],
              ["Flows/sec", flowsPerSecond.toLocaleString("en-US"), "text-safety-400"],
              ["Alerts", alerts.toString(), "text-safety-400"],
            ] as const
          ).map(([term, value, tone]) => (
            <div key={term}>
              <dt className="text-xs uppercase text-steel-400">{term}</dt>
              <dd className={`text-base tabular-nums ${tone}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <VlanFilter
        options={filterOptions}
        counts={counts}
        total={devices.length}
        selectedIndex={vlanIndex}
        onSelect={selectVlan}
        idPrefix={idPrefix}
      />

      <div className="grid @[40rem]:grid-cols-[minmax(0,1fr)_15rem]">
        <div
          id={`${idPrefix}-panel`}
          role="tabpanel"
          aria-labelledby={vlanTabId(idPrefix, vlanIndex)}
          tabIndex={0}
          className="h-80 overflow-y-auto md:h-64 @[40rem]:h-[22rem]"
        >
          <DeviceTable devices={visible} selectedId={selected?.id ?? null} onToggle={toggleDevice} />
        </div>
        <div className="hidden min-h-0 flex-col border-t border-graphite-700 md:flex md:h-48 @[40rem]:h-[22rem] @[40rem]:border-l @[40rem]:border-t-0">
          {selected && <DeviceDetail device={selected} />}
          <FlowFeed flows={flows} />
        </div>
      </div>
      {selected && (
        <div className="border-t border-graphite-700 md:hidden">
          <DeviceDetail device={selected} />
        </div>
      )}

      <p className="flex justify-between border-t border-graphite-700 px-4 py-2 font-mono text-xs text-safety-400">
        <span>All {vlans.length} VLANs monitored</span>
        {alerts > 0 && (
          <span>
            {alerts} alert{alerts > 1 ? "s" : ""}
          </span>
        )}
      </p>
    </div>
  )
}
