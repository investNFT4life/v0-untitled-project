import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import PlatformLogo from "@/components/platform-logo"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/">
              <PlatformLogo className="w-6 h-6" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projets
              </Link>
              <Link href="/dashboard/transactions" className="text-sm text-muted-foreground hover:text-foreground">
                Transactions
              </Link>
              <Link href="/dashboard/settings" className="text-sm text-muted-foreground hover:text-foreground">
                Paramètres
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              0x1a2...3b4c
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Solde</CardTitle>
              <CardDescription>Votre solde actuel</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0.25 ETH</p>
              <p className="text-sm text-muted-foreground">≈ 450 EUR</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Déposer des fonds</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NFTs</CardTitle>
              <CardDescription>Vos collections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Collections actives</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Voir les NFTs
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Abonnements</CardTitle>
              <CardDescription>Via Stripe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1</p>
              <p className="text-sm text-muted-foreground">Abonnement actif</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Gérer
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Transactions récentes</h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/40">
              <div className="font-medium">Date</div>
              <div className="font-medium">Type</div>
              <div className="font-medium">Montant</div>
              <div className="font-medium">Statut</div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-4 gap-4 p-4">
                <div className="text-sm">05/06/2025</div>
                <div className="text-sm">Achat NFT</div>
                <div className="text-sm">0.05 ETH</div>
                <div className="text-sm text-green-600">Confirmé</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4">
                <div className="text-sm">03/06/2025</div>
                <div className="text-sm">Abonnement</div>
                <div className="text-sm">20 EUR</div>
                <div className="text-sm text-green-600">Payé</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4">
                <div className="text-sm">01/06/2025</div>
                <div className="text-sm">Dépôt</div>
                <div className="text-sm">0.2 ETH</div>
                <div className="text-sm text-green-600">Confirmé</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 Web3Platform. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}
