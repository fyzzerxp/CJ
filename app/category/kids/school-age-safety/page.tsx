import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const schoolAgeSafetyService = {
  title: "School-Age Safety & Protection",

  description:
    "Supporting families to build safe environments, teach protective skills, and help children grow with confidence and awareness.",

  intro: `
Keeping children safe is one of the most important responsibilities families and carers share. As children grow, their world expands — school, outdoor play, online spaces, water, roads, and social interactions.

With increased independence comes the need for practical safety awareness and preparedness. At CJ SupportServices, we work with families to build safe environments, teach protective skills, and promote confidence so children can explore the world with appropriate caution and joy.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach to Child Safety",
    content:
      "Safety is not just about rules — it’s about education, confidence, and connection. We support families to take a proactive and age-appropriate approach to safety.",
    points: [
      "Build age-appropriate safety awareness",
      "Encourage confidence while managing risk",
      "Support open communication with children",
      "Promote emotional and physical wellbeing",
    ],
  },

  servicesIncluded: {
    title: "Key Areas of Safety & Protection",
    sections: [
      {
        heading: "CPR & First Aid Awareness",
        content:
          "We encourage carers to develop knowledge of child and infant CPR, choking response, wound care, fracture management, and allergic reaction response. Families are supported to access accredited first aid training where appropriate.",
      },
      {
        heading: "Home & Pet Safety",
        content:
          "Support includes guidance on creating safe home environments, securing hazards, supervising interactions with pets, and promoting positive and safe behaviour around animals.",
      },
      {
        heading: "Outdoor & Play Safety",
        content:
          "We support families to encourage active outdoor play while setting safe boundaries, including helmet use, protective gear, visibility, and awareness of surroundings.",
      },
      {
        heading: "Water Safety",
        content:
          "Education around safe water habits including supervision, swimming skills, use of lifejackets, and awareness of water hazards at pools, rivers, beaches, and home.",
      },
      {
        heading: "Fire, Burns & Scalds Safety",
        content:
          "Support includes guidance on preventing burns and scalds, safe use of appliances, smoke alarm awareness, and practising simple emergency escape plans.",
      },
      {
        heading: "Choking & Poison Safety",
        content:
          "We help families reduce choking and poisoning risks through safe eating practices, secure storage of hazardous substances, and awareness of emergency response steps.",
      },
      {
        heading: "Online Safety & Digital Awareness",
        content:
          "Support includes guidance on screen time, privacy settings, respectful online behaviour, and encouraging open conversations about online safety concerns.",
      },
      {
        heading: "Road, Travel & Public Safety",
        content:
          "Education around safe travel practices including car seats, seat belts, pedestrian safety, visibility, and modelling safe behaviour in public spaces.",
      },
      {
        heading: "Personal Safety & Boundaries",
        content:
          "We promote age-appropriate education around body autonomy, consent, boundaries, recognising unsafe behaviour, and encouraging children to speak up without fear or judgement.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families wanting to improve child safety awareness",
      "Children developing independence and confidence",
      "NDIS participants requiring additional safety support",
      "Carers seeking guidance on risk management and protection",
    ],
  },

  flexibleCare: {
    title: "Building Safe & Supportive Environments",
    content:
      "Support is tailored to each child’s age, environment, and individual needs.",
    points: [
      "Home and community-based safety guidance",
      "Age-appropriate education and strategies",
      "Emergency preparedness support",
      "Balancing independence with safety",
    ],
    note:
      "Education and support can be provided as part of ongoing care or as targeted guidance.",
  },

  staff: {
    title: "Experienced & Safety-Focused Support Workers",
    points: [
      "Child-focused and safety-aware",
      "Trained to support protective behaviours",
      "Committed to wellbeing and respectful care",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Holistic approach to child safety",
      "Practical, real-world safety education",
      "Family-centred and respectful support",
      "Focus on confidence, not fear",
      "Trusted and experienced team",
    ],
  },

  closing:
    "At CJ SupportServices, we believe children thrive when they feel safe, informed, and supported. If you would like personalised strategies, education, or guidance around child safety and protection, our team is here to help — with respect, clarity, and care.",
}


export const metadata: Metadata = {
  title: "School-Age Safety Support Melbourne | CJ SupportServices",
  description:
    "Safe and supervised support services for school-age children across Melbourne & Victoria. Promoting wellbeing, routine and independence.",
}




export default function SchoolAgeSafetyPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={schoolAgeSafetyService} />
      <Footer />
    </>
  )
}
