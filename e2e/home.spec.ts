import { expect, isInViewport, test } from "./console-guard"

const sections: { id: string; heading: string | RegExp }[] = [
  { id: "problem", heading: "What you can’t see is already moving." },
  { id: "detection", heading: "Four vectors. Zero guesswork." },
  { id: "security", heading: "Deployment" },
  { id: "roles", heading: "Built for the people responsible when things go wrong." },
  { id: "contact", heading: /^See your network\s*blind spots in 15 minutes\.$/ },
]

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("renders the hero and every section", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Your network is dark\.\s*By the time you know,\s*it’s already done\./)
    for (const section of sections) {
      const region = page.locator(`section#${section.id}`)
      await expect(region).toBeAttached()
      await expect(region.getByRole("heading", { level: 2 }).first()).toHaveText(section.heading)
    }
    await expect(page.getByRole("region", { name: "Live Device Inventory" })).toBeVisible()
  })

  test("hero assessment CTA scrolls to the contact section", async ({ page }) => {
    const cta = page.getByRole("link", { name: "Get a Free Assessment" })
    await expect(cta).toHaveAttribute("href", "#contact")
    await cta.click()
    await expect(page).toHaveURL(/#contact$/)
    await expect.poll(() => isInViewport(page.locator("section#contact"))).toBe(true)
  })

  test("contact CTA opens an email to the Listrum address", async ({ page }) => {
    const cta = page.locator("#contact").getByRole("link", { name: "Get Free Assessment" })
    await expect(cta).toHaveAttribute("href", "mailto:dawan.sawyer@listrum.info?subject=Free%20Assessment")
  })

  test("both whitepaper CTAs reach the manifesto page", async ({ page }) => {
    const links = page.getByRole("link", { name: "Read the Whitepaper" })
    await expect(links).toHaveCount(2)
    for (const href of await links.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")))) {
      expect(href).toBe("/about/")
    }
    await links.first().click()
    await expect(page).toHaveURL(/\/about\/$/)
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Why Listrum")
  })

  test("role panels link to the assessment section", async ({ page }) => {
    const learnMore = page.locator("#roles").getByRole("link", { name: /Learn more/ })
    await expect(learnMore).toHaveAttribute("href", "#contact")
  })

  test("footer contact link targets the contact section", async ({ page }) => {
    await expect(page.getByRole("contentinfo").getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact")
  })
})

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "desktop nav is hidden on phones")

  for (const [label, id] of [
    ["Detection", "detection"],
    ["Deployment", "security"],
    ["Contact", "contact"],
  ] as const) {
    test(`${label} scrolls to #${id}`, async ({ page }) => {
      await page.goto("/")
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: label }).click()
      await expect(page).toHaveURL(new RegExp(`#${id}$`))
      await expect.poll(() => isInViewport(page.locator(`section#${id}`))).toBe(true)
    })
  }

  test("manifesto page nav returns to home sections", async ({ page }) => {
    await page.goto("/about/")
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Detection" }).click()
    await expect(page).toHaveURL(/\/#detection$/)
    await expect.poll(() => isInViewport(page.locator("section#detection"))).toBe(true)
  })
})
