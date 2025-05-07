"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink } from "lucide-react"
import { TermsDialog } from "./terms-dialog"
import { motion } from "framer-motion"

interface NFTProps {
  nft: {
    id: string
    name: string
    subtitle?: string
    image: string
    price: string
    euroPrice: string
    availability?: string
    description: string
    benefits?: string[]
    legalText?: string
    textColor: string
  }
  index: number
}

export default function NFTCard({ nft, index }: NFTProps) {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Fonction pour obtenir le lien Stripe en fonction de l'ID du NFT
  const getStripeLink = (id: string) => {
    switch (id) {
      case "zinc":
        return "https://buy.stripe.com/8wMg2ZfRlaVU5rycMT"
      case "gold":
        return "https://buy.stripe.com/dR6041bB57JI1bi28b"
      case "black":
        return "https://buy.stripe.com/5kAaIF6gL7JI1bidQV"
      default:
        return "#"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card
        className="overflow-hidden border-gradient glass"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-1.5 w-full bg-gradient"></div>
        <CardContent className="p-6">
          <div
            className="relative mb-6 overflow-hidden rounded-lg group"
            style={{
              transform: isHovered ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {!imageLoaded && (
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                )}
                <Image
                  src={nft.image || "/placeholder.svg"}
                  alt={`${nft.name} - Medical NFT Token`}
                  width={400}
                  height={400}
                  quality={95}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-contain transition-all duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-1 text-gradient">{nft.name}</h3>
          {nft.subtitle && <p className="text-muted-foreground text-sm mb-3">{nft.subtitle}</p>}

          <div className="mb-6">
            <div>
              <p className="text-muted-foreground text-sm">Price</p>
              <p className="text-xl font-bold text-primary">{nft.price}</p>
              <p className="text-sm text-muted-foreground">{nft.euroPrice}</p>
              {nft.availability && <p className="text-sm text-secondary mt-1 font-medium">{nft.availability}</p>}
            </div>
          </div>

          <p className="text-foreground/80 my-6">{nft.description}</p>

          {nft.benefits && (
            <div className="my-6">
              <p className="font-semibold mb-2 text-gradient">
                {nft.id.charAt(0).toUpperCase() + nft.id.slice(1)} Benefits
              </p>
              <ul className="space-y-2">
                {nft.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              id={`terms-${nft.id}`}
              className="mr-2 mt-1 accent-primary"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <label htmlFor={`terms-${nft.id}`} className="text-xs text-foreground/80">
              I agree to the{" "}
              <TermsDialog
                trigger={
                  <button type="button" className="text-primary hover:underline">
                    Terms & Conditions
                  </button>
                }
              />{" "}
              and understand that my purchase supports the MyNFT4.LIFE mission.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              className="w-full bg-gradient hover:opacity-90 transition-opacity"
              disabled={!agreeToTerms}
              onClick={() => {
                if (agreeToTerms) {
                  window.open(getStripeLink(nft.id), "_blank")
                }
              }}
            >
              Buy with Card
            </Button>

            <Button className="w-full" variant="outline" disabled={!agreeToTerms}>
              <span className="flex items-center">
                Buy with Wallet
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
