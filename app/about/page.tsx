import type { Metadata } from "next"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { StoriesSection } from "@/components/stories-section"
import { Footer } from "@/components/footer"


export const metadata: Metadata = {
  title: "About Us | CJ Support Services",
  description: "Learn about CJ Support Services mission of empowering people with disabilities through education, therapy, and community programs.",
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
      className="py-16 sm:py-24 "
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


// Page hero for inner pages
function PageHero() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/9.jpeg"
          alt="About CJ SupportServices"
          className="w-full h-full object-cover object-[0%_30%]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          About Us
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Learn about our journey of empowering people with disabilities
          through compassion, innovation, and strong community connection.
        </p>

        <div className="mt-10 w-24 h-1 bg-accent mx-auto rounded-full" />
      </div>
    </section>
  )
}



export default function AboutPage() {
  return (
    <>
     

      <Header />

      <main id="main-content" tabIndex={-1}>
        <PageHero />
        <AboutSection />
        <TeamSection />
        <StoriesSection />
       
      </main>

      <Footer />
    
    </>
  )
}
