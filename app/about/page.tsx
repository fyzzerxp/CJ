import type { Metadata } from "next"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { StoriesSection } from "@/components/stories-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { Footer } from "@/components/footer"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"

export const metadata: Metadata = {
  title: "About Us | Ability First Foundation",
  description: "Learn about Ability First Foundation's 25-year mission of empowering people with disabilities through education, therapy, and community programs.",
}

// Team section component
function TeamSection() {
  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Executive Director",
      bio: "With over 20 years in disability services, Dr. Mitchell leads our organization with compassion and vision.",
    },
    {
      name: "Michael Chen",
      role: "Director of Programs",
      bio: "Michael oversees all therapeutic and educational programs, ensuring quality care for every participant.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Community Outreach Manager",
      bio: "Lisa builds partnerships and connections that expand our reach and impact in the community.",
    },
    {
      name: "James Thompson",
      role: "Volunteer Coordinator",
      bio: "James manages our dedicated volunteer team and ensures meaningful engagement opportunities.",
    },
  ]

  return (
    <section 
      id="team"
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            id="team-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dedicated professionals committed to our mission of empowering 
            people with disabilities.
          </p>
        </div>

        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Leadership team members"
        >
          {team.map((member) => (
            <article 
              key={member.name}
              className="bg-card border border-border rounded-xl p-6 text-center"
              role="listitem"
            >
              <div 
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// News preview section
function NewsSection() {
  const news = [
    {
      title: "Annual Gala Raises Record Funds",
      date: "December 15, 2025",
      excerpt: "Our annual fundraising gala exceeded expectations, raising over $500,000 for new programs.",
    },
    {
      title: "New Therapy Center Opening",
      date: "November 1, 2025",
      excerpt: "We are excited to announce the opening of our third therapy center serving the eastern region.",
    },
    {
      title: "Employment Program Milestone",
      date: "October 20, 2025",
      excerpt: "Our employment program has now helped over 1,000 individuals find meaningful work.",
    },
  ]

  return (
    <section 
      id="news"
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            id="news-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            News & Events
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with the latest from Ability First Foundation.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Recent news"
        >
          {news.map((item) => (
            <article 
              key={item.title}
              className="bg-card border border-border rounded-xl p-6"
              role="listitem"
            >
              <time className="text-sm text-primary font-medium">{item.date}</time>
              <h3 className="text-lg font-semibold text-foreground mt-2">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Page hero for inner pages
function PageHero({ title, description }: { title: string; description: string }) {
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
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
     

      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero 
          title="About Us"
          description="Learn about our 25-year journey of empowering people with disabilities through compassion, innovation, and community."
        />
        <AboutSection />
        <TeamSection />
        <StoriesSection />
        {/* <FacilitiesSection /> */}
        <NewsSection />
      </main>

      <Footer />
      {/* <AccessibilityToolbar /> */}
    </>
  )
}
