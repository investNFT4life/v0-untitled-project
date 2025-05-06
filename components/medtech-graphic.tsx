"use client"

import { useEffect, useRef } from "react"

interface MedtechGraphicProps {
  type: "ecg" | "molecules" | "brain" | "circuit" | "medical" | "hologram" | "pulse" | "nanotech"
  className?: string
}

export function MedtechGraphic({ type, className = "" }: MedtechGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set common styles
    ctx.lineWidth = 2

    // Draw different graphics based on type
    switch (type) {
      case "ecg":
        drawECG(ctx, canvas.width, canvas.height)
        break
      case "molecules":
        drawMolecules(ctx, canvas.width, canvas.height)
        break
      case "brain":
        drawBrainNetwork(ctx, canvas.width, canvas.height)
        break
      case "circuit":
        drawCircuit(ctx, canvas.width, canvas.height)
        break
      case "medical":
        drawMedicalSymbols(ctx, canvas.width, canvas.height)
        break
      case "hologram":
        drawHologram(ctx, canvas.width, canvas.height)
        break
      case "pulse":
        drawPulse(ctx, canvas.width, canvas.height)
        break
      case "nanotech":
        drawNanotech(ctx, canvas.width, canvas.height)
        break
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [type])

  return <canvas ref={canvasRef} className={className} />
}

function drawECG(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const gradient = ctx.createLinearGradient(0, 0, width, 0)
  gradient.addColorStop(0, "#00ffcc") // vert turquoise
  gradient.addColorStop(0.5, "#4158D0") // bleu
  gradient.addColorStop(1, "#8A2BE2") // violet
  ctx.strokeStyle = gradient

  ctx.beginPath()
  const baseline = height / 2
  let x = 0

  // Draw ECG pattern
  while (x < width) {
    // Baseline
    ctx.moveTo(x, baseline)
    x += 20
    ctx.lineTo(x, baseline)

    // P wave
    x += 10
    ctx.lineTo(x, baseline - 10)
    x += 10
    ctx.lineTo(x, baseline)

    // PR segment
    x += 20
    ctx.lineTo(x, baseline)

    // QRS complex
    x += 5
    ctx.lineTo(x, baseline + 5)
    x += 5
    ctx.lineTo(x, baseline - 40)
    x += 5
    ctx.lineTo(x, baseline + 10)
    x += 5
    ctx.lineTo(x, baseline)

    // ST segment
    x += 20
    ctx.lineTo(x, baseline)

    // T wave
    x += 10
    ctx.lineTo(x, baseline - 15)
    x += 10
    ctx.lineTo(x, baseline)

    // TP segment
    x += 30
    ctx.lineTo(x, baseline)
  }

  ctx.stroke()

  // Add glow effect
  ctx.shadowColor = "#00ffcc"
  ctx.shadowBlur = 10
  ctx.stroke()
}

function drawMolecules(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const numMolecules = 5
  const nodeRadius = 5

  for (let i = 0; i < numMolecules; i++) {
    const centerX = Math.random() * width
    const centerY = Math.random() * height
    const numNodes = 3 + Math.floor(Math.random() * 4) // 3-6 nodes

    // Draw nodes and connections
    const nodes: { x: number; y: number }[] = []
    for (let j = 0; j < numNodes; j++) {
      const angle = (j * 2 * Math.PI) / numNodes
      const distance = 30 + Math.random() * 20
      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance
      nodes.push({ x, y })

      // Draw node
      ctx.beginPath()
      ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI)

      // Create gradient for nodes
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius)
      gradient.addColorStop(0, j % 2 === 0 ? "#00ffcc" : "#8A2BE2") // pink-500 or cyan-500
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = gradient

      ctx.shadowColor = j % 2 === 0 ? "#00ffcc" : "#8A2BE2"
      ctx.shadowBlur = 10
      ctx.fill()
    }

    // Connect nodes
    ctx.beginPath()
    for (let j = 0; j < nodes.length; j++) {
      for (let k = j + 1; k < nodes.length; k++) {
        ctx.moveTo(nodes[j].x, nodes[j].y)
        ctx.lineTo(nodes[k].x, nodes[k].y)
      }
    }

    // Create gradient for connections
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#00ffcc") // pink-500
    gradient.addColorStop(0.5, "#4158D0") // purple-500
    gradient.addColorStop(1, "#8A2BE2") // cyan-500
    ctx.strokeStyle = gradient

    ctx.shadowColor = "#4158D0"
    ctx.shadowBlur = 5
    ctx.stroke()
  }
}

