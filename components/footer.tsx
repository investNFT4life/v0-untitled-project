import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"
import { TermsDialog } from "./terms-dialog"
import { PrivacyDialog } from "./privacy-dialog"

export function Footer() {
  return (
    <footer className="bg-[#0a0f14] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#39FF14]/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#66FF33] text-glow">
              NFT4LIFE
            </h3>
            <p className="text-gray-400">
              The first NFT collection designed to save real lives through blockchain technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#66FF33] text-glow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#nfts" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  NFTs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#66FF33] text-glow">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: invest.m21@proton.me</li>
              <li>Geneva, Switzerland</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#66FF33] text-glow">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <TermsDialog
                  trigger={
                    <button className="text-gray-400 hover:text-[#39FF14] transition-colors text-left">
                      Terms & Conditions
                    </button>
                  }
                />
              </li>
              <li>
                <PrivacyDialog
                  trigger={
                    <button className="text-gray-400 hover:text-[#39FF14] transition-colors text-left">
                      Privacy Policy
                    </button>
                  }
                />
              </li>
            </ul>
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a2a3a] mt-10 pt-10 text-center text-gray-500 text-sm">
          <p>© 2025 myNFT4.life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
