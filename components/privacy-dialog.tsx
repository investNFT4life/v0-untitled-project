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

interface PrivacyDialogProps {
  trigger: React.ReactNode
}

export function PrivacyDialog({ trigger }: PrivacyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#121212] text-white border border-[#39FF14]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#39FF14] text-glow">Privacy Policy</DialogTitle>
          <DialogDescription className="text-white">
            This Privacy Policy describes how we collect, use, and share your personal information.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal data in connection with our
            services.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">1. Data We Collect</h3>
          <p>We only collect information that is strictly necessary for the operation of our service, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Personal identifiers: name, email address, crypto wallet address, and payment information (only when you
              purchase an NFT or contact us).
            </li>
            <li>Technical data: IP address, browser type, operating system, and visited pages.</li>
            <li>Transaction data: records of NFT purchases, sales, or transfers made through our platform.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#39FF14]">2. Use of Your Data</h3>
          <p>We use the information we collect solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process transactions and deliver the NFTs you've purchased.</li>
            <li>Communicate with you about your purchases, our services, or policy updates.</li>
            <li>Improve our services.</li>
            <li>Comply with legal obligations.</li>
            <li>Prevent fraud and enforce our terms of service.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#39FF14]">3. Privacy Commitment</h3>
          <p>
            We do not share your data for commercial or advertising purposes. Any data shared with third-party providers
            is strictly limited to technical operations and bound by confidentiality agreements.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">4. Blockchain Transactions</h3>
          <p>
            Please note that blockchain transactions are public by design. When you purchase an NFT, the transaction
            details — including your wallet address — are permanently recorded on the blockchain and visible to the
            public.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">5. GDPR Compliance</h3>
          <p>
            We fully comply with the European General Data Protection Regulation (GDPR). Depending on your location, you
            may have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to correct or delete your data.</li>
            <li>The right to restrict or object to the processing of your data.</li>
            <li>The right to data portability.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#39FF14]">6. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to safeguard your personal data. However, no
            method of online transmission or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">7. Updates to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the new
            "Last updated" date.
          </p>

          <h3 className="text-lg font-semibold text-[#39FF14]">8. Contact</h3>
          <p>
            If you have any questions or requests regarding your data, please contact us at:
            <a href="mailto:invest.m21@proton.me" className="text-[#39FF14] hover:underline ml-1">
              invest.m21@proton.me
            </a>
          </p>

          <div className="pt-4">
            <p className="text-sm text-gray-400">Last updated: May 7, 2025</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
