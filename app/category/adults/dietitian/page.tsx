import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const dietitianService = {
  category: "Adult Services",

  title: "Dietitian Services",

  description:
    "Personalised, evidence-based nutrition support designed to improve health outcomes, manage chronic conditions, and build sustainable eating habits.",

  intro: `
At CJ SupportServices, we recognise that good nutrition plays a vital role in overall health, wellbeing, and independence.

Our Dietitian Services are designed to help individuals optimise nutritional intake, manage chronic conditions, and develop sustainable eating habits that support everyday living.

Whether you're navigating a new health challenge or seeking structured support for long-term wellbeing, our qualified dietitians create practical, personalised nutrition strategies tailored to your lifestyle and goals.
  `,

  approach: {
    title: "Our Approach to Nutrition Support",
    content:
      "We combine clinical expertise with practical guidance to create achievable, sustainable nutrition plans that support both medical needs and everyday wellbeing.",
    points: [
      "Comprehensive nutritional assessments",
      "Personalised meal planning aligned with your goals",
      "Evidence-based strategies for long-term health",
      "Collaborative care with GPs, specialists, and carers",
      "Flexible in-home and telehealth service options",
    ],
  },

  servicesIncluded: {
    title: "What Our Dietitian Services Include",
    sections: [
      {
        heading: "Nutritional Assessment & Personalised Planning",
        content:
          "Thorough evaluation of eating habits, health history, lifestyle, and goals to create a tailored nutrition plan suited to your daily routine.",
      },
      {
        heading: "Chronic Condition Support",
        content:
          "Evidence-based dietary strategies for diabetes, heart health, gastrointestinal conditions, kidney and liver concerns, and weight management.",
      },
      {
        heading: "Weight & Appetite Support",
        content:
          "Guidance for healthy weight management, appetite improvement, and building balanced, sustainable eating patterns.",
      },
      {
        heading: "Condition-Specific Nutrition Therapy",
        content:
          "Support for malnutrition, enteral feeding guidance, food intolerances, allergies, and hormonal health conditions such as PCOS.",
      },
      {
        heading: "Mealtime & Eating Support",
        content:
          "Practical strategies to improve the eating experience, including meal planning, texture modification, and culturally appropriate meal guidance.",
      },
      {
        heading: "Collaborative Allied Health Support",
        content:
          "Coordination with your healthcare team to ensure continuity, consistency, and effective long-term outcomes.",
      },
    ],
  },

  whoItsFor: {
    title: "Who Dietitian Services Are For",
    points: [
      "Individuals managing chronic health conditions",
      "Older adults needing structured nutrition support",
      "Participants under NDIS or Home Care Packages",
      "People experiencing appetite or weight challenges",
      "Anyone seeking improved health and wellbeing through nutrition",
    ],
  },

  flexibleCare: {
    title: "Flexible & Accessible Service Delivery",
    content:
      "We deliver nutrition support in ways that suit your schedule and comfort.",
    points: [
      "In-home consultations",
      "Telehealth video or phone appointments",
      "Short-term or ongoing nutrition plans",
      "Funding-supported or private arrangements",
    ],
    note:
      "Our goal is to make nutrition support practical, achievable, and meaningful in everyday life.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices Dietitian Team",
    points: [
      "Accredited and experienced dietitians",
      "Client-centred, personalised nutrition planning",
      "Evidence-based and practical strategies",
      "Collaborative approach with your healthcare team",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Good nutrition supports independence, recovery, and long-term wellbeing. Contact CJ SupportServices today to begin your personalised nutrition journey.",
}

  

export const metadata: Metadata = {
  title: "Dietitian Services Melbourne | | CJ SupportServices",
  description:
    "Accredited dietitian services across Melbourne & Victoria. Nutrition support for diabetes, heart health, weight management and chronic conditions.",
}




export default function DietitianPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={dietitianService} />
      <Footer />
    </>
  )
}
