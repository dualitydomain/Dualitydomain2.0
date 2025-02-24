"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  services: Array<{
    category: string
    items: Array<{
      title: string
      description: string
      href: string
      gradient: string
      icon: string
    }>
  }>
}

const menuItems = [
  { title: "Inicio", href: "/" },
  { title: "Servicios", href: "#", hasSubmenu: true },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Tecnologías", href: "/tecnologias" },
  { title: "Contacto", href: "/contacto" },
]

export default function MobileNav({ isOpen, onClose, services }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!isOpen) {
      setExpandedCategory(null)
      setAnimationComplete(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with neural network effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          >
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#5CE1E6] rounded-full"
                  initial={{
                    x: dimensions.width * Math.random(),
                    y: dimensions.height * Math.random(),
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: dimensions.width * Math.random(),
                    y: dimensions.height * Math.random(),
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#001219]/90 backdrop-blur-md z-50"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#5CE1E6]/10 via-transparent to-orange-500/10 rounded-full blur-3xl"
              />
            </div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-white"
                >
                  Menú
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="block text-lg font-medium text-white hover:text-[#5CE1E6] transition-colors"
                  >
                    Inicio
                  </Link>

                  {/* Services Accordion */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Servicios</h3>
                    <div className="space-y-2">
                      {services.map((category, index) => (
                        <motion.div
                          key={category.category}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="border-b border-white/10 last:border-none"
                        >
                          <button
                            onClick={() =>
                              setExpandedCategory(expandedCategory === category.category ? null : category.category)
                            }
                            className="flex items-center justify-between w-full py-2 text-white hover:text-[#5CE1E6] transition-colors"
                          >
                            <span>{category.category}</span>
                            <motion.span
                              animate={{ rotate: expandedCategory === category.category ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {expandedCategory === category.category && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="py-2 space-y-2">
                                  {category.items.map((service, serviceIndex) => (
                                    <Link
                                      key={service.title}
                                      href={service.href}
                                      onClick={onClose}
                                      onMouseEnter={() => setHoveredService(service.title)}
                                      onMouseLeave={() => setHoveredService(null)}
                                      className="block relative p-2 rounded-lg group"
                                    >
                                      {hoveredService === service.title && (
                                        <motion.span
                                          layoutId="mobile-service-hover"
                                          className="absolute inset-0 bg-white/5 rounded-lg"
                                          transition={{ type: "spring", bounce: 0.3 }}
                                        />
                                      )}
                                      <div className="relative flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <span className="text-lg">{service.icon}</span>
                                          <div>
                                            <span
                                              className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}
                                            >
                                              {service.title}
                                            </span>
                                            <p className="text-xs text-zinc-400 group-hover:text-zinc-300">
                                              {service.description}
                                            </p>
                                          </div>
                                        </div>
                                        <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-[#5CE1E6] transition-colors" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="block text-lg font-medium text-white hover:text-[#5CE1E6] transition-colors"
                  >
                    Proyectos
                  </Link>
                  <Link
                    href="/tecnologias"
                    onClick={onClose}
                    className="block text-lg font-medium text-white hover:text-[#5CE1E6] transition-colors"
                  >
                    Tecnologías
                  </Link>
                  <Link
                    href="/contacto"
                    onClick={onClose}
                    className="block text-lg font-medium text-white hover:text-[#5CE1E6] transition-colors"
                  >
                    Contacto
                  </Link>
                </motion.div>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4 mt-auto"
              >
                <div className="p-4 rounded-lg bg-gradient-to-r from-[#5CE1E6]/20 to-transparent backdrop-blur-sm">
                  <p className="text-sm text-white/80">¿Listo para comenzar tu proyecto?</p>
                  <Link
                    href="/contacto"
                    onClick={onClose}
                    className="mt-2 inline-block text-[#5CE1E6] hover:text-white transition-colors"
                  >
                    Contáctanos →
                  </Link>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

