"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GlitchText from "@/components/glitch-text"

interface Example {
  title: string
  description: string
  image: string
  stats: string[]
}

interface ServiceExamplesProps {
  examples: Example[]
}

export default function ServiceExamples({ examples }: ServiceExamplesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <GlitchText text="Ejemplos de Proyectos" />
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <Image
                src={example.image || "/placeholder.svg"}
                alt={example.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-white/70 mb-4">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.stats.map((stat, statIndex) => (
                    <span key={statIndex} className="bg-[#5CE1E6]/20 text-[#5CE1E6] px-2 py-1 rounded-full text-sm">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

