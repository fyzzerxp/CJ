import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServiceDetails({ service }: { service: any }) {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_60%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-4 py-1 rounded-full">
            {service.category}
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

     
     {/* INTRO */}
<section className="relative py-24 bg-background overflow-hidden">
  {/* subtle glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_70%)] pointer-events-none" />

  <div className="relative max-w-5xl mx-auto px-4">
    <div className="relative bg-card/80 backdrop-blur border rounded-3xl p-12 shadow-xl">

      {/* Accent line */}
      <div className="w-16 h-1 bg-accent rounded-full mb-6" />

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        A Thoughtful Introduction
      </h2>

      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
        {service.intro}
      </p>

    </div>
  </div>
</section>


      {/* APPROACH */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {service.approach.title}
          </h2>

          {service.approach.content && (
            <p className="text-muted-foreground mb-8 max-w-3xl">
              {service.approach.content}
            </p>
          )}

          <ul className="grid md:grid-cols-2 gap-6">
            {service.approach.points?.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 bg-card border rounded-xl p-6"
              >
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {service.servicesIncluded.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.servicesIncluded.sections.map((section) => (
              <div
                key={section.heading}
                className="group bg-card border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                  {section.heading}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      {service.whoItsFor && (
        <section className="py-20 bg-secondary/40">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              {service.whoItsFor.title}
            </h2>

            <ul className="space-y-4">
              {service.whoItsFor.points?.map((point) => (
                <li key={point} className="flex gap-4 text-lg">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FLEXIBLE CARE */}
      {service.flexibleCare && (
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {service.flexibleCare.title}
            </h2>

            {service.flexibleCare.content && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {service.flexibleCare.content}
              </p>
            )}

            <ul className="grid sm:grid-cols-2 gap-6 pt-6">
              {service.flexibleCare.points?.map((point) => (
                <li
                  key={point}
                  className="bg-card border rounded-xl p-6 text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>

            {service.flexibleCare.note && (
              <p className="text-muted-foreground italic pt-4">
                {service.flexibleCare.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      {service.whyChooseUs && (
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {service.whyChooseUs.title}
            </h2>

            <ul className="grid sm:grid-cols-2 gap-6 text-left">
              {service.whyChooseUs.points?.map((point) => (
                <li key={point} className="flex gap-4">
                  <span>✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <p className="text-xl text-muted-foreground">
            {service.closing}
          </p>

          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-base transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">
              Enquire Now
            </Link>
          </Button>
        </div>
      </section>

    </main>
  )
}
