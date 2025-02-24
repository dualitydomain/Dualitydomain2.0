import type { ReactNode } from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/header"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#002133]">{children}</div>
      <Footer />
    </>
  )
}

