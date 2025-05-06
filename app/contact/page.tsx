import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { MedtechGraphic } from "@/components/medtech-graphic"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <MedtechGraphic type="circuit" className="w-full h-64" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
              <p className="text-xl text-center max-w-3xl mx-auto mb-16">
                Have questions about our NFTs or our mission? We're here to help. Fill out the form below and we'll get
                back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-800 p-6 rounded-xl text-center border border-blue-900/30 backdrop-blur-sm">
                  <Mail className="mx-auto h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">contact@nft4life.com</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-center border border-blue-900/30 backdrop-blur-sm">
                  <Phone className="mx-auto h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-center border border-blue-900/30 backdrop-blur-sm">
                  <MapPin className="mx-auto h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">123 NFT Avenue, 75001 Paris</p>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-xl border border-blue-900/30 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
            <MedtechGraphic type="molecules" className="w-full h-64" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
