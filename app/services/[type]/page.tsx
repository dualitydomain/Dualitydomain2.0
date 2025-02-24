import { notFound } from "next/navigation"
import ServiceLayout from "@/components/service-layout"

const servicesData = {
  "landing-pages": {
    title: "Landing Pages",
    subtitle: "Páginas diseñadas para campañas específicas",
    description: "Convertimos visitantes en clientes con landing pages optimizadas y enfocadas en resultados.",
    gradient: "from-[#5CE1E6] to-blue-600",
    features: [
      {
        title: "Diseño Orientado a Conversión",
        description: "Estructuras y elementos visuales optimizados para maximizar las conversiones.",
        icon: "Target",
      },
      {
        title: "Optimización Móvil",
        description: "Experiencia perfecta en todos los dispositivos.",
        icon: "Smartphone",
      },
      {
        title: "A/B Testing",
        description: "Pruebas continuas para mejorar el rendimiento.",
        icon: "Split",
      },
      {
        title: "Análisis de Datos",
        description: "Seguimiento detallado del comportamiento del usuario.",
        icon: "ChartBar",
      },
    ],
    benefits: [
      "Mayor tasa de conversión",
      "Tiempo de carga optimizado",
      "Diseño responsivo",
      "Call-to-actions efectivos",
      "Integración con analytics",
      "SEO optimizado",
    ],
    process: [
      {
        title: "Análisis",
        description: "Estudiamos tu mercado y objetivos",
      },
      {
        title: "Estrategia",
        description: "Definimos la estructura y elementos clave",
      },
      {
        title: "Diseño",
        description: "Creamos una experiencia visual impactante",
      },
      {
        title: "Desarrollo",
        description: "Implementamos con las últimas tecnologías",
      },
      {
        title: "Optimización",
        description: "Mejoramos basados en datos reales",
      },
    ],
    examples: [
      {
        title: "App Launch",
        description: "Landing page para lanzamiento de aplicación móvil",
        image: "/placeholder.svg?height=600&width=800",
        stats: ["45% CTR", "2.5s Tiempo de carga", "89% Retención"],
      },
      {
        title: "Event Registration",
        description: "Página de registro para evento tech",
        image: "/placeholder.svg?height=600&width=800",
        stats: ["1200+ Registros", "3.1s Tiempo de carga", "92% Completados"],
      },
      {
        title: "Product Showcase",
        description: "Landing page para producto SaaS",
        image: "/placeholder.svg?height=600&width=800",
        stats: ["38% Conversión", "2.8s Tiempo de carga", "85% Engagement"],
      },
    ],
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Google Analytics", "Hotjar"],
  },
  // Añadir datos para otros servicios...
}

export default function ServicePage({ params }: { params: { type: string } }) {
  const serviceData = servicesData[params.type]

  if (!serviceData) {
    notFound()
  }

  return <ServiceLayout data={serviceData} />
}