function drawBrainNetwork(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const numNodes = 30
  const nodes: { x: number; y: number; pulsePhase: number; pulseSpeed: number }[] = []
  const nodeRadius = 3

  // Create nodes
  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.05 + Math.random() * 0.05,
    })
  }

  // Animation function
  let frame = 0
  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    // Draw connections
    ctx.beginPath()
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const distance = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2))
        if (distance < 100) {
          // Create pulse effect on connections
          const pulseIntensity = Math.sin(frame * 0.05 + nodes[i].pulsePhase) * 0.5 + 0.5

          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)

          const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
          gradient.addColorStop(0, `rgba(0, 255, 204, ${0.1 + pulseIntensity * 0.3})`) // pink with varying opacity
          gradient.addColorStop(1, `rgba(138, 43, 226, ${0.1 + pulseIntensity * 0.3})`) // cyan with varying opacity

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1 + pulseIntensity
          ctx.stroke()
        }
      }
    }

    // Draw nodes with pulsing effect
    for (let i = 0; i < numNodes; i++) {
      const node = nodes[i]
      const pulseSize = Math.sin(frame * node.pulseSpeed + node.pulsePhase) * 0.5 + 1.5

      ctx.beginPath()
      ctx.arc(node.x, node.y, nodeRadius * pulseSize, 0, 2 * Math.PI)

      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeRadius * pulseSize)
      gradient.addColorStop(0, i % 2 === 0 ? "#00ffcc" : "#8A2BE2") // pink or cyan
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.shadowColor = i % 2 === 0 ? "#00ffcc" : "#8A2BE2"
      ctx.shadowBlur = 10
      ctx.fill()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}

function drawCircuit(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const gridSize = 40
  const rows = Math.ceil(height / gridSize)
  const cols = Math.ceil(width / gridSize)

  // Draw grid lines
  ctx.beginPath()
  ctx.strokeStyle = "rgba(0, 255, 204, 0.1)" // pink-500 with opacity

  for (let i = 0; i <= rows; i++) {
    ctx.moveTo(0, i * gridSize)
    ctx.lineTo(width, i * gridSize)
  }

  for (let i = 0; i <= cols; i++) {
    ctx.moveTo(i * gridSize, 0)
    ctx.lineTo(i * gridSize, height)
  }
  ctx.stroke()

  // Draw circuit elements with animation
  let frame = 0
  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    // Redraw grid
    ctx.beginPath()
    ctx.strokeStyle = "rgba(0, 255, 204, 0.1)" // pink-500 with opacity
    for (let i = 0; i <= rows; i++) {
      ctx.moveTo(0, i * gridSize)
      ctx.lineTo(width, i * gridSize)
    }
    for (let i = 0; i <= cols; i++) {
      ctx.moveTo(i * gridSize, 0)
      ctx.lineTo(i * gridSize, height)
    }
    ctx.stroke()

    // Draw circuit paths with data flow animation
    for (let i = 0; i < 15; i++) {
      const startX = Math.floor((i * cols) / 15) * gridSize
      const startY = Math.floor(Math.random() * rows) * gridSize
      let currentX = startX
      let currentY = startY

      // Create gradient for path
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "#00ffcc") // pink-500
      gradient.addColorStop(0.5, "#4158D0") // purple-500
      gradient.addColorStop(1, "#8A2BE2") // cyan-500
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.shadowColor = "#4158D0"
      ctx.shadowBlur = 5

      // Draw a random path
      ctx.beginPath()
      ctx.moveTo(currentX, currentY)

      for (let j = 0; j < 5; j++) {
        const direction = Math.floor(Math.random() * 4)
        let nextX = currentX
        let nextY = currentY

        switch (direction) {
          case 0: // up
            nextY -= gridSize
            break
          case 1: // right
            nextX += gridSize
            break
          case 2: // down
            nextY += gridSize
            break
          case 3: // left
            nextX -= gridSize
            break
        }

        // Keep within bounds
        nextX = Math.max(0, Math.min(width, nextX))
        nextY = Math.max(0, Math.min(height, nextY))

        ctx.lineTo(nextX, nextY)
        currentX = nextX
        currentY = nextY
      }
      ctx.stroke()

      // Draw data packets moving along the paths
      const packetPosition = (frame * 2) % 100
      const packetX = startX + ((currentX - startX) * packetPosition) / 100
      const packetY = startY + ((currentY - startY) * packetPosition) / 100

      ctx.beginPath()
      ctx.arc(packetX, packetY, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#00ffcc" // pink-500
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 10
      ctx.fill()
    }

    // Draw circuit nodes with pulsing effect
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(Math.random() * cols) * gridSize
      const y = Math.floor(Math.random() * rows) * gridSize
      const pulseSize = Math.sin(frame * 0.05 + i) * 0.5 + 1.5

      ctx.beginPath()
      ctx.arc(x, y, 4 * pulseSize, 0, 2 * Math.PI)

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4 * pulseSize)
      gradient.addColorStop(0, i % 2 === 0 ? "#00ffcc" : "#8A2BE2") // pink or cyan
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.shadowColor = i % 2 === 0 ? "#00ffcc" : "#8A2BE2"
      ctx.shadowBlur = 10
      ctx.fill()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}

