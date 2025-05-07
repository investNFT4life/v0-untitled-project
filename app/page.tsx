"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { NFTCollection } from "@/components/nft-collection"
import { ContactForm } from "@/components/contact-form"

// Images pour le carousel
const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-QcsFfvi22OLvpW17YLyTqVx3WdlsFm.png",
    alt: "Emergency medical scene with doctors and paramedics helping a patient",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner2-Fk3QIhytRJ6JBTsNoXDwXRdfcQ2ojP.png",
    alt: "Doctor with elderly patient sharing a positive moment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner3-mns79R6xkaebw2PHXBe2GP76WLdc7k.png",
    alt: "Veterinarian examining a golden retriever dog",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner4-lLMRcbmGPFfJK9SLPgOz0tHgzDazpM.png",
    alt: "Medical professional with elderly patient in hospital corridor",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner5-EbcOtiYfb90lsWjqa5NJiij3o1eIUZ.png",
    alt: "Composite of medical professionals in various healthcare situations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner6-zvHRo4EvttaE6LhtrOlFCHJ3uHGxzv.png",
    alt: "Veterinarian examining a golden retriever with stethoscope",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner7-E9nmvF39yOSiRwSeJ7eVQiPn3xUQnl.png",
    alt: "Happy family with young daughter laughing together",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner8-XaNgNheG0xdCZH7I0vQu7feYcFSl2M.png",
    alt: "Doctor comforting young boy wrapped in blanket",
  },
]

// NFTs
const nfts = [
  {
    id: "zinc",
    name: "ZINC",
    subtitle: "Health for All Edition",
    price: "35 USDT",
    euroPrice: "Approx. $35",
    description:
      "No act is ever too small. Every contribution expands the reach of care. This is your gateway to join a global mission accessible, essential, and powerful.",
    benefits: [
      "Limited to only 210,000 editions worldwide",
      "Accessible entry to the global health movement",
      "Support for essential medicine distribution",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    availability: "Available Now",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zinc_Ed-utQkXnIG128mrhGb8ZtdsZDMSI8gdQ.png",
    textColor: "text-primary",
  },
  {
    id: "gold",
    name: "GOLD",
    subtitle: "Act for Health Edition",
    price: "121 USDT",
    euroPrice: "Approx. $121",
    description:
      "Real change, real care. Your Gold token fuels access to treatment for people, animals, and a healthier planet.",
    benefits: [
      "Limited to only 21,000 editions worldwide",
      "Direct funding for medical treatments",
      "Support for both human and veterinary care",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    availability: "Available Now",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gold_Ed-xT738FmHU3sRnEZxe8g5G2EibBsndu.png",
    textColor: "text-primary",
  },
  {
    id: "black",
    name: "BLACK PLATINUM",
    subtitle: "Ambassador Edition",
    price: "635 USDT",
    euroPrice: "Approx. $635",
    description: "Reserved for those bold enough to bet on life, above all. Lifetime access to our Circle of Pioneers.",
    benefits: [
      "Limited to only 2,100 editions worldwide",
      "Lifetime access to our Circle of Pioneers",
      "Exclusive numbered physical collectible",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    availability: "Available Now",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_Ed-r14egL4MWlvJegahz1pPgJ5SQ412C8.png",
    textColor: "text-primary",
  },
]

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Marquer comme chargé après un court délai
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Afficher un écran de chargement simple pendant le chargement initial
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-gradient text-2xl mb-4 font-bold">Loading...</div>
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection images={heroImages} />
        <MissionSection />
        <NFTCollection nfts={nfts} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
