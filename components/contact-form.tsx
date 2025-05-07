"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Send, Check, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  // Clé d'accès Web3Forms fournie
  const WEB3FORMS_ACCESS_KEY = "db2040f0-3829-45ad-a3f4-f779e89d4665"

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

    // Validation supplémentaire
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all form fields.")
      setIsSubmitting(false)
      return
    }

    // Vérification basique du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    try {
      // Utiliser Web3Forms pour envoyer l'email avec la clé fournie
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "NFT4LIFE Contact Form",
          // Ajouter des champs supplémentaires pour le suivi
          botcheck: "",
          redirect: "false",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        // Ajouter un événement de suivi si nécessaire
        console.log("Form submitted successfully", data)
      } else {
        throw new Error(data.message || "An error occurred while sending the message")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error sending message. Please try again later.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contact</h2>
          <p className="text-lg">Have questions or want to learn more about our mission? We'd love to hear from you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-gradient glass overflow-hidden">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">Message Sent!</h3>
                  <p className="text-foreground/80 mb-8 max-w-md">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient hover:opacity-90 transition-opacity"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold mb-4 text-gradient">Get in Touch</h3>
                    <p className="text-foreground/80 mb-8">
                      Have questions about our NFTs or mission? We're here to help you make a difference.
                    </p>

                    <div className="space-y-6 mb-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Email Us</h4>
                          <p className="text-muted-foreground">invest.m21@proton.me</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">Location</h4>
                          <p className="text-muted-foreground">Geneva - Switzerland</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                      <input type="hidden" name="redirect" value="false" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                            Your Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 text-foreground"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                            Your Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 text-foreground"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 text-foreground"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary/30 text-foreground resize-none"
                        />
                      </div>

                      {error && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4 flex items-start">
                          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-red-500 text-sm">{error}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient hover:opacity-90 transition-opacity"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
        </motion.div>
      </div>
    </section>
  )
}
