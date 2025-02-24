import ServicePage from "@/components/service-page"

export default function PlataformasWebYDashboards() {
  return (
    <ServicePage
      title="Plataformas Web y Dashboards"
      description="Desarrollamos soluciones web personalizadas y paneles de control intuitivos para tu negocio."
      features={[
        "Interfaces de usuario intuitivas y responsivas",
        "Visualización de datos en tiempo real",
        "Integración con APIs y servicios externos",
        "Paneles personalizables y reportes avanzados",
      ]}
      benefits={[
        "Toma decisiones basadas en datos",
        "Mejora la eficiencia operativa",
        "Centraliza la información de tu negocio",
        "Automatiza procesos y flujos de trabajo",
      ]}
      ctaText="Crear Plataforma o Dashboard"
      ctaLink="/contacto"
      gradient="from-red-500 to-[#5CE1E6]"
    />
  )
}

