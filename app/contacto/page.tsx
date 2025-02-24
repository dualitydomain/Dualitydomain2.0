"use client"

import { useState, useEffect } from "react"
import Contact from "@/components/contact"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render a loading state or nothing on the server side
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen pt-16">
      <Contact />
    </div>
  )
}