function drawMedicalSymbols(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Animation variables
  let frame = 0

  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    // Draw medical crosses with pulsing effect
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = 20 + Math.random() * 20
      const pulseSize = Math.sin(frame * 0.05 + i) * 0.3 + 1

      ctx.beginPath()
      ctx.moveTo(x - (size / 2) * pulseSize, y)
      ctx.lineTo(x + (size / 2) * pulseSize, y)
      ctx.moveTo(x, y - (size / 2) * pulseSize)
      ctx.lineTo(x, y + (size / 2) * pulseSize)

      const gradient = ctx.createLinearGradient(x - size / 2, y - size / 2, x + size / 2, y + size / 2)
      gradient.addColorStop(0, "#00ffcc") // pink-500
      gradient.addColorStop(1, "#8A2BE2") // cyan-500

      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.shadowColor = "#4158D0"
      ctx.shadowBlur = 10
      ctx.stroke()
    }

    // Draw DNA helixes with animation
    for (let i = 0; i < 3; i++) {
      const startX = Math.random() * width
      const startY = Math.random() * height
      const length = 100 + Math.random() * 100
      const amplitude = 10 + Math.random() * 10
      const frequency = 0.1
      const speed = 0.05

      // First strand
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      for (let x = 0; x < length; x++) {
        const y = startY + amplitude * Math.sin(frequency * x + frame * speed)
        ctx.lineTo(startX + x, y)
      }

      const gradient1 = ctx.createLinearGradient(startX, startY, startX + length, startY)
      gradient1.addColorStop(0, "#00ffcc") // pink-500
      gradient1.addColorStop(1, "#4158D0") // purple-500

      ctx.strokeStyle = gradient1
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 5
      ctx.stroke()

      // Second strand
      ctx.beginPath()
      ctx.moveTo(startX, startY + amplitude * Math.sin(Math.PI))
      for (let x = 0; x < length; x++) {
        const y = startY + amplitude * Math.sin(frequency * x + frame * speed + Math.PI)
        ctx.lineTo(startX + x, y)
      }

      const gradient2 = ctx.createLinearGradient(startX, startY, startX + length, startY)
      gradient2.addColorStop(0, "#4158D0") // purple-500
      gradient2.addColorStop(1, "#8A2BE2") // cyan-500

      ctx.strokeStyle = gradient2
      ctx.shadowColor = "#8A2BE2"
      ctx.shadowBlur = 5
      ctx.stroke()

      // Draw connections between strands
      ctx.beginPath()
      for (let x = 0; x < length; x += 20) {
        const y1 = startY + amplitude * Math.sin(frequency * x + frame * speed)
        const y2 = startY + amplitude * Math.sin(frequency * x + frame * speed + Math.PI)

        ctx.moveTo(startX + x, y1)
        ctx.lineTo(startX + x, y2)
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.stroke()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}

function drawHologram(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Animation variables
  let frame = 0

  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    // Draw holographic grid
    const gridSize = 30
    const rows = Math.ceil(height / gridSize)
    const cols = Math.ceil(width / gridSize)

    // Horizontal lines
    for (let i = 0; i <= rows; i++) {
      ctx.beginPath()
      const y = i * gridSize
      const waveOffset = Math.sin(frame * 0.02 + i * 0.1) * 5

      for (let x = 0; x < width; x += 5) {
        const waveY = y + Math.sin(x * 0.01 + frame * 0.05) * 2
        if (x === 0) {
          ctx.moveTo(x, waveY + waveOffset)
        } else {
          ctx.lineTo(x, waveY + waveOffset)
        }
      }

      const opacity = 0.1 + Math.sin(frame * 0.05 + i * 0.2) * 0.05
      ctx.strokeStyle = `rgba(0, 255, 204, ${opacity})`
      ctx.stroke()
    }

    // Vertical lines
    for (let i = 0; i <= cols; i++) {
      ctx.beginPath()
      const x = i * gridSize
      const waveOffset = Math.sin(frame * 0.02 + i * 0.1) * 5

      for (let y = 0; y < height; y += 5) {
        const waveX = x + Math.sin(y * 0.01 + frame * 0.05) * 2
        if (y === 0) {
          ctx.moveTo(waveX + waveOffset, y)
        } else {
          ctx.lineTo(waveX + waveOffset, y)
        }
      }

      const opacity = 0.1 + Math.sin(frame * 0.05 + i * 0.2) * 0.05
      ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`
      ctx.stroke()
    }

    // Draw holographic elements
    for (let i = 0; i < 10; i++) {
      const x = width / 2 + (Math.cos(frame * 0.02 + (i * Math.PI) / 5) * width) / 4
      const y = height / 2 + (Math.sin(frame * 0.02 + (i * Math.PI) / 5) * height) / 4
      const size = 20 + Math.sin(frame * 0.05 + i) * 10

      // Draw circles
      ctx.beginPath()
      ctx.arc(x, y, size, 0, 2 * Math.PI)

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
      gradient.addColorStop(0, "rgba(0, 255, 204, 0.8)") // pink
      gradient.addColorStop(0.5, "rgba(65, 88, 208, 0.5)") // purple
      gradient.addColorStop(1, "rgba(138, 43, 226, 0)") // cyan

      ctx.fillStyle = gradient
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 15
      ctx.fill()

      // Draw scanning lines
      ctx.beginPath()
      ctx.moveTo(x - size, y)
      ctx.lineTo(x + size, y)

      const scanPos = ((frame * 2) % (size * 2)) - size
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}

function drawPulse(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Animation variables
  let frame = 0

  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    const centerX = width / 2
    const centerY = height / 2

    // Draw pulsing circles
    const numCircles = 5
    for (let i = 0; i < numCircles; i++) {
      const phase = (i / numCircles) * Math.PI * 2
      const pulseSize = Math.sin(frame * 0.05 + phase) * 0.5 + 0.5
      const radius = (i + 1) * 30 * pulseSize

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
      gradient.addColorStop(0, "rgba(0, 255, 204, 0)") // pink
      gradient.addColorStop(0.7, "rgba(65, 88, 208, 0.1)") // purple
      gradient.addColorStop(1, "rgba(138, 43, 226, 0.3)") // cyan

      ctx.fillStyle = gradient
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)

      const strokeGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
      strokeGradient.addColorStop(0, "rgba(0, 255, 204, 0.8)") // pink
      strokeGradient.addColorStop(0.5, "rgba(65, 88, 208, 0.5)") // purple
      strokeGradient.addColorStop(1, "rgba(138, 43, 226, 0.2)") // cyan

      ctx.strokeStyle = strokeGradient
      ctx.lineWidth = 2
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 10
      ctx.stroke()
    }

    // Draw radiating lines
    const numLines = 12
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2
      const pulseLength = Math.sin(frame * 0.05 + i) * 0.3 + 0.7
      const x1 = centerX + Math.cos(angle) * 20
      const y1 = centerY + Math.sin(angle) * 20
      const x2 = centerX + Math.cos(angle) * 150 * pulseLength
      const y2 = centerY + Math.sin(angle) * 150 * pulseLength

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, "rgba(0, 255, 204, 0.8)") // pink
      gradient.addColorStop(1, "rgba(138, 43, 226, 0)") // cyan

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 5
      ctx.stroke()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}

function drawNanotech(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Animation variables
  let frame = 0

  function animate() {
    ctx.clearRect(0, 0, width, height)
    frame++

    // Draw hexagonal grid pattern
    const hexSize = 30
    const hexHeight = hexSize * Math.sqrt(3)
    const rows = Math.ceil(height / hexHeight) + 1
    const cols = Math.ceil(width / (hexSize * 1.5)) + 1

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexSize * 1.5
        const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2)

        // Skip some hexagons randomly for aesthetic effect
        if (Math.random() < 0.7) {
          // Draw hexagon
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const hx = x + hexSize * Math.cos(angle)
            const hy = y + hexSize * Math.sin(angle)

            if (i === 0) {
              ctx.moveTo(hx, hy)
            } else {
              ctx.lineTo(hx, hy)
            }
          }
          ctx.closePath()

          // Pulse effect
          const pulseIntensity = Math.sin(frame * 0.02 + row * 0.1 + col * 0.1) * 0.5 + 0.5

          // Fill with gradient
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, hexSize)
          gradient.addColorStop(0, `rgba(0, 255, 204, ${0.1 * pulseIntensity})`) // pink
          gradient.addColorStop(1, `rgba(138, 43, 226, ${0.05 * pulseIntensity})`) // cyan

          ctx.fillStyle = gradient
          ctx.fill()

          // Stroke with gradient
          const strokeGradient = ctx.createLinearGradient(x - hexSize, y - hexSize, x + hexSize, y + hexSize)
          strokeGradient.addColorStop(0, `rgba(0, 255, 204, ${0.3 * pulseIntensity})`) // pink
          strokeGradient.addColorStop(1, `rgba(138, 43, 226, ${0.3 * pulseIntensity})`) // cyan

          ctx.strokeStyle = strokeGradient
          ctx.lineWidth = 1
          ctx.stroke()

          // Draw data points at vertices occasionally
          if (Math.random() < 0.1) {
            const dataPointSize = 3 + pulseIntensity * 2

            for (let i = 0; i < 6; i++) {
              if (Math.random() < 0.3) {
                const angle = (i * Math.PI) / 3
                const px = x + hexSize * Math.cos(angle)
                const py = y + hexSize * Math.sin(angle)

                ctx.beginPath()
                ctx.arc(px, py, dataPointSize, 0, 2 * Math.PI)

                const pointGradient = ctx.createRadialGradient(px, py, 0, px, py, dataPointSize)
                pointGradient.addColorStop(0, "#00ffcc") // pink
                pointGradient.addColorStop(1, "rgba(0, 255, 204, 0)") // transparent pink

                ctx.fillStyle = pointGradient
                ctx.shadowColor = "#00ffcc"
                ctx.shadowBlur = 5
                ctx.fill()
              }
            }
          }
        }
      }
    }

    // Draw flowing data particles
    for (let i = 0; i < 50; i++) {
      const t = (frame * 2 + i * 100) % (width + height)
      const progress = t / (width + height)

      // Create path along hexagonal grid
      let x, y
      if (progress < 0.5) {
        // Move horizontally
        x = progress * 2 * width
        y = height / 2 + Math.sin(x * 0.05) * 50
      } else {
        // Move vertically
        x = width / 2 + Math.sin((progress - 0.5) * 2 * Math.PI * 3) * 100
        y = (progress - 0.5) * 2 * height
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, 2 * Math.PI)

      const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 3)
      particleGradient.addColorStop(0, "#00ffcc") // pink
      particleGradient.addColorStop(1, "rgba(0, 255, 204, 0)") // transparent pink

      ctx.fillStyle = particleGradient
      ctx.shadowColor = "#00ffcc"
      ctx.shadowBlur = 10
      ctx.fill()

      // Draw trail
      ctx.beginPath()
      ctx.moveTo(x, y)

      const trailLength = 20
      for (let j = 1; j <= trailLength; j++) {
        const tp = progress - j * 0.002
        if (tp < 0) continue

        let tx, ty
        if (tp < 0.5) {
          tx = tp * 2 * width
          ty = height / 2 + Math.sin(tx * 0.05) * 50
        } else {
          tx = width / 2 + Math.sin((tp - 0.5) * 2 * Math.PI * 3) * 100
          ty = (tp - 0.5) * 2 * height
        }

        ctx.lineTo(tx, ty)
      }

      const trailGradient = ctx.createLinearGradient(x, y, x - 20, y)
      trailGradient.addColorStop(0, "rgba(0, 255, 204, 0.8)") // pink
      trailGradient.addColorStop(1, "rgba(0, 255, 204, 0)") // transparent pink

      ctx.strokeStyle = trailGradient
      ctx.lineWidth = 2
      ctx.stroke()
    }

    requestAnimationFrame(animate)
  }

  // Start animation
  animate()
}
