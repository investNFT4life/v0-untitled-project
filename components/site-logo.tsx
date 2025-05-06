"use client"

import { useState, useEffect, useRef } from "react"

export function SiteLogo({ className }: { className?: string }) {
  const [beatPhase, setBeatPhase] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const beatIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Fonction pour gérer le cycle de battement cardiaque
  const startHeartbeat = () => {
    // Arrêter tout intervalle existant
    if (beatIntervalRef.current) {
      clearInterval(beatIntervalRef.current)
    }

    // Séquence de battement: 0 (normal) -> 1 (contraction) -> 2 (expansion) -> 0 (normal) -> pause
    let counter = 0

    beatIntervalRef.current = setInterval(() => {
      // Simuler le rythme cardiaque avec une pause entre les battements
      if (counter % 15 === 0) {
        // Premier battement de la séquence
        setBeatPhase(1) // Contraction
      } else if (counter % 15 === 1) {
        setBeatPhase(2) // Expansion
      } else if (counter % 15 === 2) {
        setBeatPhase(0) // Retour à normal
      } else if (counter % 15 === 5) {
        // Deuxième battement de la séquence
        setBeatPhase(1) // Contraction
      } else if (counter % 15 === 6) {
        setBeatPhase(2) // Expansion
      } else if (counter % 15 === 7) {
        setBeatPhase(0) // Retour à normal
      }

      counter++
    }, 150) // Vitesse du battement
  }

  useEffect(() => {
    startHeartbeat()

    return () => {
      if (beatIntervalRef.current) {
        clearInterval(beatIntervalRef.current)
      }
    }
  }, [])

  // Calculer les transformations basées sur la phase du battement
  const getHeartScale = () => {
    if (beatPhase === 0) return 1 // Taille normale
    if (beatPhase === 1) return 0.95 // Contraction
    if (beatPhase === 2) return 1.08 // Expansion
    return 1
  }

  const getGlowOpacity = () => {
    if (beatPhase === 0) return 0.3
    if (beatPhase === 1) return 0.2
    if (beatPhase === 2) return 0.5
    return 0.3
  }

  const getGlowSize = () => {
    if (beatPhase === 0) return "scale-100"
    if (beatPhase === 1) return "scale-90"
    if (beatPhase === 2) return "scale-125"
    return "scale-100"
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Cœur high-tech qui bat - forme traditionnelle */}
      <div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full transition-transform duration-150"
          style={{
            transform: `scale(${getHeartScale()})`,
            transformOrigin: "center",
          }}
        >
          <defs>
            <linearGradient id="heartFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="50%" stopColor="#4158D0" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
            <linearGradient id="heartStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
            <filter id="heartGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <clipPath id="heartClip">
              <path d="M50,85 C50,85 15,60 15,35 C15,10 40,10 50,30 C60,10 85,10 85,35 C85,60 50,85 50,85 Z" />
            </clipPath>
          </defs>

          {/* Fond du cœur avec effet de battement */}
          <path
            d="M50,85 C50,85 15,60 15,35 C15,10 40,10 50,30 C60,10 85,10 85,35 C85,60 50,85 50,85 Z"
            fill="rgba(0,0,0,0.5)"
            stroke="url(#heartStrokeGradient)"
            strokeWidth="1.5"
            filter="url(#heartGlow)"
          />

          {/* Cœur principal avec dégradé */}
          <path
            d="M50,85 C50,85 15,60 15,35 C15,10 40,10 50,30 C60,10 85,10 85,35 C85,60 50,85 50,85 Z"
            fill="url(#heartFillGradient)"
            opacity={beatPhase === 2 ? "0.9" : "0.7"}
            className="transition-opacity duration-150"
          />

          {/* Circuits à l'intérieur du cœur */}
          <g clipPath="url(#heartClip)">
            {/* Grille de circuit */}
            <path
              d="M30,30 L70,30 L70,70 L30,70 Z"
              fill="none"
              stroke="#00ffcc"
              strokeWidth="0.5"
              strokeDasharray="1 2"
              opacity="0.6"
            />

            <path
              d="M40,20 L60,20 L60,80 L40,80 Z"
              fill="none"
              stroke="#4158D0"
              strokeWidth="0.5"
              strokeDasharray="1 2"
              opacity="0.6"
            />

            {/* Lignes horizontales */}
            <line x1="20" y1="40" x2="80" y2="40" stroke="#00ffcc" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="20" y1="60" x2="80" y2="60" stroke="#8A2BE2" strokeWidth="0.5" strokeDasharray="1 2" />

            {/* Lignes verticales */}
            <line x1="35" y1="20" x2="35" y2="80" stroke="#4158D0" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="#00ffcc" strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="65" y1="20" x2="65" y2="80" stroke="#8A2BE2" strokeWidth="0.5" strokeDasharray="1 2" />

            {/* Points de connexion */}
            <circle cx="35" cy="40" r="2" fill="#00ffcc" />
            <circle cx="50" cy="60" r="2" fill="#4158D0" />
            <circle cx="65" cy="40" r="2" fill="#8A2BE2" />
            <circle cx="50" cy="30" r="2" fill="#00ffcc" />

            {/* Ligne de battement cardiaque */}
            <polyline
              points="20,50 30,50 35,30 40,70 45,40 50,50 55,40 60,70 65,30 70,50 80,50"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity={beatPhase === 2 ? "0.9" : "0.6"}
              className="transition-all duration-150"
            />
          </g>

          {/* Points lumineux qui pulsent */}
          <circle
            cx="25"
            cy="35"
            r={beatPhase === 2 ? "2.5" : "1.5"}
            fill="#00ffcc"
            className="transition-all duration-150"
          />
          <circle
            cx="75"
            cy="35"
            r={beatPhase === 2 ? "2.5" : "1.5"}
            fill="#8A2BE2"
            className="transition-all duration-150"
          />
          <circle
            cx="50"
            cy="75"
            r={beatPhase === 2 ? "2.5" : "1.5"}
            fill="#4158D0"
            className="transition-all duration-150"
          />
        </svg>

        {/* Effet de lueur qui pulse avec le battement */}
        <div
          className={`absolute inset-0 bg-[#00ffcc] blur-xl transition-all duration-150 ${getGlowSize()}`}
          style={{ opacity: getGlowOpacity() }}
        ></div>

        {/* Particules qui apparaissent pendant l'expansion */}
        {beatPhase === 2 && (
          <>
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#00ffcc] rounded-full animate-ping"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#8A2BE2] rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#4158D0] rounded-full animate-ping"></div>
          </>
        )}
      </div>

      {/* Texte stylisé high-tech */}
      <div className="relative">
        <span className="font-orbitron font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2] animate-text text-xl">
          NFT4LIFE
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2] opacity-70"></div>

        {/* Lignes de circuit décoratives */}
        <div className="absolute -right-2 top-0 h-full w-0.5 bg-[#00ffcc] opacity-30"></div>
        <div className="absolute -left-2 bottom-0 h-0.5 w-2 bg-[#8A2BE2] opacity-30"></div>
      </div>
    </div>
  )
}
