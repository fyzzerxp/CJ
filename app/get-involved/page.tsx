import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Get Involved | Ability First Foundation",
  description: "Make a difference by volunteering, donating, or partnering with Ability First Foundation. Every contribution helps empower people with disabilities.",
}

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
          Get Involved
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          There are many ways to support our mission and help create a more 
          inclusive world for people with disabilities.
        </p>
      </div>
    </section>
  )
}

function VolunteerSection() {
  const volunteerRoles = [
    {
      title: "Program Assistant",
      description: "Support our staff during educational and therapy programs.",
      commitment: "4-8 hours/week",
    },
    {
      title: "Office Support",
      description: "Help with administrative tasks, data entry, and communications.",
      commitment: "2-4 hours/week",
    },
    {
      title: "Event Volunteer",
      description: "Assist with fundraising events, community outreach, and activities.",
      commitment: "As needed",
    },
    {
      title: "Transportation Buddy",
      description: "Accompany participants on community outings and appointments.",
      commitment: "4-6 hours/week",
    },
  ]

  return (
    <section 
      id="volunteer"
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="volunteer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="volunteer-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Volunteer Opportunities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our team of dedicated volunteers and make a direct impact in the lives 
            of people with disabilities. All volunteers receive training and support.
          </p>
        </div>

        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Volunteer roles"
        >
          {volunteerRoles.map((role) => (
            <article 
              key={role.title}
              className="bg-card border border-border rounded-xl p-6"
              role="listitem"
            >
              <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{role.description}</p>
              <p className="mt-4 text-primary font-medium text-sm">{role.commitment}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/contact">Apply to Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CareersSection() {
  const openings = [
    {
      title: "Occupational Therapist",
      type: "Full-time",
      location: "Springfield Center",
    },
    {
      title: "Program Coordinator",
      type: "Full-time",
      location: "Main Office",
    },
    {
      title: "Speech-Language Pathologist",
      type: "Part-time",
      location: "East Center",
    },
  ]

  return (
    <section 
      id="careers"
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="careers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="careers-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Career Opportunities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our professional team and build a meaningful career making a 
            difference in the lives of people with disabilities.
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto space-y-4"
          role="list"
          aria-label="Job openings"
        >
          {openings.map((job) => (
            <article 
              key={job.title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              role="listitem"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {job.type} &bull; {job.location}
                </p>
              </div>
              <Button asChild variant={'outline'} className="text-black">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Do not see a role that fits? <Link href="/contact" className="text-primary hover:underline">Send us your resume</Link> for future opportunities.
        </p>
      </div>
    </section>
  )
}

function PartnerSection() {
  const partners = [
    {
      title: "Corporate Sponsorship",
      description: "Sponsor programs, events, or scholarships with your company's support.",
      benefits: ["Brand visibility", "Employee engagement", "Tax benefits"],
    },
    {
      title: "Employment Partnership",
      description: "Create inclusive hiring practices and provide job opportunities.",
      benefits: ["Diverse workforce", "Community impact", "Training support"],
    },
    {
      title: "In-Kind Donations",
      description: "Donate goods, services, or professional expertise to our programs.",
      benefits: ["Direct impact", "Flexible giving", "Tax deductible"],
    },
  ]

  return (
    <section 
      id="partner"
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="partner-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="partner-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Organizations and businesses can partner with us to create inclusive 
            opportunities and support our mission in meaningful ways.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Partnership opportunities"
        >
          {partners.map((partner) => (
            <article 
              key={partner.title}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
              role="listitem"
            >
              <h3 className="text-xl font-semibold text-foreground">{partner.title}</h3>
              <p className="mt-3 text-muted-foreground">{partner.description}</p>
              <ul className="mt-4 space-y-2">
                {partner.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/contact">Discuss Partnership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function GetInvolvedPage() {
  return (
    <>
      
      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero />
        <GetInvolvedSection />
        <VolunteerSection />
        <CareersSection />
        <PartnerSection />
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
