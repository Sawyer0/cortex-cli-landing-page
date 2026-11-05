import { ImageResponse } from "next/og"
import { site } from "@/content/site"

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          gap: 64,
          padding: 96,
          backgroundColor: "#1e293b",
          color: "#f7fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            height: 288,
            border: "4px solid #4b5563",
            backgroundColor: "#2d394f",
          }}
        >
          <div style={{ position: "absolute", top: 16, left: 20, fontSize: 32, color: "#e1e7f0" }}>443</div>
          <div style={{ fontSize: 132, fontWeight: 700, color: "#fb923c" }}>Ls</div>
          <div style={{ fontSize: 30, color: "#e1e7f0" }}>Listrum</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: 12 }}>LISTRUM</div>
          <div style={{ fontSize: 40, color: "#fb923c" }}>{site.openGraph.title}</div>
          <div style={{ fontSize: 30, color: "#94a3b8" }}>{site.complianceBadge}</div>
        </div>
      </div>
    ),
    size,
  )
}
