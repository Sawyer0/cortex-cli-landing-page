import React from "react"

type DividerVariant =
    | "slate-to-card"
    | "card-to-slate"
    | "slate-to-secondary"
    | "secondary-to-card"
    | "on-slate"
    | "on-card"

interface SectionDividerProps {
    variant?: DividerVariant
    className?: string
}

export function SectionDivider({ variant = "slate-to-card", className }: SectionDividerProps) {
    // Map variants to background classes
    const getBackgroundClass = (v: DividerVariant) => {
        // All sections are transparent now, so dividers should be too
        return ""
    }

    return (
        <div className={`py-12 relative w-full ${getBackgroundClass(variant)} ${className || ""}`}>
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
                {/* Left Line */}
                <div className="flex-grow h-px bg-slate-400/60" />

                {/* Pulse SVG - No background, purely transparent on top */}
                <div className="flex-shrink-0 mx-0 text-slate-400/60 w-[60px] h-[20px] flex items-center justify-center">
                    <svg
                        width="60"
                        height="20"
                        viewBox="0 0 60 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <path
                            d="M0 10 L15 10 L20 2 L25 18 L30 10 L35 10 L38 6 L42 14 L45 10 L60 10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Right Line */}
                <div className="flex-grow h-px bg-slate-400/60" />
            </div>
        </div>
    )
}
