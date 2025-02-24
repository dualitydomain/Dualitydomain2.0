import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function ServicesLayout({ children }: { children: ReactNode }) {
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

