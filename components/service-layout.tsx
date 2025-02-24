"use client"

import ServiceHero from "./service-sections/hero"
import ServiceFeatures from "./service-sections/features"
import ServiceBenefits from "./service-sections/benefits"
import ServiceProcess from "./service-sections/process"
import ServiceExamples from "./service-sections/examples"
import ServiceTech from "./service-sections/tech"
import ServiceCTA from "./service-sections/cta"

interface ServiceLayoutProps {
  data: {
    title: string
    subtitle: string
    description: string
    gradient: string
    features: Array<{
      title: string
      description: string
      icon: string
    }>
    benefits: string[]
    process: Array<{
      title: string
      description: string
    }>
    examples: Array<{
      title: string
      description: string
      image: string
      stats: string[]
    }>
    technologies: string[]
  }
}

export default function ServiceLayout({ data }: ServiceLayoutProps) {
  return (
    <main className="min-h-screen bg-[#002133] text-white overflow-hidden">
      <ServiceHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        gradient={data.gradient}
      />
      <ServiceFeatures features={data.features} />
      <ServiceBenefits benefits={data.benefits} gradient={data.gradient} />
      <ServiceProcess steps={data.process} />
      <ServiceExamples examples={data.examples} />
      <ServiceTech technologies={data.technologies} />
      <ServiceCTA title={data.title} gradient={data.gradient} />
    </main>
  )
}

