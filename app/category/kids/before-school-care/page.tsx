import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const BeforeSchoolCareServices = {
  title: "Before School Care",

  description:
    "A calm, structured and supportive start to the day, helping children feel prepared, confident and ready to learn.",

  intro: `
At CJ SupportServices, we understand that mornings can be one of the most demanding parts of the day for families. Rushing to get ready, organising school items, and managing emotions can create stress for both children and parents.

Our Before School Care Service is designed to create a calm, structured, and supportive start to the day so children feel prepared, confident, and ready to learn.

As a provider, we help children develop positive routines, independence, and emotional stability, while giving parents peace of mind knowing their child is supported in a safe and caring environment.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach",
    content:
      "We take a gentle, child-centred and family-focused approach to morning care. Every child is supported in a way that respects their personality, pace, and daily routine.",
    points: [
      "Create calm and predictable morning routines",
      "Encourage independence through age-appropriate guidance",
      "Support emotional wellbeing and confidence",
      "Work in partnership with families and schools",
    ],
  },

  servicesIncluded: {
    title: "What Our Before School Care Includes",
    sections: [
      {
        heading: "Morning Routine & Readiness",
        content:
          "We assist children with dressing, hygiene, packing school bags, and preparing for the day, helping them feel organised and confident.",
      },
      {
        heading: "Healthy Breakfast Support",
        content:
          "We support children to enjoy nutritious breakfasts that promote energy, focus, and overall wellbeing.",
      },
      {
        heading: "Organisation & Time Awareness",
        content:
          "We help children follow schedules, manage time, and develop responsibility for their morning routine.",
      },
      {
        heading: "Emotional & Behaviour Support",
        content:
          "We provide reassurance, help manage morning anxiety, and support positive behaviour before school.",
      },
      {
        heading: "Safe School Transport (if required)",
        content:
          "We assist with safe and reliable transport to school where approved.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Working families",
      "Children who benefit from routine and guidance",
      "NDIS participants needing additional support",
      "Families seeking a calm start to the school day",
    ],
  },

  flexibleCare: {
    title: "Flexible & Personalised Morning Support",
    content:
      "Support is tailored to each child’s age, personality, and school schedule to ensure a smooth and positive start to the day.",
    points: [
      "Customised morning routines",
      "Support aligned with school start times",
      "Individual emotional and behavioural support",
    ],
    note:
      "Care can be arranged regularly or based on family needs.",
  },

  staff: {
    title: "Trained & Caring Support Workers",
    points: [
      "Patient, respectful, and child-focused",
      "Experienced in supporting morning transitions",
      "Carefully screened and professionally trained",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Calm and structured start to the day",
      "Child-centred, family-friendly approach",
      "Emotional and behavioural support",
      "Flexible scheduling options",
      "Trusted and trained staff",
    ],
  },

  closing:
    "At CJ SupportServices, we help children begin each day feeling calm, confident, and cared for. Supporting positive mornings means setting the foundation for successful days.",
}

  

export const metadata: Metadata = {
  title: "Before School Support Melbourne | CJ SupportServices",
  description:
    "Reliable before school care and child support services across Melbourne & Victoria. Helping children start the day safely and confidently.",
}




export default function BeforeSchoolCarePage() {
  return (
    <>
      <Header />
      <ServiceDetails service={BeforeSchoolCareServices} />
      <Footer />
    </>
  )
}
