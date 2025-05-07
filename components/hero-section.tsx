"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  images: {
    src: string
    alt: string
  }[]
}

export function HeroSection({ images }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay - Ajusté pour être légèrement plus foncé */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/45 to-background/75 z-10"></div>
        <div className="absolute inset-0 z-0">
          {images[currentSlide] && (
            <Image
              src={images[currentSlide].src || "/placeholder.svg"}
              alt={images[currentSlide].alt}
              fill
              priority
              className="object-cover transition-opacity duration-1000 brightness-105 contrast-105 dark:brightness-95"
              sizes="100vw"
            />
          )}
        </div>
      </div>

      {/* Decorative elements - Opacité réduite pour moins interférer avec les images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float opacity-60"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float opacity-60"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full glass border border-border">
            <span className="text-gradient font-medium">Blockchain for Health</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Reimagining</span> Health Access
          </h1>

          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            Together, we don't just imagine a fairer world — we make it real. We accelerate care, bring faster
            diagnostics, and deliver life-saving solutions where only silence once remained.
          </p>

          <p className="text-lg md:text-xl mb-10">
            This isn't just a mission.
            <br />
            <span className="text-gradient font-semibold">
              It's a call for dignity. A gesture of hope. A promise of life.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient hover:opacity-90 transition-opacity rounded-full">
              <Link href="#nfts" className="text-base">
                Discover our NFTs
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full border-primary hover:bg-primary/10"
            >
              <Link href="#contact" className="text-base flex items-center">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-primary" : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
