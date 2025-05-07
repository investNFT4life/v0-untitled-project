"use client"

import type React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

interface PrivacyDialogProps {
  trigger: React.ReactNode
}

export function PrivacyDialog({ trigger }: PrivacyDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-[80vh] overflow-y-auto glass border border-border rounded-xl p-6 shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-2xl font-bold text-gradient">Privacy Policy</Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="rounded-full p-1.5 bg-muted hover:bg-muted/80 transition-colors">
                        <X className="h-4 w-4" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="text-muted-foreground mt-2">
                    This Privacy Policy describes how we collect, use, and share your personal information.
                  </Dialog.Description>
                </div>

                <div className="space-y-6">
                  <p>
                    This Privacy Policy explains how we collect, use, and protect your personal data in connection with
                    our services.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">1. Data We Collect</h3>
                  <p>
                    We only collect information that is strictly necessary for the operation of our service, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Personal identifiers: name, email address, crypto wallet address, and payment information (only
                      when you purchase an NFT or contact us).
                    </li>
                    <li>Technical data: IP address, browser type, operating system, and visited pages.</li>
                    <li>Transaction data: records of NFT purchases, sales, or transfers made through our platform.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary">2. Use of Your Data</h3>
                  <p>We use the information we collect solely to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process transactions and deliver the NFTs you've purchased.</li>
                    <li>Communicate with you about your purchases, our services, or policy updates.</li>
                    <li>Improve our services.</li>
                    <li>Comply with legal obligations.</li>
                    <li>Prevent fraud and enforce our terms of service.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary">3. Privacy Commitment</h3>
                  <p>
                    We do not share your data for commercial or advertising purposes. Any data shared with third-party
                    providers is strictly limited to technical operations and bound by confidentiality agreements.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">4. Blockchain Transactions</h3>
                  <p>
                    Please note that blockchain transactions are public by design. When you purchase an NFT, the
                    transaction details — including your wallet address — are permanently recorded on the blockchain and
                    visible to the public.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">5. GDPR Compliance</h3>
                  <p>
                    We fully comply with the European General Data Protection Regulation (GDPR). Depending on your
                    location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access your personal data.</li>
                    <li>The right to correct or delete your data.</li>
                    <li>The right to restrict or object to the processing of your data.</li>
                    <li>The right to data portability.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary">6. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to safeguard your personal data.
                    However, no method of online transmission or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">7. Updates to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with
                    the new "Last updated" date.
                  </p>

                  <h3 className="text-lg font-semibold text-primary">8. Contact</h3>
                  <p>
                    If you have any questions or requests regarding your data, please contact us at:
                    <a href="mailto:invest.m21@proton.me" className="text-primary hover:underline ml-1">
                      invest.m21@proton.me
                    </a>
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
