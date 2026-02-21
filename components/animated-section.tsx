"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })

  return (
    <motion.section
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...(props as any)}
    >
      {children}
    </motion.section>
  )
}
