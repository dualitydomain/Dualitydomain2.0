"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Landing Pages",
    description: "Páginas de alto impacto para conversión",
    href: "/servicios/landing-pages",
  },
  {
    title: "Sitios Web Corporativos",
    description: "Presencia profesional para tu empresa",
    href: "/servicios/sitios-corporativos",
  },
  {
    title: "Tiendas Online (E-Commerce)",
    description: "Plataformas de venta digital",
    href: "/servicios/ecommerce",
  },
  {
    title: "Blogs & Portafolios",
    description: "Espacios para compartir contenido",
    href: "/servicios/blogs-portfolios",
  },
  {
    title: "Plataformas Web & Dashboards",
    description: "Sistemas de gestión y control",
    href: "/servicios/plataformas-dashboards",
  },
  {
    title: "Sistemas de Membresía",
    description: "Plataformas de contenido exclusivo",
    href: "/servicios/sistemas-membresia",
  },
  {
    title: "Sistemas de Reservas",
    description: "Gestión de citas y disponibilidad",
    href: "/servicios/sistemas-reservas",
  },
  {
    title: "Portales de Noticias",
    description: "Medios digitales y revistas",
    href: "/servicios/portales-noticias",
  },
  {
    title: "Webs Interactivas",
    description: "Experiencias digitales inmersivas",
    href: "/servicios/webs-interactivas",
  },
  {
    title: "Integraciones & Apps Web",
    description: "Soluciones conectadas y APIs",
    href: "/servicios/integraciones-apps",
  },
]

const menuItems = [
  { title: "Inicio", href: "/" },
  { title: "Servicios", href: "#", hasSubmenu: true },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Tecnologías", href: "/tecnologias" },
  { title: "Contacto", href: "/contacto" },
]

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            {item.hasSubmenu ? (
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors group"
              >
                {item.title}
                <motion.span animate={{ rotate: showServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>
            ) : (
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            )}

            {/* Services Dropdown */}
            {item.hasSubmenu && (
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[300px] bg-[#001219]/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl z-50"
                  >
                    <div className="grid gap-2 p-4">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="relative group/item"
                          onMouseEnter={() => setHoveredService(idx)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          {hoveredService === idx && (
                            <motion.span
                              layoutId="service-hover"
                              className="absolute inset-0 bg-white/5 rounded-lg"
                              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            />
                          )}
                          <div className="relative p-2 rounded-lg group-hover/item:bg-white/5 transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-white">{service.title}</span>
                              <ChevronRight className="h-4 w-4 text-zinc-400 group-hover/item:text-white transition-colors" />
                            </div>
                            <p className="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-[#5CE1E6] transition-colors">
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#001219]/90 backdrop-blur-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menú</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.hasSubmenu ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setShowServices(!showServices)}
                          className="flex items-center justify-between w-full p-2 text-white hover:text-[#5CE1E6] transition-colors"
                        >
                          <span>{item.title}</span>
                          <motion.span animate={{ rotate: showServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {showServices && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              <div className="space-y-2 border-l border-white/10 pl-4">
                                {services.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block p-2 text-zinc-300 hover:text-white transition-colors"
                                  >
                                    <div className="text-sm font-medium">{service.title}</div>
                                    <div className="text-xs text-zinc-400">{service.description}</div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 text-white hover:text-[#5CE1E6] transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

