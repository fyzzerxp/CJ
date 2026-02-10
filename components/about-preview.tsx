"use client"


import { Button } from "./ui/button";
import Link from "next/link";
import Reveal from "./utils/reveal-wrapper";

export  function AboutPreview() {



    const values =[
        { id:1,title: "Inclusion", description: "Everyone belongs and has something valuable to contribute." },
        { id:2,title: "Respect", description: "We honor the dignity of every person." },
        { id:3,title: "Empowerment", description: "We help individuals achieve their goals." },
        { id:4,title: "Excellence", description: "We strive for the highest standards." },
      ]

    return (
      <section 
    className="  py-16 sm:py-24 bg-background overflow-hidden"
    aria-labelledby="about-preview-heading"
  >
    <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="  grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  
        {/* Left Content */}
        <Reveal>
        <div className=" space-y-6 ">
          <h2 
            id="about-preview-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance transition-all duration-500 hover:tracking-wide"
          >
            Our Story of Care and Commitment
          </h2>
  
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="transition-colors duration-300 hover:text-foreground">
              Founded in 1999, Ability First Foundation began with a simple 
              belief: every person deserves the opportunity to live with 
              dignity, independence, and purpose.
            </p>
            <p className="transition-colors duration-300 hover:text-foreground">
              What started as a small community program has grown into a 
              comprehensive support network, serving thousands of individuals 
              and families across the region.
            </p>
          </div>
  
          <div>
            <Button
              asChild 
              size="lg" 
              className="h-12 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        </Reveal>
       
  
        {/* Value Cards */}
        <div 
          className=" grid sm:grid-cols-2 gap-6"
          role="list"
          aria-label="Our core values"
        >
          {values.map((value, index) => (
  <Reveal key={value.id} delay={index * 120}>
    <div 
      role="listitem"
      className="
        group
        relative
        bg-card 
        border 
        border-border 
        rounded-xl 
        p-6
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:shadow-2xl
        hover:border-primary/40
        cursor-pointer
      "
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
        {value.title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {value.description}
      </p>
    </div>
  </Reveal>
))}

        </div>
  
      </div>
    </div>
  </section>
  
    )
  }
  