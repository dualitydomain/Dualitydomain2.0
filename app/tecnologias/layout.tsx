import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TechnologiesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#002133]">{children}</div>
      <Footer />
    </>
  )
}

