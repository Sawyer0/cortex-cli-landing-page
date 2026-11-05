import type { ReactNode } from "react"
import { SiteLink } from "@/components/ui/site-link"

type Variant = "primary" | "secondary"

const variants: Record<Variant, string> = {
  primary: "bg-safety-500 text-graphite-950 hover:bg-safety-400",
  secondary: "border border-graphite-600 text-steel-50 hover:border-safety-400 hover:text-safety-400",
}

interface ActionLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

/** Call-to-action styled as a button but rendered as a real link, so every CTA has a destination. */
export function ActionLink({ href, children, variant = "primary", className = "" }: ActionLinkProps) {
  return (
    <SiteLink
      href={href}
      className={`inline-flex min-h-12 items-center sm:whitespace-nowrap justify-center gap-2 rounded-tile px-6 text-center font-mono text-sm uppercase tracking-[0.12em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </SiteLink>
  )
}
