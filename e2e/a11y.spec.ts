import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "./console-guard"

const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]

for (const path of ["/", "/about/"]) {
  test.describe(`accessibility of ${path}`, () => {
    test.describe.configure({ timeout: 120_000 })

    test("axe finds no violations in any landmark or section", async ({ page }) => {
      await page.goto(path)
      const regions = await page.evaluate(() => {
        const ids: string[] = ["header", "footer"]
        document.querySelectorAll("main > section").forEach((section, index) => {
          section.setAttribute("data-axe-section", String(index))
          ids.push(`[data-axe-section="${index}"]`)
        })
        return ids
      })
      expect(regions.length).toBeGreaterThan(4)
      for (const selector of regions) {
        const results = await new AxeBuilder({ page }).include(selector).withTags(wcagTags).analyze()
        const summary = results.violations.map((violation) => `${violation.id}: ${violation.nodes.map((node) => node.target.join(" ")).join(", ")}`)
        expect(summary, selector).toEqual([])
      }
    })

    test("whole page passes axe, including landmarks and headings", async ({ page }) => {
      await page.goto(path)
      const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze()
      expect(results.violations.map((violation) => violation.id)).toEqual([])
    })

    test("has one h1, no skipped heading levels and labelled landmarks", async ({ page }) => {
      await page.goto(path)
      const levels = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((nodes) => nodes.map((node) => Number(node.tagName[1])))
      expect(levels.filter((level) => level === 1)).toHaveLength(1)
      expect(levels[0]).toBe(1)
      levels.forEach((level, index) => {
        if (index > 0) expect(level - (levels[index - 1] ?? 1)).toBeLessThanOrEqual(1)
      })
      await expect(page.getByRole("banner")).toHaveCount(1)
      await expect(page.getByRole("main")).toHaveCount(1)
      await expect(page.getByRole("contentinfo")).toHaveCount(1)
    })
  })
}

test.describe("keyboard", () => {
  test.skip(({ isMobile }) => isMobile, "hardware keyboard path is checked on desktop")

  test("Tab reaches every control in order with a visible focus ring", async ({ page }) => {
    await page.goto("/")
    const stops: { name: string; outline: string }[] = []
    for (let i = 0; i < 60; i += 1) {
      await page.keyboard.press("Tab")
      const stop = await page.evaluate(() => {
        const element = document.activeElement as HTMLElement | null
        if (!element || element === document.body) return null
        const style = getComputedStyle(element)
        const name = (element.getAttribute("aria-label") ?? element.textContent ?? "").replace(/\s+/g, " ").trim()
        return { name: name.slice(0, 60), outline: `${style.outlineStyle} ${style.outlineWidth}` }
      })
      if (!stop) break
      stops.push(stop)
      if (stop.name === "Contact" && stops.length > 10) break
    }
    const names = stops.map((stop) => stop.name)
    expect(names[0]).toBe("Skip to content")
    const expectedOrder = [
      "Listrum home",
      "Detection",
      "Deployment",
      "Get a Free Assessment",
      "Read the Whitepaper",
      "ALL (18)",
      "Compare Listrum and legacy monitoring",
      "Hospital CISOs",
      "Get Free Assessment",
      "Contact",
    ]
    let cursor = 0
    for (const name of names) if (name.startsWith(expectedOrder[cursor] ?? "\u0000")) cursor += 1
    expect(cursor, `reached ${expectedOrder.slice(0, cursor).join(" > ")}`).toBe(expectedOrder.length)
    expect(names.filter((name) => /^(ICU|Radiology|Pharmacy|Admin|OR) \(/.test(name)), "tablist is a single tab stop").toEqual([])
    for (const stop of stops) expect(stop.outline, stop.name).not.toMatch(/^none|0px$/)
  })

  test("skip link moves focus past the header", async ({ page }) => {
    await page.goto("/")
    await page.keyboard.press("Tab")
    await expect(page.getByRole("link", { name: "Skip to content" })).toBeVisible()
    await page.keyboard.press("Enter")
    await expect(page).toHaveURL(/#main$/)
  })
})
