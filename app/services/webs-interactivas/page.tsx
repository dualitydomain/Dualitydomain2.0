import ServicePage from "@/components/service-page"

export default function WebsInteractivas() {
  return (
    <ServicePage
      title="Webs Interactivas"
      description="Crea experiencias web inmersivas y memorables que cautiven a tu audiencia."
      features={[
        "Animaciones y transiciones fluidas",
        "Interacciones personalizadas",
        "Integración de elementos 3D y WebGL",
        "Experiencias adaptativas según el dispositivo",
      ]}
      benefits={[
        "Aumenta el tiempo de permanencia en el sitio",
        "Mejora la retención y el compromiso del usuario",
        "Diferénciate de la competencia con experiencias únicas",
        "Comunica tu mensaje de forma más efectiva e impactante",
      ]}
      ctaText="Crear Web Interactiva"
      ctaLink="/contacto"
      gradient="from-cyan-500 to-[#5CE1E6]"
    />
  )
}

