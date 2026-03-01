"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "lucide-react"


export function CTASection() {
    return (
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-foreground text-center relative overflow-hidden">
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
  
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block text-6xl mb-6"
          >
            ✨
          </motion.div>
  
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
          Ready to Take the Next Step?
          </h2>
  
          <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
          Whether you're seeking support for yourself or a loved one,
          our team is here to listen, guide and provide care that truly makes a difference.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-xl">
              <Link href="/contact">Get in touch</Link>
            </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild size="lg" className="h-12 px-8 rounded-full border-white shadow-xl">
              <Link href="/services">Explore services</Link>
            </Button>
            </motion.div>
           
          </div>
  
         
        </motion.div>
      </section>
    )
  }