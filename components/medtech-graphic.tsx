"use client"

import { useEffect, useRef } from "react"

interface MedtechGraphicProps {
  type: "pulse" | "hologram" | "nanotech" | "brain" | "medical"
  className?: string
}

export function MedtechGraphic({ type, className = "" }: MedtechGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simplifier la taille du canvas pour améliorer les performances
    canvas.width = 300
    canvas.height = 200

    // Configuration des animations
    let animationId: number
    const width = canvas.width
    const height = canvas.height

    // Version simplifiée pour tous les types
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Dessiner quelques cercles statiques avec des couleurs bleues
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = 2 + Math.random() * 5

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 191, 255, ${0.2 + Math.random() * 0.3})` // Bleu électrique
        ctx.fill()
      }

      // Dessiner quelques lignes pour connecter les points
      ctx.beginPath()
      ctx.moveTo(width * 0.2, height * 0.2)
      ctx.lineTo(width * 0.8, height * 0.8)
      ctx.moveTo(width * 0.2, height * 0.8)
      ctx.lineTo(width * 0.8, height * 0.2)
      ctx.strokeStyle = "rgba(0, 191, 255, 0.2)" // Bleu électrique
      ctx.lineWidth = 1
      ctx.stroke()

      // Dessiner un cercle central
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 30, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 191, 255, 0.1)" // Bleu électrique
      ctx.fill()
      ctx.strokeStyle = "rgba(0, 191, 255, 0.3)" // Bleu électrique
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Exécuter l'animation une seule fois pour économiser les ressources
    animate()

    // Nettoyage
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [type])

  return <canvas ref={canvasRef} className={`${className} opacity-30`} />
}
