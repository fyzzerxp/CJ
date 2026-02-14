import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const dayProgramsService = {
    category: "Adult Services",
  
    title: "Community Participation & Day Programs",
  
    description:
      "Structured, person-centred day programs designed to build confidence, life skills, social connection, and meaningful community participation.",
  
    intro: `
  At CJ SupportServices, we believe meaningful engagement, personal growth, and community connection are essential parts of everyday life.
  
  Our Day Programs are designed to help individuals build confidence, develop practical skills, explore interests, and participate fully in their community.
  
  Every program is tailored to support independence, wellbeing, and enjoyment in a safe and inclusive environment.
    `,
  
    approach: {
      title: "Our Person-Centred Program Design",
      content:
        "We design each program around the participant’s strengths, goals, interests, and support needs.",
      points: [
        "Individual goal-focused planning",
        "Programs tailored to strengths and abilities",
        "Flexible pace of participation",
        "Encouragement of independence and confidence",
        "Inclusive and supportive environments",
      ],
    },
  
    servicesIncluded: {
      title: "Types of Day Programs We Offer",
      sections: [
        {
          heading: "Creative & Recreational Activities",
          content:
            "Art, music, drama, movement, and creative workshops that promote self-expression, imagination, and collaboration.",
        },
        {
          heading: "Practical Life Skills Development",
          content:
            "Meal preparation, budgeting, home organisation, healthy routines, and decision-making skills to strengthen independence.",
        },
        {
          heading: "Community Participation & Outings",
          content:
            "Excursions, social outings, shopping trips, café visits, cultural events, and recreational experiences.",
        },
        {
          heading: "Health & Wellbeing Activities",
          content:
            "Group exercise, outdoor activities, mindfulness sessions, and healthy lifestyle education.",
        },
        {
          heading: "Learning & Personal Development",
          content:
            "Workshops focused on communication skills, goal setting, problem-solving, digital literacy, and confidence building.",
        },
        {
          heading: "Social Connection & Belonging",
          content:
            "Opportunities to build friendships, practice teamwork, and engage in supportive peer interactions.",
        },
      ],
    },
  
    whoItsFor: {
      title: "Who Our Day Programs Are For",
      points: [
        "NDIS participants seeking community engagement",
        "Individuals wanting to build life skills",
        "People looking to develop confidence and independence",
        "Participants seeking structured social opportunities",
        "Individuals wanting meaningful daily activities",
      ],
    },
  
    flexibleCare: {
      title: "Flexible Participation Options",
      content:
        "Our programs are designed to fit around individual schedules and support plans.",
      points: [
        "Weekly or fortnightly sessions",
        "Full-day or half-day options",
        "Group or one-on-one support",
        "Transport planning and coordination",
      ],
      note:
        "We work closely with families and participants to create a routine that supports consistency and growth.",
    },
  
    whyChooseUs: {
      title: "Why Choose CJ SupportServices Day Programs",
      points: [
        "Person-centred and goal-focused planning",
        "Engaging, structured, and varied activities",
        "Skilled and compassionate support staff",
        "Inclusive and accessible environments",
        "Flexible scheduling and transport support",
        "Serving Melbourne & Regional Victoria",
      ],
    },
  
    closing:
      "Day Programs are more than activities — they are pathways to confidence, connection, and growth. Contact CJ SupportServices today to explore program options and begin your journey toward active, meaningful participation.",
  }
  
  

  export const metadata: Metadata = {
    title: "Community Participation & Day Programs Melbourne | CJ SupportServices",
    description:
      "Inclusive NDIS day programs in Melbourne & Regional Victoria. Creative activities, life skills development, social connection and supported community engagement.",
  }
  
  



export default function CommunityPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={dayProgramsService} />
      <Footer />
    </>
  )
}
