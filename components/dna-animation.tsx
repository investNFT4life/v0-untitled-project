"use client"

import { useEffect, useRef } from "react"

export function DNAAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 600
    canvas.height = 200

    // Animation parameters
    const amplitude = 30
    const frequency = 0.02
    const speed = 0.05
    const connectionSpacing = 20
    const strandWidth = 2
    const connectionWidth = 1
    let phase = 0

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw DNA strands
      const centerY = canvas.height / 2

      // First strand
      ctx.beginPath()
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient1.addColorStop(0, "#ec4899") // pink-500
      gradient1.addColorStop(0.5, "#8b5cf6") // purple-500
      gradient1.addColorStop(1, "#06b6d4") // cyan-500

      ctx.strokeStyle = gradient1
      ctx.lineWidth = strandWidth
      ctx.shadowColor = "#ec4899"
      ctx.shadowBlur = 10

      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + amplitude * Math.sin(frequency * x + phase)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Second strand
      ctx.beginPath()
      const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient2.addColorStop(0, "#06b6d4") // cyan-500
      gradient2.addColorStop(0.5, "#8b5cf6") // purple-500
      gradient2.addColorStop(1, "#ec4899") // pink-500

      ctx.strokeStyle = gradient2
      ctx.lineWidth = strandWidth
      ctx.shadowColor = "#06b6d4"
      ctx.shadowBlur = 10

      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + amplitude * Math.sin(frequency * x + phase + Math.PI)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Draw connections with glow effect
      ctx.shadowColor = "#8b5cf6"
      ctx.shadowBlur = 5
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
      ctx.lineWidth = connectionWidth

      for (let x = 0; x < canvas.width; x += connectionSpacing) {
        const y1 = centerY + amplitude * Math.sin(frequency * x + phase)
        const y2 = centerY + amplitude * Math.sin(frequency * x + phase + Math.PI)
        ctx.beginPath()
        ctx.moveTo(x, y1)
        ctx.lineTo(x, y2)
        ctx.stroke()
      }

      // Draw data particles moving along the strands
      for (let i = 0; i < 5; i++) {
        const particlePhase = (phase * 10 + i * (Math.PI / 2.5)) % (Math.PI * 2)
        const particleX = (particlePhase / (Math.PI * 2)) * canvas.width
        const particleY = centerY + amplitude * Math.sin(frequency * particleX + phase)

        ctx.beginPath()
        ctx.arc(particleX, particleY, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#ec4899" // pink-500
        ctx.shadowColor = "#ec4899"
        ctx.shadowBlur = 15
        ctx.fill()

        const particleY2 = centerY + amplitude * Math.sin(frequency * particleX + phase + Math.PI)

        ctx.beginPath()
        ctx.arc(particleX, particleY2, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#06b6d4" // cyan-500
        ctx.shadowColor = "#06b6d4"
        ctx.shadowBlur = 15
        ctx.fill()
      }

      // Update phase for animation
      phase += speed
      requestAnimationFrame(animate)
    }

    // Start animation
    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-48" />
}
