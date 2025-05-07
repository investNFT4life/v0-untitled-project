"use client"

import { motion } from "framer-motion"
import NFTCard from "@/components/nft-card"

interface NFTCollectionProps {
  nfts: Array<{
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
  }>
}

export function NFTCollection({ nfts }: NFTCollectionProps) {
  return (
    <section id="nfts" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Exclusive Collection</h2>
          <p className="text-lg md:text-xl mb-6">
            This is your moment to make a difference. The NFT you choose is more than a symbol — it's a personal stand
            for global health, a declaration that no life should be left without care.
          </p>
          <p className="text-lg md:text-xl">
            <span className="font-semibold">Pick your edition. Power the mission.</span>
            <br />
            <span className="text-gradient font-semibold">Because what you do today… saves lives tomorrow.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nfts.map((nft, index) => (
            <NFTCard key={nft.id} nft={nft} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
