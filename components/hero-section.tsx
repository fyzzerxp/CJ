
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield, Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


const images = ["/hero.jpg", "/10.png", "/11.png"]



export function HeroSection ()  {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative  flex items-center pt-8 overflow-hidden">
      
     
     {/* Background Carousel */}
     <div className="absolute inset-0 z-0">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-3500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/70" />
    </div>


      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-28">
        <div className="max-w-3xl">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-white text-sm font-medium">
              Trusted by 500+ Families
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Care That Feels <span className="text-primary">Personal.</span> Support That Makes Life  <span className="text-primary">Easier.</span>
            
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/90 mb-10 max-w-2xl">
          Dedicated, personalized services for individuals of all abilities — delivered with respect, compassion, and commitment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button   size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="outline" size="lg" >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +61 0457052522
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex gap-8">
            {[{ icon: Heart, text: "Family-Centered Care" }, { icon: Shield, text: "Licensed Professionals" }].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <item.icon className="w-5 h-5  text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              )
            )}
          </div>

        </div>
      </div>

    </section>
  );
}



