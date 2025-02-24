"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Code2, Zap, Shield, Clock, Users } from "lucide-react"
import GlitchText from "./glitch-text"

const features = [
  {
    icon: Code2,
    title: "Desarrollo Personalizado",
    description: "Soluciones a medida que se adaptan perfectamente a tus necesidades específicas.",
    gradient: "from-[#5CE1E6] to-blue-600",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Implementamos las últimas medidas de seguridad para proteger tu proyecto.",
    gradient: "from-purple-500 to-[#5CE1E6]",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimizamos cada aspecto para garantizar una experiencia rápida y fluida.",
    gradient: "from-orange-500 to-[#5CE1E6]",
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Estamos disponibles en todo momento para ayudarte con cualquier necesidad.",
    gradient: "from-[#5CE1E6] to-green-500",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales especializados en las últimas tecnologías y tendencias.",
    gradient: "from-pink-500 to-[#5CE1E6]",
  },
  {
    icon: CheckCircle,
    title: "Calidad Garantizada",
    description: "Seguimos los más altos estándares de calidad en cada proyecto.",
    gradient: "from-[#5CE1E6] to-yellow-500",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Holographic card effect */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#5CE1E6] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000" />

      <div className="relative overflow-hidden rounded-xl bg-[#001219]/80 backdrop-blur-xl border border-white/10">
        {/* Cyber pattern background */}
        <div
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #5CE1E6 1px, transparent 1px),
              linear-gradient(-45deg, #5CE1E6 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.gradient} relative overflow-hidden`}
            >
              <feature.icon className="h-6 w-6 text-white relative z-10" />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)",
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

            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#5CE1E6] transition-colors">
                <GlitchText text={feature.title} delay={index * 1000} />
              </h3>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{feature.description}</p>
            </div>
          </div>

          {/* Animated borders */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(to right, transparent, ${feature.gradient.split(" ")[1]}, transparent)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-8 h-8">
            <motion.div
              className="absolute top-0 right-0 w-[2px] h-4 bg-[#5CE1E6]"
              animate={{
                height: [16, 24, 16],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
            <motion.div
              className="absolute top-0 right-0 w-4 h-[2px] bg-[#5CE1E6]"
              animate={{
                width: [16, 24, 16],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Animated background patterns */}
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
                  text="Por Qué Elegirnos"
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
              Nuestra experiencia y compromiso nos distinguen en cada proyecto
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
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

