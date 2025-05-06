import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text hero-gradient">Terms & Conditions</h1>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">1. Introduction</h2>
                <p>
                  Welcome to myNFT4.life. These Terms & Conditions govern your use of our website and services,
                  including the purchase and ownership of our NFTs. By accessing our website or purchasing our NFTs, you
                  agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">2. NFT Purchases</h2>
                <p>
                  When you purchase a myNFT4.life token, you are acquiring a blockchain-based digital asset. The
                  purchase of an NFT does not grant you ownership rights to any physical asset unless explicitly stated
                  in the NFT description.
                </p>
                <p className="mt-2">
                  Each NFT purchase contributes to our mission of funding innovative medical solutions and improving
                  global health access as described on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">3. Ownership Rights</h2>
                <p>
                  When you purchase an NFT, you own the NFT (the specific tokenized digital asset) but not the
                  underlying intellectual property rights. You receive a license to use, copy, and display the NFT for
                  personal, non-commercial use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">4. Payments and Fees</h2>
                <p>
                  All purchases are final and non-refundable. Prices are listed in USDT but may be subject to change.
                  You are responsible for any transaction fees associated with your purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">5. Impact Tracking</h2>
                <p>
                  We are committed to transparency regarding the impact of your NFT purchase. We will provide regular
                  updates on how funds are being used to support our medical initiatives through our blockchain
                  traceability system.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">6. Limitation of Liability</h2>
                <p>
                  myNFT4.life is not responsible for any losses, damages, or claims arising from your use of our website
                  or services, including but not limited to cryptocurrency wallet interactions, market volatility, or
                  technical issues.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon
                  posting on our website. Your continued use of our services after any such changes constitutes your
                  acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">8. Contact</h2>
                <p>If you have any questions about these Terms, please contact us at invest.m21@proton.me.</p>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-[#00BFFF] hover:bg-[#40E0FF] text-black font-medium">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
