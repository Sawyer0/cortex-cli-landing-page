import { test as base, expect, type Locator } from "@playwright/test"

/** Fails any test whose page logs a console error or throws. */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: [
    async ({ page }, use) => {
      const errors: string[] = []
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text())
      })
      page.on("pageerror", (error) => errors.push(error.message))
      await use(errors)
      expect(errors, "console errors").toEqual([])
    },
    { auto: true },
  ],
})

export { expect }

export async function isInViewport(locator: Locator): Promise<boolean> {
  return locator.evaluate((element) => {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0 && rect.top >= -2
  })
}
