"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

export default function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text)
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let iteration = 0

    const startGlitch = () => {
      clearInterval(interval)

      interval = setInterval(() => {
        setGlitchedText((prev) =>
          prev
            .split("")
            .map((char, idx) => {
              if (idx < iteration) {
                return text[idx]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join(""),
        )

        iteration += 1 / 3

        if (iteration >= text.length) {
          clearInterval(interval)
          setGlitchedText(text)
          iteration = 0

          // Restart glitch effect after a delay
          timeout = setTimeout(startGlitch, 5000)
        }
      }, 30)
    }

    // Initial delay
    timeout = setTimeout(startGlitch, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      {glitchedText}
    </motion.span>
  )
}

