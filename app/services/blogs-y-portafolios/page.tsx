import ServicePage from "@/components/service-page"

export default function BlogsYPortafolios() {
  return (
    <ServicePage
      title="Blogs y Portafolios"
      description="Muestra tu trabajo y comparte tus ideas con un sitio web personalizado."
      features={[
        "Diseño elegante y funcional",
        "Sistema de gestión de contenidos fácil de usar",
        "Galerías de imágenes y proyectos",
        "Integración con redes sociales",
      ]}
      benefits={[
        "Establece tu autoridad en tu industria",
        "Atrae oportunidades profesionales",
        "Comparte tu conocimiento y experiencia",
        "Construye una audiencia leal",
      ]}
      ctaText="Crear Blog o Portafolio"
      ctaLink="/contacto"
      gradient="from-pink-500 to-[#5CE1E6]"
    />
  )
}

