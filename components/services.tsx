"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Palette, Globe2, Cpu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlitchText from "./glitch-text"

const services = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
    icon: Code2,
    gradient: "from-[#5CE1E6] to-blue-600",
    delay: 0.2,
  },
  {
    title: "Diseño UI/UX",
    description: "Diseñamos experiencias de usuario intuitivas y atractivas.",
    icon: Palette,
    gradient: "from-purple-500 to-[#5CE1E6]",
    delay: 0.4,
  },
  {
    title: "Soluciones Digitales",
    description: "Desarrollamos soluciones personalizadas para tu negocio.",
    icon: Globe2,
    gradient: "from-orange-500 to-[#5CE1E6]",
    delay: 0.6,
  },
  {
    title: "Innovación Tecnológica",
    description: "Implementamos tecnologías de vanguardia para impulsar tu proyecto.",
    icon: Cpu,
    gradient: "from-[#5CE1E6] to-green-500",
    delay: 0.8,
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: service.delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Holographic effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 group-hover:duration-200" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-25 group-hover:opacity-75 transition-all duration-1000">
        <div className="absolute inset-[1px] rounded-xl bg-[#001219]" />
      </div>

      <div className="relative h-full bg-[#001219]/80 backdrop-blur-xl rounded-xl p-6 overflow-hidden">
        {/* Cyber pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #5CE1E6 1px, transparent 1px), linear-gradient(-45deg, #5CE1E6 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

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
              delay: 0.5,
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
              delay: 0.5,
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8 -rotate-90">
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
              delay: 1,
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
              delay: 1,
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8 rotate-180">
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
              delay: 1.5,
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
              delay: 1.5,
            }}
          />
        </div>

        <div className="relative space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${service.gradient} relative`}
          >
            <service.icon className="h-6 w-6 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)`,
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 200%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          <h3 className="text-xl font-bold text-white group-hover:text-[#5CE1E6] transition-colors">
            <GlitchText text={service.title} delay={index * 1000} />
          </h3>

          <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors relative">{service.description}</p>

          <Button
            variant="ghost"
            className="p-0 h-auto text-[#5CE1E6] hover:text-white hover:bg-transparent group/btn relative"
          >
            Saber más
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-[#5CE1E6]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </div>

        {/* Particle effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5CE1E6] rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
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
                  text="Nuestros Servicios"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white"
                />
              </h2>
              {/* Decorative elements */}
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
              Ofrecemos soluciones integrales para transformar tu presencia digital
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

