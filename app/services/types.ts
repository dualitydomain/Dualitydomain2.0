export interface ServiceData {
  title: string
  subtitle: string
  description: string
  gradient: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  examples: {
    title: string
    description: string
    image: string
    stats: string[]
  }[]
  technologies: string[]
}

export interface ServicesData {
  [key: string]: ServiceData
}

