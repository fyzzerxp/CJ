import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Programs | Ability First Foundation",
  description: "Explore our comprehensive programs including Home Nursing Services, therapy services, mobility assistance, employment programs, community integration, and family resources.",
}

const programs = [
  {
    id: "nursing",
    title: "Home Nursing Services",
    description: "We deliver professional and compassionate home nursing services to individuals across Melbourne and Victoria. Our approach is centred on providing high-quality clinical care while supporting independane, dignity, and comfort within the familiarity of home.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    features: [
      "Medication Management",
      "Wound and Skin Care",
      "Diabetes Management Support",
      "Continence Care",
      "Personal Hygiene and Clinical Personal Care",
      "Palliative Care Support",
      "Catheter and Stoma Care",
    ],
  },
  {
    id: "diet",
    title: "Dietitian Services",
    description: "we recognise that good nutrition plays a vital role in overall health, wellbeing, and independence. Our Dietitian Services are designed to help individuals optimise their nutritional intake, manage chronic health conditions, and build sustainable, healthy eating habits that support everyday living",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    features: [
      "Nutritional Assessment & Personalised Planning",
      "Chronic Condition Support",
      "Weight & Appetite Support",
      "Condition-Specific Nutrition Therapy",
      "Mealtime & Eating Support",
     
    ],
  },
  {
    id: "homecare",
    title: "Home Care Support",
    description: "We believe home is more than just a place — it’s where comfort, independence, and dignity belong. Our Home Care Support services are designed to help you or your loved one remain safe, supported and thriving in familiar surroundings. We combine personalised care with respect, compassion and practical assistance so you can live life on your terms.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    features: [
      "Personalised Daily Assistance",
      "Household Support",
      "Accessible transportation services",
      "Safe Transport & Community Access",
      "Medication Reminders & Wellbeing Support",
      "Community & Social Engagement",
      "Flexible 24/7 Care"
    ],
  },
  {
    id: "transport",
    title: "Disability Transport Service",
    description: "We understand that safe, reliable transport is essential for independence, connection, and everyday life. Our Disability Transport Services are designed to support individuals in Melbourne and across Victoria to travel with confidence, comfort, and dignity. As a provider, we don’t just offer transport — we create freedom, access, and opportunity.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    features: [
      "Medical & Therapy Appointments",
      "Community & Social Access",
      "Education & Employment Travel",
      "Daily Living & Errands",
      "Special Events & Lifestyle Activities",
      "Wheelchair Friendly",
    ],
  },
  {
    id: "community",
    title: "Community Participation",
    description: "we believe that meaningful engagement, personal growth, skill development, and community connection are essential parts of everyday life. Our Day Programs are designed to help individuals build confidence, make connections, explore interests, and participate fully in community life.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    features: [
      "Creative & Recreational Activities",
      "Practical Life Skills Development",
      "Health & Wellbeing Activities",
      "Community outings and field trips",
      "Social Connection & Belonging",
      "Learning & Personal Development",
    ],
  },
  {
    id: "inhome",
    title: " In-Home Aged Care",
    description: "We believe that older adults deserve to live with comfort, dignity and independence for as long as possible — in the familiar surroundings of their own home. Our in-home aged care support services help you or your loved one stay safe, connected and supported while maintaining quality of life.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    features: [
      "Personal & Daily Care",
      "Household Support",
      "Health & Wellbeing Support",
      "Transport & Social Engagement",
      "Assistive Technology & Telehealth Support",
      
    ],
  },
  {
    id: "respite",
    title: "Respite Care & Short-Term Support",
    description: "We understand that caring for a loved one is both rewarding and demanding. Sometimes, carers need a break, support to recharge, or extra help during busy times. That’s where our Respite Care Services come in — providing temporary relief while ensuring your loved one continues to receive high-quality, compassionate support.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    features: [
      "In-Home Respite",
      "Community Respite",
      "Scheduled or Emergency Respite",
      
    ],
  },
]

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
          Our Programs & Services
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Comprehensive support designed to meet individual needs and promote independence, 
          growth, and community participation.
        </p>
      </div>
    </section>
  )
}

function ProgramsGrid() {
  return (
    <section 
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <article 
              key={program.id}
              id={program.id}
              className={`scroll-mt-24 ${index % 2 === 1 ? 'bg-secondary -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-12 rounded-2xl' : ''}`}
              aria-labelledby={`${program.id}-heading`}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary" aria-hidden="true">
                      {program.icon}
                    </div>
                    <h2 
                      id={`${program.id}-heading`}
                      className="text-2xl sm:text-3xl font-bold text-foreground"
                    >
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Program Features</h3>
                    <ul 
                      className="space-y-3"
                      aria-label={`Features of ${program.title}`}
                    >
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section 
      className="py-16 sm:py-24 bg-primary"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          id="cta-heading"
          className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance"
        >
          Ready to Get Started?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Contact us today to learn more about how our programs can support you or your loved one. 
          Our team is here to answer your questions and help you find the right services.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild variant="secondary" size="lg" className="h-12 px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="/get-involved">Support Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ProgramsPage() {
  return (
    <>
    
      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero />
        <ProgramsGrid />
        <CTASection />
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
