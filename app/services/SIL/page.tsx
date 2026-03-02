import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const silService = {
    category: "Adult Services",
  
    title: "Supported Independent Living (SIL)",
  
    description:
      "NDIS Supported Independent Living services helping people with disability live confidently, safely, and independently in their own or shared home.",
  
    intro: `
  At CJ Support Services, we believe everyone deserves to live with dignity, independence, and choice.
  
  Our Supported Independent Living (SIL) services help people with disability live in their own home or shared environment while receiving personalised, respectful, and consistent support.
  
  We focus not just on daily tasks — but on building confidence, connection, skills, and quality of life.
    `,
  
    approach: {
      title: "Our Person-Centred Approach to SIL",
      content:
        "We work alongside you to design support that reflects your goals, strengths, and lifestyle preferences.",
      points: [
        "Individual goal-focused planning",
        "Co-designed support plans",
        "Consistent and respectful support staff",
        "Skill-building for independence",
        "Flexible support that adapts over time",
      ],
    },
  
    servicesIncluded: {
      title: "What Our SIL Support Includes",
      sections: [
        {
          heading: "Daily Living & Household Support",
          content:
            "Assistance with meal preparation, cleaning, laundry, shopping, and home organisation to support comfortable independent living.",
        },
        {
          heading: "Personal Care & Hygiene Support",
          content:
            "Support with dressing, grooming, hygiene, and daily routines delivered with dignity and respect.",
        },
        {
          heading: "Communication & Social Skills",
          content:
            "Encouragement to build confidence, develop social skills, and engage in community activities and relationships.",
        },
        {
          heading: "Skill Development & Confidence Building",
          content:
            "Support with budgeting, time management, transport navigation, and everyday decision-making.",
        },
        {
          heading: "Emotional Wellbeing Support",
          content:
            "Encouragement, reassurance, and assistance managing life transitions, stress, and personal growth.",
        },
        {
          heading: "Flexible Living Arrangements",
          content:
            "SIL support delivered in your own home, shared accommodation, group homes, or supported living environments.",
        },
      ],
    },
  
    whoItsFor: {
      title: "Who SIL Is For",
      points: [
        "NDIS participants seeking independent living",
        "Individuals transitioning from family homes",
        "People wanting shared or supported accommodation",
        "Participants needing structured daily support",
        "Individuals aiming to build life skills and autonomy",
      ],
    },
  
    flexibleCare: {
      title: "Flexible & NDIS-Aligned Support",
      content:
        "Supported Independent Living is funded under NDIS plans and tailored to your goals and level of support needs.",
      points: [
        "Alignment with NDIS goals and funding",
        "Documentation and planning support",
        "Flexible daily support levels",
        "Ongoing review and plan adjustments",
      ],
      note:
        "We simplify the process so you can focus on living independently and confidently.",
    },
  
    whyChooseUs: {
      title: "Why Choose CJ Support Services for SIL",
      points: [
        "Person-centred, strengths-based approach",
        "Trained, screened, and compassionate staff",
        "Focus on independence and capability",
        "Flexible, evolving support plans",
        "Transparent communication with families and coordinators",
        "Serving Melbourne & Regional Victoria",
      ],
    },
  
    closing:
      "Supported Independent Living is about more than care — it’s about empowerment and meaningful independence. Contact CJ Support Services today to explore SIL options tailored to your goals.",
  }
  
  

  



export default function SILPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={silService} />
      <Footer />
    </>
  )
}
