import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PlatformLogo from "@/components/platform-logo"

export default function EmailLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <Link href="/">
          <PlatformLogo className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-sm hover:text-gray-600">
            Documentation
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-600">
            Contact
          </Link>
          <Link href="/signup" className="text-sm hover:text-gray-600">
            S'inscrire
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Connexion par email</h1>
            <p className="text-sm text-muted-foreground mt-2">Entrez votre email pour vous connecter</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
              <div className="text-right">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>

          <div className="text-center">
            <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
              ← Retour aux options de connexion
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center">
        <p className="text-sm text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <Link href="/signup" className="text-blue-600 hover:text-blue-800">
            S'inscrire
          </Link>
        </p>
      </footer>
    </div>
  )
}
