import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const agedCareSupportService = {
  category: "Adult Services",

  title: "In-Home Aged Care & Support at Home",

  description:
    "Government-funded in-home aged care services that support older Australians to live safely, independently, and comfortably in their own home.",

  intro: `
At CJ SupportServices, we believe older adults deserve to live with comfort, dignity, and independence in the familiarity of their own home.

Our in-home aged care services support you or your loved one to remain safe, connected, and confident — while maintaining quality of life.

We guide families through the funding process, create personalised care plans, and deliver flexible support aligned with individual goals and preferences.
  `,

  approach: {
    title: "Understanding Support at Home (Formerly Home Care Packages)",
    content:
      "Support at Home is a government-funded program designed to help older Australians receive the care they need at home rather than moving into residential care.",
    points: [
      "Assessment through My Aged Care to determine support needs",
      "Funding classification based on individual care requirements",
      "Choice of provider to deliver tailored services",
      "Flexible support aligned with your goals and lifestyle",
      "Ongoing review and adjustments as needs change",
    ],
  },

  servicesIncluded: {
    title: "Our Support at Home Services Include",
    sections: [
      {
        heading: "Personal & Daily Care",
        content:
          "Assistance with showering, dressing, grooming, mobility support, and continence care delivered with dignity and respect.",
      },
      {
        heading: "Household Support",
        content:
          "Light cleaning, laundry, meal planning, and home organisation to maintain a safe and comfortable living environment.",
      },
      {
        heading: "Health & Wellbeing Support",
        content:
          "Medication assistance, nursing care, allied health coordination, physiotherapy, and therapy support tailored to your goals.",
      },
      {
        heading: "Transport & Social Engagement",
        content:
          "Support attending appointments, shopping trips, community events, and social activities to encourage connection and participation.",
      },
      {
        heading: "Assistive Technology & Telehealth",
        content:
          "Setup and support for home alarms, assistive devices, smart technology, and telehealth systems to enhance safety and independence.",
      },
      {
        heading: "Care Coordination & Ongoing Review",
        content:
          "Regular monitoring and updates to ensure your care plan continues to reflect your changing needs and priorities.",
      },
    ],
  },

  whoItsFor: {
    title: "Who Support at Home Is For",
    points: [
      "Older Australians wanting to remain at home safely",
      "Individuals transitioning from Home Care Packages",
      "Families seeking structured aged care guidance",
      "People requiring assistance with daily living activities",
      "Older adults needing health and mobility support",
    ],
  },

  flexibleCare: {
    title: "Flexible & Personalised Support",
    content:
      "Your care plan is built around your preferences, cultural values, lifestyle, and funding level.",
    points: [
      "Funding-based service planning",
      "Adjustable support as needs change",
      "Quarterly budget monitoring",
      "Reassessment assistance if care needs increase",
    ],
    note:
      "Our goal is to help you stay safe at home for as long as possible while maintaining dignity and independence.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices",
    points: [
      "Guidance through My Aged Care and funding processes",
      "Clear explanation of budgets and classifications",
      "Person-centred care planning",
      "Responsive and flexible support delivery",
      "Respect for dignity, culture, and personal preferences",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Aged care funding and support options can feel overwhelming — but you don’t have to navigate it alone. Contact CJ SupportServices today to begin your Support at Home journey and live confidently in your own home.",
}

  

export const metadata: Metadata = {
  title: "Support at Home & In-Home Aged Care Melbourne | CJ SupportServices",
  description:
    "Government-funded Support at Home services (formerly Home Care Packages). Personal care, household support, transport and health services across Melbourne & Victoria.",
}




export default function HomeCarePage() {
  return (
    <>
      <Header />
      <ServiceDetails service={agedCareSupportService} />
      <Footer />
    </>
  )
}
