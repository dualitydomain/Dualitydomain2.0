"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlitchText from "./glitch-text"
import NeuralBackground from "./neural-background"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-16"
      style={{
        minHeight: "1080px",
        maxHeight: "1080px",
      }}
    >
      {/* Neural Background */}
      <NeuralBackground />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#002133]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#002133]/50 via-transparent to-[#002133]/50" />

      <motion.div style={{ y, opacity }} className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="overflow-hidden"
              >
                <div className="inline-flex h-8 animate-background-shine items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 text-sm text-slate-300 transition-colors">
                  <GlitchText text="Innovación Digital" delay={1000} />
                </div>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <GlitchText
                  text="Conectando"
                  delay={1500}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] via-[#5CE1E6] to-orange-500"
                />
                <GlitchText text="Tecnología &" delay={2000} className="block text-white" />
                <GlitchText
                  text="Experiencias Únicas"
                  delay={2500}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-[#5CE1E6]"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100"
              >
                Somos un equipo especializado en diseño, desarrollo web y programación, creando soluciones digitales
                innovadoras y adaptadas a cada negocio.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button
                className="bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-black group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10">Comenzar Proyecto</span>
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-200 text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 relative overflow-hidden group"
              >
                <span className="relative z-10">Conoce Más</span>
                <motion.span
                  className="absolute inset-0 bg-zinc-200"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5CE1E6] to-orange-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10 h-full"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-rORjnnVxjIBO17FAOp8Vvr5HZf6Oez.png"
                alt="Duality Domain Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <GlitchText text="Scroll para explorar" delay={4000} className="text-zinc-400 text-sm" />
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-1 h-8 rounded-full bg-gradient-to-b from-[#5CE1E6] to-transparent"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

