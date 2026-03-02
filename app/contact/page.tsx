"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"



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



function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Who can receive support from CJ Support Services?",
      answer:
        "CJ Support Services welcomes adults, children, seniors, and individuals living with disability who need extra support at home or in the community. Whether you are an NDIS participant, receiving aged care funding, or seeking private support, we are here to help. Our focus is always on respecting your individuality and supporting you in a way that feels comfortable, safe, and empowering.",
    },
    {
      question: "How do I begin my journey with CJ Support Services?",
      answer:
        "Starting your support journey is simple and stress-free. Our friendly team takes the time to listen, understand your needs, and guide you through each step. We work with you to create a personalised support plan that reflects your goals, routines, and preferences, ensuring you feel confident and supported from the very beginning.",
    },
    {
      question: "What kind of support can I expect to receive?",
      answer:
        "As a provider, we offer a wide range of services designed to support your daily life, health, and independence. This includes home nursing, personal care, cleaning, transport, respite care, post-hospital recovery support, dietitian services, and children’s support programs. Every service is tailored to your unique needs, ensuring you receive care that truly makes a difference in your life.",
    },
    {
      question: "Will I have a say in choosing my support worker?",
      answer:
        "Absolutely. We believe that trust and comfort are essential to quality care. We carefully match you with support workers who understand your needs and preferences. If your needs change or you would like a different support worker, we will work with you to make adjustments so you always feel comfortable and respected.",
    },
    {
      question: "Where will my support be provided?",
      answer:
        "Most of our services are delivered in the comfort and familiarity of your own home, where you feel safest and most at ease. We also provide support in the community, including assistance with appointments, social activities, and daily tasks. Our goal is to help you live confidently both at home and in your community.",
    },
    {
      question: "Will my support change as my needs change?",
      answer:
        "Yes. We understand that life and needs can change over time. As a provider, we regularly review your support and stay connected with you to ensure your care continues to meet your goals. Our commitment is to provide consistent, reliable, and flexible support that grows with you.",
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            CJ Support Services — Here to Support You Every Step of the Way
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
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
      
        <FAQSection />
      </main>

      <Footer />
     
    </>
  )
}
