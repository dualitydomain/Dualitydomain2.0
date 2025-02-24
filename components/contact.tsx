"use client"

import { useState, useEffect } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Smartphone, Mail, CheckCircle, Loader2 } from "lucide-react"
import GlitchText from "./glitch-text"

const developmentTypes = [
  {
    value: "landing",
    label: "Landing Page",
    description: "Página de aterrizaje para campaña o producto específico",
  },
  {
    value: "corporate",
    label: "Sitio Web Corporativo",
    description: "Presencia web profesional para tu empresa",
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    description: "Tienda online completa",
  },
  {
    value: "webapp",
    label: "Aplicación Web",
    description: "Plataforma web personalizada",
  },
  {
    value: "blog",
    label: "Blog / Portal",
    description: "Sitio de contenido dinámico",
  },
]

const budgetRanges = [
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-2500", label: "$1,000 - $2,500" },
  { value: "2500-5000", label: "$2,500 - $5,000" },
  { value: "5000+", label: "$5,000+" },
]

interface FormData {
  name: string
  email: string
  phone: string
  developmentType: string
  budget: string
  startDate: string
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  developmentType: "",
  budget: "",
  startDate: "",
  message: "",
}

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render a loading state or nothing on the server side
  if (!mounted) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Construir el mensaje de WhatsApp
    const message = `¡Hola! Me interesa desarrollar un proyecto con ustedes.

*Información del Cliente:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

*Detalles del Proyecto:*
Tipo: ${developmentTypes.find((t) => t.value === formData.developmentType)?.label}
Presupuesto: ${budgetRanges.find((b) => b.value === formData.budget)?.label}
Fecha de inicio: ${formData.startDate}

*Descripción:*
${formData.message}

¡Gracias!`

    // Codificar el mensaje para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/543546501537?text=${encodedMessage}`

    // Simular envío y mostrar éxito
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      window.open(whatsappUrl, "_blank")

      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        setFormData(initialFormData)
        setSuccess(false)
      }, 2000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#002133] opacity-90" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(92,225,230,0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Cyber grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(92, 225, 230, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(92, 225, 230, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <GlitchText
                text="Contáctanos"
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white"
              />
            </h2>
            <p className="text-zinc-200 md:text-xl">¿Listo para comenzar tu próximo proyecto? Cuéntanos sobre él.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información Personal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#5CE1E6]" />
                Información de Contacto
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
                  required
                />
              </div>
            </div>

            {/* Detalles del Proyecto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-[#5CE1E6]" />
                Detalles del Proyecto
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Select
                    value={formData.developmentType}
                    onValueChange={(value) => setFormData({ ...formData, developmentType: value })}
                  >
                    <SelectTrigger className="bg-zinc-900/50 border-zinc-800 text-zinc-200">
                      <SelectValue placeholder="Tipo de Desarrollo" />
                    </SelectTrigger>
                    <SelectContent>
                      {developmentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="space-y-1">
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-zinc-400">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="bg-zinc-900/50 border-zinc-800 text-zinc-200">
                      <SelectValue placeholder="Presupuesto Estimado" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="bg-zinc-900/50 border-zinc-800 text-zinc-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder:text-zinc-400"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black font-medium relative overflow-hidden group"
              disabled={loading || success}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </form>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#5CE1E6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}

