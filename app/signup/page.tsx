import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PlatformLogo from "@/components/platform-logo"

export default function SignupPage() {
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
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Créer un compte</h1>
            <p className="text-sm text-muted-foreground mt-2">Commencez à utiliser notre plateforme Web3</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.291 18.806c-1.007.34-2.107.547-3.291.547-1.183 0-2.283-.207-3.291-.547-1.007-.34-1.908-.84-2.702-1.495-.794-.655-1.428-1.44-1.901-2.354-.473-.914-.709-1.91-.709-2.957 0-1.047.236-2.043.709-2.957.473-.914 1.107-1.699 1.901-2.354.794-.655 1.695-1.155 2.702-1.495C9.717 7.207 10.817 7 12 7c1.183 0 2.283.207 3.291.547 1.007.34 1.908.84 2.702 1.495.794.655 1.428 1.44 1.901 2.354.473.914.709 1.91.709 2.957 0 1.047-.236 2.043-.709 2.957-.473.914-1.107 1.699-1.901 2.354-.794.655-1.695 1.155-2.702 1.495z" />
              </svg>
              ThirdWeb
            </Button>
            <Button variant="outline">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.24 0H9.76L0 24h4.8l1.8-4.8h10.8l1.8 4.8H24L14.24 0zm-6.4 15.2L12 4l4.16 11.2H7.84z" />
              </svg>
              Stripe
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center">
        <p className="text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Se connecter
          </Link>
        </p>
      </footer>
    </div>
  )
}
