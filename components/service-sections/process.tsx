"use client"

import { motion } from "framer-motion"
import GlitchText from "@/components/glitch-text"

interface ProcessStep {
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <GlitchText text="Nuestro Proceso" />
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5CE1E6] text-black flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

