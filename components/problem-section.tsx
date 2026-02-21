"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import {
  EyeOff, Eye, AlertTriangle, Lock,
  ShieldAlert, GripVertical, Wifi, Activity,
  Server, ShieldOff, ShieldCheck, Radio, CheckCircle,
} from "lucide-react"

// ─── Types ─────────────────────────────────────────────────────────────────────
interface NetworkNode {
  id: string
  x: number   // % of full container width
  y: number   // % of container height
  type: "device" | "server" | "router" | "iot"
  label: string
  status: "visible" | "hidden" | "compromised"
}

// ─── LISTRUM nodes ─────────────────────────────────────────────────────────────
// Spread across the FULL canvas (x: 32–90%).
// At slider=50 only x<50 are visible (6 left-side nodes).
// As slider moves right, right-side nodes (x: 52–90) progressively reveal
// showing "total network visibility" across the entire hospital.
// Text panel occupies 0–28% (right: 72%), so nodes at x>=32 never overlap text.
const LISTRUM_NODES: NetworkNode[] = [
  // ── Left side of canvas (visible at slider ≥ their x%) ──
  { id: "ll1", x: 34, y: 10, type: "server",  label: "PACS",        status: "visible" },
  { id: "ll2", x: 44, y: 24, type: "router",  label: "Core SW",     status: "visible" },
  { id: "ll3", x: 33, y: 42, type: "device",  label: "CT Scanner",  status: "visible" },
  { id: "ll4", x: 46, y: 58, type: "iot",     label: "Pump #4",     status: "visible" },
  { id: "ll5", x: 35, y: 74, type: "device",  label: "Workstation", status: "visible" },
  { id: "ll6", x: 48, y: 88, type: "iot",     label: "Monitor",     status: "visible" },
  // ── Right side of canvas (only visible as slider moves past their x%) ──
  { id: "lr1", x: 58, y: 12, type: "server",  label: "EHR DB",      status: "visible" },
  { id: "lr2", x: 70, y: 27, type: "router",  label: "Edge FW",     status: "visible" },
  { id: "lr3", x: 62, y: 46, type: "device",  label: "MRI Unit",    status: "visible" },
  { id: "lr4", x: 78, y: 60, type: "iot",     label: "Pump #7",     status: "visible" },
  { id: "lr5", x: 65, y: 76, type: "device",  label: "OR Station",  status: "visible" },
  { id: "lr6", x: 85, y: 88, type: "iot",     label: "Ventilator",  status: "visible" },
]

// ─── LEGACY nodes ──────────────────────────────────────────────────────────────
// Mirroring LISTRUM layout: left-side nodes (x: 33–48%) + right-side (x: 55–70%).
// Left-side = hidden (grey, unmanaged). Right-side mix of hidden + compromised.
// Left text panel occupies 0–28%, so nodes at x>=32 are safe.
const LEGACY_NODES: NetworkNode[] = [
  // ── Left side (mirror of Listrum left nodes) ──
  { id: "rl1", x: 34, y: 10, type: "server",  label: "PACS",        status: "hidden" },
  { id: "rl2", x: 44, y: 24, type: "router",  label: "Core SW",     status: "hidden" },
  { id: "rl3", x: 33, y: 42, type: "device",  label: "CT Scanner",  status: "compromised" },
  { id: "rl4", x: 46, y: 58, type: "iot",     label: "Pump #4",     status: "hidden" },
  { id: "rl5", x: 35, y: 74, type: "device",  label: "Workstation", status: "hidden" },
  { id: "rl6", x: 48, y: 88, type: "iot",     label: "Monitor",     status: "compromised" },
  // ── Right side ──
  { id: "rr1", x: 57, y: 12, type: "server",  label: "EHR DB",      status: "hidden" },
  { id: "rr2", x: 68, y: 28, type: "router",  label: "Edge FW",     status: "hidden" },
  { id: "rr3", x: 55, y: 46, type: "device",  label: "MRI Unit",    status: "compromised" },
  { id: "rr4", x: 70, y: 60, type: "iot",     label: "Pump #7",     status: "hidden" },
  { id: "rr5", x: 58, y: 76, type: "device",  label: "OR Station",  status: "compromised" },
  { id: "rr6", x: 69, y: 88, type: "iot",     label: "Ventilator",  status: "hidden" },
]

