"use client"

import type { ReactNode } from "react"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <section
      className={className}
      {...props}
    >
      {children}
    </section>
  )
}
