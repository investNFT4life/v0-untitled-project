import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            nft 4Life
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold">About Token4Life</h1>

          <div className="space-y-6">
            <p className="text-lg">
              Token4Life represents a revolutionary approach to NFTs, combining digital art with real-world impact in
              the medical field.
            </p>

            <p className="text-lg">
              Our mission is simple: create beautiful, meaningful digital assets that directly fund medical solutions
              for both people and animals in need.
            </p>

            <p className="text-lg">
              Unlike traditional NFTs, every Token4Life NFT purchase contributes to a transparent fund that supports:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Medical research initiatives</li>
              <li>Access to healthcare in underserved communities</li>
              <li>Veterinary care for animals in need</li>
              <li>Development of innovative medical technologies</li>
            </ul>
          </div>

          <div className="pt-4">
            <Button
              asChild
              className="border border-white bg-transparent hover:bg-white hover:text-black transition-colors px-8 py-6 text-base"
            >
              <Link href="/join">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
