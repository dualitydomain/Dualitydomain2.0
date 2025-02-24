"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import GlitchText from "@/components/glitch-text"

interface Feature {
  title: string
  description: string
  icon: string
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <GlitchText text="Características" />
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <CheckCircle className="h-8 w-8 mb-4 text-[#5CE1E6]" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

