"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { TermsDialog } from "./terms-dialog"

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
}

export default function NFTCard({ nft }: NFTProps) {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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
    <Card className="bg-transparent border-0 overflow-hidden relative shadow-xl">
      <div className="h-2 w-full bg-gradient-to-r from-[#39FF14] to-[#66FF33] relative"></div>
      <CardContent className="p-8 relative bg-[#121212]/80 backdrop-blur-sm">
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <div className="relative w-full aspect-square bg-gradient-to-b from-black to-[#121212] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {!imageLoaded && (
                <div className="w-12 h-12 border-4 border-[#39FF14] border-t-transparent rounded-full animate-spin"></div>
              )}
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={`${nft.name} - Medical NFT Token`}
                width={400}
                height={400}
                quality={95}
                priority
                onLoad={() => setImageLoaded(true)}
                className={`w-[95%] h-[95%] object-contain transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-1 text-[#39FF14] text-glow">{nft.name}</h3>
        {nft.subtitle && <p className="text-white text-sm mb-3">{nft.subtitle}</p>}

        <div className="mb-6">
          <div>
            <p className="text-white text-sm">Price</p>
            <p className="text-xl font-bold text-[#39FF14] text-glow">{nft.price}</p>
            <p className="text-sm text-white">{nft.euroPrice}</p>
            {nft.availability && <p className="text-sm text-[#66FF33] mt-1 font-medium">{nft.availability}</p>}
          </div>
        </div>

        <p className="text-white my-6">{nft.description}</p>

        {nft.benefits && (
          <div className="my-6">
            <p className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#66FF33]">
              {nft.id.charAt(0).toUpperCase() + nft.id.slice(1)} Benefits
            </p>
            <ul className="space-y-1">
              {nft.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-[#39FF14]" />
                  <span className="text-sm text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            id={`terms-${nft.id}`}
            className="mr-2 mt-1"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <label htmlFor={`terms-${nft.id}`} className="text-xs text-white">
            I agree to the{" "}
            <TermsDialog
              trigger={
                <button type="button" className="text-[#39FF14] hover:underline">
                  Terms & Conditions
                </button>
              }
            />{" "}
            and understand that my purchase supports the MyNFT4.LIFE mission.
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button
            className="w-full nft-button-primary glow-effect"
            disabled={!agreeToTerms}
            onClick={() => {
              if (agreeToTerms) {
                window.open(getStripeLink(nft.id), "_blank")
              }
            }}
          >
            Buy with Card
          </Button>

          <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium" disabled={!agreeToTerms}>
            Buy with Wallet
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
