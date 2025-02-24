import ServicePage from "@/components/service-page"

export default function SitiosWebCorporativos() {
  return (
    <ServicePage
      title="Sitios Web Corporativos"
      description="Establece una presencia en línea profesional y atractiva para tu empresa."
      features={[
        "Diseño personalizado y profesional",
        "Optimización para motores de búsqueda (SEO)",
        "Integración con redes sociales",
        "Panel de administración intuitivo",
      ]}
      benefits={[
        "Mejora la credibilidad de tu marca",
        "Atrae a más clientes potenciales",
        "Facilita la comunicación con tu audiencia",
        "Destaca frente a la competencia",
      ]}
      ctaText="Crear Sitio Web Corporativo"
      ctaLink="/contacto"
      gradient="from-purple-500 to-[#5CE1E6]"
    />
  )
}

