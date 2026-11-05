import type { Device } from "@/content/inventory"

export function DeviceDetail({ device }: { device: Device }) {
  return (
    <div className="border-b border-graphite-700 p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-xs text-steel-50">{device.name}</p>
        <p className={`rounded-tile border px-2 py-0.5 font-mono text-xs uppercase ${device.status === "online" ? "border-graphite-600 text-steel-200" : "border-safety-500 text-safety-400"}`}>
          {device.status}
        </p>
      </div>
      <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-xs text-steel-400">
        {(
          [
            ["IP", device.ip],
            ["VLAN", device.vlan],
            ["MAC", device.mac],
            ["Traffic", device.traffic],
          ] as const
        ).map(([term, value]) => (
          <div key={term} className="min-w-0">
            <dt className="inline">{term}: </dt>
            <dd className="inline break-all text-steel-200">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
