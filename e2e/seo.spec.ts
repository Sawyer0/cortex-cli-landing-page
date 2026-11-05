import { expect, test } from "./console-guard"

test.describe("metadata", () => {
  test("home page canonical and Open Graph tags use listrum.info", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle("Listrum (Ls-443) | Network Sterility for Healthcare")
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://listrum.info/")
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "https://listrum.info/")
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https:\/\/listrum\.info\/opengraph-image/)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image")
    await expect(page.locator('meta[name="viewport"]')).not.toHaveAttribute("content", /maximum-scale|user-scalable=no/)
  })

  test("manifesto page has its own canonical", async ({ page }) => {
    await page.goto("/about/")
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://listrum.info/about/")
    await expect(page).toHaveTitle("Why Listrum | Listrum")
  })

  test("robots, sitemap, icon and OG image are served", async ({ request }) => {
    const robots = await request.get("/robots.txt")
    expect(robots.ok()).toBe(true)
    expect(await robots.text()).toContain("Sitemap: https://listrum.info/sitemap.xml")
    const sitemap = await request.get("/sitemap.xml")
    expect(await sitemap.text()).toContain("<loc>https://listrum.info/about/</loc>")
    expect((await request.get("/icon.svg")).ok()).toBe(true)
    const og = await request.get("/opengraph-image")
    expect(og.headers()["content-type"]).toBe("image/png")
  })
})
