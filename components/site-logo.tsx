"use client"

import { useState, useEffect } from "react"
import { HeartPulse } from "lucide-react"

export function SiteLogo({ className }: { className?: string }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <HeartPulse
          className={`h-8 w-8 text-primary transition-all duration-500 ${isAnimating ? "scale-125 text-accent" : ""}`}
        />
        {isAnimating && <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></span>}
      </div>
      <span className="font-bold text-xl tracking-tight text-gradient">myNFT4.life</span>
    </div>
  )
}
