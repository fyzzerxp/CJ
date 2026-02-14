import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const respiteCareService = {
  category: "Adult Services",

  title: "Respite Care & Short-Term Support",

  description:
    "Flexible short-term care that supports families and carers while ensuring continued high-quality support for your loved one.",

  intro: `
At CJ SupportServices, we understand that caring for a loved one is both rewarding and demanding. Sometimes carers need time to rest, recharge, or manage other responsibilities.

Our Respite Care Services provide temporary, compassionate support while ensuring your loved one remains safe, engaged, and well cared for.

We offer flexible, respectful respite options tailored to each person’s needs, preferences, and lifestyle.
  `,

  approach: {
    title: "Why Respite Care Matters",
    content:
      "Caring for someone long-term can be physically and emotionally demanding. Respite care helps maintain balance, wellbeing, and sustainable care routines.",
    points: [
      "Reduces stress and fatigue for carers",
      "Supports continuity of care",
      "Encourages routine and social engagement",
      "Prevents burnout and promotes wellbeing",
      "Provides peace of mind for families",
    ],
  },

  servicesIncluded: {
    title: "What Our Respite Support Includes",
    sections: [
      {
        heading: "In-Home Respite",
        content:
          "Care and companionship delivered in the comfort of home, allowing participants to remain in familiar surroundings while carers take a break.",
      },
      {
        heading: "Community Respite",
        content:
          "Support for outings, social activities, and community engagement to encourage connection and participation.",
      },
      {
        heading: "Scheduled Respite",
        content:
          "Planned, routine-based respite support arranged at times that suit your family’s needs.",
      },
      {
        heading: "Emergency Respite",
        content:
          "Short-notice support when unexpected situations arise and immediate care assistance is required.",
      },
      {
        heading: "Personal Care Assistance",
        content:
          "Support with showering, dressing, grooming, mobility, and daily routines.",
      },
      {
        heading: "Companionship & Engagement",
        content:
          "Encouragement of hobbies, social interaction, safe supervision, and meaningful activities.",
      },
    ],
  },

  whoItsFor: {
    title: "Who Respite Care Is For",
    points: [
      "Family carers needing time to rest or attend appointments",
      "Carers balancing work and personal responsibilities",
      "Families seeking planned short-term care support",
      "Individuals who benefit from structured social engagement",
      "Emergency situations requiring temporary support",
    ],
  },

  flexibleCare: {
    title: "Flexible & Personalised Support",
    content:
      "We design respite plans around your schedule, preferences, and funding arrangements.",
    points: [
      "Short-term or extended respite options",
      "In-home or community-based support",
      "Regular scheduled or one-off sessions",
      "Ongoing adjustments as needs change",
    ],
    note:
      "Our goal is to ensure both carers and participants feel supported, respected, and understood.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices for Respite",
    points: [
      "Person-centred planning tailored to your family",
      "Qualified, compassionate and respectful carers",
      "Flexible support arrangements",
      "Clear communication and ongoing feedback",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Taking a break isn’t just important — it’s essential. Contact CJ SupportServices today to explore respite options and create a sustainable balance of care and wellbeing.",
}


export const metadata: Metadata = {
  title: "Respite Care Services Melbourne | Short-Term Support | CJ SupportServices",
  description:
    "Flexible respite care services across Melbourne & Victoria. In-home and community respite support for families, carers and NDIS participants.",
}



export default function RespiteCarePage() {
  return (
    <>
      <Header />
      <ServiceDetails service={respiteCareService} />
      <Footer />
    </>
  )
}
