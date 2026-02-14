import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const postHospitalCareService = {
  category: "Adult Services",

  title: "Post-Hospital Care & Recovery Support",

  description:
    "Comprehensive support to help you transition safely from hospital to home and recover with confidence.",

  intro: `
Returning home after a hospital stay can feel overwhelming. CJ SupportServices provides structured Post-Hospital Care & Recovery Support to ensure a smooth and safe transition.

Our goal is to reduce hospital readmission, promote healing, and help you regain strength and independence in a supportive home environment.
  `,

  approach: {
    title: "Safe & Supported Recovery",
    content:
      "We design personalised recovery plans that prioritise safety, monitoring, and gradual independence.",
    points: [
      "Close health monitoring during recovery",
      "Medication and wound management support",
      "Personal care and mobility assistance",
      "Practical household help during recovery",
      "Transport to follow-up medical appointments",
    ],
  },

  servicesIncluded: {
    title: "Recovery Support Includes",
    sections: [
      {
        heading: "Health Monitoring",
        content:
          "Ongoing observation of vital signs and overall wellbeing during recovery.",
      },
      {
        heading: "Medication Support",
        content:
          "Assistance with medication schedules and safe administration.",
      },
      {
        heading: "Wound & Recovery Care",
        content:
          "Post-surgical wound management and clinical follow-up support.",
      },
      {
        heading: "Personal Care & Mobility",
        content:
          "Support with showering, dressing, movement, and safe transfers.",
      },
      {
        heading: "Household Assistance",
        content:
          "Light cleaning, meal preparation, and support with essential home tasks.",
      },
      {
        heading: "Medical Transport",
        content:
          "Safe travel to follow-up appointments, therapy sessions, and check-ups.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Is For",
    points: [
      "Individuals recently discharged from hospital",
      "People recovering from surgery or illness",
      "Older adults requiring structured recovery support",
      "Families seeking temporary recovery assistance",
      "Participants under aged care or NDIS plans",
    ],
  },

  flexibleCare: {
    title: "Flexible Recovery Planning",
    content:
      "Recovery needs differ from person to person. We tailor support duration and intensity based on your health goals.",
    points: [
      "Short-term intensive support",
      "Gradual reduction of services as independence improves",
      "Coordinated care with medical professionals",
      "Adjustments as recovery progresses",
    ],
    note:
      "Our focus is helping you regain confidence and stability at home.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices for Recovery Care",
    points: [
      "Smooth hospital-to-home transition support",
      "Professional clinical and personal care services",
      "Reduced risk of hospital readmission",
      "Compassionate, structured recovery planning",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Recover safely and confidently at home with structured post-hospital support. Contact CJ SupportServices to plan your recovery journey.",
}


export const metadata: Metadata = {
  title: "Post-Hospital Care & Recovery Support Melbourne",
  description:
    "Safe transition from hospital to home with structured recovery support. Health monitoring, medication support, wound care and personal assistance across Melbourne & Victoria.",
}



export default function PostHospitalPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={postHospitalCareService} />
      <Footer />
    </>
  )
}
