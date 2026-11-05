"use client"

import { useState, type ReactNode } from "react"
import { GripVertical } from "lucide-react"

interface CompareSliderProps {
  /** Bottom layer, revealed on the right of the divider. */
  base: ReactNode
  /** Top layer, revealed on the left of the divider. */
  overlay: ReactNode
  label: string
  overlayName: string
}

/** Before/after reveal driven by a native range input, so keyboard, touch and screen readers work for free. */
export function CompareSlider({ base, overlay, label, overlayName }: CompareSliderProps) {
  const [position, setPosition] = useState(50)
  return (
    <div className="relative h-[32.5rem] overflow-hidden rounded-tile border border-graphite-700 select-none">
      <div className="absolute inset-0">{base}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {overlay}
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
