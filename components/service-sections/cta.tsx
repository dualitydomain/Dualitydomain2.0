"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import GlitchText from "@/components/glitch-text"

interface ServiceCTAProps {
  title: string
  gradient: string
}

export default function ServiceCTA({ title, gradient }: ServiceCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            <GlitchText text={`¿Listo para impulsar tu ${title}?`} />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Contáctanos hoy y comencemos a trabajar en tu proyecto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className={`bg-gradient-to-r ${gradient} text-white hover:opacity-90`}>
              <Link href="/contacto">
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

