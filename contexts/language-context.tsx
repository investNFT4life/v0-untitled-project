"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Définir les langues disponibles
export const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
]

// Traductions simplifiées pour démonstration
const translations = {
  en: {
    // Garder les traductions existantes
    home: "Home",
    nfts: "NFTs",
    contact: "Contact",
    getStarted: "Get Started",
    discoverNfts: "Discover our NFTs",
    contactUs: "Contact Us",
    mission: "Our Mission",
    collection: "Our Exclusive Collection",
    buyWithCard: "Buy with Card",
    buyWithWallet: "Buy with Wallet",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    message: "Message",
    messageSent: "Message Sent!",
    thankYou: "Thank you for reaching out. We'll get back to you soon.",
    sendAnother: "Send Another Message",
    quickLinks: "Quick Links",
    legal: "Legal",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",

    // Ajouter les nouvelles traductions pour la section héros
    blockchainForHealth: "Blockchain for Health",
    reimaginingHealth: "Reimagining Health Access",
    heroDescription:
      "Together, we don't just imagine a fairer world — we make it real. We accelerate care, bring faster diagnostics, and deliver life-saving solutions where only silence once remained.",
    notJustMission: "This isn't just a mission.",
    callForDignity: "It's a call for dignity. A gesture of hope. A promise of life.",

    // Traductions pour la section mission
    missionDescription:
      "We are revolutionizing the NFT world by creating the first collection with a real and measurable impact on global health. Each myNFT4.life token you purchase directly funds innovative medical solutions.",
    joinUs: "Join us. Choose health. Choose life. Act NOW!",
    transparency: "Transparency",
    transparencyDesc:
      "Track the impact of your NFT in real-time through our blockchain traceability system. 100% transparent from purchase to impact.",
    lastingValue: "Lasting Value",
    lastingValueDesc:
      "Your NFT gains value while contributing to saving lives, today and tomorrow. A digital asset with real-world impact.",
    globalImpact: "Global Impact",
    globalImpactDesc:
      "Each token is a raised voice, a broken barrier, a life protected — human or animal. Together, we change the rules.",
    redefiningHealth: "Redefining How We Fund Health",
    redefiningDesc1: "MyNFT4.LIFE is not a collection — it's a turning point.",
    redefiningDesc2:
      "Three powerful NFT editions. One global commitment: to end delays, bring care closer, and stop preventable suffering.",
    togetherWeChange: "Together, we change the rules. With purpose. With heart. With real-world impact.",

    // Traductions pour la section collection
    collectionDesc1:
      "This is your moment to make a difference. The NFT you choose is more than a symbol — it's a personal stand for global health, a declaration that no life should be left without care.",
    pickYourEdition: "Pick your edition. Power the mission.",
    whatYouDoToday: "Because what you do today… saves lives tomorrow.",

    // Traductions pour le formulaire de contact
    contactDesc: "Have questions or want to learn more about our mission? We'd love to hear from you.",
    getInTouch: "Get in Touch",
    contactQuestions: "Have questions about our NFTs or mission? We're here to help you make a difference.",
    emailUs: "Email Us",
    location: "Location",
    sending: "Sending...",

    // Traductions pour le footer
    nftDescription: "The first NFT collection designed to save real lives through blockchain technology.",
    copyright: "© 2025 myNFT4.life. All rights reserved.",
  },
  fr: {
    // Garder les traductions existantes
    home: "Accueil",
    nfts: "NFTs",
    contact: "Contact",
    getStarted: "Commencer",
    discoverNfts: "Découvrir nos NFTs",
    contactUs: "Nous Contacter",
    mission: "Notre Mission",
    collection: "Notre Collection Exclusive",
    buyWithCard: "Acheter par Carte",
    buyWithWallet: "Acheter par Wallet",
    sendMessage: "Envoyer le Message",
    yourName: "Votre Nom",
    yourEmail: "Votre Email",
    subject: "Sujet",
    message: "Message",
    messageSent: "Message Envoyé !",
    thankYou: "Merci de nous avoir contacté. Nous vous répondrons bientôt.",
    sendAnother: "Envoyer un Autre Message",
    quickLinks: "Liens Rapides",
    legal: "Mentions Légales",
    termsConditions: "Conditions Générales",
    privacyPolicy: "Politique de Confidentialité",

    // Ajouter les nouvelles traductions pour la section héros
    blockchainForHealth: "Blockchain pour la Santé",
    reimaginingHealth: "Réinventer l'Accès aux Soins",
    heroDescription:
      "Ensemble, nous n'imaginons pas seulement un monde plus juste — nous le rendons réel. Nous accélérons les soins, apportons des diagnostics plus rapides et proposons des solutions vitales là où seul le silence régnait auparavant.",
    notJustMission: "Ce n'est pas juste une mission.",
    callForDignity: "C'est un appel à la dignité. Un geste d'espoir. Une promesse de vie.",

    // Traductions pour la section mission
    missionDescription:
      "Nous révolutionnons le monde des NFT en créant la première collection avec un impact réel et mesurable sur la santé mondiale. Chaque token myNFT4.life que vous achetez finance directement des solutions médicales innovantes.",
    joinUs: "Rejoignez-nous. Choisissez la santé. Choisissez la vie. Agissez MAINTENANT !",
    transparency: "Transparence",
    transparencyDesc:
      "Suivez l'impact de votre NFT en temps réel grâce à notre système de traçabilité blockchain. 100% transparent de l'achat à l'impact.",
    lastingValue: "Valeur Durable",
    lastingValueDesc:
      "Votre NFT prend de la valeur tout en contribuant à sauver des vies, aujourd'hui et demain. Un actif numérique avec un impact réel.",
    globalImpact: "Impact Mondial",
    globalImpactDesc:
      "Chaque token est une voix élevée, une barrière brisée, une vie protégée — humaine ou animale. Ensemble, nous changeons les règles.",
    redefiningHealth: "Redéfinir Comment Nous Finançons la Santé",
    redefiningDesc1: "MyNFT4.LIFE n'est pas une collection — c'est un tournant.",
    redefiningDesc2:
      "Trois puissantes éditions de NFT. Un engagement mondial : mettre fin aux retards, rapprocher les soins et arrêter les souffrances évitables.",
    togetherWeChange: "Ensemble, nous changeons les règles. Avec détermination. Avec cœur. Avec un impact réel.",

    // Traductions pour la section collection
    collectionDesc1:
      "C'est votre moment pour faire la différence. Le NFT que vous choisissez est plus qu'un symbole — c'est une position personnelle pour la santé mondiale, une déclaration qu'aucune vie ne devrait être laissée sans soins.",
    pickYourEdition: "Choisissez votre édition. Alimentez la mission.",
    whatYouDoToday: "Parce que ce que vous faites aujourd'hui... sauve des vies demain.",

    // Traductions pour le formulaire de contact
    contactDesc:
      "Vous avez des questions ou souhaitez en savoir plus sur notre mission ? Nous serions ravis de vous entendre.",
    getInTouch: "Entrer en Contact",
    contactQuestions:
      "Vous avez des questions sur nos NFTs ou notre mission ? Nous sommes là pour vous aider à faire la différence.",
    emailUs: "Envoyez-nous un Email",
    location: "Emplacement",
    sending: "Envoi en cours...",

    // Traductions pour le footer
    nftDescription:
      "La première collection de NFT conçue pour sauver des vies réelles grâce à la technologie blockchain.",
    copyright: "© 2025 myNFT4.life. Tous droits réservés.",
  },
  // Répéter le même processus pour les autres langues (es, de, it, pt, ru, zh)
  // Pour cet exemple, je vais juste ajouter l'espagnol complet et laisser les autres langues avec leurs traductions de base
  es: {
    // Garder les traductions existantes
    home: "Inicio",
    nfts: "NFTs",
    contact: "Contacto",
    getStarted: "Comenzar",
    discoverNfts: "Descubrir nuestros NFTs",
    contactUs: "Contáctanos",
    mission: "Nuestra Misión",
    collection: "Nuestra Colección Exclusiva",
    buyWithCard: "Comprar con Tarjeta",
    buyWithWallet: "Comprar con Wallet",
    sendMessage: "Enviar Mensaje",
    yourName: "Su Nombre",
    yourEmail: "Su Email",
    subject: "Asunto",
    message: "Mensaje",
    messageSent: "¡Mensaje Enviado!",
    thankYou: "Gracias por contactarnos. Le responderemos pronto.",
    sendAnother: "Enviar Otro Mensaje",
    quickLinks: "Enlaces Rápidos",
    legal: "Legal",
    termsConditions: "Términos y Condiciones",
    privacyPolicy: "Política de Privacidad",

    // Ajouter les nouvelles traductions pour la section héros
    blockchainForHealth: "Blockchain para la Salud",
    reimaginingHealth: "Reimaginando el Acceso a la Salud",
    heroDescription:
      "Juntos, no solo imaginamos un mundo más justo — lo hacemos realidad. Aceleramos la atención, brindamos diagnósticos más rápidos y entregamos soluciones que salvan vidas donde antes solo había silencio.",
    notJustMission: "Esto no es solo una misión.",
    callForDignity: "Es un llamado a la dignidad. Un gesto de esperanza. Una promesa de vida.",

    // Traductions pour la section mission
    missionDescription:
      "Estamos revolucionando el mundo de los NFT creando la primera colección con un impacto real y medible en la salud global. Cada token myNFT4.life que compras financia directamente soluciones médicas innovadoras.",
    joinUs: "Únete a nosotros. Elige la salud. Elige la vida. ¡Actúa AHORA!",
    transparency: "Transparencia",
    transparencyDesc:
      "Sigue el impacto de tu NFT en tiempo real a través de nuestro sistema de trazabilidad blockchain. 100% transparente desde la compra hasta el impacto.",
    lastingValue: "Valor Duradero",
    lastingValueDesc:
      "Tu NFT gana valor mientras contribuye a salvar vidas, hoy y mañana. Un activo digital con impacto real.",
    globalImpact: "Impacto Global",
    globalImpactDesc:
      "Cada token es una voz alzada, una barrera rota, una vida protegida — humana o animal. Juntos, cambiamos las reglas.",
    redefiningHealth: "Redefiniendo Cómo Financiamos la Salud",
    redefiningDesc1: "MyNFT4.LIFE no es una colección — es un punto de inflexión.",
    redefiningDesc2:
      "Tres poderosas ediciones de NFT. Un compromiso global: acabar con los retrasos, acercar la atención y detener el sufrimiento evitable.",
    togetherWeChange: "Juntos, cambiamos las reglas. Con propósito. Con corazón. Con impacto real.",

    // Traductions pour la section collection
    collectionDesc1:
      "Este es tu momento para marcar la diferencia. El NFT que eliges es más que un símbolo — es una postura personal por la salud global, una declaración de que ninguna vida debe quedarse sin atención.",
    pickYourEdition: "Elige tu edición. Impulsa la misión.",
    whatYouDoToday: "Porque lo que haces hoy... salva vidas mañana.",

    // Traductions pour le formulaire de contacto
    contactDesc: "¿Tienes preguntas o quieres saber más sobre nuestra misión? Nos encantaría escucharte.",
    getInTouch: "Ponte en Contacto",
    contactQuestions:
      "¿Tienes preguntas sobre nuestros NFTs o nuestra misión? Estamos aquí para ayudarte a marcar la diferencia.",
    emailUs: "Envíanos un Email",
    location: "Ubicación",
    sending: "Enviando...",

    // Traductions pour le footer
    nftDescription:
      "La primera colección de NFT diseñada para salvar vidas reales a través de la tecnología blockchain.",
    copyright: "© 2025 myNFT4.life. Todos los derechos reservados.",
  },
  // Garder les traductions de base pour les autres langues
  de: {
    // Traductions existantes
    home: "Startseite",
    nfts: "NFTs",
    contact: "Kontakt",
    getStarted: "Loslegen",
    discoverNfts: "Entdecken Sie unsere NFTs",
    contactUs: "Kontaktieren Sie uns",
    mission: "Unsere Mission",
    collection: "Unsere exklusive Kollektion",
    buyWithCard: "Mit Karte kaufen",
    buyWithWallet: "Mit Wallet kaufen",
    sendMessage: "Nachricht senden",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    messageSent: "Nachricht gesendet!",
    thankYou: "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.",
    sendAnother: "Weitere Nachricht senden",
    quickLinks: "Schnelllinks",
    legal: "Rechtliches",
    termsConditions: "Allgemeine Geschäftsbedingungen",
    privacyPolicy: "Datenschutzrichtlinie",

    // Ajouter quelques traductions clés pour la section héros
    blockchainForHealth: "Blockchain für Gesundheit",
    reimaginingHealth: "Neugestaltung des Gesundheitszugangs",
    notJustMission: "Dies ist nicht nur eine Mission.",
    callForDignity: "Es ist ein Aufruf zur Würde. Eine Geste der Hoffnung. Ein Versprechen des Lebens.",
  },
  it: {
    // Garder les traductions existantes
    home: "Home",
    nfts: "NFTs",
    contact: "Contatto",
    getStarted: "Iniziare",
    discoverNfts: "Scopri i nostri NFT",
    contactUs: "Contattaci",
    mission: "La Nostra Missione",
    collection: "La Nostra Collezione Esclusiva",
    buyWithCard: "Acquista con Carta",
    buyWithWallet: "Acquista con Wallet",
    sendMessage: "Invia Messaggio",
    yourName: "Il tuo Nome",
    yourEmail: "La tua Email",
    subject: "Oggetto",
    message: "Messaggio",
    messageSent: "Messaggio Inviato!",
    thankYou: "Grazie per averci contattato. Ti risponderemo presto.",
    sendAnother: "Invia un Altro Messaggio",
    quickLinks: "Link Rapidi",
    legal: "Legale",
    termsConditions: "Termini e Condizioni",
    privacyPolicy: "Politica sulla Privacy",

    // Ajouter quelques traductions clés pour la section héros
    blockchainForHealth: "Blockchain per la Salute",
    reimaginingHealth: "Ripensare l'Accesso alla Salute",
    notJustMission: "Questa non è solo una missione.",
    callForDignity: "È un appello alla dignità. Un gesto di speranza. Una promessa di vita.",
  },
  pt: {
    // Garder les traductions existantes
    home: "Início",
    nfts: "NFTs",
    contact: "Contato",
    getStarted: "Começar",
    discoverNfts: "Descubra nossos NFTs",
    contactUs: "Entre em Contato",
    mission: "Nossa Missão",
    collection: "Nossa Coleção Exclusiva",
    buyWithCard: "Comprar com Cartão",
    buyWithWallet: "Comprar com Wallet",
    sendMessage: "Enviar Mensagem",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    subject: "Assunto",
    message: "Mensagem",
    messageSent: "Mensagem Enviada!",
    thankYou: "Obrigado por entrar em contato. Responderemos em breve.",
    sendAnother: "Enviar Outra Mensagem",
    quickLinks: "Links Rápidos",
    legal: "Legal",
    termsConditions: "Termos e Condições",
    privacyPolicy: "Política de Privacidade",

    // Ajouter quelques traductions clés pour la section héros
    blockchainForHealth: "Blockchain para a Saúde",
    reimaginingHealth: "Reimaginando o Acesso à Saúde",
    notJustMission: "Isto não é apenas uma missão.",
    callForDignity: "É um apelo à dignidade. Um gesto de esperança. Uma promessa de vida.",
  },
  ru: {
    // Garder les traductions existantes
    home: "Главная",
    nfts: "NFTs",
    contact: "Контакты",
    getStarted: "Начать",
    discoverNfts: "Откройте наши NFT",
    contactUs: "Связаться с нами",
    mission: "Наша Миссия",
    collection: "Наша Эксклюзивная Коллекция",
    buyWithCard: "Купить Картой",
    buyWithWallet: "Купить через Кошелек",
    sendMessage: "Отправить Сообщение",
    yourName: "Ваше Имя",
    yourEmail: "Ваш Email",
    subject: "Тема",
    message: "Сообщение",
    messageSent: "Сообщение Отправлено!",
    thankYou: "Спасибо за обращение. Мы скоро свяжемся с вами.",
    sendAnother: "Отправить Еще Сообщение",
    quickLinks: "Быстрые Ссылки",
    legal: "Юридическая Информация",
    termsConditions: "Условия и Положения",
    privacyPolicy: "Политика Конфиденциальности",

    // Ajouter quelques traductions clés pour la section héros
    blockchainForHealth: "Блокчейн для Здоровья",
    reimaginingHealth: "Переосмысление Доступа к Здравоохранению",
    notJustMission: "Это не просто миссия.",
    callForDignity: "Это призыв к достоинству. Жест надежды. Обещание жизни.",
  },
  zh: {
    // Garder les traductions existantes
    home: "首页",
    nfts: "NFTs",
    contact: "联系我们",
    getStarted: "开始",
    discoverNfts: "探索我们的NFT",
    contactUs: "联系我们",
    mission: "我们的使命",
    collection: "我们的独家收藏",
    buyWithCard: "用卡购买",
    buyWithWallet: "用钱包购买",
    sendMessage: "发送消息",
    yourName: "您的姓名",
    yourEmail: "您的电子邮件",
    subject: "主题",
    message: "消息",
    messageSent: "消息已发送！",
    thankYou: "感谢您与我们联系。我们将尽快回复您。",
    sendAnother: "发送另一条消息",
    quickLinks: "快速链接",
    legal: "法律信息",
    termsConditions: "条款和条件",
    privacyPolicy: "隐私政策",

    // Ajouter quelques traductions clés pour la section héros
    blockchainForHealth: "区块链促进健康",
    reimaginingHealth: "重新构想健康获取",
    notJustMission: "这不仅仅是一个使命。",
    callForDignity: "这是对尊严的呼吁。一个希望的姿态。生命的承诺。",
  },
}

// Type pour les clés de traduction
type TranslationKey = keyof typeof translations.en

// Interface pour le contexte
interface LanguageContextType {
  language: string
  setLanguage: (code: string) => void
  t: (key: TranslationKey) => string
}

// Créer le contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Hook personnalisé pour utiliser le contexte
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Provider du contexte
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Utiliser localStorage pour persister la langue choisie
  const [language, setLanguageState] = useState("en")

  // Charger la langue depuis localStorage au montage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Mettre à jour localStorage quand la langue change
  const setLanguage = (code: string) => {
    setLanguageState(code)
    localStorage.setItem("language", code)
  }

  // Fonction de traduction
  const t = (key: TranslationKey): string => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.en
    return (currentTranslations as Record<string, string>)[key] || translations.en[key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