// ─── DeviceNode ────────────────────────────────────────────────────────────────
function DeviceNode({ node, variant }: { node: NetworkNode; variant: "listrum" | "legacy" }) {
  const colorClass =
    variant === "listrum"
      ? "text-amber-400 border-amber-500/40 bg-amber-500/10"
      : node.status === "compromised"
        ? "text-red-400 border-red-500/40 bg-red-500/10"
        : "text-slate-500 border-slate-600/30 bg-slate-700/20"

  const opacity =
    variant === "legacy"
      ? node.status === "compromised" ? 1 : 0.3
      : 1

  const IconMap = { server: Server, router: Radio, iot: Wifi, device: Activity }
  const Icon = IconMap[node.type]

  return (
    <div
      className="absolute flex flex-col items-center gap-1 pointer-events-none select-none"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
        opacity,
        transition: "opacity 0.35s ease",
      }}
    >
      <div
        className={`relative w-9 h-9 flex items-center justify-center border ${colorClass}`}
        style={{ borderRadius: "2px" }}
      >
        <Icon className="w-4 h-4" />
        {variant === "listrum" && (
          <motion.div
            className="absolute inset-0 border border-amber-400/30"
            style={{ borderRadius: "2px" }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.0, opacity: 0 }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        {variant === "legacy" && node.status === "compromised" && (
          <motion.div
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        )}
      </div>
      <span
        className="text-[9px] font-mono whitespace-nowrap"
        style={{ color: variant === "listrum" ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.22)" }}
      >
        {node.label}
      </span>
    </div>
  )
}

// ─── Connection lines ──────────────────────────────────────────────────────────
// Draws lines between consecutive pairs — enough to show network topology
function ConnectionLines({ nodes, color, opacity = 0.4 }: { nodes: NetworkNode[]; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      {nodes.map((n1, i) =>
        nodes.slice(i + 1, i + 3).map((n2) => (
          <line
            key={`${n1.id}-${n2.id}`}
            x1={`${n1.x}%`} y1={`${n1.y}%`}
            x2={`${n2.x}%`} y2={`${n2.y}%`}
            stroke={color}
            strokeWidth="1"
            strokeOpacity={opacity}
            strokeDasharray={color.includes("dc2626") ? "4 4" : undefined}
          />
        ))
      )}
    </svg>
  )
}

// ─── StatRow ───────────────────────────────────────────────────────────────────
function StatRow({
  icon: Icon, value, label, colorClass, pulse = false,
}: {
  icon: React.ElementType
  value: string
  label: string
  colorClass: string
  pulse?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative w-8 h-8 flex items-center justify-center border border-white/[0.08] flex-shrink-0"
        style={{ backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "2px" }}
      >
        <Icon className={`w-3.5 h-3.5 ${colorClass}`} />
      </div>
      <div>
        <div className={`text-[11px] md:text-xs font-bold font-mono tracking-widest leading-none ${colorClass} ${pulse ? "animate-pulse" : ""}`}>
          {value}
        </div>
        <div className="text-[9px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
          {label}
        </div>
      </div>
    </div>
  )
}

// ─── ProblemSection ────────────────────────────────────────────────────────────
export function ProblemSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pct)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    move(e.clientX)
  }, [move])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (dragging.current) move(e.clientX)
  }, [move])

  const onPointerUp = useCallback(() => { dragging.current = false }, [])

  useEffect(() => {
    const stop = () => { dragging.current = false }
    window.addEventListener("pointerup", stop)
    return () => window.removeEventListener("pointerup", stop)
  }, [])

  return (
    <AnimatedSection
      id="problem"
      className="hidden md:block px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 text-xs font-mono text-slate-400 mb-5 bg-white/5">
            <EyeOff className="w-3.5 h-3.5" />
            THE VISIBILITY GAP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            What you can&apos;t see{" "}
            <span className="text-red-400">is already moving.</span>
          </h2>
        </div>

        {/* ── SLIDER CONTAINER ──────────────────────────────────────────────── */}
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl mx-auto overflow-hidden border border-white/[0.08] select-none touch-none"
          style={{ cursor: "ew-resize", height: "520px", borderRadius: "2px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >

          {/* ═══════════════════════════════════════════════════════════════════
              LAYER 1 (bottom): LEGACY — always fully visible.
              Background covers the full canvas. Nodes and text are on the RIGHT half.
              Left half of this layer appears as an empty dark surface which is
              progressively covered by the Listrum layer as slider moves right.
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="absolute inset-0">
            {/* Full canvas base: page's carbon dark surface */}
            <div className="absolute inset-0" style={{ backgroundColor: "#111827" }} />

              {/* Full canvas red ambient tint */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(220,38,38,0.07)" }}
              />

              {/* Full canvas red dot grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(rgba(220,38,38,0.35) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

            {/* Legacy connection lines — dashed across all nodes = "unmanaged mesh" */}
            <ConnectionLines
              nodes={LEGACY_NODES}
              color="#dc2626"
              opacity={0.15}
            />

            {/* Legacy nodes — spread full canvas x: 33–70%, left of text panel (74%) */}
            {LEGACY_NODES.map((n) => (
              <DeviceNode key={n.id} node={n} variant="legacy" />
            ))}

            {/*
              LEGACY text panel: occupies right 26% of canvas (left: 74% → right: 0).
              Nodes are at x=55–70% so no overlap.
            */}
            <div
              className="absolute top-0 bottom-0 flex items-center"
              style={{ left: "74%", right: 0 }}
            >
              <div className="w-full px-5 space-y-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/30 text-red-400 text-[10px] font-mono"
                  style={{ backgroundColor: "rgba(220,38,38,0.08)", borderRadius: "2px" }}
                >
                  <ShieldOff className="w-3 h-3 flex-shrink-0" />
                  LEGACY MONITORING
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Blind &amp;<br />Vulnerable
                </h3>
                <div className="space-y-3">
                  <StatRow icon={EyeOff}      value="90% DARK"    label="Unmanaged Traffic"  colorClass="text-red-400" />
                  <StatRow icon={ShieldAlert}  value="TOO LATE"    label="Ransomware Impact"  colorClass="text-red-400" pulse />
                  <StatRow icon={Lock}         value="PHI EXPOSED" label="Data Sent to Cloud" colorClass="text-red-400" />
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              LAYER 2 (top): LISTRUM — clipped to [0 .. sliderPos%].

              At slider=50 (default): only the left half is visible.
              The LEFT TEXT PANEL (0–28%) is immediately visible — no nodes overlap it.
              Left-side nodes (x: 33–48%) are also visible, to the right of the text.

              As slider moves RIGHT past x=52%: right-side nodes (x: 58–85%) start
              revealing one by one, showing Listrum's full-network coverage.

              At slider=95: the entire canvas is amber — total visibility, all 12
              nodes connected, Listrum label covers the Legacy text.
          ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {/* Full canvas amber base */}
            <div className="absolute inset-0" style={{ backgroundColor: "#111827" }} />

            {/* Full canvas amber ambient tint */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(217,119,6,0.05)" }}
            />

            {/* Dot grid — amber across full canvas */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(rgba(217,119,6,0.30) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Listrum connection lines — full mesh across all 12 nodes */}
            <ConnectionLines nodes={LISTRUM_NODES} color="#d97706" opacity={0.22} />

            {/* ALL 12 Listrum nodes — spread x: 33–85%, y: 10–88% */}
            {LISTRUM_NODES.map((n) => (
              <DeviceNode key={n.id} node={n} variant="listrum" />
            ))}

            {/*
              LISTRUM text panel: occupies left 28% of canvas (left: 0 → right: 72%).
              All nodes are at x >= 33%, so zero overlap with text.
            */}
            <div
              className="absolute top-0 bottom-0 flex items-center"
              style={{ left: 0, right: "72%" }}
            >
              <div className="w-full px-5 space-y-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 text-amber-400 text-[10px] font-mono"
                  style={{ backgroundColor: "rgba(217,119,6,0.08)", borderRadius: "2px" }}
                >
                  <ShieldCheck className="w-3 h-3 flex-shrink-0" />
                  LISTRUM HYPERVISOR EDGE
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Total<br />Visibility
                </h3>
                <div className="space-y-3">
                  <StatRow icon={Eye}         value="100% VISIBLE"  label="Every Packet & Device"  colorClass="text-amber-400" />
                  <StatRow icon={CheckCircle}  value="INSTANT BLOCK" label="Pre-Encryption Stop"    colorClass="text-amber-400" />
                  <StatRow icon={Lock}         value="PHI SECURE"    label="Data Stays On-Premise"  colorClass="text-amber-400" />
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              SLIDER HANDLE
          ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Vertical rule */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/40" />

            {/* Grip handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-9 h-9 flex items-center justify-center border border-white/20 backdrop-blur-sm"
                style={{ backgroundColor: "#1e293b", borderRadius: "2px" }}
              >
                <GripVertical className="w-4 h-4 text-white/60" />
              </div>
            </div>

            {/* Side labels */}
            <div className="absolute top-3 left-1/2 pointer-events-none flex">
              <div
                className="px-2 py-0.5 border border-amber-500/30 text-[9px] font-mono text-amber-400 whitespace-nowrap -translate-x-full"
                style={{ backgroundColor: "rgba(217,119,6,0.12)", borderRadius: "2px" }}
              >
                LISTRUM
              </div>
              <div
                className="px-2 py-0.5 border border-red-500/30 text-[9px] font-mono text-red-400 whitespace-nowrap"
                style={{ backgroundColor: "rgba(220,38,38,0.12)", borderRadius: "2px" }}
              >
                LEGACY
              </div>
            </div>
          </div>

        </div>
        {/* ── END SLIDER ── */}

        {/* Bottom insight */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/[0.06] text-sm text-slate-400">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>
              Most hospitals learn about ransomware only{" "}
              <span className="text-white font-medium">after systems begin shutting down.</span>
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
