"use client"

import type React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

interface TermsDialogProps {
  trigger: React.ReactNode
}

export function TermsDialog({ trigger }: TermsDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-[80vh] overflow-y-auto glass border border-border rounded-xl p-6 shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-2xl font-bold text-gradient">Terms & Conditions</Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="rounded-full p-1.5 bg-muted hover:bg-muted/80 transition-colors">
                        <X className="h-4 w-4" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="text-muted-foreground mt-2">
                    Please read these terms and conditions carefully before using our service.
                  </Dialog.Description>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary">1. Introduction</h3>
                  <p>
                    Welcome to myNFT4.life. These Terms and Conditions govern your use of our website and services,
                    including the purchase and ownership of our NFTs.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">2. NFT Ownership</h3>
                  <p>
                    When you purchase an NFT from myNFT4.life, you own the NFT (the non-fungible token) that points to a
                    specific digital asset. Your purchase of the NFT means:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have a right to sell, trade, or transfer the NFT.</li>
                    <li>
                      You have a license to display the associated digital asset for personal, non-commercial use.
                    </li>
                    <li>
                      You do not own the copyright, trademark, or other intellectual property rights to the underlying
                      content.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary">3. Use of Funds</h3>
                  <p>
                    myNFT4.life is committed to transparency in how funds from NFT sales are used. A significant portion
                    of proceeds will be directed toward medical initiatives, healthcare access, and veterinary care as
                    outlined in our mission statement.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">4. Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the NFT for any illegal purpose.</li>
                    <li>Infringe upon the intellectual property rights of myNFT4.life or any third party.</li>
                    <li>
                      Use the NFT or associated content in a manner that is harmful, fraudulent, deceptive, threatening,
                      harassing, defamatory, obscene, or otherwise objectionable.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary">5. Disclaimers</h3>
                  <p>
                    NFTs are a relatively new and evolving technology. The value of NFTs can be volatile and may
                    decrease over time. myNFT4.life makes no guarantees regarding the future value of the NFTs sold on
                    our platform.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">6. Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, myNFT4.life shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                    incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">7. Changes to Terms</h3>
                  <p>
                    myNFT4.life reserves the right to modify these Terms at any time. We will provide notice of
                    significant changes by posting the updated Terms on our website.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">8. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:invest.m21@proton.me" className="text-primary hover:underline">
                      invest.m21@proton.me
                    </a>
                    .
                  </p>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">Last updated: May 7, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
