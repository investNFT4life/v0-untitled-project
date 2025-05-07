"use client"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  currentSlide: number
}

export function Carousel({ images, currentSlide }: CarouselProps) {
  // Version simplifiée sans animations pour améliorer les performances
  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-white dark:bg-black"></div>
  }

  // S'assurer que currentSlide est dans les limites du tableau
  const safeCurrentSlide = Math.max(0, Math.min(currentSlide, images.length - 1))
  const currentImage = images[safeCurrentSlide]

  if (!currentImage || !currentImage.src) {
    return <div className="w-full h-full bg-white dark:bg-black"></div>
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt || "Carousel image"}
          fill
          priority
          loading="eager"
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  )
}
