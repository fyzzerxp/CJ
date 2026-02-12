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

export const kidsServices = [
  {
    id: "before-school-care",
    title: "Before School Care",
    href: "/category/kids/before-school-care",
    description:
      "Safe and structured morning care that helps children begin their school day with confidence, routine, and support.",
    features: [
      "Morning Supervision",
      "Breakfast Support",
      "Routine Development",
      "School Drop-off Assistance",
    ],
  },
  {
    id: "after-school-support",
    title: "After School Support",
    href: "/category/kids/after-school-support",
    description:
      "Structured and engaging after-school support designed to help children relax, learn, and build confidence in a safe environment.",
    features: [
      "Homework Assistance",
      "Creative & Recreational Activities",
      "Social Interaction Programs",
      "Emotional & Behavioural Support",
    ],
  },
  {
    id: "weekend-support",
    title: "Weekend Support for Children",
    href: "/category/kids/weekend-support",
    description:
      "Flexible weekend support services providing engaging, safe, and structured care tailored to each child’s needs.",
    features: [
      "Structured Weekend Activities",
      "Community Participation",
      "Social Skill Development",
      "Family Support Options",
    ],
  },
  {
    id: "school-transport",
    title: "School Transport Service",
    href: "/category/kids/school-transport",
    description:
      "Safe, reliable, and supervised transport services to support children travelling between home, school, and approved activities.",
    features: [
      "Supervised Pick-up & Drop-off",
      "Safe Travel Assistance",
      "NDIS Approved Transport Support",
      "Reliable Scheduling",
    ],
  },
  {
    id: "school-age-health",
    title: "School-Age Health & Daily Care",
    href: "/category/kids/school-age-health",
    description:
      "Professional health and daily care support tailored for school-aged children requiring additional assistance.",
    features: [
      "Medication Assistance",
      "Personal Care Support",
      "Health Monitoring",
      "Coordination with Schools",
    ],
  },
  {
    id: "school-age-nutrition",
    title: "School-Age Nutrition & Fitness",
    href: "/category/kids/school-age-nutrition",
    description:
      "Promoting healthy habits through structured nutrition guidance and age-appropriate physical activity programs.",
    features: [
      "Healthy Eating Support",
      "Nutrition Guidance",
      "Physical Activity Programs",
      "Wellbeing Education",
    ],
  },
  {
    id: "school-age-safety",
    title: "School-Age Safety & Protection",
    href: "/categorykids/school-age-safety",
    description:
      "Ensuring children’s safety, wellbeing, and protection through structured supervision and safeguarding practices.",
    features: [
      "Safe Supervision",
      "Protective Environment",
      "Risk Awareness Education",
      "Safeguarding Practices",
    ],
  },
  {
    id: "school-age-behaviour",
    title: "School-Age Behavioural Support",
    href: "/category/kids/school-age-behaviour",
    description:
      "Positive behaviour support programs designed to help children develop emotional regulation and social confidence.",
    features: [
      "Behaviour Support Plans",
      "Emotional Regulation Skills",
      "Family Collaboration",
      "Social Skill Development",
    ],
  },
]


function PageHero() {
  return (
    
     <section className="relative py-20 sm:py-28 overflow-hidden">
      
     {/* Background Image */}
     <div className="absolute inset-0">
       <img
         src="/kids.jpg"
         alt="About CJ SupportServices"
         className="w-full h-full object-cover object-[0%_10%]"
       />
       <div className="absolute inset-0 bg-black/60" />
     </div>

     {/* Content */}
     <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
       
       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
       Kids Services & Programs
       </h1>

       <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
       Compassionate, structured and engaging support services tailored for
       children and families.
       </p>

       <div className="mt-10 w-24 h-1 bg-accent mx-auto rounded-full" />
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
                    <Link href={service.href}>Learn More</Link>
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
