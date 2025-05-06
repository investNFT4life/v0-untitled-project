"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PrivacyDialogProps {
  trigger: React.ReactNode
  title?: string
}

export function PrivacyDialog({ trigger, title = "Privacy Policy" }: PrivacyDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[650px] max-h-[80vh] bg-[#121212] border border-[#00BFFF]/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#00BFFF]">{title}</DialogTitle>
          <DialogDescription className="text-gray-400 text-sm">myNFT4.life Privacy Policy</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">1. Information We Collect</h3>
              <p className="text-gray-300 text-sm">We collect only essential information:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>Name and email address for all NFT purchases</li>
                <li>Shipping address (for Black Edition NFT holders only)</li>
                <li>Wallet address (if applicable)</li>
                <li>Transaction data related to your NFT purchase</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">2. How We Use Your Information</h3>
              <p className="text-gray-300 text-sm">Your information is used exclusively for:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>Processing your NFT purchase</li>
                <li>Delivering your digital assets</li>
                <li>Shipping physical items (Black Edition only)</li>
                <li>Providing updates about the myNFT4.life mission and impact</li>
                <li>Communicating important information about your NFT</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">3. Data Security</h3>
              <p className="text-gray-300 text-sm">
                We implement industry-standard security measures to protect your personal information. Your data is
                stored securely and is never sold or shared with third parties except as required to fulfill our
                services (such as shipping partners for Black Edition NFTs).
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">4. Your Rights</h3>
              <p className="text-gray-300 text-sm">You have the right to:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (where applicable)</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                To exercise these rights, please contact us at invest.m21@proton.me.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">5. Cookies and Tracking</h3>
              <p className="text-gray-300 text-sm">
                Our website uses essential cookies to ensure basic functionality. We may use analytics tools to improve
                our service, but these are configured to respect your privacy.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">6. Changes to This Policy</h3>
              <p className="text-gray-300 text-sm">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated effective date.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">7. Contact Us</h3>
              <p className="text-gray-300 text-sm">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us
                at invest.m21@proton.me.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
