/** Demo hospital network shown in the hero "Live Device Inventory" widget. Illustrative, not customer data. */

export const vlans = ["ICU", "Radiology", "Pharmacy", "Admin", "OR"] as const
export type Vlan = (typeof vlans)[number]

export type DeviceStatus = "online" | "warning" | "critical"
export type DeviceKind = "workstation" | "imaging" | "infusion" | "monitor" | "server" | "iot"

export interface Device {
  id: string
  kind: DeviceKind
  name: string
  vlan: Vlan
  status: DeviceStatus
  ip: string
  mac: string
  traffic: string
}

export const devices: readonly Device[] = [
  { id: "ICU-PUMP-01", kind: "infusion", name: "Alaris Pump #1", vlan: "ICU", status: "online", ip: "10.10.1.14", mac: "AA:BB:CC:01:14:01", traffic: "1.2 KB/s" },
  { id: "ICU-PUMP-02", kind: "infusion", name: "Alaris Pump #2", vlan: "ICU", status: "online", ip: "10.10.1.15", mac: "AA:BB:CC:01:15:02", traffic: "0.8 KB/s" },
  { id: "ICU-MON-01", kind: "monitor", name: "Philips IntelliVue", vlan: "ICU", status: "online", ip: "10.10.1.20", mac: "AA:BB:CC:01:20:03", traffic: "4.7 KB/s" },
  { id: "ICU-MON-02", kind: "monitor", name: "GE CARESCAPE", vlan: "ICU", status: "warning", ip: "10.10.1.21", mac: "AA:BB:CC:01:21:04", traffic: "0.1 KB/s" },
  { id: "ICU-WS-01", kind: "workstation", name: "Nurse Station PC", vlan: "ICU", status: "online", ip: "10.10.1.30", mac: "AA:BB:CC:01:30:05", traffic: "12.3 KB/s" },
  { id: "RAD-CT-01", kind: "imaging", name: "Siemens CT", vlan: "Radiology", status: "online", ip: "10.10.2.10", mac: "BB:CC:DD:02:10:01", traffic: "847 KB/s" },
  { id: "RAD-MRI-01", kind: "imaging", name: "GE MRI 3T", vlan: "Radiology", status: "online", ip: "10.10.2.11", mac: "BB:CC:DD:02:11:02", traffic: "1.2 MB/s" },
  { id: "RAD-PACS", kind: "server", name: "PACS Server", vlan: "Radiology", status: "online", ip: "10.10.2.50", mac: "BB:CC:DD:02:50:03", traffic: "24.5 MB/s" },
  { id: "RAD-WS-01", kind: "workstation", name: "Rad Workstation", vlan: "Radiology", status: "online", ip: "10.10.2.30", mac: "BB:CC:DD:02:30:04", traffic: "3.1 KB/s" },
  { id: "PHARM-ROBO", kind: "iot", name: "Omnicell Robot", vlan: "Pharmacy", status: "online", ip: "10.10.3.10", mac: "CC:DD:EE:03:10:01", traffic: "0.5 KB/s" },
  { id: "PHARM-WS-01", kind: "workstation", name: "Pharmacy PC", vlan: "Pharmacy", status: "online", ip: "10.10.3.30", mac: "CC:DD:EE:03:30:02", traffic: "8.2 KB/s" },
  { id: "ADM-WS-01", kind: "workstation", name: "Admin PC #1", vlan: "Admin", status: "online", ip: "10.10.4.30", mac: "DD:EE:FF:04:30:01", traffic: "2.1 KB/s" },
  { id: "ADM-WS-02", kind: "workstation", name: "Admin PC #2", vlan: "Admin", status: "warning", ip: "10.10.4.31", mac: "DD:EE:FF:04:31:02", traffic: "0.0 KB/s" },
  { id: "ADM-PRINT", kind: "iot", name: "Network Printer", vlan: "Admin", status: "online", ip: "10.10.4.50", mac: "DD:EE:FF:04:50:03", traffic: "0.3 KB/s" },
  { id: "OR-PUMP-01", kind: "infusion", name: "Anesthesia Pump", vlan: "OR", status: "online", ip: "10.10.5.14", mac: "EE:FF:AA:05:14:01", traffic: "1.8 KB/s" },
  { id: "OR-MON-01", kind: "monitor", name: "OR Vitals Monitor", vlan: "OR", status: "online", ip: "10.10.5.20", mac: "EE:FF:AA:05:20:02", traffic: "5.3 KB/s" },
  { id: "OR-WS-01", kind: "workstation", name: "OR Workstation", vlan: "OR", status: "online", ip: "10.10.5.30", mac: "EE:FF:AA:05:30:03", traffic: "1.4 KB/s" },
  { id: "OR-VENT-01", kind: "iot", name: "Ventilator", vlan: "OR", status: "online", ip: "10.10.5.40", mac: "EE:FF:AA:05:40:04", traffic: "0.6 KB/s" },
]

export const protocols = ["TCP/443", "TCP/80", "HL7/2575", "DICOM/104", "TCP/22", "UDP/514", "TCP/8080"] as const

export const inventoryCopy = {
  title: "Live Device Inventory",
  filterLabel: "Filter devices by VLAN",
  allLabel: "ALL",
  flowsTitle: "Live Flows",
  initialFlowsPerSecond: 48230,
  initialAlerts: 1,
} as const
