import { expect, isInViewport, test } from "./console-guard"

test.describe("mobile menu", () => {
  test.skip(({ isMobile }) => !isMobile, "phone-only menu")

  test("opens, navigates to a section and closes", async ({ page }) => {
    await page.goto("/")
    const toggle = page.getByRole("button", { name: "Open menu" })
    await expect(toggle).toHaveAttribute("aria-expanded", "false")
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden()

    await toggle.click()
    const menu = page.getByRole("navigation", { name: "Mobile" })
    await expect(menu).toBeVisible()
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true")

    await menu.getByRole("link", { name: "Deployment" }).click()
    await expect(page).toHaveURL(/#security$/)
    await expect(menu).toBeHidden()
    await expect.poll(() => isInViewport(page.locator("section#security"))).toBe(true)
  })

  test("Escape closes the menu and returns focus to the toggle", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("button", { name: "Open menu" }).click()
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden()
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused()
  })
})

test.describe("touch targets", () => {
  test.skip(({ isMobile }) => !isMobile, "measured on a phone viewport")

  for (const path of ["/", "/about/"]) {
    test(`every control on ${path} is at least 44x44px`, async ({ page }) => {
      await page.goto(path)
      await page.getByRole("button", { name: "Open menu" }).click()
      const small = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>("a[href], button, summary, input, [role='tab']")]
          .filter((element) => {
            const rect = element.getBoundingClientRect()
            const style = getComputedStyle(element)
            return rect.width > 1 && rect.height > 1 && style.visibility !== "hidden"
          })
          .map((element) => {
            const rect = element.getBoundingClientRect()
            return { label: (element.textContent ?? element.getAttribute("aria-label") ?? "").trim().slice(0, 40), width: Math.round(rect.width), height: Math.round(rect.height) }
          })
          .filter((target) => target.width < 44 || target.height < 44),
      )
      expect(small).toEqual([])
    })
  }
})

test.describe("no horizontal scroll", () => {
  for (const width of [320, 360, 390, 768, 1024, 1440]) {
    for (const path of ["/", "/about/"]) {
      test(`${path} fits a ${width}px viewport`, async ({ page, isMobile }) => {
        test.skip(isMobile, "viewport is set explicitly here")
        await page.setViewportSize({ width, height: 800 })
        await page.goto(path)
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
        expect(overflow).toBeLessThanOrEqual(0)
      })
    }
  }
})
