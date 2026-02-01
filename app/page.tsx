import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
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


const services = [
  {
    icon: Stethoscope,
    title: "Home Nursing & Personal Care",
    description:
      "Skilled nursing and personal assistance in the comfort of your home. From medication management to daily hygiene support, we're there when you need us.",
    color: "bg-primary",
  },
  {
    icon: Apple,
    title: "Dietary & Nutrition Support",
    description:
      "Personalized meal planning and nutrition guidance tailored to specific health needs, allergies, and preferences. Healthy eating made simple.",
    color: "bg-coral",
  },
  {
    icon: Baby,
    title: "Child Development Programs",
    description:
      "Early intervention and developmental support for children. Our specialists work with families to nurture growth through play, learning, and love.",
    color: "bg-primary",
  },
  {
    icon: GraduationCap,
    title: "School-Age Behavioral Support",
    description:
      "Helping school-age children thrive with behavioral strategies, social skills training, and academic support that works with their unique needs.",
    color: "bg-coral",
  },
  {
    icon: HeartPulse,
    title: "Health & Daily Living Assistance",
    description:
      "Support with everyday activities—bathing, dressing, mobility, and more. Maintaining dignity and comfort in daily routines.",
    color: "bg-primary",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Caregiver Guidance",
    description:
      "Training and resources for family caregivers. Learn protective techniques, safety protocols, and self-care strategies to care without burning out.",
    color: "bg-coral",
  },
];

// Quick about preview
function AboutPreview() {
  return (
    <section 
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="about-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 
              id="about-preview-heading" 
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              Our Story of Care and Commitment
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1999, Ability First Foundation began with a simple 
                belief: every person deserves the opportunity to live with 
                dignity, independence, and purpose.
              </p>
              <p>
                What started as a small community program has grown into a 
                comprehensive support network, serving thousands of individuals 
                and families across the region.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div 
            className="grid sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Our core values"
          >
            {[
              { title: "Inclusion", description: "Everyone belongs and has something valuable to contribute." },
              { title: "Respect", description: "We honor the dignity of every person." },
              { title: "Empowerment", description: "We help individuals achieve their goals." },
              { title: "Excellence", description: "We strive for the highest standards." },
            ].map((value) => (
              <div 
                key={value.title} 
                className="bg-card border border-border rounded-xl p-6"
                role="listitem"
              >
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Programs preview section
function ProgramsPreview() {
  return (
    <section 
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="programs-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      className="bg-card border border-border rounded-xl p-6 lg:p-8 text-center"
      role="listitem"
    >
      <div
        className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-5"
        aria-hidden="true"
      >
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        {service.title}
      </h3>

      <p className="mt-4 text-muted-foreground">
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
