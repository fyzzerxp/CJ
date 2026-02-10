import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Stethoscope,
  Apple,
  Baby,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { AboutPreview } from "@/components/about-preview"


const services = [
  {
    icon: Stethoscope,
    title: "Home Nursing & Personal Care",
    description:
      "Professional nursing and personal care at home—medication support, hygiene assistance, and daily health management.",
    color: "bg-primary",
  },
  {
    icon: Apple,
    title: "Dietary & Nutrition Support",
    description:
      "Personalized meal planning and nutrition guidance tailored to health needs, allergies, and lifestyle goals.",
    color: "bg-coral",
  },
  {
    icon: Baby,
    title: "Child Development Programs",
    description:
      "Early intervention and developmental support that nurtures growth through guided play and learning.",
    color: "bg-primary",
  },
  {
    icon: GraduationCap,
    title: "School-Age Behavioral Support",
    description:
      "Behavioral strategies and social skills support to help children succeed at school and beyond.",
    color: "bg-coral",
  },
  {
    icon: HeartPulse,
    title: "Health & Daily Living Assistance",
    description:
      "Compassionate support with daily activities while preserving comfort, safety, and dignity.",
    color: "bg-primary",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Caregiver Guidance",
    description:
      "Practical training and resources to help caregivers provide safe, confident, and balanced care.",
    color: "bg-coral",
  },
];




// Programs preview section
function ProgramsPreview() {
  return (
    <section 
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="programs-preview-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            id="programs-preview-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive support designed to meet individual needs and promote independence.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Featured programs"
        >
          {services.map((service) => {
  const Icon = service.icon;

  return (
    <article
  key={service.title}
  role="listitem"
  className="
    group
    relative
    bg-card 
    border 
    border-border 
    rounded-xl 
    p-4 lg:p-6
    text-center
    transition-all 
    duration-500 
    ease-out
    hover:-translate-y-3
    hover:shadow-2xl
    hover:border-primary/40
    cursor-pointer
  "
>
  {/* Soft Gradient Glow */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

  {/* Icon */}
  <div
    className="
      w-16 h-16 
      bg-primary/10 
      rounded-xl 
      flex 
      items-center 
      justify-center 
      text-primary 
      mx-auto 
      mb-5
      transition-all 
      duration-500
      group-hover:scale-110
      group-hover:bg-primary/20
    "
    aria-hidden="true"
  >
    <Icon className="w-8 h-8 transition-transform duration-500 group-hover:rotate-6" />
  </div>

  <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
    {service.title}
  </h3>

  <p className="mt-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
    {service.description}
  </p>
</article>

  );
})}

        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/services">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// CTA section for getting involved
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
          Join Us in Making a Difference
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Whether you want to volunteer, donate, or partner with us, there are many ways 
          to support our mission and help create a more inclusive world.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild   size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-100">
            <Link href="/get-involved">Get Involved</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="h-12 px-8 round text-black">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
     

      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutPreview />
        <ProgramsPreview />
        <CTASection />
      </main>

      <Footer />

     
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
