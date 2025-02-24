"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import GlitchText from "@/components/glitch-text"
import { useState, useEffect } from "react"

const technologies = {
  frontend: [
    {
      name: "React",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Biblioteca JavaScript para construir interfaces de usuario",
      level: 95,
    },
    {
      name: "Next.js",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Framework React para aplicaciones web modernas",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: "/placeholder.svg?height=80&width=80",
      description: "JavaScript con sintaxis de tipado estático",
      level: 85,
    },
    {
      name: "TailwindCSS",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Framework CSS de utilidad primero",
      level: 95,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Entorno de ejecución para JavaScript",
      level: 90,
    },
    {
      name: "Python",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Lenguaje versátil para backend y ML",
      level: 85,
    },
    {
      name: "PostgreSQL",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Sistema de gestión de bases de datos relacional",
      level: 80,
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Base de datos NoSQL orientada a documentos",
      level: 85,
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Sistema de control de versiones",
      level: 90,
    },
    {
      name: "Docker",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Plataforma de contenedorización",
      level: 80,
    },
    {
      name: "AWS",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Servicios de computación en la nube",
      level: 75,
    },
    {
      name: "Figma",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Herramienta de diseño de interfaces",
      level: 85,
    },
  ],
}

function TechnologyCard({ tech, index }: { tech: (typeof technologies.frontend)[0]; index: number }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: isBrowser ? 0.9 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Holographic effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:duration-200" />

      <div className="relative p-6 bg-[#001219]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
        {/* Cyber pattern background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #5CE1E6 1px, transparent 1px),
              linear-gradient(-45deg, #5CE1E6 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative space-y-4">
          {/* Icon and Name */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#5CE1E6] transition-colors">
                <GlitchText text={tech.name} />
              </h3>
              <p className="text-sm text-white/60">{tech.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Nivel de Experiencia</span>
              <span className="text-[#5CE1E6]">{tech.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#5CE1E6]"
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Animated corner borders */}
        <div className="absolute top-0 left-0 w-8 h-8">
          <motion.div
            className="absolute top-0 left-0 w-2 h-[2px] bg-[#5CE1E6]"
            animate={{
              opacity: [1, 0.5, 1],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-[2px] h-2 bg-[#5CE1E6]"
            animate={{
              opacity: [1, 0.5, 1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-8 h-8 rotate-90">
          <motion.div
            className="absolute top-0 left-0 w-2 h-[2px] bg-[#5CE1E6]"
            animate={{
              opacity: [1, 0.5, 1],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-[2px] h-2 bg-[#5CE1E6]"
            animate={{
              opacity: [1, 0.5, 1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function TechnologiesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 relative overflow-hidden">
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
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                <GlitchText
                  text="Nuestras Tecnologías"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white"
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto max-w-[700px] text-zinc-400 md:text-xl"
              >
                Utilizamos las últimas tecnologías para crear soluciones innovadoras y escalables
              </motion.p>
            </div>

            {/* Frontend Technologies */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                <GlitchText text="Frontend Development" />
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {technologies.frontend.map((tech, index) => (
                  <TechnologyCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                <GlitchText text="Backend Development" />
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {technologies.backend.map((tech, index) => (
                  <TechnologyCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Tools and Infrastructure */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white"
              >
                <GlitchText text="Herramientas y DevOps" />
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {technologies.tools.map((tech, index) => (
                  <TechnologyCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black group relative overflow-hidden"
              >
                <Link href="/contacto">
                  Comienza Tu Proyecto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

