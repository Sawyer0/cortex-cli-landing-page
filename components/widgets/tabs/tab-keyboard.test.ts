import { describe, expect, it } from "vitest"
import { nextTabIndex } from "./tab-keyboard"

describe("nextTabIndex", () => {
  it("moves forward and wraps from the last tab to the first", () => {
    expect(nextTabIndex("ArrowRight", 0, 4)).toBe(1)
    expect(nextTabIndex("ArrowDown", 3, 4)).toBe(0)
  })

  it("moves backward and wraps from the first tab to the last", () => {
    expect(nextTabIndex("ArrowLeft", 2, 4)).toBe(1)
    expect(nextTabIndex("ArrowUp", 0, 4)).toBe(3)
  })

  it("jumps to the ends with Home and End", () => {
    expect(nextTabIndex("Home", 2, 6)).toBe(0)
    expect(nextTabIndex("End", 2, 6)).toBe(5)
  })

  it("ignores other keys and empty tab lists", () => {
    expect(nextTabIndex("Enter", 1, 4)).toBeNull()
    expect(nextTabIndex("ArrowRight", 0, 0)).toBeNull()
  })
})
