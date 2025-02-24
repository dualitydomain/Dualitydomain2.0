import dynamic from "next/dynamic"

const ContactPage = dynamic(() => import("@/components/contact-page"), { ssr: false })

export default function Contact() {
  return <ContactPage />
}

