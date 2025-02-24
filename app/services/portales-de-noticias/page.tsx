import ServicePage from "@/components/service-page"

export default function PortalesDeNoticias() {
  return (
    <ServicePage
      title="Portales de Noticias"
      description="Crea un portal de noticias dinámico y atractivo para mantener a tu audiencia informada."
      features={[
        "Sistema de gestión de contenidos avanzado",
        "Categorización y etiquetado de noticias",
        "Búsqueda y filtrado de contenido",
        "Integración con redes sociales y newsletters",
      ]}
      benefits={[
        "Mantén a tu audiencia comprometida e informada",
        "Genera ingresos a través de publicidad y contenido patrocinado",
        "Establece tu marca como fuente confiable de información",
        "Analiza el comportamiento de los lectores para mejorar el contenido",
      ]}
      ctaText="Crear Portal de Noticias"
      ctaLink="/contacto"
      gradient="from-indigo-500 to-[#5CE1E6]"
    />
  )
}

