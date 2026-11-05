type TileSize = "sm" | "md" | "lg"

const sizes: Record<TileSize, { box: string; number: string; symbol: string; name: string }> = {
  sm: { box: "h-12 w-10", number: "left-1 top-0.5 text-[8px]", symbol: "text-xl", name: "text-[7px]" },
  md: { box: "h-[76px] w-16", number: "left-1.5 top-1 text-[10px]", symbol: "text-3xl", name: "text-[10px]" },
  lg: { box: "h-40 w-36", number: "left-2.5 top-2 text-xs", symbol: "text-6xl", name: "text-xs" },
}

/** The Ls-443 periodic-table tile from the Brand Bible. Decorative: callers label the surrounding link. */
export function ElementTile({ size = "sm" }: { size?: TileSize }) {
  const s = sizes[size]
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 flex-col items-center justify-center rounded-tile border border-graphite-600 bg-graphite-800 ${s.box}`}
    >
      <span className={`absolute font-mono leading-none text-steel-200 ${s.number}`}>443</span>
      <span className={`font-bold leading-none text-safety-400 ${s.symbol}`}>Ls</span>
      <span className={`mt-1 font-mono leading-none text-steel-200 ${s.name}`}>Listrum</span>
    </span>
  )
}
