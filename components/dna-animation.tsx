"use client"

import { useEffect, useRef } from "react"

export function DNAAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Définir les dimensions du canvas
    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = 150 // Hauteur fixe pour éviter les problèmes de redimensionnement
      }
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Paramètres d'animation simplifiés
    const amplitude = 20
    const frequency = 0.02
    const speed = 0.03
    let phase = 0

    // Fonction d'animation simplifiée
    const animate = () => {
      // Limiter le framerate pour améliorer les performances
      if (!canvas.width) return

      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner l'ADN simplifié
      const centerY = canvas.height / 2

      // Premier brin
      ctx.beginPath()
      ctx.strokeStyle = "#00BFFF" // Bleu électrique
      ctx.lineWidth = 2

      for (let x = 0; x < canvas.width; x += 5) {
        const y = centerY + amplitude * Math.sin(frequency * x + phase)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Second brin
      ctx.beginPath()
      ctx.strokeStyle = "#40E0FF" // Bleu électrique clair
      ctx.lineWidth = 2

      for (let x = 0; x < canvas.width; x += 5) {
        const y = centerY + amplitude * Math.sin(frequency * x + phase + Math.PI)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Dessiner quelques connexions
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += 30) {
        const y1 = centerY + amplitude * Math.sin(frequency * x + phase)
        const y2 = centerY + amplitude * Math.sin(frequency * x + phase + Math.PI)
        ctx.beginPath()
        ctx.moveTo(x, y1)
        ctx.lineTo(x, y2)
        ctx.stroke()
      }

      // Mettre à jour la phase pour l'animation
      phase += speed
      requestAnimationFrame(animate)
    }

    // Démarrer l'animation
    const animationId = requestAnimationFrame(animate)

    // Nettoyage
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-36" />
}
