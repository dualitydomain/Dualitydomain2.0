"use client"

import { useState, useEffect } from "react"
import Contact from "@/components/contact"

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen pt-16">
      <Contact />
    </div>
  )
}

