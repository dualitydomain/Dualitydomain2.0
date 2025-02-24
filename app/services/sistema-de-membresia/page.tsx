import ServicePage from "@/components/service-page"

export default function SistemasDeMembresía() {
  return (
    <ServicePage
      title="Sistemas de Membresía"
      description="Crea una comunidad en línea y monetiza tu contenido exclusivo."
      features={[
        "Niveles de membresía personalizables",
        "Contenido protegido y exclusivo",
        "Sistema de pagos recurrentes",
        "Foros y comunidades interactivas",
      ]}
      benefits={[
        "Genera ingresos recurrentes",
        "Construye una comunidad leal",
        "Ofrece valor exclusivo a tus miembros",
        "Automatiza la entrega de contenido",
      ]}
      ctaText="Crear Sistema de Membresía"
      ctaLink="/contacto"
      gradient="from-green-500 to-[#5CE1E6]"
    />
  )
}

