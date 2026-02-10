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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

//Parallax section 
function ParallaxImpactSection() {
  return (
    <section
      className="relative py-18 sm:py-26 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/1.jpeg')", // put inside /public
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Because Every Person Deserves
          <span className="block mt-2 text-primary">
            To Feel Safe, Valued & Supported
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          At CJ SupportServices, we believe care is more than assistance —
          it’s about presence, patience and genuine human connection.
          We walk alongside individuals and families, providing support
          that adapts, empowers and restores confidence in everyday life.
        </p>

        {/* Optional subtle divider */}
        <div className="mt-10 w-24 h-1 bg-primary mx-auto rounded-full" />

      </div>
    </section>
  )
}


// CTA section for getting involved
function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-20 sm:py-28 overflow-hidden bg-primary"
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 opacity-90" />

      {/* Decorative glow shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Ready to Take the Next Step?
          <span className="block mt-2 text-white">
            Let’s Support You Today.
          </span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Whether you're seeking support for yourself or a loved one,
          our team is here to listen, guide and provide care that truly makes a difference.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <Button
            asChild
            size="lg"
           
            className="h-14 px-10 bg-white text-primary font-semibold hover:bg-white/90 transition-all duration-300"
          >
            <Link href="/contact">Get Started</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-14 px-10 bg-transparent border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
     

      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutPreview />
        <ParallaxImpactSection/>
        <ProgramsPreview />
        <CTASection />
      </main>

      <Footer />

     
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
