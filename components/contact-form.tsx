"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Send, Check } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // En production, vous utiliseriez une API route pour envoyer l'email
      // Exemple:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     recipient: 'invest.m21@proton.me'
      //   })
      // })

      // if (!response.ok) throw new Error('Failed to send message')

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError("Failed to send message. Please try again later.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="bg-transparent border-0 overflow-hidden relative shadow-xl">
        <div className="h-2 w-full bg-gradient-to-r from-[#00BFFF] to-[#40E0FF] relative"></div>
        <CardContent className="p-6 relative bg-[#121212]/80 backdrop-blur-sm">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Message Sent!</h3>
              <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#00BFFF] hover:bg-[#40E0FF] text-black font-medium"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text hero-gradient">
                  Get in Touch with Us
                </h3>
                <p className="text-lg mb-6 text-white">Questions? Reach out.</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#00BFFF] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p className="text-gray-300">invest.m21@proton.me</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#00BFFF] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Geneva - Switzerland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 bg-black border border-[#00BFFF]/20 rounded-md focus:border-[#00BFFF]/50 focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 bg-black border border-[#00BFFF]/20 rounded-md focus:border-[#00BFFF]/50 focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-white">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 bg-black border border-[#00BFFF]/20 rounded-md focus:border-[#00BFFF]/50 focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2 bg-black border border-[#00BFFF]/20 rounded-md focus:border-[#00BFFF]/50 focus:outline-none focus:ring-1 focus:ring-[#00BFFF]/30 text-white resize-none"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00BFFF] hover:bg-[#40E0FF] text-black font-medium"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
