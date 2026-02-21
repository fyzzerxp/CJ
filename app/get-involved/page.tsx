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
          Build Careers. Create Impact.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Join our team of professionals or partner with us to expand
          inclusive opportunities for people with disabilities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="#careers">View Careers</Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-black">
            <Link href="#partner">Partner With Us</Link>
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

function CareersSection() {
  const openings = [
    {
      title: "Occupational Therapist",
      type: "Full-time",
      location: "Springfield Center",
    },
    {
      title: "Program Coordinator",
      type: "Full-time",
      location: "Main Office",
    },
    {
      title: "Speech-Language Pathologist",
      type: "Part-time",
      location: "East Center",
    },
  ]

  return (
    <section 
      id="careers"
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="careers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="careers-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Career Opportunities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our professional team and build a meaningful career making a 
            difference in the lives of people with disabilities.
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto space-y-4"
          role="list"
          aria-label="Job openings"
        >
          {openings.map((job) => (
            <article 
              key={job.title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              role="listitem"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {job.type} &bull; {job.location}
                </p>
              </div>
              <Button asChild variant={'outline'} className="text-black">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Do not see a role that fits? <Link href="/contact" className="text-primary hover:underline">Send us your resume</Link> for future opportunities.
        </p>
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

function CTASection() {
  return (
    <section 
      className="py-24 sm:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-foreground text-center relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-6xl mb-6"
        >
          ✨
        </motion.div>

        <h2 
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
        >
          Ready to Make an Impact?
        </h2>
        
        <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
        Explore career opportunities or discuss partnership possibilities today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full shadow-xl"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
          
        </div>

        
      </motion.div>
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
        <CareersSection />
        <PartnerSection />
        <CTASection/>
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
