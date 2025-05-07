"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
]

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code)
  }

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage)?.name || "English"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{currentLanguage}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass border border-border">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center justify-between cursor-pointer hover:bg-primary/10 ${
              selectedLanguage === language.code ? "text-primary" : "text-foreground"
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
