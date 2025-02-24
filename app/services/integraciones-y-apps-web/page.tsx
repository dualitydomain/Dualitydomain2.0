import ServicePage from "@/components/service-page"

export default function IntegracionesYAppsWeb() {
  return (
    <ServicePage
      title="Integraciones y Apps Web"
      description="Desarrollamos aplicaciones web personalizadas e integramos sistemas para optimizar tu negocio."
      features={
        "Desarrollo de APIs personalizadas",
        "Integración con servicios de terceros",
        "Automatización de procesos empresariales",
        "Sincronización de datos entre plataformas",\
      ]}\
      benefits={[
        "Optimiza y agiliza tus procesos de negocio",
        "Mejora la colaboración entre equipos y departamentos",
        "Centraliza la información y reduce la duplicación de datos",
        "Escala tu negocio con soluciones tecnológicas a medida",
      ]}
      ctaText="Desarrollar Integración o App Web"
      ctaLink="/contacto"
      gradient="from-teal-500 to-[#5CE1E6]"
    />
  )
}

