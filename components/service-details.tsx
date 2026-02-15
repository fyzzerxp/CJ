"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ServiceDetails({ service }: { service: any }) {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-24 sm:py-32 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-4 text-center space-y-6"
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-primary bg-primary/15 px-4 py-2 rounded-full border border-primary/30"
            whileHover={{ scale: 1.05 }}
          >
            {service.category}
          </motion.span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-foreground">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            {service.description}
          </p>

          <div className="flex justify-center gap-2">
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-primary rounded-full"
            />
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="w-1 h-1 bg-secondary rounded-full"
            />
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="w-1 h-1 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

     
     {/* INTRO */}
<section className="relative py-24 bg-background overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-5% w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative max-w-5xl mx-auto px-4"
  >
    <div className="relative bg-gradient-to-br from-card to-card/80 backdrop-blur border border-border rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">

      {/* Accent line */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />

      <div className="relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
          A Thoughtful Introduction
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
          {service.intro}
        </p>
      </div>
    </div>
  </motion.div>
</section>


      {/* APPROACH */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-20 right-5% w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto px-4"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              {service.approach.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          {service.approach.content && (
            <p className="text-muted-foreground mb-10 max-w-3xl text-lg leading-relaxed">
              {service.approach.content}
            </p>
          )}

          <ul className="grid md:grid-cols-2 gap-6">
            {service.approach.points?.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex items-start gap-4 bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-primary font-bold text-lg mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-5% w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10% w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              {service.servicesIncluded.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.servicesIncluded.sections.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-card to-card/80 border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden relative"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />

                <h3 className="font-bold text-lg mb-4 text-foreground group-hover:text-primary transition-colors">
                  {section.heading}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WHO IT'S FOR */}
      {service.whoItsFor && (
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-20 right-5% w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto px-4"
          >
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                {service.whoItsFor.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>

            <ul className="space-y-4">
              {service.whoItsFor.points?.map((point, index) => (
                <motion.li 
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 text-lg group"
                >
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* FLEXIBLE CARE */}
      {service.flexibleCare && (
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto px-4 text-center space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                {service.flexibleCare.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </div>

            {service.flexibleCare.content && (
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                {service.flexibleCare.content}
              </p>
            )}

            <ul className="grid sm:grid-cols-2 gap-6">
              {service.flexibleCare.points?.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-6 text-muted-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:text-foreground"
                >
                  {point}
                </motion.li>
              ))}
            </ul>

            {service.flexibleCare.note && (
              <p className="text-muted-foreground italic text-sm">
                {service.flexibleCare.note}
              </p>
            )}
          </motion.div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      {service.whyChooseUs && (
        <section className="py-24 sm:py-32 bg-primary text-white relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto px-4 text-center space-y-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              {service.whyChooseUs.title}
            </h2>

            <ul className="grid sm:grid-cols-2 gap-6 text-left">
              {service.whyChooseUs.points?.map((point, index) => (
                <motion.li 
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-white/95">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="py-24 sm:py-32 bg-background text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-5% w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10% w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 space-y-8"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            {service.closing}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full shadow-xl"
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
