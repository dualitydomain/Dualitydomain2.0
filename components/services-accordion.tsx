"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas diseñadas para campañas específicas, con llamadas a la acción estratégicas para convertir visitantes en clientes.",
    features: ["Diseño orientado a conversión", "Optimización móvil", "A/B Testing", "Análisis de datos"],
    gradient: "from-[#5CE1E6] to-blue-600",
    href: "/servicios/landing-pages",
  },
  {
    title: "Sitios Web Corporativos",
    description:
      "Plataformas profesionales que presentan tu empresa, servicios y valores con un diseño atractivo y funcional.",
    features: ["Diseño personalizado", "Optimización SEO", "Integración CMS", "Múltiples idiomas"],
    gradient: "from-purple-500 to-[#5CE1E6]",
    href: "/servicios/sitios-corporativos",
  },
  {
    title: "Tiendas Online (E-Commerce)",
    description:
      "Desarrollo de e-commerce personalizados o en plataformas como Shopify, WooCommerce y Magento, con sistemas de pago integrados.",
    features: ["Catálogo de productos", "Pasarelas de pago", "Gestión de inventario", "Carrito de compras"],
    gradient: "from-orange-500 to-[#5CE1E6]",
    href: "/servicios/ecommerce",
  },
  // ... Añadir el resto de servicios
]

export default function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="group cursor-pointer"
          >
            {/* Header */}
            <div className="relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, ${service.gradient.split(" ")[1]}, ${service.gradient.split(" ")[3]})`,
                }}
              />

              <div className="relative p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#5CE1E6] transition-colors">
                  {service.title}
                </h3>
                <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-[#5CE1E6] transition-colors" />
                </motion.div>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r"
                style={{
                  background: `linear-gradient(to right, ${service.gradient.split(" ")[1]}, ${service.gradient.split(" ")[3]})`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: expandedIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-4 bg-white/5 rounded-b-lg border-t border-white/10">
                    <p className="text-white/90">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-[#5CE1E6] hover:text-white transition-colors group/link"
                    >
                      <span>Explorar servicio</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

