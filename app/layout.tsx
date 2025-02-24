import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import ChatBot from "@/components/chat-bot"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Duality Domain - Desarrollo Web y Diseño Digital en Argentina",
  description:
    "Expertos en desarrollo web, diseño digital y soluciones tecnológicas en Villa del Dique, Córdoba. Creamos experiencias digitales únicas y memorables para tu negocio.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}
