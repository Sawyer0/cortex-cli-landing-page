import { describe, expect, it } from "vitest"
import { devices, vlans } from "@/content/inventory"
import {
  FLOW_FEED_LIMIT,
  appendFlow,
  countDevicesByVlan,
  createFlowEvent,
  createSeededRandom,
  filterDevices,
  formatClock,
  nextAlertCount,
  nextFlowsPerSecond,
} from "./inventory-model"

describe("filterDevices", () => {
  it("returns every device when no VLAN is selected", () => {
    expect(filterDevices(devices, null)).toHaveLength(devices.length)
  })

  it("returns only devices on the selected VLAN", () => {
    const icu = filterDevices(devices, "ICU")
    expect(icu).toHaveLength(5)
    expect(icu.every((device) => device.vlan === "ICU")).toBe(true)
  })
})

describe("countDevicesByVlan", () => {
  it("counts each VLAN and sums to the full inventory", () => {
    const counts = countDevicesByVlan(devices)
    expect(counts).toEqual({ ICU: 5, Radiology: 4, Pharmacy: 2, Admin: 3, OR: 4 })
    expect(vlans.reduce((sum, vlan) => sum + counts[vlan], 0)).toBe(devices.length)
  })
})

describe("createFlowEvent", () => {
  it("never routes a flow from a device to itself", () => {
    const random = createSeededRandom(443)
    for (let id = 0; id < 2000; id += 1) {
      const flow = createFlowEvent(id, devices, random, new Date(2026, 0, 1, 2, 3, 4))
      expect(flow.from).not.toBe(flow.to)
    }
  })

  it("works with exactly two devices and rejects fewer", () => {
    const pair = devices.slice(0, 2)
    const flow = createFlowEvent(1, pair, createSeededRandom(1), new Date())
    expect(new Set([flow.from, flow.to]).size).toBe(2)
    expect(() => createFlowEvent(1, devices.slice(0, 1), createSeededRandom(1), new Date())).toThrow()
  })

  it("is reproducible for a seed and sizes alerts in MB", () => {
    const a = createFlowEvent(7, devices, createSeededRandom(99), new Date(0))
    const b = createFlowEvent(7, devices, createSeededRandom(99), new Date(0))
    expect(a).toEqual(b)
    const alertRandom = () => 0.01
    expect(createFlowEvent(1, devices, alertRandom, new Date(0)).bytes).toMatch(/ MB$/)
  })
})

describe("feed and counters", () => {
  it("keeps the newest flows first and caps the feed", () => {
    const random = createSeededRandom(5)
    let feed = appendFlow([], createFlowEvent(0, devices, random, new Date()))
    for (let id = 1; id < 20; id += 1) feed = appendFlow(feed, createFlowEvent(id, devices, random, new Date()))
    expect(feed).toHaveLength(FLOW_FEED_LIMIT)
    expect(feed[0]?.id).toBe(19)
  })

  it("keeps flows per second within the demo band", () => {
    const random = createSeededRandom(3)
    for (let i = 0; i < 500; i += 1) {
      const value = nextFlowsPerSecond(random)
      expect(value).toBeGreaterThanOrEqual(45000)
      expect(value).toBeLessThan(55000)
    }
  })

  it("only changes the alert count on a low roll", () => {
    expect(nextAlertCount(1, () => 0.9)).toBe(1)
    expect(nextAlertCount(1, () => 0.1)).toBeGreaterThanOrEqual(1)
  })

  it("formats a 24-hour clock with zero padding", () => {
    expect(formatClock(new Date(2026, 0, 1, 9, 5, 3))).toBe("09:05:03")
    expect(formatClock(new Date(2026, 0, 1, 23, 59, 59))).toBe("23:59:59")
  })
})
