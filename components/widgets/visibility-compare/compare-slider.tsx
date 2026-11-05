"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { GripVertical } from "lucide-react"

interface CompareSliderProps {
  label: string
  overlayName: string
}

// The diagram layers are a separate chunk, fetched only once a wide screen actually renders them.
const ComparisonLayer = dynamic(() => import("./comparison-layer").then((module) => module.ComparisonLayer), {
  ssr: false,
})

const WIDE_QUERY = "(min-width: 1024px)"

/**
 * Before/after reveal driven by a native range input, so keyboard, touch and screen readers work for free.
 * The two diagram layers only mount on wide screens; phones never download, build or hydrate them.
 */
export function CompareSlider({ label, overlayName }: CompareSliderProps) {
  const [position, setPosition] = useState(50)
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const query = window.matchMedia(WIDE_QUERY)
    const sync = () => setWide(query.matches)
    sync()
    query.addEventListener("change", sync)
    return () => query.removeEventListener("change", sync)
  }, [])

  if (!wide) return <div aria-hidden="true" className="h-[32.5rem] rounded-tile border border-graphite-700" />

  return (
    <div className="relative h-[32.5rem] overflow-hidden rounded-tile border border-graphite-700 select-none">
      <div className="absolute inset-0">
        <ComparisonLayer tone="legacy" />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <ComparisonLayer tone="listrum" />
      </div>
      <input
        type="range"
        min={5}
        max={95}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={label}
        aria-valuetext={`${position}% ${overlayName}`}
        className="peer absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-steel-200 peer-focus-visible:w-0.5 peer-focus-visible:bg-safety-400"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-tile border border-graphite-600 bg-graphite-900 text-steel-200">
          <GripVertical className="h-4 w-4" />
        </span>
      </div>
    </div>
  )
}
