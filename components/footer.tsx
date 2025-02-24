"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import GlitchText from "./glitch-text"

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#services" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Tecnologías", href: "/tecnologias" },
  { name: "Contacto", href: "/contacto" },
]

const services = [
  { name: "Landing Pages", href: "/servicios/landing-pages" },
  { name: "Sitios Web", href: "/servicios/sitios-web" },
  { name: "E-commerce", href: "/servicios/ecommerce" },
  { name: "Aplicaciones Web", href: "/servicios/aplicaciones" },
  { name: "UI/UX Design", href: "/servicios/design" },
]

const socialLinks = [
  { icon: Facebook, href: "#", color: "#1877F2" },
  { icon: Twitter, href: "#", color: "#1DA1F2" },
  { icon: Instagram, href: "#", color: "#E4405F" },
  { icon: Linkedin, href: "#", color: "#0A66C2" },
]

const contactInfo = [
  {
    icon: Phone,
    text: "+54 9 3546 50-1537",
    href: "tel:+543546501537",
    delay: 0.1,
  },
  {
    icon: Mail,
    text: "contacto@dualitydomain.com",
    href: "mailto:contacto@dualitydomain.com",
    delay: 0.2,
  },
  {
    icon: MapPin,
    text: "Ciudad Digital, Tecnópolis",
    href: "#",
    delay: 0.3,
  },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    setEmail("")
  }

  return (
    <footer className="relative overflow-hidden bg-[#001219] pt-24 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(92,225,230,0.1),transparent)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(92, 225, 230, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(92, 225, 230, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5CE1E6] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-rORjnnVxjIBO17FAOp8Vvr5HZf6Oez.png"
                    alt="Duality Domain Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </motion.div>
              </div>
              <motion.span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5CE1E6] to-white relative"
                whileHover={{
                  textShadow: "0 0 8px rgba(92, 225, 230, 0.5)",
                }}
              >
                Duality Domain
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[#5CE1E6] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>

            <p className="text-white/80 max-w-sm">
              Transformando ideas en experiencias digitales extraordinarias. Innovación y excelencia en cada línea de
              código.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors relative group overflow-hidden"
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5 text-white relative z-10" />
                  {isHovered === index && (
                    <motion.div
                      layoutId="social-hover"
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ backgroundColor: social.color }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                <GlitchText text="Enlaces Rápidos" delay={0} />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#5CE1E6] transition-colors relative group flex items-center"
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="relative">
                        {link.name}
                        {hoveredLink === link.name && (
                          <motion.span
                            layoutId="link-underline"
                            className="absolute left-0 right-0 bottom-0 h-px bg-[#5CE1E6]"
                          />
                        )}
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                <GlitchText text="Servicios" delay={0.2} />
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-[#5CE1E6] transition-colors relative group flex items-center"
                      onMouseEnter={() => setHoveredLink(service.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="relative">
                        {service.name}
                        {hoveredLink === service.name && (
                          <motion.span
                            layoutId="link-underline"
                            className="absolute left-0 right-0 bottom-0 h-px bg-[#5CE1E6]"
                          />
                        )}
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                <GlitchText text="Contacto" delay={0.4} />
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: info.delay }}
                  >
                    <Link
                      href={info.href}
                      className="flex items-center space-x-3 text-white/70 hover:text-[#5CE1E6] transition-colors group"
                    >
                      <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#5CE1E6]/20 transition-colors">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <span>{info.text}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                <GlitchText text="Newsletter" delay={0.6} />
              </h3>
              <p className="text-white/70">Suscríbete para recibir las últimas noticias y actualizaciones.</p>
              <form onSubmit={handleSubscribe} className="relative">
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pr-12"
                  required
                />
                <Button type="submit" size="icon" className="absolute right-1 top-1 bg-[#5CE1E6] hover:bg-[#5CE1E6]/90">
                  <Send className="h-4 w-4 text-black" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Duality Domain. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacidad"
                className="text-white/70 hover:text-[#5CE1E6] text-sm transition-colors relative group"
              >
                Política de Privacidad
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-px bg-[#5CE1E6]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                href="/terminos"
                className="text-white/70 hover:text-[#5CE1E6] text-sm transition-colors relative group"
              >
                Términos de Servicio
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-px bg-[#5CE1E6]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CE1E6] to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </footer>
  )
}

