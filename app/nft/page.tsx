import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"

export default function NFTPage() {
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
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600&query=abstract medical themed NFT art with blue and white elements"
              alt="Token4Life NFT"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Token4Life Genesis Collection</h1>

            <div className="space-y-2">
              <p className="text-gray-400">Price</p>
              <p className="text-2xl font-bold">0.5 ETH</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400">Impact</p>
              <p>50% of proceeds fund medical research and healthcare access initiatives</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400">Supply</p>
              <p>Limited to 1,000 unique NFTs</p>
            </div>

            <div className="pt-4 space-y-4">
              <ConnectWalletButton />

              <Button
                asChild
                variant="outline"
                className="w-full border border-white bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                <Link href="/collection">View Full Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
