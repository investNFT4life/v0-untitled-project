"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TermsDialogProps {
  trigger: React.ReactNode
}

export function TermsDialog({ trigger }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#121212] text-white border border-[#39FF14]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#39FF14] text-glow">Terms & Conditions</DialogTitle>
          <DialogDescription className="text-white">
            Please read these terms and conditions carefully before using our service.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-[#39FF14]">1. Introduction</h3>
          <p>
            Welcome to myNFT4.life. These Terms and Conditions govern your use of our website and services, including
            the purchase and ownership of our NFTs.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">2. NFT Ownership</h3>
          <p>
            When you purchase an NFT from myNFT4.life, you own the NFT (the non-fungible token) that points to a
            specific digital asset. Your purchase of the NFT means:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have a right to sell, trade, or transfer the NFT.</li>
            <li>You have a license to display the associated digital asset for personal, non-commercial use.</li>
            <li>
              You do not own the copyright, trademark, or other intellectual property rights to the underlying content.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-[#39FF14]">3. Use of Funds</h3>
          <p>
            myNFT4.life is committed to transparency in how funds from NFT sales are used. A significant portion of
            proceeds will be directed toward medical initiatives, healthcare access, and veterinary care as outlined in
            our mission statement.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">4. Prohibited Activities</h3>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the NFT for any illegal purpose.</li>
            <li>Infringe upon the intellectual property rights of myNFT4.life or any third party.</li>
            <li>
              Use the NFT or associated content in a manner that is harmful, fraudulent, deceptive, threatening,
              harassing, defamatory, obscene, or otherwise objectionable.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-[#39FF14]">5. Disclaimers</h3>
          <p>
            NFTs are a relatively new and evolving technology. The value of NFTs can be volatile and may decrease over
            time. myNFT4.life makes no guarantees regarding the future value of the NFTs sold on our platform.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">6. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, myNFT4.life shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
            or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">7. Changes to Terms</h3>
          <p>
            myNFT4.life reserves the right to modify these Terms at any time. We will provide notice of significant
            changes by posting the updated Terms on our website.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">8. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:invest.m21@proton.me" className="text-[#39FF14] hover:underline">
              invest.m21@proton.me
            </a>
            .
          </p>

          <div className="pt-4">
            <p className="text-sm text-gray-400">Last updated: May 7, 2025</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
