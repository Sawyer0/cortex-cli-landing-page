"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0, ...props }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
      }}
      {...props}
    >
      {children}
    </section>
  )
}
