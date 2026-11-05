"use client"

import { useRef, type KeyboardEvent } from "react"
import { nextTabIndex } from "@/components/widgets/tabs/tab-keyboard"

/** Arrow/Home/End handling with roving focus for a role="tablist". Selection follows focus. */
export function useRovingTabs(count: number, selected: number, select: (index: number) => void) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const target = nextTabIndex(event.key, selected, count)
    if (target === null) return
    event.preventDefault()
    select(target)
    tabRefs.current[target]?.focus()
  }

  const registerTab = (index: number) => (node: HTMLButtonElement | null) => {
    tabRefs.current[index] = node
  }

  return { onKeyDown, registerTab }
}
