import type { Device, DeviceStatus } from "@/content/inventory"

const statusDot: Record<DeviceStatus, string> = {
  online: "bg-steel-200",
  warning: "bg-safety-400 motion-safe:animate-live-pulse",
  critical: "bg-critical motion-safe:animate-live-pulse",
}

interface DeviceTableProps {
  devices: readonly Device[]
  selectedId: string | null
  onToggle: (id: string) => void
}

export function DeviceTable({ devices, selectedId, onToggle }: DeviceTableProps) {
  return (
    <table className="w-full text-left text-xs">
      <thead className="sticky top-0 bg-graphite-800">
        <tr className="border-b border-graphite-700 font-mono uppercase tracking-wider text-steel-400">
          <th scope="col" className="px-3 py-2 font-normal">Device</th>
          <th scope="col" className="hidden px-3 py-2 font-normal sm:table-cell">IP</th>
          <th scope="col" className="hidden px-3 py-2 font-normal lg:table-cell">VLAN</th>
          <th scope="col" className="px-3 py-2 text-right font-normal">Traffic</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => {
          const selected = device.id === selectedId
          return (
            <tr key={device.id} className={`border-b border-graphite-700/60 ${selected ? "bg-graphite-700" : ""}`}>
              <td className="px-1 py-0">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onToggle(device.id)}
                  className="flex min-h-11 w-full items-center gap-2 rounded-tile px-2 py-1.5 text-left hover:bg-graphite-700"
                >
                  <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[device.status]}`} />
                  <span>
                    <span className="block font-mono text-steel-50">{device.id}</span>
                    <span className="block text-steel-400">{device.name}</span>
                    <span className="sr-only">, status {device.status}</span>
                  </span>
                </button>
              </td>
              <td className="hidden px-3 py-2 font-mono text-steel-200 sm:table-cell">{device.ip}</td>
              <td className="hidden px-3 py-2 font-mono text-steel-200 lg:table-cell">{device.vlan}</td>
              <td className="px-3 py-2 text-right font-mono text-steel-200">{device.traffic}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
