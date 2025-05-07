"use client"

import Link from "next/link"
import { TermsDialog } from "./terms-dialog"
import { PrivacyDialog } from "./privacy-dialog"
import { SiteLogo } from "./site-logo"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-background border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <SiteLogo className="mb-4" />
            <p className="text-muted-foreground">
              A marketplace for digital collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive
              digital assets.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#nfts" className="text-muted-foreground hover:text-primary transition-colors">
                  NFTs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Email: invest.m21@proton.me</li>
              <li>Geneva, Switzerland</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Legal</h3>
            <ul className="space-y-3">
              <li>
                <TermsDialog
                  trigger={
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                      Terms & Conditions
                    </button>
                  }
                />
              </li>
              <li>
                <PrivacyDialog
                  trigger={
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                      Privacy Policy
                    </button>
                  }
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          <p>Copyright © 2023 M21</p>
        </div>
      </div>
    </footer>
  )
}
