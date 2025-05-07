"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NFTCard from "@/components/nft-card"
import { Carousel } from "@/components/carousel"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HighTechDNA } from "@/components/high-tech-dna"
import { ContactForm } from "@/components/contact-form"

// Nouvelles images pour le carousel
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

// Mise à jour des NFTs pour supprimer le mot "EDITION" des noms
const nfts = [
  {
    id: "zinc",
    name: "ZINC", // Suppression du mot "EDITION"
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
    textColor: "text-[#39FF14]",
    buttonColor: "nft-button-primary",
  },
  {
    id: "gold",
    name: "GOLD", // Suppression du mot "EDITION"
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
    textColor: "text-[#39FF14]",
    buttonColor: "nft-button-primary",
  },
  {
    id: "black",
    name: "BLACK PLATINUM", // Pas de changement car ne contient pas "EDITION"
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
    textColor: "text-[#39FF14]",
    buttonColor: "nft-button-primary",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    // Marquer comme chargé après un court délai
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    // Intervalle plus long pour le carrousel pour réduire la charge
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // Afficher un écran de chargement simple pendant le chargement initial
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-[#39FF14] text-2xl mb-4">Chargement...</div>
          <div className="w-16 h-16 border-4 border-[#39FF14] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Carousel images={heroImages} currentSlide={currentSlide} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Reimagining Health Access
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Together, we don't just imagine a fairer world — we make it real. We accelerate care, bring faster
              diagnostics, and deliver life-saving solutions where only silence once remained.
            </p>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              This isn't just a mission.
              <br />
              <span className="hero-gradient font-semibold text-glow">
                It's a call for dignity. A gesture of hope. A promise of life.
              </span>
            </p>
            <Button asChild className="nft-button-primary text-lg rounded-full shadow-lg shadow-[#39FF14]/20 px-8 py-6">
              <Link href="#nfts">Discover our NFTs</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#39FF14] shadow-md shadow-[#39FF14]/50" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm rounded-full p-2 z-20 hover:bg-[#39FF14]/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm rounded-full p-2 z-20 hover:bg-[#39FF14]/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </section>

      {/* Espacement supplémentaire entre Carousel et ACT NOW */}
      <div className="h-6"></div>

      {/* ACT NOW Button Section */}
      <div className="flex justify-center py-12 pb-4 bg-black relative z-10">
        <Button
          asChild
          className="nft-button-primary text-xl font-bold rounded-full shadow-lg shadow-[#39FF14]/30 px-10 py-7 animate-pulse hover:animate-none glow-effect"
        >
          <Link href="#nfts" className="flex items-center gap-2">
            ACT NOW
            <ChevronRight className="w-6 h-6" />
          </Link>
        </Button>
      </div>

      {/* Espacement supplémentaire entre ACT NOW et le texte */}
      <div className="h-6"></div>

      {/* Mission Section with Medtech Graphics */}
      <section className="py-16 pt-0 section-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-gradient text-glow">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-6">
              We are revolutionizing the NFT world by creating the first collection with a real and measurable impact on
              global health. Each myNFT4.life token you purchase directly funds innovative medical solutions.
            </p>
            <p className="text-2xl font-bold mb-10 hero-gradient animate-pulse text-glow">
              Join us. Choose health. Choose life. Act NOW!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="card-bg p-8 rounded-xl border border-[#39FF14]/20 shadow-lg shadow-[#39FF14]/5 hover:shadow-[#39FF14]/10 transition-all">
                <div className="text-[#39FF14] text-4xl font-bold mb-4 text-glow">100%</div>
                <h3 className="text-xl font-semibold mb-2 hero-gradient">Transparency</h3>
                <p>Track the impact of your NFT in real-time through our blockchain traceability system.</p>
              </div>
              <div className="card-bg p-8 rounded-xl border border-[#39FF14]/20 shadow-lg shadow-[#39FF14]/5 hover:shadow-[#39FF14]/10 transition-all">
                <div className="text-[#39FF14] text-4xl font-bold mb-4 text-glow">∞</div>
                <h3 className="text-xl font-semibold mb-2 hero-gradient">Lasting Value</h3>
                <p>Your NFT gains value while contributing to saving lives, today and tomorrow.</p>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto mb-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 hero-gradient text-glow">
                Redefining How We Fund Health
              </h3>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
                MyNFT4.LIFE is not a collection — it's a turning point.
                <br />
                Three powerful NFT editions. One global commitment: to end delays, bring care closer, and stop
                preventable suffering.
              </p>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Each token is a raised voice, a broken barrier, a life protected — human or animal.
                <br />
                <span className="hero-gradient font-semibold text-glow">
                  Together, we change the rules. With purpose. With heart. With real-world impact.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Tech DNA Animation Separator */}
      <div className="relative overflow-hidden py-2">
        <HighTechDNA />
      </div>

      {/* NFT Collection Section */}
      <section id="nfts" className="pt-4 pb-16 section-gradient relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6 hero-gradient text-glow">Our Exclusive Collection</h2>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold mb-6 hero-gradient text-glow">Medical Technology for Humanity</h3>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
              This is your moment to make a difference.
              <br />
              The NFT you choose is more than a symbol — it's a personal stand for global health, a declaration that no
              life should be left without care.
            </p>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              <span className="font-semibold">Pick your edition. Power the mission.</span>
              <br />
              <span className="hero-gradient font-semibold text-glow">
                Because what you do today… saves lives tomorrow.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 section-gradient relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6 hero-gradient text-glow">Contact Us</h2>

          <div className="max-w-3xl mx-auto text-center mb-12">{/* Removed the problematic text here */}</div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
