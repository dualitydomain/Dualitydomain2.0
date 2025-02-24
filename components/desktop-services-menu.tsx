"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DesktopServicesMenuProps {
  services: Array<{
    category: string
    icon: string
    items: Array<{
      title: string
      description: string
      href: string
      gradient: string
      icon: string
    }>
  }>
  isOpen: boolean
  onClose: () => void
}

export default function DesktopServicesMenu({ services, isOpen, onClose }: DesktopServicesMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: typeof window !== "undefined" ? 10 : 0,
            scale: 0.95,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 w-[380px] bg-[#001219]/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-xl"
          style={{
            boxShadow: "0 0 30px rgba(92, 225, 230, 0.1)",
          }}
        >
          <div className="p-4 space-y-2">
            {services.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border-b border-white/10 last:border-none"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
                  className="flex items-center justify-between w-full py-3 text-white hover:text-[#5CE1E6] transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    <span className="text-sm font-medium">{category.category}</span>
                  </div>
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
                      <div className="py-2 space-y-1">
                        {category.items.map((service) => (
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
                                layoutId="desktop-service-hover"
                                className="absolute inset-0 bg-white/5 rounded-lg"
                                transition={{ type: "spring", bounce: 0.3 }}
                              />
                            )}
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-lg">{service.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <span
                                    className={cn(
                                      "block text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r truncate",
                                      service.gradient,
                                    )}
                                  >
                                    {service.title}
                                  </span>
                                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300 truncate">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-[#5CE1E6] transition-colors flex-shrink-0 ml-2" />
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

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5CE1E6]/50 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

