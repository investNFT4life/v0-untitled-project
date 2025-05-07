import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const data = await req.json()
    const { name, email, subject, message } = data

    // Vérifier que tous les champs requis sont présents
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Boolean(process.env.EMAIL_SERVER_SECURE), // true pour 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Configurer l'email
    const mailOptions = {
      from: `"NFT4LIFE Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || "invest.m21@proton.me", // Adresse email de réception
      replyTo: email,
      subject: `Formulaire de contact: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #39FF14; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouveau message du formulaire de contact NFT4LIFE</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site NFT4LIFE.</p>
          </div>
        </div>
      `,
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptions)

    // Retourner une réponse de succès
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
  }
}
