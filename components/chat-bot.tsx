"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

// Base de conocimientos expandida
const chatbotData = {
  responses: {
    greeting: [
      "¡Hola! 👋 Soy el asistente virtual de Duality Domain. ¿En qué puedo ayudarte hoy?",
      "¡Bienvenido/a! 🚀 Me encanta conocer gente nueva. ¿Qué te gustaría saber sobre nosotros?",
      "¡Hey! 😊 Soy el bot más cool de Duality Domain. ¿Cómo puedo ayudarte?",
      "¡Hola! 🌟 ¿Listo para crear algo increíble juntos?",
    ],
    about: [
      "En Duality Domain somos un equipo apasionado por la tecnología y el diseño 🚀\n\nNos especializamos en crear experiencias digitales únicas y memorables, combinando creatividad con las últimas tecnologías.\n\nNuestro equipo está formado por desarrolladores, diseñadores y estrategas digitales comprometidos con la excelencia.",
      "¡Somos los artistas digitales que dan vida a tus ideas! 🎨\n\nEn Duality Domain creemos en el poder de la tecnología para transformar negocios y crear experiencias increíbles.\n\nNos apasiona lo que hacemos y eso se refleja en cada proyecto.",
      "Duality Domain es donde la innovación se encuentra con la creatividad 💫\n\nDesde 2020, hemos ayudado a empresas y emprendedores a destacar en el mundo digital con soluciones tecnológicas de vanguardia.\n\nNuestro objetivo es simple: hacer que tu visión cobre vida en el mundo digital.",
    ],
    services: {
      general: [
        "¡Tenemos todo lo que necesitas para brillar en el mundo digital! 🌟\n\n📱 Desarrollo Web\n🎨 Diseño UI/UX\n🛍️ E-commerce\n💻 Aplicaciones Web\n🚀 Marketing Digital\n\n¿Te gustaría saber más sobre algún servicio en particular?",
        "Nuestros servicios están diseñados para impulsar tu presencia digital 🚀\n\n💻 Desarrollo Web Profesional\n🎯 Marketing Digital\n🛍️ Soluciones E-commerce\n📱 Aplicaciones Web\n🎨 Diseño UI/UX\n\n¿Sobre cuál te gustaría saber más?",
      ],
      web: [
        "Creamos sitios web que enamoran 😍\n\n- Landing Pages optimizadas\n- Sitios Web Corporativos\n- Blogs y Portafolios\n- Webs Institucionales\n\nTodos nuestros desarrollos son:\n✨ 100% Responsivos\n🚀 Optimizados para SEO\n⚡ Alto Rendimiento",
        "Desarrollamos sitios web profesionales y efectivos 💪\n\n🎯 Landing Pages que Convierten\n🏢 Sitios Corporativos Impactantes\n📱 100% Adaptables a Móviles\n🚀 Optimizados para Buscadores\n\n¿Te gustaría ver algunos ejemplos?",
      ],
      ecommerce: [
        "¡Lleva tu negocio al siguiente nivel con nuestras soluciones e-commerce! 🛍️\n\n- Tiendas Online Personalizadas\n- Integración con Medios de Pago\n- Gestión de Inventario\n- Panel Administrativo\n- Reportes y Analytics\n\n¿Te gustaría comenzar a vender online?",
        "Creamos tu tienda online perfecta 🛒\n\n💳 Múltiples Medios de Pago\n📦 Control de Inventario\n📊 Estadísticas en Tiempo Real\n📱 Experiencia Mobile-First\n\n¿Listo para vender en línea?",
      ],
      apps: [
        "Desarrollamos aplicaciones web potentes y escalables 💪\n\n- Sistemas de Gestión\n- Plataformas Educativas\n- Apps de Servicios\n- Intranets\n- Dashboards\n\nUsamos las últimas tecnologías para crear soluciones robustas y eficientes.",
        "Tus ideas convertidas en aplicaciones web increíbles 🚀\n\n💻 Sistemas Personalizados\n📊 Dashboards Interactivos\n🔒 Intranets Seguras\n📱 Progressive Web Apps\n\n¿Qué tipo de aplicación necesitas?",
      ],
      design: [
        "¡Diseño que enamora a primera vista! 🎨\n\n- Diseño UI/UX\n- Identidad Visual\n- Prototipos Interactivos\n- Design Systems\n\nCreamos experiencias visuales que cautivan y convierten.",
        "Diseñamos experiencias memorables 🎯\n\n🎨 UI/UX Design\n✨ Interfaces Intuitivas\n🎭 Identidad de Marca\n📱 Diseño Responsivo\n\n¿Buscas renovar tu imagen digital?",
      ],
    },
    process: [
      "Nuestro proceso es simple pero efectivo 🎯\n\n1️⃣ Consulta inicial gratuita\n2️⃣ Propuesta y presupuesto\n3️⃣ Diseño y desarrollo\n4️⃣ Revisión y ajustes\n5️⃣ Lanzamiento y soporte\n\n¿Te gustaría agendar una consulta?",
      "Así trabajamos para hacer realidad tu proyecto 🚀\n\n📋 Análisis y Planificación\n💡 Propuesta Detallada\n🎨 Diseño y Desarrollo\n✅ Testing y Ajustes\n🌟 Lanzamiento\n\n¿Comenzamos?",
    ],
    contact: [
      "¡Estamos aquí para ti! 🤝\n\n📱 WhatsApp: +54 9 3546 50-1537\n📧 Email: contacto@dualitydomain.com\n📍 Ubicación: Ciudad Digital, Tecnópolis\n\n📱 Síguenos en redes:\n📸 Instagram: @dualitydomain\n💼 LinkedIn: /dualitydomain\n\n¿Cómo prefieres contactarnos?",
      "¡Conectemos! 🌟\n\n💬 WhatsApp: +54 9 3546 50-1537\n✉️ Email: contacto@dualitydomain.com\n🏢 Oficina: Ciudad Digital, Tecnópolis\n\n¡Síguenos en redes sociales para más novedades!",
    ],
    social: [
      "¡Conéctate con nosotros! 🌟\n\n📸 Instagram: @dualitydomain\n💼 LinkedIn: /dualitydomain\n🐦 Twitter: @dualitydomain\n\nSíguenos para ver nuestros últimos proyectos y novedades.",
      "¡No te pierdas nuestras actualizaciones! ✨\n\n📱 Instagram: Tutoriales y Tips\n💼 LinkedIn: Casos de Éxito\n🐦 Twitter: Noticias y Tecnología\n\n¿En qué red prefieres seguirnos?",
    ],
    technologies: [
      "¡Usamos lo último en tecnología! 🚀\n\n💻 Frontend:\n- React/Next.js\n- TailwindCSS\n- TypeScript\n\n⚙️ Backend:\n- Node.js\n- Python\n- PHP\n\n🗄️ Bases de datos:\n- MongoDB\n- PostgreSQL\n- MySQL\n\n🎨 Diseño:\n- Figma\n- Adobe XD",
      "Nuestro stack tecnológico de vanguardia 💫\n\n🎨 Diseño:\n- Figma\n- Adobe Creative Suite\n\n💻 Desarrollo:\n- React/Next.js\n- Node.js\n- Python\n\n📱 Mobile:\n- React Native\n- Progressive Web Apps",
    ],
    pricing: [
      "Cada proyecto es único y se presupuesta según sus necesidades específicas 💡\n\nOfrecemos planes desde:\n\n🔵 Landing Pages: desde $500\n🔵 Sitios Web: desde $1000\n🔵 E-commerce: desde $2000\n🔵 Aplicaciones: desde $3000\n\n¿Te gustaría recibir un presupuesto personalizado?",
      "Inversión en calidad y resultados 🎯\n\nRangos de precios:\n\n💎 Landing Page: $500-$1500\n💎 Sitio Web: $1000-$3000\n💎 E-commerce: $2000-$5000\n💎 Aplicaciones: desde $3000\n\n¿Quieres un presupuesto detallado?",
    ],
    portfolio: [
      "¡Échale un vistazo a algunos de nuestros proyectos! 🎨\n\n🚀 Meta Universe - Plataforma VR\n🛍️ Smart Shop - E-commerce\n📱 City App - Aplicación Urbana\n💻 Tech Blog - Portal de Noticias\n\n¿Te gustaría ver más ejemplos de alguna categoría?",
      "Algunos de nuestros casos de éxito 🏆\n\n🌟 FoodieApp - Delivery Platform\n🎮 GameVerse - Gaming Community\n📚 EduLearn - E-learning Platform\n🏪 FashionStore - E-commerce\n\n¿Quieres ver más proyectos similares al tuyo?",
    ],
    default: [
      "¡Ups! 😅 Parece que aún me están actualizando con esa información. Pero no te preocupes, puedes contactar directamente con nuestro equipo en WhatsApp: +54 9 3546 50-1537 y ellos te ayudarán con todo lo que necesites 🚀",
      "¡Vaya! 🤔 Esa es una buena pregunta, pero aún estoy aprendiendo. ¿Te gustaría hablar directamente con nuestro equipo? Escríbenos al +54 9 3546 50-1537 y te ayudaremos encantados 😊",
      "¡Interesante pregunta! 🤓 Para darte la mejor respuesta, ¿por qué no charlas con nuestro equipo? Contáctanos al +54 9 3546 50-1537 y te ayudaremos con todos los detalles.",
    ],
    fallback: [
      "¡Ups! 🤖 Mi procesador está un poco confundido. ¿Te gustaría hablar con un humano? Escríbenos al WhatsApp: +54 9 3546 50-1537 😊",
      "¡Vaya! 😅 Parece que necesito una actualización para responder eso. Mientras tanto, ¿por qué no charlas con nuestro equipo en WhatsApp? +54 9 3546 50-1537",
      "¡Oops! 🎯 Esa es nueva para mí. ¿Te gustaría discutirlo con nuestro equipo? Escríbenos al +54 9 3546 50-1537 y te ayudaremos con gusto.",
    ],
  },

  suggestions: {
    initial: ["¿Qué servicios ofrecen?", "Cuéntame sobre ustedes", "¿Cómo puedo contactarlos?", "Ver portafolio"],
    afterAbout: ["¿Qué servicios tienen?", "Ver proyectos realizados", "¿Qué tecnologías usan?", "Contactar al equipo"],
    afterServices: [
      "¿Cómo es el proceso?",
      "Ver ejemplos de proyectos",
      "Costos aproximados",
      "Contactar por WhatsApp",
    ],
    afterProcess: ["Ver precios", "Consultar disponibilidad", "Agendar llamada", "Más información"],
    afterPricing: ["Ver portafolio", "Contactar por WhatsApp", "Más sobre servicios", "Agendar consulta"],
    afterContact: ["Seguir en Instagram", "Ver proyectos", "Conocer servicios", "Solicitar presupuesto"],
    afterPortfolio: ["Solicitar presupuesto", "Más sobre servicios", "Contactar al equipo", "Ver tecnologías"],
    afterTechnologies: [
      "Ver ejemplos de proyectos",
      "¿Cómo empezamos?",
      "Solicitar presupuesto",
      "Contactar al equipo",
    ],
    afterSocial: ["Conocer servicios", "Ver portafolio", "Solicitar presupuesto", "Agendar llamada"],
  },

  keywords: {
    greeting: ["hola", "buenos", "saludos", "hey", "que tal", "hi", "buenas"],
    about: ["quienes", "empresa", "equipo", "sobre", "conocer", "historia", "son", "hacen", "dedican"],
    services: {
      general: ["servicios", "ofrecen", "hacen", "trabajan", "realizan", "desarrollan"],
      web: ["web", "página", "sitio", "landing", "website", "portal"],
      ecommerce: ["tienda", "ecommerce", "shop", "comercio", "ventas", "online", "store"],
      apps: ["aplicación", "app", "sistema", "plataforma", "software", "programa"],
      design: ["diseño", "ui", "ux", "interfaz", "prototipo", "visual", "marca"],
    },
    process: ["proceso", "etapas", "pasos", "metodología", "trabajo", "cómo", "funciona", "realizan"],
    contact: ["contacto", "teléfono", "email", "ubicación", "donde", "whatsapp", "contactar", "comunicar"],
    social: ["redes", "instagram", "linkedin", "twitter", "facebook", "seguir", "social"],
    technologies: ["tecnologías", "tech", "stack", "herramientas", "desarrollan", "usan", "programación", "lenguajes"],
    pricing: ["precio", "costo", "presupuesto", "valor", "cuánto", "planes", "inversión", "cobran", "vale"],
    portfolio: ["portfolio", "proyectos", "trabajos", "ejemplos", "casos", "muestra", "realizados", "hechos"],
  },

  // Función para generar link de WhatsApp
  generateWhatsAppLink: (message: string) => {
    const baseUrl = "https://wa.me/543546501537"
    const encodedMessage = encodeURIComponent(message)
    return `${baseUrl}?text=${encodedMessage}`
  },
}

