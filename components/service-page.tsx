"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlitchText from "./glitch-text"

interface ServicePageProps {
  title: string
  description: string
  features: string[]
  benefits: string[]
  ctaText: string
  ctaLink: string
  gradient: string
}

export default function ServicePage({
  title,
  description,
  features,
  benefits,
  ctaText,
  ctaLink,
  gradient,
}: ServicePageProps) {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold sm:text-5xl md:text-6xl"
        >
          <GlitchText text={title} className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`} />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-zinc-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className={`bg-gradient-to-r ${gradient} text-white hover:opacity-90`}>
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          <GlitchText text="Características" />
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <CheckCircle className={`h-6 w-6 mb-4 ${gradient.split(" ")[1]}`} />
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          <GlitchText text="Beneficios" />
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <CheckCircle className={`h-5 w-5 flex-shrink-0 ${gradient.split(" ")[1]}`} />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">
          <GlitchText text="¿Listo para empezar?" />
        </h2>
        <Button asChild size="lg" className={`bg-gradient-to-r ${gradient} text-white hover:opacity-90`}>
          <Link href={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}

