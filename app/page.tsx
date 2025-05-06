"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NFTCard from "@/components/nft-card"
import { Carousel } from "@/components/carousel"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MedtechGraphic } from "@/components/medtech-graphic"
import { DNAAnimation } from "@/components/dna-animation"

const heroImages = [
  {
    src: "/carousel/banner1.png",
    alt: "Emergency medical scene with doctors and paramedics helping a patient",
  },
  {
    src: "/carousel/banner2.png",
    alt: "Doctor with elderly patient sharing a positive moment",
  },
  {
    src: "/carousel/banner3.png",
    alt: "Veterinarian examining a golden retriever dog",
  },
  {
    src: "/carousel/banner4.png",
    alt: "Medical professional in red uniform with elderly patient in hospital",
  },
  {
    src: "/carousel/banner5.png",
    alt: "Composite of medical scenes showing various healthcare situations",
  },
  {
    src: "/carousel/banner6.png",
    alt: "Smiling veterinarian examining a happy golden retriever",
  },
  {
    src: "/carousel/banner7.png",
    alt: "Happy family with laughing child showing the positive impact of healthcare",
  },
  {
    src: "/carousel/banner8.png",
    alt: "Doctor comforting a young child with emergency personnel in background",
  },
]

// Mettre à jour les données des NFTs avec les nouvelles images et textes
const nfts = [
  {
    id: "zinc",
    name: "ZINC EDITION",
    subtitle: "Health for All Edition",
    price: "35 USDT",
    euroPrice: "Approx. $35",
    description:
      "No act is ever too small. Every contribution expands the reach of care. This is your gateway to join a global mission accessible, essential, and powerful. Your token plants the seed. Together, we grow hope.",
    benefits: [
      "Limited to only 210,000 editions worldwide",
      "Accessible entry to the global health movement",
      "Support for essential medicine distribution",
      "Community membership benefits",
      "Regular updates on project impacts",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    image: "/nfts/zinc-edition.png",
    color: "from-[#00ffcc] to-[#4158D0]",
    textColor: "text-[#00ffcc]",
    buttonColor: "bg-gradient-to-r from-[#00ffcc] to-[#00b8ff] hover:from-[#00e6b8] hover:to-[#00a6e6]",
  },
  {
    id: "gold",
    name: "GOLD EDITION",
    subtitle: "Act for Health Edition",
    price: "121 USDT",
    euroPrice: "Approx. $121",
    description:
      "Real change, real care. Your Gold token fuels access to treatment for people, animals, and a healthier planet. Make a significant impact on global health initiatives with this exclusive NFT.",
    benefits: [
      "Limited to only 21,000 editions worldwide",
      "Direct funding for medical treatments",
      "Support for both human and veterinary care",
      "Environmental health initiatives",
      "Community access and updates",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    availability: "Available Now",
    image: "/nfts/gold-edition.png",
    color: "from-[#00b8ff] to-[#4158D0]",
    textColor: "text-[#00b8ff]",
    buttonColor: "bg-gradient-to-r from-[#00b8ff] to-[#4158D0] hover:from-[#00a6e6] hover:to-[#3a4fbd]",
  },
  {
    id: "black",
    name: "BLACK PLATINUM",
    subtitle: "Ambassador Edition",
    price: "635 USDT",
    euroPrice: "Approx. $635",
    description:
      "Reserved for those bold enough to bet on life, above all. Lifetime access to our Circle of Pioneers. Includes an exclusive, numbered physical item. You're not supporting a project — you're making history.",
    benefits: [
      "Limited to only 2,100 editions worldwide",
      "Lifetime access to our Circle of Pioneers",
      "Exclusive numbered physical collectible",
      "Priority access to future initiatives",
      "Voting rights on project selection",
    ],
    legalText: "I agree to the Terms & Conditions and understand that my purchase supports the MyNFT4.LIFE mission.",
    availability: "Available Now",
    image: "/nfts/black-edition.png",
    color: "from-[#4158D0] to-[#8A2BE2]",
    textColor: "text-[#8A2BE2]",
    buttonColor: "bg-gradient-to-r from-[#4158D0] to-[#8A2BE2] hover:from-[#3a4fbd] hover:to-[#7d28d2]",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Carousel images={heroImages} currentSlide={currentSlide} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
            >
              The first NFT
              <br />
              designed to save
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2] animate-text">
                real lives.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Transform lives with myNFT4.life: The first NFT that funds real medical solutions for people and animals
              with lasting impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-[#00ffcc] to-[#4158D0] hover:from-[#00e6b8] hover:to-[#3a4fbd] text-white border-0 px-8 py-6 text-lg rounded-full shadow-lg shadow-[#00ffcc]/20"
              >
                <Link href="#nfts">Discover our NFTs</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-gradient-to-r from-pink-500 to-cyan-500 shadow-md shadow-pink-500/50"
                  : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 z-20 hover:bg-pink-500/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 z-20 hover:bg-pink-500/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </section>

      {/* Mission Section with Medtech Graphics */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
          <MedtechGraphic type="pulse" className="w-full h-96" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2]">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed mb-10">
              We are revolutionizing the NFT world by creating the first collection with a real and measurable impact on
              global health. Each myNFT4.life token you purchase directly funds innovative medical solutions, essential
              equipment, and vital care for people and animals medical solutions, essential equipment, and vital care
              for people and animals in need.
            </p>

            <div className="relative my-16">
              <DNAAnimation />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-pink-900/30 backdrop-blur-sm shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all">
                <div className="text-pink-400 text-4xl font-bold mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Transparency
                </h3>
                <p>Track the impact of your NFT in real-time through our blockchain traceability system.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-purple-900/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all">
                <div className="text-purple-400 text-4xl font-bold mb-4">50%</div>
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Direct Impact
                </h3>
                <p>Half of each sale directly funds verified and auditable medical projects.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-cyan-900/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all">
                <div className="text-cyan-400 text-4xl font-bold mb-4">∞</div>
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Lasting Value
                </h3>
                <p>Your NFT gains value while contributing to saving lives, today and tomorrow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 opacity-30 pointer-events-none">
          <MedtechGraphic type="hologram" className="w-full h-96" />
        </div>
      </section>

      {/* NFT Collection Section */}
      <section id="nfts" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute top-20 left-0 right-0 opacity-20 pointer-events-none">
          <MedtechGraphic type="nanotech" className="w-full h-96" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2]">
            Our Exclusive Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
          <MedtechGraphic type="brain" className="w-full h-96" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2]">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <Image
                  src="/carousel/banner8.png"
                  alt="Doctor comforting a young child"
                  width={600}
                  height={600}
                  className="rounded-xl relative"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  Transforming Lives, One NFT at a Time
                </h3>
                <p className="text-lg mb-6">
                  Thanks to your support, we have already been able to fund medical projects that have a real and
                  lasting impact on thousands of lives.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>3 medical clinics built in rural areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>12 advanced medical equipment provided to hospitals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>5,000+ people received essential medical care</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>2 medical research programs funded</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="mt-8 bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-700 hover:to-cyan-700 text-white border-0 px-6 py-3 text-lg rounded-full self-start shadow-lg shadow-pink-500/20"
                >
                  <Link href="/impact">See our full impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-[#4158D0] to-[#8A2BE2]">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-pink-900/30 backdrop-blur-sm shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-50"></div>
                  <Image
                    src="/professional-doctor-portrait.png"
                    alt="Dr. Sophie Martin"
                    width={60}
                    height={60}
                    className="rounded-full relative"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Dr. Sophie Martin
                  </h3>
                  <p className="text-sm text-gray-400">Physician, Saint Louis Hospital</p>
                </div>
              </div>
              <p className="italic">
                "Thanks to the funds generated by myNFT4.life, we were able to acquire state-of-the-art medical imaging
                equipment that allows us to diagnose faster and with more precision. It's revolutionary for our
                department."
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-purple-900/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-50"></div>
                  <Image
                    src="/tech-entrepreneur-portrait.png"
                    alt="Marc Dubois"
                    width={60}
                    height={60}
                    className="rounded-full relative"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Marc Dubois
                  </h3>
                  <p className="text-sm text-gray-400">NFT Collector</p>
                </div>
              </div>
              <p className="italic">
                "I bought a GOLD NFT not only as an investment but also to contribute to a cause close to my heart.
                Being able to track the concrete impact of my purchase is an incredibly rewarding experience."
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-cyan-900/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur opacity-50"></div>
                  <Image
                    src="/carousel/banner7.png"
                    alt="Aminata Diallo"
                    width={60}
                    height={60}
                    className="rounded-full relative object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                    Aminata Diallo
                  </h3>
                  <p className="text-sm text-gray-400">Beneficiary, Senegal</p>
                </div>
              </div>
              <p className="italic">
                "The new clinic in our village has changed our lives. Before, we had to walk 20 km to receive care. Now,
                we have access to doctors and medicine right next to our homes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/50 to-cyan-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <MedtechGraphic type="medical" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            Join the movement
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Together, we can transform the NFT world into a force for good. Invest in the future while saving lives
            today.
          </p>
          <Button
            asChild
            className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-700 hover:to-cyan-700 border-0 px-8 py-6 text-lg rounded-full shadow-xl shadow-pink-500/30"
          >
            <Link href="#nfts">Discover our NFTs</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
