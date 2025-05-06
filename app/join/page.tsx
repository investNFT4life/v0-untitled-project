import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            nft 4Life
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Join the Movement</h1>
            <p className="mt-2 text-lg">Be part of the first NFT collection that saves lives</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-transparent border-white text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border-white text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet" className="text-white">
                Wallet Address (optional)
              </Label>
              <Input
                id="wallet"
                placeholder="0x..."
                className="bg-transparent border-white text-white placeholder:text-gray-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full border border-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Join Now
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400">
            By joining, you'll receive updates about our NFT drops and impact initiatives.
          </p>
        </div>
      </main>
    </div>
  )
}
