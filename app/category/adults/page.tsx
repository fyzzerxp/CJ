import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Adult Support & Home Care Services | CJ SupportServices",
  description:
    "Home nursing, post-hospital care, aged care packages, domestic support, respite care and disability transport across Melbourne and Regional Victoria.",
}


const adultServices = [
  {
    id: "home-nursing",
    title: "Home Nursing Services",
    href:"/category/adults/home-nursing",
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
    href:"/category/adults/post-hospital",
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
    href:"/category/adults/cleaning",
    description:
      "Maintaining a clean, safe, and comfortable home environment.",
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
    href:"/category/adults/dietitian",
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
    href:"/category/adults/home-care",
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
    href:"/category/adults/respite-care",
    description:
      "Short-term care support for clients and their families.",
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
    href:"/category/adults/disability-transport",
    description:
      "Safe and reliable transport to help you stay connected and independent.",
    features: [
      "Medical Appointments",
      "Community Access",
      "Social Outings",
      "Daily Activities",
    ],
  },
]


function PageHero() {
  return (
   
       <section className="relative py-20 sm:py-28 overflow-hidden">
      
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src="/6.jpeg"
           alt="About CJ SupportServices"
           className="w-full h-full object-cover object-[0%_30%]"
         />
         <div className="absolute inset-0 bg-black/60" />
       </div>
  
       {/* Content */}
       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
         
         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
         Adult Services & Programs
         </h1>
  
         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
         Empowering adults with support, independence, and meaningful
              community participation.
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
