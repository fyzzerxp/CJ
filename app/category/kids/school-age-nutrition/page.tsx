import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const schoolAgeNutritionService = {
  title: "School-Age Nutrition & Fitness",

  description:
    "Supporting healthy eating habits and active lifestyles that build strong bodies, confident minds, and lifelong wellbeing.",

  intro: `
Supporting a child’s health through good nutrition and regular activity sets the foundation for lifelong wellbeing. During the school years, eating well and staying active help children grow, learn, think clearly, manage energy levels, and feel confident in their bodies.

At CJ SupportServices, we work alongside families to build healthy eating patterns and active routines that are practical, positive, and age-appropriate. Every family is different — and every child’s nutritional needs evolve as they grow.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach to Nutrition & Fitness",
    content:
      "We promote balanced, realistic habits that support physical health, emotional wellbeing, and growing independence.",
    points: [
      "Encourage balanced daily meals",
      "Promote positive relationships with food",
      "Support healthy movement and play",
      "Work with families to create sustainable routines",
    ],
  },

  servicesIncluded: {
    title: "Key Areas of Nutrition & Fitness Support",
    sections: [
      {
        heading: "Essential Nutrients for Growth",
        content:
          "We support families in understanding the importance of protein, carbohydrates, healthy fats, vitamins, minerals, fibre, and hydration in supporting energy, learning, immunity, and development.",
      },
      {
        heading: "Balanced Meals & Daily Food Guides",
        content:
          "Guidance on building meals with vegetables, fruits, whole grains, lean proteins, and dairy or alternatives to promote steady energy and growth.",
      },
      {
        heading: "Healthy Eating Habits",
        content:
          "Encouraging variety, consistent meal times, positive food experiences, and reducing pressure around eating to build long-term healthy habits.",
      },
      {
        heading: "Family Meals & Positive Food Culture",
        content:
          "Supporting shared meals that strengthen connection, model healthy eating behaviours, and promote emotional wellbeing.",
      },
      {
        heading: "School Lunch & Breakfast Support",
        content:
          "Helping families plan balanced breakfasts and lunchboxes that fuel concentration, learning, and sustained energy throughout the day.",
      },
      {
        heading: "Cooking & Food Confidence",
        content:
          "Encouraging children to participate in food preparation to build skills, independence, and interest in nutritious foods.",
      },
      {
        heading: "Healthy Shopping & Meal Planning",
        content:
          "Guidance on planning meals, choosing whole foods, reducing processed snacks, and involving children in food decisions.",
      },
      {
        heading: "Managing Common Eating Concerns",
        content:
          "Support for picky eating, strong food preferences, snacking challenges, and promoting positive body image and healthy attitudes toward food.",
      },
      {
        heading: "Daily Physical Activity",
        content:
          "Encouraging at least 60 minutes of active movement daily, including aerobic play, sports, muscle-strengthening activities, and family-based physical activity.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families wanting to build healthier eating routines",
      "Children developing independence in food choices",
      "NDIS participants needing structured nutrition support",
      "Families navigating picky eating or activity challenges",
    ],
  },

  flexibleCare: {
    title: "Flexible & Family-Centred Support",
    content:
      "Nutrition and fitness support is tailored to each child’s age, preferences, cultural background, and developmental stage.",
    points: [
      "Meal planning guidance",
      "Activity routine support",
      "Behavioural eating strategies",
      "Coordination with GPs or dietitians when needed",
    ],
    note:
      "Support may be integrated into broader care plans or provided as targeted guidance.",
  },

  staff: {
    title: "Knowledgeable & Supportive Team",
    points: [
      "Child-focused and respectful",
      "Experienced in promoting healthy habits",
      "Collaborative with families and health professionals",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Balanced and realistic approach to nutrition",
      "Focus on confidence and positive habits",
      "Family-centred and practical guidance",
      "Support for both eating and physical activity",
      "Professional and compassionate team",
    ],
  },

  closing:
    "At CJ SupportServices, we help families build healthy routines that support growth, confidence, and lifelong wellbeing. If you would like personalised guidance around nutrition, physical activity, or related concerns, our team is here to support you with practical strategies and care.",
}

  

export const metadata: Metadata = {
  title: "School-Age Nutrition Support Melbourne | CJ SupportServices",
  description:
    "Nutrition support services for school-age children across Melbourne & Victoria. Helping children build healthy eating habits under NDIS support plans.",
}




export default function SchoolAgeNutritionPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={schoolAgeNutritionService} />
      <Footer />
    </>
  )
}
