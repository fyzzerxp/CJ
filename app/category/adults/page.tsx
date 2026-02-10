import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Adult Services | CJ SUPPORT SERVICES",
  description:
    "Comprehensive adult support services including employment support, community participation, independent living assistance, and health programs.",
}

const adultServices = [
  {
    id: "employment",
    title: "Employment Support",
    description:
      "Helping adults build skills, confidence, and pathways into meaningful employment opportunities.",
    features: [
      "Job Readiness Training",
      "Resume & Interview Support",
      "Workplace Mentoring",
      "Ongoing Employment Assistance",
    ],
  },
  {
    id: "independent-living",
    title: "Independent Living Support",
    description:
      "Support designed to promote autonomy, safety, and independence in everyday life.",
    features: [
      "Daily Living Assistance",
      "Budgeting & Life Skills",
      "Household Support",
      "Community Access",
    ],
  },
  {
    id: "health",
    title: "Health & Wellbeing Programs",
    description:
      "Personalised health programs focused on physical, mental, and emotional wellbeing.",
    features: [
      "Wellbeing Coaching",
      "Chronic Condition Support",
      "Mental Health Support",
      "Lifestyle Programs",
    ],
  },
  {
    id: "community",
    title: "Community Participation",
    description:
      "Encouraging adults to build connections, develop skills, and engage meaningfully within the community.",
    features: [
      "Group Activities",
      "Skill Development Workshops",
      "Recreational Programs",
      "Social Engagement Events",
    ],
  },
]

function PageHero() {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Adult Services & Programs
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering adults with support, independence, and meaningful
          community participation.
        </p>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {adultServices.map((service, index) => (
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
          Ready to Take the Next Step?
        </h2>
        <p className="mt-6 text-lg opacity-90">
          Our team is here to guide you toward the right support services.
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
  )
}
