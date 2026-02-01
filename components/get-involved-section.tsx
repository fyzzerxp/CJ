import Link from "next/link"
import { Button } from "@/components/ui/button"

const opportunities = [
  {
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and make a direct impact in the lives of people with disabilities.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    cta: "Become a Volunteer",
    href: "/contact",
    features: [
      "Flexible scheduling",
      "Training provided",
      "Rewarding experience",
    ],
  },
  {
    title: "Donate",
    description: "Your generous contribution helps fund programs, equipment, and services for those who need them most.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    cta: "Make a Donation",
    href: "#donate",
    features: [
      "Tax-deductible",
      "Monthly giving options",
      "100% goes to programs",
    ],
  },
  {
    title: "Partner With Us",
    description: "Organizations and businesses can partner with us to create inclusive opportunities and support our mission.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    cta: "Explore Partnerships",
    href: "/contact",
    features: [
      "Corporate sponsorships",
      "Event collaborations",
      "Employment partnerships",
    ],
  },
]

export function GetInvolvedSection() {
  return (
    <section 
      id="get-involved" 
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Ways to get involved"
        >
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.title}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 flex flex-col"
              role="listitem"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5" aria-hidden="true">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{opportunity.title}</h3>
              <p className="mt-3 text-muted-foreground flex-grow">{opportunity.description}</p>
              <ul className="mt-4 space-y-2" aria-label={`Benefits of ${opportunity.title.toLowerCase()}`}>
                {opportunity.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link href={opportunity.href}>{opportunity.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Donate Section */}
        <div 
          id="donate" 
          className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 sm:p-12 text-center"
          aria-labelledby="donate-heading"
        >
          <h3 
            id="donate-heading"
            className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4"
          >
            Make a Difference Today
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Every donation, no matter the size, helps us continue our mission 
            of supporting people with disabilities. Your generosity changes lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="min-w-[100px]">
              $25
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[100px]">
              $50
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[100px]">
              $100
            </Button>
            <Button variant="outline" size="lg" className="min-w-[100px] bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Custom
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            All donations are tax-deductible. You will receive a receipt for your records.
          </p>
        </div>
      </div>
    </section>
  )
}
