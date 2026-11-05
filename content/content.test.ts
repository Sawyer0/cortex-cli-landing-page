import { describe, expect, it } from "vitest"
import { assessmentHref, primaryNav, sectionHref, site, whitepaperHref } from "@/content/site"
import { devices, vlans } from "@/content/inventory"
import { roles } from "@/content/home/roles"
import { diagramNodes } from "@/content/home/visibility"

describe("site content", () => {
  it("uses listrum.info over https as the canonical origin", () => {
    expect(new URL(site.url).origin).toBe("https://listrum.info")
  })

  it("points the assessment CTA at a well-formed mailto on the listrum.info domain", () => {
    const url = new URL(assessmentHref)
    expect(url.protocol).toBe("mailto:")
    expect(url.pathname).toMatch(/^[a-z.]+@listrum\.info$/)
    expect(url.searchParams.get("subject")).toBe("Free Assessment")
  })

  it("routes the whitepaper CTA to an internal page with the trailing slash the site uses", () => {
    expect(whitepaperHref).toMatch(/^\/[a-z-]+\/$/)
  })

  it("has unique nav targets and builds anchors for home and inner pages", () => {
    const ids = primaryNav.map((link) => link.sectionId)
    expect(new Set(ids).size).toBe(ids.length)
    expect(sectionHref("contact", true)).toBe("#contact")
    expect(sectionHref("contact", false)).toBe("/#contact")
  })
})

describe("inventory content", () => {
  it("has unique device ids, ips and macs", () => {
    for (const key of ["id", "ip", "mac"] as const) {
      const values = devices.map((device) => device[key])
      expect(new Set(values).size, key).toBe(values.length)
    }
  })

  it("assigns every VLAN at least one device", () => {
    for (const vlan of vlans) {
      expect(devices.some((device) => device.vlan === vlan), vlan).toBe(true)
    }
  })
})

describe("section content", () => {
  it("gives every role a unique id for its tab", () => {
    const ids = roles.items.map((role) => role.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("keeps diagram nodes clear of the side text panels", () => {
    for (const node of diagramNodes) {
      expect(node.x).toBeGreaterThanOrEqual(32)
      expect(node.x).toBeLessThanOrEqual(72)
      expect(node.y).toBeGreaterThan(0)
      expect(node.y).toBeLessThan(100)
    }
  })
})
