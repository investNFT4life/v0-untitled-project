import { redirect } from "next/navigation"

export default function ContactPage() {
  // Rediriger vers la page d'accueil avec l'ancre du formulaire de contact
  redirect("/#contact")
}
