"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"


interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    access_key:process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [resultMessage, setResultMessage] = useState("")



  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim())
      newErrors.name = "Full name is required"

    if (!formState.email.trim())
      newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email format"

    if (formState.phone && !/^[\+]?[0-9\s\-()]{7,}$/.test(formState.phone))
      newErrors.phone = "Invalid phone number"

    if (!formState.subject)
      newErrors.subject = "Please select a subject"

    if (!formState.message.trim())
      newErrors.message = "Message is required"
    else if (formState.message.length < 10)
      newErrors.message = "Message must be at least 10 characters"

    return newErrors
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
  
    setIsSubmitting(true)
    setErrors({})
    setResultMessage("Sending...")
  
    try {
      const response = await axios.post("https://api.web3forms.com/submit", formState, {
        headers: {
          "Content-Type": "application/json",
        },
      })
  
      if (response.data.success) {
        setSubmitted(true)
  
        setFormState({
          access_key:process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
  
        setResultMessage("")
      } else {
        setResultMessage("Something went wrong. Please try again.")
      }
  
    } catch (error: any) {
      console.error("Submit error:", error)
  
      if (error.response) {
        // Server responded but with error status
        setResultMessage(error.response.data?.message || "Submission failed.")
      } else if (error.request) {
        // Request made but no response
        setResultMessage("No response from server.")
      } else {
        // Something else happened
        setResultMessage("Unexpected error occurred.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Address</h4>
                  <p className="mt-1 text-muted-foreground">
                    123 Inclusion Avenue<br />
                    Community Center, Suite 100<br />
                    Springfield, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="mt-1">
                    <a 
                      href="tel:+61457052522" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      61 457052522
                    </a>
                  </p>
                 
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="mt-1">
                    <a 
                      href="mailto:info@abilityfirst.org" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@cjsupportservices.com.au
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Office Hours</h4>
                  <p className="mt-1 text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
           <div className="bg-card border border-border rounded-xl p-6 sm:p-8">

            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-foreground">
                  Thank You!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We received your message and will reply soon.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className={`h-12 ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className={`h-12 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className={`w-full h-12 border rounded-md px-3 ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select topic</option>
                    <option value="programs">Programs & Services</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Donations</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className={`w-full border rounded-md px-3 py-3 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {resultMessage && (
                  <p className="text-center text-sm text-muted-foreground">
                    {resultMessage}
                  </p>
                )}
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
