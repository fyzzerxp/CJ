import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield, Heart } from "lucide-react";
import Image from "next/image";


// export function HeroSection() {
//   return (
//     <section 
//       className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 sm:py-24 lg:py-32"
//       aria-labelledby="hero-heading"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-4xl mx-auto">
//           <h1 
//             id="hero-heading" 
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance"
//           >
//             Empowering Every{" "}
//             <span className="text-primary">Ability</span>
//           </h1>
//           <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
//             We believe in a world where everyone has the opportunity to thrive. 
//             Our mission is to support people with disabilities through education, 
//             therapy, and community programs that build independence and dignity.
//           </p>
          
//           {/* Call to Action Buttons */}
//           <div 
//             className="mt-10 flex flex-wrap items-center justify-center gap-4"
//             role="group"
//             aria-label="Primary actions"
//           >
//             <Button asChild size="lg" className="min-w-[140px] h-12 text-base">
//               <Link href="/programs">Our Work</Link>
//             </Button>
//             <Button asChild variant="outline" size="lg" className="min-w-[140px] h-12 text-base bg-transparent">
//               <Link href="/contact">Get Support</Link>
//             </Button>
           
//           </div>

//           {/* Quick Stats */}
//           <div 
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
//             role="list"
//             aria-label="Impact statistics"
//           >
//             {[
//               { number: "1,000+", label: "People Supported" },
//               { number: "10+", label: "Programs Offered" },
//               { number: "5", label: "Years of Service" },
//               { number: "20+", label: "Dedicated Staff" },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center" role="listitem">
//                 <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.number}</p>
//                 <p className="mt-2 text-sm sm:text-base text-muted-foreground">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" aria-hidden="true" />
//     </section>
//   )
// }



export function HeroSection ()  {
  return (
    <section className="relative  flex items-center pt-8 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/hero.jpg'
          alt="Caring professionals supporting a family member"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-20">
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
            Compassionate Care for{" "}
            <span className="text-primary">Every Ability</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/90 mb-10 max-w-2xl">
            We support differently-abled individuals and their families with
            personalized care that honors dignity, builds independence, and
            brings peace of mind.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button   size="lg">
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="outline" size="lg" >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (555) 123-4567
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