interface Message {
  role: "assistant" | "user"
  content: string
  timestamp: Date
}

interface TypingEffectProps {
  text: string
  onComplete?: () => void
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [suggestions, setSuggestions] = useState(chatbotData.suggestions.initial)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isTyping, setIsTyping] = useState(false)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  // Función para identificar la intención del usuario
  const identifyIntent = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    // Verificar saludos
    if (chatbotData.keywords.greeting.some((word) => lowerMessage.includes(word))) {
      return "greeting"
    }

    // Verificar sobre nosotros
    if (chatbotData.keywords.about.some((word) => lowerMessage.includes(word))) {
      return "about"
    }

    // Verificar servicios
    for (const [key, keywords] of Object.entries(chatbotData.keywords.services)) {
      if (keywords.some((word) => lowerMessage.includes(word))) {
        return `services.${key}`
      }
    }

    // Verificar otras categorías
    for (const [category, keywords] of Object.entries(chatbotData.keywords)) {
      if (!["services", "greeting", "about"].includes(category)) {
        if (Array.isArray(keywords) && keywords.some((word) => lowerMessage.includes(word))) {
          return category
        }
      }
    }

    return "default"
  }

  // Función para obtener una respuesta aleatoria de una categoría
  const getRandomResponse = (category: string): string => {
    const responses = category.includes("services.")
      ? chatbotData.responses.services[category.split(".")[1]]
      : chatbotData.responses[category]

    return Array.isArray(responses)
      ? responses[Math.floor(Math.random() * responses.length)]
      : chatbotData.responses.fallback[0]
  }

  // Función para actualizar las sugerencias basadas en el contexto
  const updateSuggestions = (intent: string) => {
    if (intent === "about") {
      setSuggestions(chatbotData.suggestions.afterAbout)
    } else if (intent.includes("services")) {
      setSuggestions(chatbotData.suggestions.afterServices)
    } else if (intent === "process") {
      setSuggestions(chatbotData.suggestions.afterProcess)
    } else if (intent === "pricing") {
      setSuggestions(chatbotData.suggestions.afterPricing)
    } else if (intent === "contact" || intent === "social") {
      setSuggestions(chatbotData.suggestions.afterContact)
    } else if (intent === "portfolio") {
      setSuggestions(chatbotData.suggestions.afterPortfolio)
    } else if (intent === "technologies") {
      setSuggestions(chatbotData.suggestions.afterTechnologies)
    } else if (intent === "social") {
      setSuggestions(chatbotData.suggestions.afterSocial)
    }
  }

  // Componente TypingEffect
  function TypingEffect({ text, onComplete }: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(
          () => {
            // Manejar emojis y caracteres especiales
            let nextChar = text[currentIndex]
            let increment = 1

            // Si es un emoji o carácter especial, tomamos el conjunto completo
            if (text.codePointAt(currentIndex)! > 0xffff) {
              nextChar = text.slice(currentIndex, currentIndex + 2)
              increment = 2
            }

            setDisplayedText((prev) => prev + nextChar)
            setCurrentIndex((prev) => prev + increment)
          },
          Math.random() * 30 + 20,
        ) // Velocidad variable entre 20ms y 50ms

        return () => clearTimeout(timeout)
      } else if (onComplete) {
        onComplete()
      }
    }, [currentIndex, text, onComplete])

    return <>{displayedText}</>
  }

  // Función para convertir links en elementos clickeables
  const formatMessage = (content: string, isTyping = false): React.JSX.Element => {
    // Expresión regular para detectar URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g

    // Expresión regular para detectar handles de redes sociales
    const socialRegex = /(@\w+)/g

    // Dividir el contenido en partes
    const parts = content.split(/(\n|https?:\/\/[^\s]+|@\w+)/)

    if (isTyping) {
      return <TypingEffect text={content} />
    }

    return (
      <>
        {parts.map((part, index) => {
          if (part.match(urlRegex)) {
            return (
              <a
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5CE1E6] hover:underline"
              >
                {part}
              </a>
            )
          } else if (part.match(socialRegex)) {
            return (
              <span key={index} className="text-[#5CE1E6]">
                {part}
              </span>
            )
          } else if (part === "\n") {
            return <br key={index} />
          } else {
            return <span key={index}>{part}</span>
          }
        })}
      </>
    )
  }

  // Manejador de envío de mensajes
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Agregar mensaje del usuario
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setShowSuggestions(false)
    setIsTyping(true)

    // Identificar intención y obtener respuesta
    const intent = identifyIntent(input)
    const response = getRandomResponse(intent)
    updateSuggestions(intent)

    // Simular tiempo de respuesta natural
    setTimeout(
      () => {
        const assistantMessage: Message = {
          role: "assistant",
          content: response,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
        setShowSuggestions(true)
      },
      Math.random() * 1000 + 500,
    ) // Tiempo de respuesta variable entre 500ms y 1500ms
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    handleSubmit(new Event("submit") as any)
  }

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat("es", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black relative group"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          {/* Efecto de pulso */}
          <span className="absolute inset-0 rounded-full bg-[#5CE1E6] animate-ping opacity-25" />
          {/* Partículas */}
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-[#5CE1E6] rounded-full"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </Button>
      </motion.div>

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-sm bg-[#001219] border border-white/10 rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="p-3 bg-[#002133] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-[#5CE1E6]" />
                    <h3 className="font-semibold text-white text-sm sm:text-base">Asistente Virtual</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:text-[#5CE1E6] transition-colors"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                {/* Messages */}
                <ScrollArea className="h-[400px] xs:h-[450px] sm:h-[500px] p-4 space-y-4">
                  {/* Mensaje de bienvenida */}
                  {messages.length === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#5CE1E6]/20 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-[#5CE1E6]" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-white/5 rounded-lg p-3 text-white text-sm sm:text-base">
                            {formatMessage(chatbotData.responses.greeting[0])}
                          </div>
                          <span className="text-xs text-white/50 mt-1">{formatTimestamp(new Date())}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mensajes de la conversación */}
                  {messages.map((message, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "assistant" ? "bg-[#5CE1E6]/20" : "bg-white/10"
                        }`}
                      >
                        {message.role === "assistant" ? (
                          <Bot className="h-4 w-4 text-[#5CE1E6]" />
                        ) : (
                          <User className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`rounded-lg p-3 text-sm sm:text-base ${
                            message.role === "assistant" ? "bg-white/5 text-white" : "bg-[#5CE1E6] text-black"
                          }`}
                        >
                          {formatMessage(message.content, message.role === "assistant" && i === messages.length - 1)}
                        </div>
                        <span className="text-xs text-white/50 mt-1">{formatTimestamp(message.timestamp)}</span>
                      </div>
                    </div>
                  ))}

                  {/* Indicador de escritura */}
                  {isTyping && (
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#5CE1E6]/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-[#5CE1E6]" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5CE1E6] rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5CE1E6] rounded-full animate-bounce delay-75" />
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5CE1E6] rounded-full animate-bounce delay-150" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sugerencias */}
                  {showSuggestions && !isTyping && (
                    <div className="space-y-2 mt-4">
                      <p className="text-xs sm:text-sm text-white/70">Sugerencias:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="text-left text-xs sm:text-sm border-white/10 hover:bg-white/5 hover:text-[#5CE1E6] transition-colors px-3 py-2 h-auto whitespace-normal"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-[#002133]">
                  <div className="relative">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pr-12 text-sm"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="absolute right-1 top-1 h-7 w-7 bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black"
                      disabled={isTyping}
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

