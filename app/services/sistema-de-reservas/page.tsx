import ServicePage from "@/components/service-page"

export default function SistemasDeReservas() {
  return (
    <ServicePage
      title="Sistemas de Reservas"
      description="Optimiza la gestión de citas y reservas para tu negocio."
      features={[
        "Calendario de reservas en tiempo real",
        "Confirmaciones automáticas por email y SMS",
        "Panel de administración para gestión de citas",
        "Integración con sistemas de pago",
      ]}
      benefits={[
        "Reduce las cancelaciones y no-shows",
        "Mejora la eficiencia operativa",
        "Ofrece comodidad a tus clientes",
        "Aumenta la satisfacción del cliente",
      ]}
      ctaText="Crear Sistema de Reservas"
      ctaLink="/contacto"
      gradient="from-yellow-500 to-[#5CE1E6]"
    />
  )
}

