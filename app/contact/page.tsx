import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"

export const metadata: Metadata = {
  title: "Contact Us | Ability First Foundation",
  description: "Get in touch with Ability First Foundation. We're here to answer your questions about our programs, volunteer opportunities, and how we can support you.",
}

function PageHero() {
  return (
    <section 
      className="bg-gradient-to-b from-secondary to-background py-16 sm:py-20"
      aria-labelledby="page-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          id="page-heading"
          className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-balance"
        >
          Contact Us
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Have questions or want to learn more? We would love to hear from you. 
          Our team is here to help.
        </p>
      </div>
    </section>
  )
}

function LocationsSection() {
  const locations = [
    {
      name: "Main Center",
      address: "123 Inclusion Avenue, Springfield, ST 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
    },
    {
      name: "East Center",
      address: "456 Community Drive, Eastville, ST 12346",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 8AM-5PM",
    },
    {
      name: "West Therapy Center",
      address: "789 Wellness Way, Westbrook, ST 12347",
      phone: "(555) 345-6789",
      hours: "Mon-Sat: 7AM-7PM",
    },
  ]

  return (
    <section 
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="locations-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visit us at one of our three accessible centers throughout the region.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Office locations"
        >
          {locations.map((location) => (
            <article 
              key={location.name}
              className="bg-card border border-border rounded-xl p-6"
              role="listitem"
            >
              <h3 className="text-lg font-semibold text-foreground">{location.name}</h3>
              <address className="mt-3 text-muted-foreground not-italic text-sm space-y-2">
                <p>{location.address}</p>
                <p>
                  <a 
                    href={`tel:${location.phone.replace(/\D/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {location.phone}
                  </a>
                </p>
                <p className="text-xs">{location.hours}</p>
              </address>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fully Accessible
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "How do I enroll in a program?",
      answer: "Contact us through the form above or call our main office. Our intake team will guide you through the enrollment process and help determine which programs are right for you.",
    },
    {
      question: "Is there a cost for services?",
      answer: "Many of our programs are offered at no cost or on a sliding scale based on income. We also accept various insurance and funding sources. Contact us to discuss your options.",
    },
    {
      question: "How can I volunteer?",
      answer: "Visit our Get Involved page or complete the contact form indicating your interest in volunteering. All volunteers receive orientation and training before starting.",
    },
    {
      question: "Do you offer services in languages other than English?",
      answer: "Yes, we have staff members who speak Spanish, and we can arrange interpretation services for other languages. Please let us know your needs when you contact us.",
    },
  ]

  return (
    <section 
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div 
          className="space-y-6"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq) => (
            <article 
              key={faq.question}
              className="bg-card border border-border rounded-xl p-6"
              role="listitem"
            >
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <>
      

      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero />
        <ContactSection />
        <LocationsSection />
        <FAQSection />
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
