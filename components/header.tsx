"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { SiteLogo } from "@/components/site-logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black bg-opacity-80 backdrop-blur-md py-3 shadow-lg shadow-[#39FF14]/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <SiteLogo />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#39FF14] transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#66FF33] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#nfts" className="text-white hover:text-[#39FF14] transition-colors relative group">
                NFTs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#66FF33] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-white hover:text-[#39FF14] transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#66FF33] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <LanguageSelector />
            </nav>

            <div className="flex items-center md:hidden">
              <LanguageSelector />
              <button
                className="ml-4 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <Link href="/" className="text-2xl font-bold">
                  <SiteLogo />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
                <Link
                  href="/"
                  className="text-white hover:text-[#39FF14] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#nfts"
                  className="text-white hover:text-[#39FF14] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NFTs
                </Link>
                <Link
                  href="#contact"
                  className="text-white hover:text-[#39FF14] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
