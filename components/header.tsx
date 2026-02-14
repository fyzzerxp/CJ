"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/get-involved", label: "Get Involved" },
 
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
  href="/" 
  className="flex items-center gap-3"
  aria-label="Ability First Foundation - Home"
>
  <img 
    className="w-10 h-10 rounded-full object-cover"
    src="/logo.jpeg" 
    alt="cj support service logo" 
  />

<div className="flex flex-col  items-center">
  <span className="font-bold text-lg hidden sm:block leading-tight">
    CJ SUPPORT SERVICES
  </span>
  <span className="text-[12px] text-muted-foreground -mt-0.5">
    When support meets care
  </span>
</div>

</Link>



          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
             {/* Categories Dropdown */}
               <div className="relative group">
    <button
      className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md hover:bg-secondary transition-colors"
      aria-haspopup="true"
    >
      Categories
    </button>

    {/* Dropdown */}
    <div className="absolute left-0 top-full mt-2 w-40 rounded-md border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
      <Link
        href="/category/kids"
        className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
      >
        Kids
      </Link>
      <Link
        href="/category/adults"
        className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
      >
        Adults
      </Link>
    </div>
              </div>
          </div>

          

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">

{/* Contact - softer */}
<Button
  asChild
  variant="ghost"
  className="
    h-10
    px-5
    text-foreground
    hover:bg-primary/10
    hover:text-primary
    transition-all
    duration-300
  "
>
  <Link href="/get-involved#donate">Donate</Link>
</Button>

{/* Donate - warm highlight */}
<Button
  asChild
  className="
    h-10
    px-6
    rounded-full
    bg-[#F4B24A] 
    text-white
    font-semibold
    shadow-md
    hover:bg-[#e7a53c]
    hover:shadow-lg
    hover:scale-105
    transition-all
    duration-300
  "
>
  <Link href="/contact">Contact Us</Link>
</Button>

</div>



          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden border-t border-border py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/get-involved">Volunteer</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/get-involved#donate">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
