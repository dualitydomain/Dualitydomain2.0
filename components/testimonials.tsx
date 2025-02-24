"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana García",
    role: "CEO, TechStart",
    content:
      "Duality Domain transformó completamente nuestra presencia digital. Su enfoque innovador y atención al detalle superó todas nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing, InnovateLab",
    content:
      "La capacidad técnica y creatividad del equipo es excepcional. Lograron capturar perfectamente nuestra visión y llevarla al siguiente nivel.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Fundadora, FutureVision",
    content:
      "Un equipo verdaderamente profesional que no solo entrega resultados excepcionales, sino que también hace que todo el proceso sea transparente y eficiente.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "CTO, DigitalWave",
    content:
      "La atención al detalle y el compromiso con la excelencia de Duality Domain es incomparable. Han sido fundamentales en nuestro éxito digital.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#002133] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,225,230,0.1),transparent)]" />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5CE1E6] rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white">
              Lo Que Dicen Nuestros Clientes
            </span>
          </motion.h2>
        </div>

        <div className="relative h-[400px] max-w-3xl mx-auto">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: direction >= 0 ? 200 : -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction >= 0 ? -200 : 200,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="absolute inset-0"
            >
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 p-6">
                <Quote className="w-12 h-12 text-[#5CE1E6] opacity-50" />

                <p className="text-2xl text-white/90 italic">{testimonials[currentIndex].content}</p>

                <div className="space-y-2">
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#5CE1E6] text-[#5CE1E6]" />
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-[#5CE1E6]">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#5CE1E6]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

