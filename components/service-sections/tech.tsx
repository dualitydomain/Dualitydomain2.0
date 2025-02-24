"use client"

import { motion } from "framer-motion"
import GlitchText from "@/components/glitch-text"

interface ServiceTechProps {
  technologies: string[]
}

export default function ServiceTech({ technologies }: ServiceTechProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <GlitchText text="Tecnologías Utilizadas" />
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/10 px-4 py-2 rounded-full"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

