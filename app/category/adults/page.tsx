"use client";

import { motion } from "framer-motion";

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

import {
  Stethoscope,
  Utensils,
  Home,
  Car,
  Users,
  UserRound,
  HandHeart,
  HeartPulse,
} from "lucide-react"

const metadata: Metadata = {
  title: "Adult Support & Home Care Services | CJ SupportServices",
  description:
    "Home nursing, post-hospital care, aged care packages, domestic support, respite care and disability transport across Melbourne and Regional Victoria.",
};

const adultServices = [
  {
    id: "home-nursing",
    title: "Home Nursing Services",
    href: "/category/adults/home-nursing",
    description:
      "Professional clinical care delivered in the comfort and safety of your home.",
    features: [
      "Medication Management",
      "Wound & Skin Care",
      "Diabetes Support",
      "Continence Care",
      "Palliative Support",
      "Post-Hospital Nursing Care",
      "Catheter & Stoma Management",
    ],
  },
  {
    id: "post-hospital",
    title: "Post-Hospital Care & Recovery Support",
    href: "/category/adults/post-hospital",
    description:
      "Safe transition support from hospital to home with ongoing recovery assistance.",
    features: [
      "Health Monitoring",
      "Medication Support",
      "Wound & Recovery Care",
      "Personal Care & Mobility Assistance",
      "Household Support",
      "Transport to Medical Appointments",
    ],
  },
  {
    id: "domestic-support",
    title: "Cleaning & Domestic Support",
    href: "/category/adults/cleaning",
    description: "Maintaining a clean, safe, and comfortable home environment.",
    features: [
      "General House Cleaning",
      "Laundry & Linen",
      "Kitchen & Bathroom Cleaning",
      "Bedroom & Living Space Support",
    ],
  },
  {
    id: "nutrition",
    title: "Dietitian & Nutrition Support",
    href: "/category/adults/dietitian",
    description:
      "Personalised nutrition guidance to support health and wellbeing.",
    features: [
      "Health Condition Nutrition Support",
      "Meal Planning",
      "Weight & Diabetes Management",
      "Food Education & Wellbeing Strategies",
    ],
  },
  {
    id: "aged-care",
    title: "Aged Care Home Care Packages",
    href: "/category/adults/home-care",
    description:
      "Comprehensive support to help you live independently as you age.",
    features: [
      "Personal Care",
      "Domestic Assistance",
      "Medication Support",
      "Transport & Community Access",
      "Social & Wellbeing Support",
    ],
  },
  {
    id: "respite",
    title: "Respite Care",
    href: "/category/adults/respite-care",
    description: "Short-term care support for clients and their families.",
    features: [
      "In-Home Respite",
      "Short-Term Personal Care",
      "Companionship & Supervision",
      "Flexible Scheduling",
    ],
  },
  {
    id: "transport",
    title: "Disability Transport",
    href: "/category/adults/disability-transport",
    description:
      "Safe and reliable transport to help you stay connected and independent.",
    features: [
      "Medical Appointments",
      "Community Access",
      "Social Outings",
      "Daily Activities",
    ],
  },
];

function PageHero() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0">
        <img
          src="/6.jpeg"
          alt="Adult Support Services"
          className="w-full h-full object-cover object-[0%_30%] scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          className="inline-block mb-6 px-4 py-2 bg-primary/15 rounded-full border border-white/30"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-semibold text-primary">
            Professional Care Services
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
          Adult Services & Programs
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium">
          Empowering adults with support, independence, and meaningful community
          participation.
        </p>

        <div className="mt-10 flex justify-center gap-2">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-primary rounded-full"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-1 h-1 bg-secondary rounded-full"
          />
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
  const serviceIcons = [
    Stethoscope,
     Utensils,
    Home,
     Car,
     Users,
     UserRound,
     HandHeart,
    HeartPulse,
  ];

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-5% w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10% w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adultServices.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 border border-border hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />

                  <div className="relative">
                    {/* Title with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-7">
                      {service.features.slice(0, 3).map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex gap-2 items-start text-xs text-muted-foreground group-hover:text-foreground transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                            •
                          </span>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button
                      asChild
                      className="w-full bg-primary  text-white font-semibold rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
                    >
                      <Link href={service.href}>Learn More →</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-foregorund text-center relative overflow-hidden">
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-6xl mb-6"
        >
          ✨
        </motion.div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
          Our compassionate team is ready to provide the right support services
          tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full shadow-xl"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function AdultsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <ServicesGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
