"use client";

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"



function PageHero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-background py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Partner With Us. Create Inclusive Impact.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Collaborate with us to build meaningful opportunities and drive
          inclusive growth for people with disabilities. Together, we can
          create lasting social and economic change.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-black"
          >
            <Link href="#partner">Learn More</Link>
          </Button>

          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/contact">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhyWorkWithUs() {
  const points = [
    {
      title: "Nurse-Led Clinical Leadership",
      description:
        "Founded and operated by Registered Nurses, we uphold strong clinical governance and evidence-based practice standards.",
    },
    {
      title: "Experience in Complex Care",
      description:
        "We support individuals with disability, complex medical conditions and ageing-related needs through structured, safe care planning.",
    },
    {
      title: "Supportive Professional Culture",
      description:
        "Join a collaborative team environment focused on professional integrity, safety and continuous development.",
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Intro */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Why Work With C&J Support Services
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As a nurse-led organisation, we combine clinical expertise with
              compassionate, person-centred care. Our team works within clear
              professional standards to ensure safe and high-quality support.
            </p>
          </div>

          {/* Right Vertical Points */}
          <div className="space-y-10">
            {points.map((point) => (
              <div key={point.title} className="border-l-2 border-primary/30 pl-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}



function PartnerSection() {
  const partners = [
    {
      title: "Corporate Sponsorship",
      description: "Sponsor programs, events, or scholarships with your company's support.",
      benefits: ["Brand visibility", "Employee engagement", "Tax benefits"],
    },
    {
      title: "Employment Partnership",
      description: "Create inclusive hiring practices and provide job opportunities.",
      benefits: ["Diverse workforce", "Community impact", "Training support"],
    },
    {
      title: "In-Kind Donations",
      description: "Donate goods, services, or professional expertise to our programs.",
      benefits: ["Direct impact", "Flexible giving", "Tax deductible"],
    },
  ]

  return (
    <section 
      id="partner"
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="partner-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="partner-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Organizations and businesses can partner with us to create inclusive 
            opportunities and support our mission in meaningful ways.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Partnership opportunities"
        >
          {partners.map((partner) => (
            <article 
              key={partner.title}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
              role="listitem"
            >
              <h3 className="text-xl font-semibold text-foreground">{partner.title}</h3>
              <p className="mt-3 text-muted-foreground">{partner.description}</p>
              <ul className="mt-4 space-y-2">
                {partner.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/contact">Discuss Partnership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}




export default function GetInvolvedPage() {
  return (
    <>
      
      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero />
        <WhyWorkWithUs/>
        <PartnerSection />
       
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
