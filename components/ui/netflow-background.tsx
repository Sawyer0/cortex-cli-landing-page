"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface NetflowBackgroundProps {
  className?: string
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

interface Packet {
  x: number
  y: number
  targetIndex: number
  speed: number
  progress: number
  sourceIndex: number
}

export function NetflowBackground({ className }: NetflowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let packets: Packet[] = []

    const colorPrimary = "217, 119, 6"   // Brand Orange (#d97706)
    const colorSecondary = "100, 116, 139" // Slate

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initNodes()
    }

    const initNodes = () => {
      nodes = []
      const nodeCount = Math.floor((width * height) / 28000) // slightly sparser
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35, // slower drift
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.8,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colorSecondary}, 0.55)`
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) {
              const alpha = (1 - distance / 140) * 0.38
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${colorSecondary}, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()

            if (Math.random() < 0.0015) {
              packets.push({
                x: nodes[i].x,
                y: nodes[i].y,
                sourceIndex: i,
                targetIndex: j,
                speed: 0.015 + Math.random() * 0.025,
                progress: 0,
              })
            }
          }
        }
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        const source = nodes[p.sourceIndex]
        const target = nodes[p.targetIndex]

        if (!source || !target) { packets.splice(i, 1); continue }

        const dx = source.x - target.x
        const dy = source.y - target.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 160) { packets.splice(i, 1); continue }

        p.progress += p.speed
        if (p.progress >= 1) { packets.splice(i, 1); continue }

        const currX = source.x + (target.x - source.x) * p.progress
        const currY = source.y + (target.y - source.y) * p.progress

        ctx.beginPath()
        ctx.arc(currX, currY, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colorPrimary}, 0.9)`
        ctx.shadowBlur = 5
        ctx.shadowColor = `rgba(${colorPrimary}, 0.6)`
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", resize)
    resize()
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </motion.div>
  )
}
