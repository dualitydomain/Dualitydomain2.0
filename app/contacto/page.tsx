"use client"

import { useState, useEffect } from "react"
import Contact from "@/components/contact"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="min-h-screen pt-16">
      <Contact />
    </div>
  )
}

