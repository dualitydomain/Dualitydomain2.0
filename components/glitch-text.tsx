"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

export default function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const [displayedText, setDisplayedText] = useState(text)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          let nextChar = text[currentIndex]
          let increment = 1

          if (text.codePointAt(currentIndex)! > 0xffff) {
            nextChar = text.slice(currentIndex, currentIndex + 2)
            increment = 2
          }

          setDisplayedText((prev) => prev + nextChar)
          setCurrentIndex((prev) => prev + increment)
        },
        Math.random() * 30 + 20,
      )

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      {displayedText}
    </motion.span>
  )
}

