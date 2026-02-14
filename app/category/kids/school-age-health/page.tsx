import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const schoolAgeHealthService = {
  title: "School-Age Health & Daily Care",

  description:
    "Supporting children’s physical, emotional, and developmental wellbeing through healthy routines and responsive daily care.",

  intro: `
Children’s health and wellbeing form the foundation for positive development during the school years. Between approximately 5 and 12 years of age, children grow physically, emotionally, socially, and cognitively.

Good daily health routines promote energy, confidence, resilience, and active participation in school, play, and social life.

At CJ SupportServices, we work alongside families to build and maintain healthy habits while responding to the unique changes and needs that come with school-age growth.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach to Health & Wellbeing",
    content:
      "We take a holistic and family-centred approach, supporting both physical and emotional health development.",
    points: [
      "Encourage balanced daily routines",
      "Promote positive mental wellbeing",
      "Support independence in personal care",
      "Work in partnership with families and health professionals",
    ],
  },

  servicesIncluded: {
    title: "Key Areas of Health & Daily Care Support",
    sections: [
      {
        heading: "Mental Health & Emotional Wellbeing",
        content:
          "We support healthy emotional expression, confidence, coping strategies, and social engagement. Families are guided in recognising when additional professional support may be beneficial.",
      },
      {
        heading: "Routine Health Care & Check-Ups",
        content:
          "Support includes coordination of GP visits, allied health assessments, vision and hearing checks, and routine growth monitoring.",
      },
      {
        heading: "Immunisation Awareness",
        content:
          "We encourage families to follow recommended immunisation schedules and consult with their GP or local clinic for up-to-date protection.",
      },
      {
        heading: "Managing Common Health Concerns",
        content:
          "We assist families in responding to recurring headaches, sleep challenges, appetite changes, or ongoing discomfort, and help coordinate appropriate professional support.",
      },
      {
        heading: "Allergies & Food Intolerances",
        content:
          "Support includes identifying triggers, promoting safe food planning, and working with families to manage allergies confidently at home and school.",
      },
      {
        heading: "Dental Health & Oral Care",
        content:
          "We encourage regular dental check-ups, daily brushing routines, flossing where appropriate, and limiting sugary foods and drinks.",
      },
      {
        heading: "Hygiene & Personal Care Habits",
        content:
          "Children are supported in building independence with handwashing, bathing, grooming, and personal hygiene to promote health and confidence.",
      },
      {
        heading: "Toileting & Self-Care Confidence",
        content:
          "We provide calm, respectful support for toileting routines and respond compassionately to occasional challenges, promoting comfort and dignity.",
      },
      {
        heading: "Dressing & Growing Independence",
        content:
          "Support includes encouraging weather-appropriate clothing choices, fastening skills, and packing school items — building life skills and self-esteem.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families wanting to build healthy daily routines",
      "Children developing independence and life skills",
      "NDIS participants requiring additional health support",
      "Families navigating ongoing health or developmental concerns",
    ],
  },

  flexibleCare: {
    title: "Flexible & Personalised Health Support",
    content:
      "Support is tailored to each child’s developmental stage, strengths, and individual needs.",
    points: [
      "Daily routine support",
      "Health coordination assistance",
      "Emotional wellbeing strategies",
      "Practical life skill development",
    ],
    note:
      "Support can be integrated into broader care plans or provided as targeted assistance.",
  },

  staff: {
    title: "Experienced & Child-Focused Support Workers",
    points: [
      "Trained in child wellbeing and development",
      "Respectful and compassionate in personal care",
      "Collaborative with families and allied health teams",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Holistic approach to child wellbeing",
      "Practical and family-centred guidance",
      "Focus on independence and confidence",
      "Professional and coordinated care",
      "Respectful and supportive team",
    ],
  },

  closing:
    "At CJ SupportServices, we partner with families to promote healthy habits, emotional wellbeing, and growing independence. If you would like personalised support for your child’s health and daily care, our team is here to guide you with respect and expertise.",
}

  

export const metadata: Metadata = {
  title: "School-Age Health Support Melbourne | CJ SupportServices",
  description:
    "Health and wellbeing support for school-age children across Melbourne & Victoria. Structured care and supervision aligned with NDIS plans.",
}




export default function SchoolAgeHealthPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={schoolAgeHealthService} />
      <Footer />
    </>
  )
}
