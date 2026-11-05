import { protocols, vlans, type Device, type Vlan } from "@/content/inventory"

export type RandomSource = () => number

export interface FlowEvent {
  id: number
  from: string
  to: string
  protocol: string
  bytes: string
  risk: "safe" | "alert"
  timestamp: string
}

export const FLOW_FEED_LIMIT = 8
const ALERT_PROBABILITY = 0.08

/** Deterministic PRNG (mulberry32) so the demo is reproducible in tests. */
export function createSeededRandom(seed: number): RandomSource {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pick<T>(items: readonly T[], random: RandomSource): T {
  const item = items[Math.floor(random() * items.length)]
  if (item === undefined) throw new Error("cannot pick from an empty list")
  return item
}

export function filterDevices(devices: readonly Device[], vlan: Vlan | null): readonly Device[] {
  return vlan === null ? devices : devices.filter((device) => device.vlan === vlan)
}

export function countDevicesByVlan(devices: readonly Device[]): Record<Vlan, number> {
  const counts = Object.fromEntries(vlans.map((vlan) => [vlan, 0])) as Record<Vlan, number>
  for (const device of devices) counts[device.vlan] += 1
  return counts
}

export function formatClock(date: Date): string {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map((part) => String(part).padStart(2, "0")).join(":")
}

/** A simulated flow between two different devices. */
export function createFlowEvent(id: number, devices: readonly Device[], random: RandomSource, now: Date): FlowEvent {
  if (devices.length < 2) throw new Error("a flow needs at least two devices")
  const fromIndex = Math.floor(random() * devices.length)
  const toIndex = (fromIndex + 1 + Math.floor(random() * (devices.length - 1))) % devices.length
  const from = devices[fromIndex]
  const to = devices[toIndex]
  if (!from || !to) throw new Error("device index out of range")
  const isAlert = random() < ALERT_PROBABILITY
  const bytes = isAlert ? `${(random() * 50 + 10).toFixed(1)} MB` : `${(random() * 500 + 50).toFixed(0)} B`
  return {
    id,
    from: from.id,
    to: to.id,
    protocol: pick(protocols, random),
    bytes,
    risk: isAlert ? "alert" : "safe",
    timestamp: formatClock(now),
  }
}

/** Newest first, capped so the feed never grows without bound. */
export function appendFlow(feed: readonly FlowEvent[], event: FlowEvent, limit = FLOW_FEED_LIMIT): FlowEvent[] {
  return [event, ...feed].slice(0, limit)
}

export function nextFlowsPerSecond(random: RandomSource): number {
  return Math.floor(45000 + random() * 10000)
}

export function nextAlertCount(previous: number, random: RandomSource): number {
  return random() < 0.15 ? Math.floor(random() * 3) + 1 : previous
}
