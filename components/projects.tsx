"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import GlitchText from "./glitch-text"

const projects = [
  {
    title: "Meta Universe",
    description:
      "Plataforma de realidad virtual para experiencias inmersivas en el metaverso con integración blockchain.",
    image: "/placeholder.svg?height=1080&width=1080",
    tags: ["React", "Three.js", "WebGL", "Blockchain"],
    gradient: "from-purple-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Crypto Exchange",
    description: "Exchange de criptomonedas con IA integrada para predicción de mercados y trading automatizado.",
    image: "/placeholder.svg?height=1080&width=1080",
    tags: ["Next.js", "AI", "Blockchain", "WebSocket"],
    gradient: "from-[#5CE1E6] to-blue-600",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Smart City",
    description: "Sistema de gestión urbana con IoT para monitoreo y optimización de recursos en tiempo real.",
    image: "/placeholder.svg?height=1080&width=1080",
    tags: ["IoT", "React", "Node.js", "MongoDB"],
    gradient: "from-orange-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "AI Assistant",
    description: "Asistente virtual con procesamiento de lenguaje natural y aprendizaje continuo.",
    image: "/placeholder.svg?height=1080&width=1080",
    tags: ["AI", "ML", "Python", "TensorFlow"],
    gradient: "from-[#5CE1E6] to-green-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Holographic effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:duration-200" />

      <div className="relative rounded-xl bg-[#001219]/80 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Image container with hover effects */}
        <div className="relative aspect-square overflow-hidden">
          {/* Glitch effect overlay */}
          <motion.div
            className="absolute inset-0 bg-[#5CE1E6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(92, 225, 230, 0.1) 2px,
                  rgba(92, 225, 230, 0.1) 4px
                )
              `,
            }}
            animate={{
              backgroundPosition: ["0px 0px", "0px 100px"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1080}
            height={1080}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001219] via-transparent to-transparent" />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <div className="flex gap-4">
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-[#5CE1E6] text-black rounded-full font-medium flex items-center gap-2 hover:bg-[#5CE1E6]/90 transition-colors"
              >
                Demo
                <ExternalLink className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                GitHub
                <Github className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
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

          <div className="relative space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-[#5CE1E6] transition-colors">
              <GlitchText text={project.title} delay={index * 1000} />
            </h3>
            <p className="text-white/80 line-clamp-2">{project.description}</p>
          </div>

          <div className="relative flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
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
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={containerRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
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
        <motion.div style={{ opacity, y }} className="space-y-12">
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <GlitchText
                  text="Proyectos Destacados"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white"
                />
              </h2>
              {/* Decorative line */}
              <motion.div
                className="absolute -left-4 -right-4 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent"
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
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto max-w-[700px] text-zinc-400 md:text-xl"
            >
              Descubre cómo transformamos ideas en realidades digitales
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black group relative overflow-hidden">
              <span className="relative z-10">Ver Más Proyectos</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            </Button>
          </div>
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

