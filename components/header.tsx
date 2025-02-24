"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import MobileNav from "./mobile-nav"

const services = [
  {
    category: "Páginas Web",
    description: "Soluciones web modernas y efectivas",
    gradient: "from-[#5CE1E6] to-blue-600",
    icon: "🌐",
    items: [
      {
        title: "Landing Pages",
        description: "Páginas de alto impacto para conversión",
        href: "/servicios/landing-pages",
        gradient: "from-[#5CE1E6] to-blue-600",
        icon: "🚀",
      },
      {
        title: "Sitios Web Corporativos",
        description: "Presencia profesional para tu empresa",
        href: "/servicios/sitios-web-corporativos",
        gradient: "from-purple-500 to-[#5CE1E6]",
        icon: "🏢",
      },
      {
        title: "Blogs & Portafolios",
        description: "Espacios para compartir contenido",
        href: "/servicios/blogs-y-portafolios",
        gradient: "from-pink-500 to-[#5CE1E6]",
        icon: "📝",
      },
    ],
  },
  {
    category: "E-commerce",
    description: "Soluciones completas de comercio electrónico",
    gradient: "from-orange-500 to-[#5CE1E6]",
    icon: "🛒",
    items: [
      {
        title: "Tiendas Online",
        description: "Plataformas de venta digital",
        href: "/servicios/tiendas-online",
        gradient: "from-orange-500 to-[#5CE1E6]",
        icon: "🛍️",
      },
      {
        title: "Sistemas de Membresía",
        description: "Plataformas de contenido exclusivo",
        href: "/servicios/sistemas-de-membresia",
        gradient: "from-green-500 to-[#5CE1E6]",
        icon: "🔒",
      },
      {
        title: "Sistemas de Reservas",
        description: "Gestión de citas y disponibilidad",
        href: "/servicios/sistemas-de-reservas",
        gradient: "from-yellow-500 to-[#5CE1E6]",
        icon: "📅",
      },
    ],
  },
  {
    category: "Plataformas Avanzadas",
    description: "Soluciones tecnológicas de última generación",
    gradient: "from-red-500 to-[#5CE1E6]",
    icon: "⚡",
    items: [
      {
        title: "Plataformas Web & Dashboards",
        description: "Sistemas de gestión y control",
        href: "/servicios/plataformas-web-y-dashboards",
        gradient: "from-red-500 to-[#5CE1E6]",
        icon: "📊",
      },
      {
        title: "Portales de Noticias",
        description: "Medios digitales y revistas",
        href: "/servicios/portales-de-noticias",
        gradient: "from-indigo-500 to-[#5CE1E6]",
        icon: "📰",
      },
      {
        title: "Webs Interactivas",
        description: "Experiencias digitales inmersivas",
        href: "/servicios/webs-interactivas",
        gradient: "from-cyan-500 to-[#5CE1E6]",
        icon: "🎮",
      },
      {
        title: "Integraciones & Apps Web",
        description: "Soluciones conectadas y APIs",
        href: "/servicios/integraciones-y-apps-web",
        gradient: "from-teal-500 to-[#5CE1E6]",
        icon: "🔌",
      },
    ],
  },
]

const navItems = [
  { title: "Inicio", href: "/" },
  { title: "Servicios", href: "#", hasSubmenu: true },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Tecnologías", href: "/tecnologias" },
  { title: "Contacto", href: "/contacto" },
]

interface DesktopServicesMenuProps {
  services: any[]
  isOpen: boolean
  onClose: () => void
}

function DesktopServicesMenu({ services, isOpen, onClose }: DesktopServicesMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 w-screen max-w-md overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={onClose}
        >
          <div className="relative grid grid-cols-1 gap-2 px-7 py-5">
            {services.map((category) => (
              <div
                key={category.category}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white"
                onMouseEnter={() => setHoveredCategory(category.category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.category}
                {hoveredCategory === category.category && (
                  <motion.span
                    className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors"
                    layoutId="category-hover"
                  />
                )}
              </div>
            ))}
            <motion.span
              className="absolute inset-0 rounded-md bg-white/0 transition-colors"
              layoutId="category-hover"
            />
          </div>
          <AnimatePresence>
            {hoveredCategory && (
              <motion.div
                className="absolute top-0 left-1/2 ml-px h-full w-1/2 border-l border-zinc-800 bg-zinc-950 px-7 py-5"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {services
                  .find((category) => category.category === hoveredCategory)
                  ?.items.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm"
                      onMouseEnter={() => setHoveredService(service.title)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {service.icon}
                      {service.title}
                      <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {hoveredService === service.title && (
                        <motion.span
                          className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors"
                          layoutId="service-hover"
                        />
                      )}
                    </Link>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const headerBg = useTransform(scrollY, [0, 100], ["rgba(0, 33, 51, 0)", "rgba(0, 33, 51, 0.8)"])

  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          borderBottom: `1px solid`,
          borderColor: headerBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      >
        <div className="container px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-rORjnnVxjIBO17FAOp8Vvr5HZf6Oez.png"
                    alt="Duality Domain Logo"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <motion.span
                className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white relative"
                whileHover={{
                  textShadow: "0 0 8px rgba(92, 225, 230, 0.5)",
                }}
              >
                Duality Domain
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[#5CE1E6] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasSubmenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors group relative">
                        Servicios
                        <motion.span animate={{ rotate: isServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                        <motion.span
                          className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors"
                          layoutId="nav-hover"
                        />
                      </button>

                      <DesktopServicesMenu
                        services={services}
                        isOpen={isServicesOpen}
                        onClose={() => setIsServicesOpen(false)}
                      />
                    </div>
                  ) : (
                    <NavLink href={item.href}>{item.title}</NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <Menu className="h-6 w-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Animated border gradient */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} services={services} />
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors relative group"
    >
      {children}
      <motion.span
        className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors"
        layoutId="nav-hover"
      />
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[#5CE1E6] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

