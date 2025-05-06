"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  currentSlide: number
}

export function Carousel({ images, currentSlide }: CarouselProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentSlide].src || "/placeholder.svg"}
              alt={images[currentSlide].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm md:text-base text-center">{images[currentSlide].alt}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
