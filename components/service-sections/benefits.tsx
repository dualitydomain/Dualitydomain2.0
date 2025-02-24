"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import GlitchText from "@/components/glitch-text"

interface ServiceBenefitsProps {
  benefits: string[]
  gradient: string
}

export default function ServiceBenefits({ benefits, gradient }: ServiceBenefitsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <GlitchText text="Beneficios" />
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className={`h-6 w-6 flex-shrink-0 ${gradient.split(" ")[1]}`} />
              <span className="text-white/90">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

