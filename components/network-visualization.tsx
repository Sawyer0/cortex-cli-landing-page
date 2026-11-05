"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight
} from "lucide-react"

interface Device {
  id: string
  type: "workstation" | "imaging" | "infusion" | "monitor" | "server" | "iot"
  name: string
  vlan: string
  status: "online" | "warning" | "critical"
  ip: string
  mac: string
  lastSeen: string
  traffic: string
}

interface FlowEvent {
  id: number
  from: string
  to: string
  protocol: string
  bytes: string
  timestamp: string
  risk: "safe" | "alert"
}

const VLAN_COLORS: Record<string, string> = {
  ICU: "#ef4444",
  Radiology: "#8b5cf6",
  Pharmacy: "#10b981",
  Admin: "#3b82f6",
  OR: "#f59e0b",
}

const INITIAL_DEVICES: Device[] = [
  { id: "ICU-PUMP-01", type: "infusion", name: "Alaris Pump #1", vlan: "ICU", status: "online", ip: "10.10.1.14", mac: "AA:BB:CC:01:14:01", lastSeen: "2s", traffic: "1.2 KB/s" },
  { id: "ICU-PUMP-02", type: "infusion", name: "Alaris Pump #2", vlan: "ICU", status: "online", ip: "10.10.1.15", mac: "AA:BB:CC:01:15:02", lastSeen: "1s", traffic: "0.8 KB/s" },
  { id: "ICU-MON-01", type: "monitor", name: "Philips IntelliVue", vlan: "ICU", status: "online", ip: "10.10.1.20", mac: "AA:BB:CC:01:20:03", lastSeen: "3s", traffic: "4.7 KB/s" },
  { id: "ICU-MON-02", type: "monitor", name: "GE CARESCAPE", vlan: "ICU", status: "warning", ip: "10.10.1.21", mac: "AA:BB:CC:01:21:04", lastSeen: "45s", traffic: "0.1 KB/s" },
  { id: "ICU-WS-01", type: "workstation", name: "Nurse Station PC", vlan: "ICU", status: "online", ip: "10.10.1.30", mac: "AA:BB:CC:01:30:05", lastSeen: "5s", traffic: "12.3 KB/s" },
  { id: "RAD-CT-01", type: "imaging", name: "Siemens CT", vlan: "Radiology", status: "online", ip: "10.10.2.10", mac: "BB:CC:DD:02:10:01", lastSeen: "2s", traffic: "847 KB/s" },
  { id: "RAD-MRI-01", type: "imaging", name: "GE MRI 3T", vlan: "Radiology", status: "online", ip: "10.10.2.11", mac: "BB:CC:DD:02:11:02", lastSeen: "8s", traffic: "1.2 MB/s" },
  { id: "RAD-PACS", type: "server", name: "PACS Server", vlan: "Radiology", status: "online", ip: "10.10.2.50", mac: "BB:CC:DD:02:50:03", lastSeen: "1s", traffic: "24.5 MB/s" },
  { id: "RAD-WS-01", type: "workstation", name: "Rad Workstation", vlan: "Radiology", status: "online", ip: "10.10.2.30", mac: "BB:CC:DD:02:30:04", lastSeen: "6s", traffic: "3.1 KB/s" },
  { id: "PHARM-ROBO", type: "iot", name: "Omnicell Robot", vlan: "Pharmacy", status: "online", ip: "10.10.3.10", mac: "CC:DD:EE:03:10:01", lastSeen: "12s", traffic: "0.5 KB/s" },
  { id: "PHARM-WS-01", type: "workstation", name: "Pharmacy PC", vlan: "Pharmacy", status: "online", ip: "10.10.3.30", mac: "CC:DD:EE:03:30:02", lastSeen: "3s", traffic: "8.2 KB/s" },
  { id: "ADM-WS-01", type: "workstation", name: "Admin PC #1", vlan: "Admin", status: "online", ip: "10.10.4.30", mac: "DD:EE:FF:04:30:01", lastSeen: "7s", traffic: "2.1 KB/s" },
  { id: "ADM-WS-02", type: "workstation", name: "Admin PC #2", vlan: "Admin", status: "warning", ip: "10.10.4.31", mac: "DD:EE:FF:04:31:02", lastSeen: "2m", traffic: "0.0 KB/s" },
  { id: "ADM-PRINT", type: "iot", name: "Network Printer", vlan: "Admin", status: "online", ip: "10.10.4.50", mac: "DD:EE:FF:04:50:03", lastSeen: "20s", traffic: "0.3 KB/s" },
  { id: "OR-PUMP-01", type: "infusion", name: "Anesthesia Pump", vlan: "OR", status: "online", ip: "10.10.5.14", mac: "EE:FF:AA:05:14:01", lastSeen: "1s", traffic: "1.8 KB/s" },
  { id: "OR-MON-01", type: "monitor", name: "OR Vitals Monitor", vlan: "OR", status: "online", ip: "10.10.5.20", mac: "EE:FF:AA:05:20:02", lastSeen: "2s", traffic: "5.3 KB/s" },
  { id: "OR-WS-01", type: "workstation", name: "OR Workstation", vlan: "OR", status: "online", ip: "10.10.5.30", mac: "EE:FF:AA:05:30:03", lastSeen: "9s", traffic: "1.4 KB/s" },
  { id: "OR-VENT-01", type: "iot", name: "Ventilator", vlan: "OR", status: "online", ip: "10.10.5.40", mac: "EE:FF:AA:05:40:04", lastSeen: "4s", traffic: "0.6 KB/s" },
]

