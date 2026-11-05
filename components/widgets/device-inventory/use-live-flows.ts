"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import { devices, inventoryCopy } from "@/content/inventory"
import {
  appendFlow,
  createFlowEvent,
  createSeededRandom,
  nextAlertCount,
  nextFlowsPerSecond,
  type FlowEvent,
} from "./inventory-model"

const TICK_MS = 1800
const WIDE_QUERY = "(min-width: 768px)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

interface LiveFlows {
  flows: FlowEvent[]
  flowsPerSecond: number
  alerts: number
}

/**
 * Simulated telemetry for the hero widget. It only ticks while the widget is on screen, the tab is
 * visible, the viewport is wide enough to show the feed, and the user has not asked for reduced motion.
 */
export function useLiveFlows(target: RefObject<HTMLElement | null>): LiveFlows {
  const [state, setState] = useState<LiveFlows>({
    flows: [],
    flowsPerSecond: inventoryCopy.initialFlowsPerSecond,
    alerts: inventoryCopy.initialAlerts,
  })
  const nextId = useRef(0)

  useEffect(() => {
    const node = target.current
    if (!node) return
    const random = createSeededRandom(Date.now())
    const wide = window.matchMedia(WIDE_QUERY)
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY)
    let onScreen = false
    let timer: number | undefined

    const tick = () => {
      nextId.current += 1
      const event = createFlowEvent(nextId.current, devices, random, new Date())
      setState((previous) => ({
        flows: appendFlow(previous.flows, event),
        flowsPerSecond: nextFlowsPerSecond(random),
        alerts: nextAlertCount(previous.alerts, random),
      }))
    }

    const sync = () => {
      const shouldRun = onScreen && wide.matches && !reduced.matches && document.visibilityState === "visible"
      if (shouldRun && timer === undefined) {
        tick()
        timer = window.setInterval(tick, TICK_MS)
      } else if (!shouldRun && timer !== undefined) {
        window.clearInterval(timer)
        timer = undefined
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry?.isIntersecting ?? false
      sync()
    })
    observer.observe(node)
    wide.addEventListener("change", sync)
    reduced.addEventListener("change", sync)
    document.addEventListener("visibilitychange", sync)

    return () => {
      observer.disconnect()
      wide.removeEventListener("change", sync)
      reduced.removeEventListener("change", sync)
      document.removeEventListener("visibilitychange", sync)
      if (timer !== undefined) window.clearInterval(timer)
    }
  }, [target])

  return state
}
