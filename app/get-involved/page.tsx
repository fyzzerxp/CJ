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
           Let’s Build Impact Together
        </h2>
        
        <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
        Partner with us to create inclusive opportunities, expand access,
          and drive meaningful change in communities. We’re ready to
          collaborate with organizations that share our vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full shadow-xl"
            >
              <Link href="/contact">Partner With Us</Link>
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
        <CTASection/>
      
       
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
