import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text hero-gradient">Privacy Policy</h1>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">1. Introduction</h2>
                <p>
                  At myNFT4.life, we respect your privacy and are committed to protecting your personal data. This
                  Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
                  or purchase our NFTs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">2. Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, wallet address, and transaction
                  data when you interact with our website or purchase our NFTs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">3. How We Use Your Information</h2>
                <p>
                  We use your information to process transactions, provide customer support, send updates about our
                  initiatives, and improve our services. We may also use anonymized data for statistical analysis and
                  impact reporting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">5. Third-Party Services</h2>
                <p>
                  Our website may use third-party services for payment processing, analytics, and other functions. These
                  services have their own privacy policies, and we recommend reviewing them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">6. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights regarding your personal data, including the right to
                  access, correct, or delete your information. Please contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">7. Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#00BFFF]">8. Contact</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at invest.m21@proton.me.</p>
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
