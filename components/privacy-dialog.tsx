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
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#121212] text-white border border-[#00BFFF]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#00BFFF]">Privacy Policy</DialogTitle>
          <DialogDescription className="text-white">
            This Privacy Policy describes how we collect, use, and share your personal information.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-[#00BFFF]">1. Information We Collect</h3>
          <p>We collect several types of information from and about users of our website, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Personal identifiers such as name, email address, wallet address, and payment information when you
              purchase an NFT or contact us.
            </li>
            <li>
              Usage data such as IP address, browser type, operating system, and pages visited when you interact with
              our website.
            </li>
            <li>
              Transaction data including records of NFTs you've purchased, sold, or transferred through our platform.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-[#00BFFF]">2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process transactions and deliver NFTs you've purchased.</li>
            <li>Communicate with you about your purchases, our services, and updates to our policies.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations.</li>
            <li>Prevent fraud and enforce our terms of service.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#00BFFF]">3. Information Sharing</h3>
          <p>We may share your personal information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who help us operate our business and website.</li>
            <li>
              Legal authorities when required by law or to protect our rights, privacy, safety, or property, or that of
              our users or others.
            </li>
            <li>
              Business partners in connection with blockchain transactions necessary to complete NFT purchases and
              transfers.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-[#00BFFF]">4. Blockchain Transactions</h3>
          <p>
            Please be aware that blockchain transactions are public. When you purchase an NFT, information about the
            transaction, including your wallet address, will be recorded on the blockchain and visible to the public.
          </p>

          <h3 className="text-lg font-semibold text-[#00BFFF]">5. Your Rights</h3>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access the personal information we hold about you.</li>
            <li>The right to request correction or deletion of your personal information.</li>
            <li>The right to restrict or object to our processing of your personal information.</li>
            <li>The right to data portability.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#00BFFF]">6. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h3 className="text-lg font-semibold text-[#00BFFF]">7. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h3 className="text-lg font-semibold text-[#00BFFF]">8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:invest.m21@proton.me" className="text-[#00BFFF] hover:underline">
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