const PROTOCOLS = ["TCP/443", "TCP/80", "HL7/2575", "DICOM/104", "TCP/22", "UDP/514", "TCP/8080"]

function generateFlowEvent(id: number, devices: Device[]): FlowEvent {
  const from = devices[Math.floor(Math.random() * devices.length)]
  let to = devices[Math.floor(Math.random() * devices.length)]
  while (to.id === from.id) to = devices[Math.floor(Math.random() * devices.length)]

  const isAlert = Math.random() < 0.08
  const bytes = isAlert
    ? `${(Math.random() * 50 + 10).toFixed(1)} MB`
    : `${(Math.random() * 500 + 50).toFixed(0)} B`

  return {
    id,
    from: from.id,
    to: to.id,
    protocol: PROTOCOLS[Math.floor(Math.random() * PROTOCOLS.length)],
    bytes,
    timestamp: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    risk: isAlert ? "alert" : "safe",
  }
}

export function NetworkVisualization() {
  const [devices] = useState<Device[]>(INITIAL_DEVICES)
  const [selectedVlan, setSelectedVlan] = useState<string | null>(null)
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)
  const [flowEvents, setFlowEvents] = useState<FlowEvent[]>([])
  const [stats, setStats] = useState({
    totalDevices: INITIAL_DEVICES.length,
    activeAlerts: 1,
    flowsPerSecond: 48230,
  })
  const flowIdRef = useRef(0)

  // Simulate live flow events
  useEffect(() => {
    const interval = setInterval(() => {
      flowIdRef.current += 1
      const newEvent = generateFlowEvent(flowIdRef.current, devices)
      setFlowEvents((prev) => [newEvent, ...prev].slice(0, 8))

      setStats((prev) => ({
        ...prev,
        flowsPerSecond: Math.floor(45000 + Math.random() * 10000),
        activeAlerts: Math.random() < 0.15 ? Math.floor(Math.random() * 3) + 1 : prev.activeAlerts,
      }))
    }, 1800)

    return () => clearInterval(interval)
  }, [devices])

  const filteredDevices = selectedVlan
    ? devices.filter((d) => d.vlan === selectedVlan)
    : devices

  const statusColor = (s: string) =>
    s === "warning" ? "text-amber-400 bg-amber-400/10 border-amber-400/20"
      : s === "critical" ? "text-red-400 bg-red-400/10 border-red-400/20"
      : "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"

  return (
    <div className="relative w-full overflow-hidden border border-white/[0.10]" style={{ backgroundColor: "#1e293b", borderRadius: "2px" }}>
      {/* Top bar */}
      <div className="px-4 py-3 border-b border-white/[0.08] bg-white/[0.04] flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-glow-pulse" />
          </div>
          <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-wider">
            Live Device Inventory
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-right">
          <div>
            <div className="text-[9px] md:text-[10px] text-slate-500 font-mono uppercase">Devices</div>
            <div className="text-sm md:text-lg font-mono font-bold text-white">{stats.totalDevices}</div>
          </div>
          <div>
            <div className="text-[9px] md:text-[10px] text-slate-500 font-mono uppercase">Flows/sec</div>
              <div className="text-sm md:text-lg font-mono font-bold text-amber-400">{stats.flowsPerSecond.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-[9px] md:text-[10px] text-slate-500 font-mono uppercase">Alerts</div>
            <div className={`text-sm md:text-lg font-mono font-bold ${stats.activeAlerts > 0 ? "text-amber-400" : "text-emerald-400"}`}>
              {stats.activeAlerts}
            </div>
          </div>

        </div>
      </div>

      {/* VLAN filter tabs */}
      <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02] flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
        <button
            onClick={() => { setSelectedVlan(null); setSelectedDevice(null) }}
            className={`px-3 py-1 text-[10px] md:text-xs font-mono transition-all whitespace-nowrap ${
              !selectedVlan
                ? "bg-white/10 text-white border border-white/20"
                : "text-slate-500 hover:text-slate-300 border border-transparent"
            }`}
          >
          ALL ({devices.length})
        </button>
        {Object.entries(VLAN_COLORS).map(([vlan, color]) => {
          const count = devices.filter((d) => d.vlan === vlan).length
          const isActive = selectedVlan === vlan
          return (
              <button
                key={vlan}
                onClick={() => { setSelectedVlan(isActive ? null : vlan); setSelectedDevice(null) }}
                className={`px-3 py-1 text-[10px] md:text-xs font-mono transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "text-white border"
                    : "text-slate-500 hover:text-slate-300 border border-transparent"
                }`}
                style={isActive ? { backgroundColor: `${color}15`, borderColor: `${color}40`, color } : {}}
              >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
              {vlan} ({count})
            </button>
          )
        })}
      </div>

      {/* Main content: Device table + Live flow */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] divide-x divide-white/[0.04] h-[420px]">
        {/* Device table */}
          <div className="overflow-y-auto scrollbar-hide h-full">
          <table className="w-full text-left">
            <thead className="bg-white/[0.04] backdrop-blur-sm">
              <tr className="text-[9px] md:text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-white/[0.06]">
                <th className="px-3 py-2">Device</th>
                <th className="px-3 py-2">IP</th>
                <th className="px-3 py-2 hidden md:table-cell">VLAN</th>
                <th className="px-3 py-2">Traffic</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((device, idx) => {
                  const isSelected = selectedDevice?.id === device.id
                return (
                  <motion.tr
                    key={device.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    onClick={() => setSelectedDevice(isSelected ? null : device)}
                    className={`border-b border-white/[0.04] cursor-pointer transition-colors text-xs ${
                      isSelected
                        ? "bg-white/[0.08]"
                        : "hover:bg-white/[0.05]"
                    }`}
                  >
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          device.status === "online" ? "bg-emerald-400" : device.status === "warning" ? "bg-amber-400 animate-status-blink" : "bg-red-400 animate-status-blink"
                        }`} />
                        <div>
                          <div className="font-mono text-slate-100 text-[11px]">{device.id}</div>
                          <div className="text-[10px] text-slate-400">{device.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1 font-mono text-[11px]">
                        <span className="text-slate-500">10.10</span>
                        <span className="text-slate-300">{device.ip.split('.').slice(2).join('.')}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell">
                      <span
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                        style={{ color: VLAN_COLORS[device.vlan], backgroundColor: `${VLAN_COLORS[device.vlan]}15` }}
                      >
                        {device.vlan}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono text-slate-300 text-[11px]">{device.traffic}</td>
                  </motion.tr>
                )
                })}
              </tbody>
            </table>

          </div>

        {/* Right panel: Live Flow + Selected Device */}
          <div className="hidden md:flex flex-col overflow-hidden h-full">
          {/* Selected device detail */}
          <AnimatePresence mode="wait">
            {selectedDevice && (
              <motion.div
                key={selectedDevice.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                  className="p-3 border-b border-white/[0.08] bg-white/[0.03]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-white font-medium">{selectedDevice.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${statusColor(selectedDevice.status)}`}>
                    {selectedDevice.status.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-slate-400">
                  <div>IP: <span className="text-slate-300">{selectedDevice.ip}</span></div>
                  <div>VLAN: <span style={{ color: VLAN_COLORS[selectedDevice.vlan] }}>{selectedDevice.vlan}</span></div>
                  <div>MAC: <span className="text-slate-300">{selectedDevice.mac}</span></div>
                  <div>Traffic: <span className="text-slate-300">{selectedDevice.traffic}</span></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

            {/* Live flow events */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
            <div className="flex items-center px-1 pb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Live Flows</span>
            </div>
            <div className="space-y-1">
              <AnimatePresence initial={false} mode="popLayout">
                {flowEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`px-2 py-1.5 rounded text-[10px] font-mono border ${
                      event.risk === "alert"
                        ? "bg-red-500/8 border-red-500/15 text-red-300"
                        : "bg-white/[0.04] border-white/[0.06] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate">{event.from}</span>
                      <ChevronRight className="w-2.5 h-2.5 flex-shrink-0 text-slate-600" />
                      <span className="truncate">{event.to}</span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5 text-[9px] text-slate-400">
                      <span>{event.protocol}</span>
                      <span>{event.bytes}</span>
                      <span>{event.timestamp}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="px-4 py-2 border-t border-white/[0.08] bg-white/[0.03] flex items-center justify-between text-[10px] font-mono">
        <span className="text-amber-400">All {Object.keys(VLAN_COLORS).length} VLANs monitored</span>
        <div className="flex items-center gap-4 text-slate-500">
          {stats.activeAlerts > 0 && (
            <span className="text-amber-400">{stats.activeAlerts} alert{stats.activeAlerts > 1 ? "s" : ""}</span>
          )}
        </div>
      </div>
    </div>
  )
}
