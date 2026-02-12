import Link from "next/link"
import { Button } from "@/components/ui/button"

type SectionWithPoints = {
  title: string
  content?: string
  points?: string[]
  note?: string
}

type IncludedSection = {
  heading: string
  content: string
}

type Service = {
  title: string
  description: string
  intro: string
  approach: SectionWithPoints
  servicesIncluded: {
    title: string
    sections: IncludedSection[]
  }
  whoItsFor: SectionWithPoints
  flexibleCare: SectionWithPoints
  staff: SectionWithPoints
  whyChooseUs: SectionWithPoints
  closing: string
}

export function ServiceDetails({ service }: { service: Service }) {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 space-y-16">

          {/* INTRO */}
          <div className="bg-card border rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {service.intro}
            </p>
          </div>

          {/* APPROACH */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {service.approach.title}
            </h2>

            {service.approach.content && (
              <p className="text-muted-foreground mb-6">
                {service.approach.content}
              </p>
            )}

            {service.approach.points && (
              <ul className="space-y-3 text-muted-foreground">
                {service.approach.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WHAT'S INCLUDED */}
          <div>
            <h2 className="text-2xl font-bold mb-8">
              {service.servicesIncluded.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {service.servicesIncluded.sections.map((section) => (
                <div
                  key={section.heading}
                  className="bg-card border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-muted-foreground">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHO IT'S FOR */}
          {service.whoItsFor && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {service.whoItsFor.title}
              </h2>

              {service.whoItsFor.points && (
                <ul className="space-y-3 text-muted-foreground">
                  {service.whoItsFor.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-primary">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* FLEXIBLE CARE */}
          {service.flexibleCare && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {service.flexibleCare.title}
              </h2>

              {service.flexibleCare.content && (
                <p className="text-muted-foreground mb-6">
                  {service.flexibleCare.content}
                </p>
              )}

              {service.flexibleCare.points && (
                <ul className="space-y-3 text-muted-foreground">
                  {service.flexibleCare.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-primary">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {service.flexibleCare.note && (
                <p className="mt-6 text-muted-foreground italic">
                  {service.flexibleCare.note}
                </p>
              )}
            </div>
          )}

          {/* STAFF */}
          {service.staff && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {service.staff.title}
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                {service.staff.points?.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WHY CHOOSE US */}
          {service.whyChooseUs && (
            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                {service.whyChooseUs.title}
              </h2>

              <ul className="space-y-3">
                {service.whyChooseUs.points?.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CLOSING */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              {service.closing}
            </p>

            <Button asChild size="lg">
              <Link href="/contact">
                Enquire Now
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </main>
  )
}
