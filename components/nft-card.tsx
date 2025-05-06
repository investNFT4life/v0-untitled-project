"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreditCard, Wallet, Check } from "lucide-react"

interface NFTProps {
  nft: {
    id: string
    name: string
    subtitle?: string
    price: string
    euroPrice: string
    description: string
    benefits?: string[]
    legalText?: string
    impact?: string
    availability?: string
    image: string
    color: string
    textColor: string
    buttonColor: string
  }
}

export default function NFTCard({ nft }: NFTProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-gray-900 border-0 overflow-hidden relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ffcc] to-[#4158D0] rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
        <div className={`h-2 w-full bg-gradient-to-r ${nft.color} relative`}></div>
        <CardContent className="p-6 relative">
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <div className="relative w-full aspect-square bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.name}
                  width={400}
                  height={400}
                  className="w-4/5 h-4/5 object-contain"
                />
              </motion.div>

              {/* Effet de lueur autour du NFT */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${nft.color} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
              ></div>

              {/* Effet de particules */}
              {isHovered && (
                <>
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#00ffcc] rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#8A2BE2] rounded-full animate-ping"></div>
                </>
              )}
            </div>
          </div>

          <h3 className={`text-2xl font-bold mb-1 ${nft.textColor}`}>{nft.name}</h3>
          {nft.subtitle && <p className="text-gray-300 text-sm mb-3">{nft.subtitle}</p>}

          <div className="mb-4">
            <div>
              <p className="text-gray-400 text-sm">Price</p>
              <p className="text-xl font-bold">{nft.price}</p>
              <p className="text-sm text-gray-400">{nft.euroPrice}</p>
              {nft.availability && <p className="text-sm text-green-400 mt-1 font-medium">{nft.availability}</p>}
            </div>
          </div>

          <p className="text-gray-300 my-4">{nft.description}</p>

          {nft.benefits && (
            <div className="my-4">
              <p className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                {nft.id.charAt(0).toUpperCase() + nft.id.slice(1)} Benefits
              </p>
              <ul className="space-y-1">
                {nft.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-[#00ffcc]" />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {nft.impact && (
            <div className="bg-gray-800 p-4 rounded-lg border border-pink-500/10 mb-4">
              <p className="text-sm font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                Impact
              </p>
              <p className="text-sm text-gray-300">{nft.impact}</p>
            </div>
          )}

          {nft.legalText && (
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id={`terms-${nft.id}`}
                className="mr-2 mt-1"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
              />
              <label htmlFor={`terms-${nft.id}`} className="text-xs text-gray-400">
                {nft.legalText}
              </label>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className={`${nft.buttonColor} text-white shadow-lg shadow-[#00ffcc]/20 w-full`}
                  disabled={nft.legalText && !agreeToTerms}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Buy with Card
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 text-white border border-pink-500/20 backdrop-blur-lg">
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${nft.textColor}`}>{nft.name}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Complete your purchase with credit card
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-2 bg-gray-800 border border-[#00ffcc]/20 rounded-md focus:border-[#00ffcc]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffcc]/30"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-2 bg-gray-800 border border-[#00ffcc]/20 rounded-md focus:border-[#00ffcc]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffcc]/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-2 bg-gray-800 border border-[#00ffcc]/20 rounded-md focus:border-[#00ffcc]/50 focus:outline-none focus:ring-1 focus:ring-[#00ffcc]/30"
                        />
                      </div>
                    </div>
                    <Button className={`w-full ${nft.buttonColor} text-white mt-4 shadow-lg shadow-[#00ffcc]/20`}>
                      Pay {nft.price}
                    </Button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-[#00ffcc]/30 hover:bg-[#00ffcc]/10 w-full"
                  disabled={nft.legalText && !agreeToTerms}
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Buy with Wallet
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 text-white border border-pink-500/20 backdrop-blur-lg">
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${nft.textColor}`}>{nft.name}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Complete your purchase with crypto wallet
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="text-center space-y-4">
                    <div className="bg-gray-800 p-4 rounded-md border border-pink-500/20">
                      <p className="mb-2">Send exactly</p>
                      <p className="text-2xl font-bold">{nft.price}</p>
                      <p className="text-sm text-gray-400">to the address</p>
                      <p className="font-mono text-sm bg-gray-700 p-2 rounded mt-2 break-all border border-pink-500/10">
                        0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                      </p>
                    </div>
                    <Button className={`${nft.buttonColor} text-white shadow-lg shadow-[#00ffcc]/20`}>
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
