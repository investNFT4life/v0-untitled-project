"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ConnectWalletButton() {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)

    // Simuler une connexion
    setTimeout(() => {
      setIsConnecting(false)
      // Rediriger ou mettre à jour l'état après connexion
    }, 2000)
  }

  return (
    <Button
      onClick={handleConnect}
      disabled={isConnecting}
      className="border border-white bg-transparent hover:bg-white hover:text-black transition-colors"
    >
      {isConnecting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connexion...
        </>
      ) : (
        "Connecter Wallet"
      )}
    </Button>
  )
}
