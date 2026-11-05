import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"
import { describe, expect, it } from "vitest"

const root = join(__dirname, "..")
const sourceDirs = ["app", "components", "content"]

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.(ts|tsx)$/.test(name) ? [path] : []
  })
}

const files = sourceDirs.flatMap((dir) => sourceFiles(join(root, dir)))
const rel = (path: string) => relative(root, path)

/** Components that need the browser: state, effects or event handlers. Everything else renders on the server. */
const allowedClientModules = [
  "components/layout/mobile-menu.tsx",
  "components/widgets/device-inventory/device-inventory.tsx",
  "components/widgets/device-inventory/use-live-flows.ts",
  "components/widgets/role-tabs/role-tabs.tsx",
  "components/widgets/tabs/use-roving-tabs.ts",
  "components/widgets/visibility-compare/compare-slider.tsx",
]

describe("source architecture", () => {
  it("keeps every module under 300 lines", () => {
    const oversized = files
      .map((path) => ({ path: rel(path), lines: readFileSync(path, "utf8").split("\n").length }))
      .filter((file) => file.lines > 300)
    expect(oversized).toEqual([])
  })

  it("has no vaguely named utils, helpers or common modules", () => {
    const vague = files.map(rel).filter((path) => /(^|\/)(utils|helpers|common)(\/|\.|$)/.test(path))
    expect(vague).toEqual([])
  })

  it("never uses the any type", () => {
    const offenders = files.filter((path) => /(:\s*any\b|\bas any\b|<any>)/.test(readFileSync(path, "utf8"))).map(rel)
    expect(offenders).toEqual([])
  })

  it("only opts into client rendering where interaction needs it", () => {
    const clientModules = files
      .filter((path) => /^["']use client["']/.test(readFileSync(path, "utf8").trimStart()))
      .map(rel)
      .sort()
    expect(clientModules).toEqual([...allowedClientModules].sort())
  })
})
