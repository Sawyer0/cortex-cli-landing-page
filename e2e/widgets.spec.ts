import { expect, test } from "./console-guard"

const flowItems = "[data-flow-feed] > li"

test.describe("device inventory", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("VLAN tabs filter the device table", async ({ page }) => {
    const widget = page.getByRole("region", { name: "Live Device Inventory" })
    const rows = widget.getByRole("tabpanel").locator("tbody tr")
    await expect(rows).toHaveCount(18)

    await widget.getByRole("tab", { name: "ICU (5)" }).click()
    await expect(widget.getByRole("tab", { name: "ICU (5)" })).toHaveAttribute("aria-selected", "true")
    await expect(rows).toHaveCount(5)
    await expect(rows.first()).toContainText("ICU-PUMP-01")

    await widget.getByRole("tab", { name: "Pharmacy (2)" }).click()
    await expect(rows).toHaveCount(2)
    await expect(widget.getByRole("tabpanel")).toContainText("Omnicell Robot")
  })

  test("VLAN tabs follow the arrow, Home and End keys", async ({ page }) => {
    const widget = page.getByRole("region", { name: "Live Device Inventory" })
    const rows = widget.getByRole("tabpanel").locator("tbody tr")
    await widget.getByRole("tab", { name: "ALL (18)" }).focus()
    await page.keyboard.press("ArrowRight")
    await expect(widget.getByRole("tab", { name: "ICU (5)" })).toBeFocused()
    await expect(rows).toHaveCount(5)
    await page.keyboard.press("End")
    await expect(widget.getByRole("tab", { name: "OR (4)" })).toHaveAttribute("aria-selected", "true")
    await expect(rows).toHaveCount(4)
    await page.keyboard.press("ArrowRight")
    await expect(widget.getByRole("tab", { name: "ALL (18)" })).toBeFocused()
    await expect(rows).toHaveCount(18)
    await expect(widget.locator('[role="tab"][tabindex="0"]')).toHaveCount(1)
  })

  test("selecting a device shows its details and toggles off", async ({ page }) => {
    const widget = page.getByRole("region", { name: "Live Device Inventory" })
    const device = widget.getByRole("button", { name: /RAD-PACS/ })
    await device.click()
    await expect(device).toHaveAttribute("aria-pressed", "true")
    await expect(widget.getByText("BB:CC:DD:02:50:03").filter({ visible: true })).toBeVisible()
    await device.click()
    await expect(device).toHaveAttribute("aria-pressed", "false")
    await expect(widget.getByText("BB:CC:DD:02:50:03").filter({ visible: true })).toHaveCount(0)
  })
})

test.describe("live flow feed", () => {
  test.skip(({ isMobile }) => isMobile, "the feed is desktop-only and never ticks on phones")

  test("streams flows while visible and pauses off screen", async ({ page }) => {
    await page.goto("/")
    const items = page.locator(flowItems)
    await expect.poll(() => items.count(), { timeout: 8000 }).toBeGreaterThanOrEqual(2)

    await page.locator("footer").scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    const paused = await items.count()
    const firstPaused = await items.first().textContent()
    await page.waitForTimeout(4000)
    expect(await items.count()).toBe(paused)
    expect(await items.first().textContent()).toBe(firstPaused)

    await page.evaluate(() => window.scrollTo(0, 0))
    await expect.poll(async () => items.first().textContent(), { timeout: 8000 }).not.toBe(firstPaused)
  })

  test("does not animate or tick under reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.goto("/")
    await page.waitForTimeout(4000)
    await expect(page.locator(flowItems)).toHaveCount(0)
    const running = await page.evaluate(() => document.getAnimations().filter((a) => a.playState === "running").length)
    expect(running).toBe(0)
  })
})

test.describe("phones keep the widget idle", () => {
  test.skip(({ isMobile }) => !isMobile, "phone-only check")

  test("no flows are generated and no timers churn on mobile", async ({ page }) => {
    await page.goto("/")
    await page.waitForTimeout(4000)
    await expect(page.locator(flowItems)).toHaveCount(0)
    await expect(page.getByRole("region", { name: "Live Device Inventory" }).getByText("48,230")).toBeVisible()
  })
})

test.describe("role tabs", () => {
  test("clicking and keys switch exactly one visible panel", async ({ page }) => {
    await page.goto("/")
    const roles = page.locator("#roles")
    const panels = roles.getByRole("tabpanel")
    await expect(panels).toHaveCount(1)
    await expect(panels).toContainText("72-hour mandate. Automated.")

    await roles.getByRole("tab", { name: "Compliance Officers" }).click()
    await expect(panels).toHaveCount(1)
    await expect(panels).toContainText("NYSDOH + CIRCIA. Pre-filled.")

    await page.keyboard.press("ArrowDown")
    await expect(roles.getByRole("tab", { name: "IT Directors" })).toBeFocused()
    await expect(panels).toContainText("Existing Cisco infra. Zero CapEx.")
    await page.keyboard.press("End")
    await expect(panels).toContainText("No AI. Mathematical proof.")
    await page.keyboard.press("Home")
    await expect(panels).toContainText("72-hour mandate. Automated.")
    await page.keyboard.press("Tab")
    await expect(panels).toBeFocused()
  })
})

test.describe("visibility comparison", () => {
  test("desktop reveal slider responds to the keyboard", async ({ page, isMobile }) => {
    test.skip(isMobile, "phones get stacked cards instead")
    await page.goto("/")
    const slider = page.getByRole("slider", { name: "Compare Listrum and legacy monitoring" })
    await expect(slider).toHaveValue("50")
    await slider.focus()
    for (let i = 0; i < 10; i += 1) await page.keyboard.press("ArrowRight")
    await expect(slider).toHaveValue("60")
    await expect(slider).toHaveAttribute("aria-valuetext", "60% Listrum view")
    await page.keyboard.press("End")
    await expect(slider).toHaveValue("95")
  })

  test("phones get both sides as readable cards", async ({ page, isMobile }) => {
    test.skip(!isMobile, "desktop uses the slider")
    await page.goto("/")
    const section = page.locator("#problem")
    await expect(section.getByRole("heading", { name: /Total\s*Visibility/ }).filter({ visible: true })).toBeVisible()
    await expect(section.getByRole("heading", { name: /Blind &\s*Vulnerable/ }).filter({ visible: true })).toBeVisible()
    await expect(section.getByRole("slider")).toBeHidden()
  })
})

test.describe("manifesto principles", () => {
  test("principles expand and collapse with the keyboard", async ({ page }) => {
    await page.goto("/about/")
    const summary = page.locator("summary").filter({ hasText: "Chemical Barrier" })
    const detail = page.getByText("Carbolic acid guaranteed that germs were killed.")
    await expect(detail).toBeHidden()
    await summary.focus()
    await page.keyboard.press("Enter")
    await expect(detail).toBeVisible()
    await page.keyboard.press("Space")
    await expect(detail).toBeHidden()
  })
})
