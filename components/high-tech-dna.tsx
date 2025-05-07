"use client"

import { useEffect, useRef } from "react"

export function HighTechDNA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Définir les dimensions du canvas
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = 180 // Hauteur réduite pour moins d'espacement
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Paramètres d'animation
    const particles: Particle[] = []
    const connections: Connection[] = []
    const particleCount = 80 // Plus de particules pour un effet plus dense
    const connectionDistance = 100
    const baseRadius = 1.5
    const colors = {
      primary: "#39FF14", // Vert néon vif
      secondary: "#66FF33", // Vert clair
      tertiary: "#00CC00", // Vert foncé
      accent: "#FFFFFF", // Blanc pour les accents
    }

    // Classe pour les particules
    class Particle {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      originalY: number
      phase: number
      phaseSpeed: number
      amplitude: number
      glowSize: number
      glowOpacity: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalY = y
        this.radius = Math.random() * baseRadius + 1
        this.color = Math.random() > 0.7 ? colors.secondary : colors.primary
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.2
        this.phase = Math.random() * Math.PI * 2
        this.phaseSpeed = 0.02 + Math.random() * 0.02
        this.amplitude = 10 + Math.random() * 20
        this.glowSize = this.radius * (2 + Math.random() * 2)
        this.glowOpacity = 0.1 + Math.random() * 0.3
      }

      update() {
        // Mouvement horizontal lent
        this.x += this.vx

        // Mouvement vertical basé sur une onde sinusoïdale
        this.phase += this.phaseSpeed
        this.y = this.originalY + Math.sin(this.phase) * this.amplitude

        // Rebondir sur les bords
        if (this.x < 0 || this.x > canvas.width) {
          this.vx = -this.vx
        }

        // Effet de pulsation pour le rayon
        this.radius = baseRadius + Math.sin(this.phase) * 0.5
        this.glowSize = this.radius * (2 + Math.sin(this.phase) * 0.5)
        this.glowOpacity = 0.1 + Math.sin(this.phase) * 0.1
      }

      draw() {
        // Dessiner l'effet de lueur
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize)
        gradient.addColorStop(0, `${this.color}`)
        gradient.addColorStop(1, `${this.color.slice(0, 7)}00`) // Transparent à l'extérieur

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.globalAlpha = this.glowOpacity
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Dessiner la particule
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Classe pour les connexions entre particules
    class Connection {
      p1: Particle
      p2: Particle
      distance: number
      maxDistance: number
      color: string
      lineWidth: number
      opacity: number
      pulse: number
      pulseSpeed: number

      constructor(p1: Particle, p2: Particle, maxDistance: number) {
        this.p1 = p1
        this.p2 = p2
        this.maxDistance = maxDistance
        this.distance = 0
        this.color = Math.random() > 0.8 ? colors.secondary : colors.primary
        this.lineWidth = 0.5 + Math.random() * 0.5
        this.opacity = 0
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.03 + Math.random() * 0.02
      }

      update() {
        // Calculer la distance entre les particules
        const dx = this.p2.x - this.p1.x
        const dy = this.p2.y - this.p1.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        // Mettre à jour l'opacité en fonction de la distance
        this.opacity = this.distance < this.maxDistance ? 1 - this.distance / this.maxDistance : 0

        // Effet de pulsation
        this.pulse += this.pulseSpeed
        this.lineWidth = 0.5 + Math.sin(this.pulse) * 0.3
      }

      draw() {
        if (this.opacity <= 0) return

        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.globalAlpha = this.opacity * 0.8
        ctx.lineWidth = this.lineWidth

        // Créer un dégradé pour la ligne
        const gradient = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
        gradient.addColorStop(0, `${this.color}00`) // Transparent au début
        gradient.addColorStop(0.5, this.color) // Couleur pleine au milieu
        gradient.addColorStop(1, `${this.color}00`) // Transparent à la fin

        ctx.strokeStyle = gradient
        ctx.moveTo(this.p1.x, this.p1.y)
        ctx.lineTo(this.p2.x, this.p2.y)
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }

    // Initialiser les particules
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push(new Particle(x, y))
    }

    // Fonction pour créer les connexions entre particules
    const updateConnections = () => {
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push(new Connection(particles[i], particles[j], connectionDistance))
          }
        }
      }
    }

    // Fonction d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Mettre à jour et dessiner les particules
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Mettre à jour les connexions
      updateConnections()

      // Dessiner les connexions
      connections.forEach((connection) => {
        connection.update()
        connection.draw()
      })

      // Dessiner la double hélice d'ADN
      drawDNAHelix()

      requestAnimationFrame(animate)
    }

    // Fonction pour dessiner la double hélice d'ADN
    const drawDNAHelix = () => {
      const centerY = canvas.height / 2
      const amplitude = 30 // Amplitude réduite pour une hélice plus compacte
      const frequency = 0.01
      const speed = 0.5
      const time = Date.now() * 0.001 * speed

      // Premier brin d'ADN
      ctx.beginPath()
      ctx.strokeStyle = colors.primary
      ctx.lineWidth = 2

      for (let x = 0; x < canvas.width; x += 5) {
        const y = centerY + amplitude * Math.sin(frequency * x + time)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Second brin d'ADN
      ctx.beginPath()
      ctx.strokeStyle = colors.secondary
      ctx.lineWidth = 2

      for (let x = 0; x < canvas.width; x += 5) {
        const y = centerY + amplitude * Math.sin(frequency * x + time + Math.PI)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Connexions entre les brins (barreaux de l'échelle d'ADN)
      ctx.strokeStyle = colors.accent
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.4

      for (let x = 0; x < canvas.width; x += 30) {
        const y1 = centerY + amplitude * Math.sin(frequency * x + time)
        const y2 = centerY + amplitude * Math.sin(frequency * x + time + Math.PI)

        ctx.beginPath()
        ctx.moveTo(x, y1)
        ctx.lineTo(x, y2)
        ctx.strokeStyle = "#66FF33"
        ctx.stroke()
      }

      ctx.globalAlpha = 1
    }

    // Démarrer l'animation
    animate()

    // Nettoyage
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(57,255,20,0.05), rgba(0,0,0,0.9))",
        }}
      />
    </div>
  )
}
