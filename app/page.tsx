"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#002133] text-white overflow-hidden">
        <Hero />
        <Services />
        <Features />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

