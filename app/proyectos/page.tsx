"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import GlitchText from "@/components/glitch-text"

const categories = [
  { value: "all", label: "Todos" },
  { value: "web", label: "Sitios Web" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "apps", label: "Aplicaciones" },
  { value: "design", label: "Diseño UI/UX" },
]

const projects = [
  {
    title: "Meta Universe",
    description:
      "Plataforma de realidad virtual para experiencias inmersivas en el metaverso con integración blockchain.",
    image: "/placeholder.svg?height=600&width=800",
    category: "apps",
    tags: ["React", "Three.js", "WebGL", "Blockchain"],
    gradient: "from-purple-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      users: "10K+",
      transactions: "50K+",
      rating: "4.8/5",
    },
  },
  {
    title: "Crypto Exchange",
    description: "Exchange de criptomonedas con IA integrada para predicción de mercados y trading automatizado.",
    image: "/placeholder.svg?height=600&width=800",
    category: "apps",
    tags: ["Next.js", "AI", "Blockchain", "WebSocket"],
    gradient: "from-[#5CE1E6] to-blue-600",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      volume: "$1M+",
      users: "5K+",
      trades: "100K+",
    },
  },
  {
    title: "Smart City",
    description: "Sistema de gestión urbana con IoT para monitoreo y optimización de recursos en tiempo real.",
    image: "/placeholder.svg?height=600&width=800",
    category: "apps",
    tags: ["IoT", "React", "Node.js", "MongoDB"],
    gradient: "from-orange-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      sensors: "1000+",
      cities: "5",
      savings: "30%",
    },
  },
  {
    title: "Fashion Store",
    description: "Tienda online de moda con probador virtual y recomendaciones personalizadas con IA.",
    image: "/placeholder.svg?height=600&width=800",
    category: "ecommerce",
    tags: ["Next.js", "AR", "AI", "Stripe"],
    gradient: "from-pink-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      sales: "$500K+",
      products: "1000+",
      conversion: "15%",
    },
  },
  {
    title: "Tech Blog",
    description: "Portal de noticias tecnológicas con sistema de membresías y contenido premium.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["Next.js", "MDX", "Stripe", "PostgreSQL"],
    gradient: "from-green-500 to-[#5CE1E6]",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      articles: "500+",
      members: "2K+",
      views: "100K+",
    },
  },
  {
    title: "AI Assistant",
    description: "Asistente virtual con procesamiento de lenguaje natural y aprendizaje continuo.",
    image: "/placeholder.svg?height=600&width=800",
    category: "apps",
    tags: ["AI", "ML", "Python", "TensorFlow"],
    gradient: "from-[#5CE1E6] to-green-500",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
    stats: {
      accuracy: "95%",
      languages: "10+",
      queries: "1M+",
    },
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative"
    >
      {/* Holographic effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:duration-200" />

      <div className="relative rounded-xl bg-[#001219]/80 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Image container with hover effects */}
        <div className="relative aspect-video overflow-hidden">
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
            width={800}
            height={600}
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
              <GlitchText text={project.title} />
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

          <div className="relative grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {Object.entries(project.stats).map(([key, value], i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-[#5CE1E6]">{value}</div>
                <div className="text-xs text-white/60 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Only run on client-side
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  // Render a loading state or nothing on the server side
  if (!mounted) {
    return null
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
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                <GlitchText
                  text="Nuestros Proyectos"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white"
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto max-w-[700px] text-zinc-400 md:text-xl"
              >
                Explora nuestra colección de proyectos innovadores y soluciones digitales
              </motion.p>
            </div>

            {/* Filters */}
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="inline-flex bg-white/5 border border-white/10 p-1 rounded-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-[#5CE1E6] data-[state=active]:text-black transition-colors"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Projects Grid */}
              <TabsContent value={selectedCategory} className="mt-12">
                <div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  style={{
                    minHeight: dimensions.height ? `${dimensions.height * 0.6}px` : "auto",
                  }}
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

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

