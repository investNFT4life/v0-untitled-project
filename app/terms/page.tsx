import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MedtechGraphic } from "@/components/medtech-graphic"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-1 pt-24">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <MedtechGraphic type="medical" className="w-full h-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">
                  Welcome to nft 4Life. By accessing our site and using our services, you agree to comply with and be
                  bound by these terms and conditions. These terms apply to all visitors, users, and others who access
                  our site.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. NFT Purchase</h2>
                <p>
                  By purchasing an NFT on our platform, you are buying a digital token representing a digital artwork.
                  You are not purchasing the artwork itself, but rather a token that represents your ownership of the
                  work on the blockchain.
                </p>
                <p>
                  Each NFT is unique and is sold "as is" without warranties of any kind, either express or implied. Once
                  an NFT is sold, all sales are final.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Funds</h2>
                <p>
                  nft 4Life commits to using 50% of the revenue generated from NFT sales to fund verified medical
                  projects. Details of fund usage will be regularly published on our website and verifiable via the
                  blockchain.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
                <p>
                  All NFTs sold on our platform are protected by copyright. Purchasing an NFT gives you the right to own
                  the token, but does not automatically give you rights to the underlying artwork beyond personal,
                  non-commercial use.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
                <p>
                  nft 4Life will not be liable for any losses or damages arising from your use of our site or the
                  purchase of NFTs, including but not limited to indirect or consequential loss, loss of profits,
                  revenue, data, or goodwill.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Modifications will take effect immediately
                  upon posting on this page. It is your responsibility to review these terms regularly.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
                <p>If you have any questions regarding these terms, please contact us at contact@nft4life.com.</p>

                <p className="mt-8 text-gray-400">Last updated: May 6, 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
