import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const domesticSupportService = {
  category: "Adult Services",

  title: "Cleaning & Domestic Support",

  description:
    "Practical household assistance that keeps your home clean, safe, and comfortable while supporting independence.",

  intro: `
A clean and organised home supports both physical health and emotional wellbeing.

CJ SupportServices provides reliable Cleaning & Domestic Support to help individuals maintain a safe, comfortable living environment while preserving independence.
  `,

  approach: {
    title: "Supporting Safe & Comfortable Living",
    content:
      "We provide respectful and consistent household assistance tailored to your needs and preferences.",
    points: [
      "Flexible domestic support arrangements",
      "Safe and hygienic cleaning practices",
      "Support aligned with individual routines",
      "Respect for privacy and personal space",
    ],
  },

  servicesIncluded: {
    title: "Domestic Support Services Include",
    sections: [
      {
        heading: "General House Cleaning",
        content:
          "Vacuuming, mopping, dusting, and maintaining a clean living environment.",
      },
      {
        heading: "Laundry & Linen",
        content:
          "Washing, drying, folding, and changing bed linens.",
      },
      {
        heading: "Kitchen & Bathroom Cleaning",
        content:
          "Maintaining hygienic food preparation and bathroom spaces.",
      },
      {
        heading: "Bedroom & Living Area Support",
        content:
          "Tidying, organising, and maintaining safe movement areas within the home.",
      },
      {
        heading: "Meal Preparation Support",
        content:
          "Assistance with preparing simple, nutritious meals where required.",
      },
      {
        heading: "Home Safety Checks",
        content:
          "Identifying minor hazards and maintaining a safe home environment.",
      },
    ],
  },

  whoItsFor: {
    title: "Who Domestic Support Is For",
    points: [
      "Older adults requiring household assistance",
      "Individuals recovering from illness or surgery",
      "NDIS participants needing daily living support",
      "Families requiring short-term domestic help",
      "Anyone needing assistance to maintain home safety",
    ],
  },

  flexibleCare: {
    title: "Flexible & Reliable Support",
    content:
      "We offer domestic support that fits your schedule and level of independence.",
    points: [
      "One-off cleaning support",
      "Regular weekly or fortnightly visits",
      "Short-term recovery assistance",
      "Ongoing home care arrangements",
    ],
    note:
      "Our goal is to help you maintain independence while living in a clean and safe environment.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices for Domestic Support",
    points: [
      "Reliable and respectful support staff",
      "Flexible scheduling options",
      "Safe and hygienic cleaning practices",
      "Person-centred service delivery",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Maintain a clean, safe, and comfortable home with trusted domestic support. Contact CJ SupportServices to arrange personalised assistance.",
}

  

export const metadata: Metadata = {
  title: "In-Home Cleaning & Domestic Support Melbourne | CJ SupportServices",
  description:
    "Reliable domestic assistance across Melbourne & Victoria. House cleaning, laundry, meal preparation and home support services for aged care and NDIS participants.",
}



export default function CleaningPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={domesticSupportService} />
      <Footer />
    </>
  )
}
