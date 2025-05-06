"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setCurrentLanguage(language)
    // Here you would implement the actual language change logic
    // For example, using i18n or a context provider
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-white hover:text-pink-400 transition-colors focus:outline-none">
        <Globe className="h-5 w-5 mr-1" />
        <span className="hidden sm:inline-block">{currentLanguage.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border border-pink-500/20 text-white backdrop-blur-lg">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`cursor-pointer hover:bg-pink-500/20 ${
              currentLanguage.code === language.code ? "bg-pink-500/20" : ""
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
