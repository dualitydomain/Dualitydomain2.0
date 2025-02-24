import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import ChatBot from "@/components/chat-bot"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://dualitydomain.com"),
  title: {
    default: "Duality Domain - Desarrollo Web y Diseño Digital en Argentina",
    template: "%s | Duality Domain",
  },
  description:
    "Expertos en desarrollo web, diseño digital y soluciones tecnológicas en Villa del Dique, Córdoba. Creamos experiencias digitales únicas y memorables para tu negocio.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "argentina",
    "córdoba",
    "villa del dique",
    "landing pages",
    "ecommerce",
    "aplicaciones web",
    "diseño ui/ux",
  ],
  authors: [{ name: "Duality Domain", url: "https://dualitydomain.com" }],
  creator: "Duality Domain",
  publisher: "Duality Domain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://dualitydomain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://dualitydomain.com",
    title: "Duality Domain - Desarrollo Web y Diseño Digital en Argentina",
    description:
      "Expertos en desarrollo web, diseño digital y soluciones tecnológicas en Villa del Dique, Córdoba. Creamos experiencias digitales únicas y memorables para tu negocio.",
    siteName: "Duality Domain",
    images: [
      {
        url: "https://dualitydomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duality Domain - Desarrollo Web y Diseño Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duality Domain - Desarrollo Web y Diseño Digital en Argentina",
    description:
      "Expertos en desarrollo web, diseño digital y soluciones tecnológicas en Villa del Dique, Córdoba. Creamos experiencias digitales únicas y memorables para tu negocio.",
    images: ["https://dualitydomain.com/og-image.jpg"],
    creator: "@dualitydomain",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "Duality Domain",
  appleWebApp: {
    capable: true,
    title: "Duality Domain",
    statusBarStyle: "black-translucent",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5CE1E6" },
    { media: "(prefers-color-scheme: dark)", color: "#002133" },
  ],
}

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebDevelopmentBusiness",
  name: "Duality Domain",
  description:
    "Expertos en desarrollo web, diseño digital y soluciones tecnológicas en Villa del Dique, Córdoba. Creamos experiencias digitales únicas y memorables para tu negocio.",
  url: "https://dualitydomain.com",
  logo: "https://dualitydomain.com/logo.png",
  image: "https://dualitydomain.com/og-image.jpg",
  email: "dualitydomainoficial@gmail.com",
  telephone: "+543546501537",
  sameAs: ["https://instagram.com/dualitydomain"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Villa del Dique",
    addressLocality: "Villa del Dique",
    addressRegion: "Córdoba",
    postalCode: "5862",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-32.183333",
    longitude: "-64.500000",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  currenciesAccepted: "ARS, USD",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://dualitydomain.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#5CE1E6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}

