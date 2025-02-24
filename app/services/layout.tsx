"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#002133] text-white pt-16">
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

