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

interface TermsDialogProps {
  trigger: React.ReactNode
  title?: string
}

export function TermsDialog({ trigger, title = "Terms & Conditions" }: TermsDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[650px] max-h-[80vh] bg-[#121212] border border-[#00BFFF]/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#00BFFF]">{title}</DialogTitle>
          <DialogDescription className="text-gray-400 text-sm">
            (NFT Participation Agreement – myNFT4.life)
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">1. Introduction</h3>
              <p className="text-gray-300 text-sm">
                myNFT4.life is a global initiative merging digital innovation, medical progress, and humanitarian
                action.
                <br />
                <br />
                By acquiring one of our NFTs, you are not merely purchasing a digital asset — you are actively
                supporting the deployment of life-saving medical technology to underserved populations worldwide.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">2. NFT Structure</h3>
              <p className="text-gray-300 text-sm">
                A total of 231,100 NFTs will be issued, divided into three symbolic editions:
              </p>
              <div className="mt-2 ml-2">
                <p className="text-gray-300 text-sm font-medium">Black Platinum Edition – Ambassador</p>
                <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-1">
                  <li>Limited to 2,100 NFTs only</li>
                  <li>Includes a numbered physical medical device + box of 10 consumables</li>
                  <li>Grants lifetime ambassador status</li>
                </ul>

                <p className="text-gray-300 text-sm font-medium mt-2">Gold Edition – Act For Life</p>
                <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-1">
                  <li>Limited to 21,000 NFTs</li>
                  <li>Digital token granting access to our innovation platform and impact roadmap</li>
                </ul>

                <p className="text-gray-300 text-sm font-medium mt-2">Zinc Edition – Health for All</p>
                <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-1">
                  <li>Limited to 210,000 NFTs</li>
                  <li>Entry-level token supporting the mission with access to updates and milestones</li>
                </ul>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                All NFTs are unique, verifiable, and minted on the blockchain. Ownership is transferred automatically
                upon confirmed payment (via crypto or Stripe).
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">3. Purpose & Value</h3>
              <p className="text-gray-300 text-sm">
                By purchasing an NFT, you confirm your participation in the myNFT4.life mission.
                <br />
                <br />
                These NFTs do not represent financial equity or investment, but symbolize impact, purpose, and support
                for global health.
                <br />
                <br />
                Each token directly contributes to funding the development and delivery of certified medical
                technologies focused on:
              </p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>Cardiology</li>
                <li>Pediatrics</li>
                <li>STI/STD prevention and screening</li>
                <li>Drug use detection</li>
                <li>Animal health diagnostics</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                This project is designed to benefit both human and animal populations, especially the most vulnerable.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">
                4. Ambassador Privileges – Black Platinum Edition
              </h3>
              <p className="text-gray-300 text-sm">Holders of the Black Edition (2,100 only) receive:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>A collector-numbered medical device</li>
                <li>A box of 10 consumables</li>
                <li>Exclusive early access to beta features, product launches, and private test phases</li>
                <li>Recognition as founding ambassadors of the project</li>
                <li>Optional involvement in humanitarian deployments</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">5. Transparency & Use of Funds</h3>
              <p className="text-gray-300 text-sm">All proceeds will be allocated to:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>Manufacturing and distributing medical diagnostic tools</li>
                <li>
                  Supporting public health deployments in high-priority zones (Sub-Saharan Africa, Southeast Asia,
                  refugee camps, etc.)
                </li>
                <li>Maintaining NFT infrastructure (smart contracts, web hosting, compliance systems)</li>
              </ul>
              <p className="text-gray-300 text-sm mt-2">
                We are committed to transparency and will share regular updates with the community.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">6. Our Vision</h3>
              <p className="text-gray-300 text-sm">
                We believe health is a human right, not a luxury.
                <br />
                <br />
                This initiative exists because traditional systems have failed to meet the urgency of today's global
                health crises.
                <br />
                <br />
                myNFT4.life is more than a campaign — it's a movement. A resistance through care, led by a community
                choosing action over apathy.
                <br />
                <br />
                Our goal: multiply the impact of each NFT by 5× within the next 5 years.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">7. Refund Policy</h3>
              <p className="text-gray-300 text-sm">
                Due to the immutable nature of blockchain and NFT minting, all sales are final.
                <br />
                <br />
                In case of technical issues or delivery concerns, our team will support each participant individually
                with full transparency.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">8. Privacy & Data</h3>
              <p className="text-gray-300 text-sm">
                We collect only essential information: name, email, and shipping address (for Black Edition only).
                <br />
                <br />
                Your data is stored securely, never sold or shared.
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold mb-2 text-[#00BFFF]">9. Confirmation & Delivery</h3>
              <p className="text-gray-300 text-sm">After successful payment:</p>
              <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>You will receive a confirmation email</li>
                <li>Your NFT will be delivered to your wallet or via email-based minting (if supported)</li>
                <li>
                  (For Black Edition) Your physical medical device + consumables will be shipped securely with tracking
                </li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
