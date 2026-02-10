import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Kids Services | CJ SUPPORT SERVICES",
  description:
    "Support services designed for children including school-age health, behaviour support, before and after school care, and developmental programs.",
}

const kidsServices = [
  {
    id: "school-health",
    title: "School Age Health Support",
    description:
      "Professional health support tailored for school-aged children to ensure their physical wellbeing and daily care needs are met in a safe and supportive environment.",
    features: [
      "Medication Assistance",
      "Chronic Condition Monitoring",
      "Individual Health Plans",
      "Coordination with Schools",
    ],
  },
  {
    id: "behaviour",
    title: "School Age Behaviour Support",
    description:
      "Positive behaviour strategies and therapeutic support to help children develop emotional regulation, social skills, and confidence.",
    features: [
      "Behaviour Support Plans",
      "Emotional Regulation Skills",
      "Family Collaboration",
      "Social Skill Development",
    ],
  },
  {
    id: "before-school",
    title: "Before School Care",
    description:
      "Safe and engaging care before school hours to help children start their day with confidence and routine.",
    features: [
      "Morning Supervision",
      "Structured Activities",
      "Breakfast Assistance",
      "School Drop-off Support",
    ],
  },
  {
    id: "after-school",
    title: "After School Support",
    description:
      "Structured and fun after-school programs focused on development, learning support, and social interaction.",
    features: [
      "Homework Assistance",
      "Creative Activities",
      "Social Interaction Programs",
      "Skill Development Sessions",
    ],
  },
]

function PageHero() {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Kids Services & Programs
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Compassionate, structured and engaging support services tailored for
          children and families.
        </p>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {kidsServices.map((service, index) => (
          <article
            key={service.id}
            className={`${
              index % 2 === 1
                ? "bg-secondary -mx-4 px-4 py-12 rounded-2xl"
                : ""
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Service Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let’s Support Your Child Together
        </h2>
        <p className="mt-6 text-lg opacity-90">
          Contact us today to learn more about our children-focused support
          services.
        </p>

        <div className="mt-10">
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function KidsPage() {
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
  )
}
