"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "中文" },
]

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code)
    // Ici, vous pourriez implémenter la logique de changement de langue
    // par exemple avec i18n ou une autre bibliothèque
  }

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage)?.name || "English"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#39FF14] transition-colors">
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{currentLanguage}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#121212] border border-[#39FF14]/20 text-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center justify-between cursor-pointer hover:bg-[#39FF14]/10 ${
              selectedLanguage === language.code ? "text-[#39FF14]" : "text-white"
            }`}
          >
            {language.name}
            {selectedLanguage === language.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
