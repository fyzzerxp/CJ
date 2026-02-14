import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const disabilityTransportService = {
  category: "Adult Services",

  title: "Disability Transport Services",

  description:
    "Safe, reliable and accessible transport that supports independence, connection, and everyday life across Melbourne & Victoria.",

  intro: `
At CJ SupportServices, we understand that safe and reliable transport is essential for independence and participation in everyday life.

Our Disability Transport Services are designed to help individuals travel with confidence, comfort, and dignity. We don’t just provide transport — we create access, opportunity, and freedom.

Every journey is planned around your routine, your goals, and your independence.
  `,

  approach: {
    title: "Our Approach to Disability Transport",
    content:
      "Getting from one place to another should never be a barrier to living well. Our transport solutions are designed to be flexible, safe, and participant-focused.",
    points: [
      "Person-centred and flexible transport planning",
      "Safe, reliable, and accessible vehicles",
      "Support tailored to individual routines and goals",
      "Clear communication with families and support coordinators",
      "Respect, dignity, and comfort in every journey",
    ],
  },

  servicesIncluded: {
    title: "What We Support You With",
    sections: [
      {
        heading: "Medical & Therapy Appointments",
        content:
          "Safe and punctual transport to GPs, hospitals, specialists, allied health services, and therapy sessions.",
      },
      {
        heading: "Community & Social Access",
        content:
          "Support to attend social activities, community events, family visits, and recreational programs.",
      },
      {
        heading: "Education & Employment Travel",
        content:
          "Assistance getting to school, training, work placements, and employment opportunities.",
      },
      {
        heading: "Daily Living & Errands",
        content:
          "Transport for shopping, banking, appointments, and essential daily tasks with support as needed.",
      },
      {
        heading: "Special Events & Lifestyle Activities",
        content:
          "Travel support for celebrations, outings, cultural activities, and leisure experiences.",
      },
      {
        heading: "Accessible & Comfortable Vehicles",
        content:
          "Wheelchair-friendly, climate-controlled vehicles fitted with safety restraints and accessibility features.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Is For",
    points: [
      "NDIS participants requiring transport support",
      "Individuals with mobility challenges",
      "Participants attending regular therapy or medical appointments",
      "People seeking greater community participation",
      "Individuals needing structured, reliable travel assistance",
    ],
  },

  flexibleCare: {
    title: "Flexible & Participant-Focused Scheduling",
    content:
      "We design your transport plan around your timetable, goals, and funding arrangements.",
    points: [
      "One-off transport bookings",
      "Regular weekly or recurring trips",
      "Short-term or long-term arrangements",
      "Adjustments as needs change",
    ],
    note:
      "Your independence and comfort remain at the centre of every journey we provide.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices for Transport",
    points: [
      "Person-centred transport planning",
      "Safe, accessible, and well-maintained vehicles",
      "Police-checked and trained support staff",
      "Clear communication and reliability",
      "Flexible scheduling options",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Transport should open doors — not limit them. Contact CJ SupportServices today to arrange safe, reliable disability transport and stay connected to your community.",
}

  

export const metadata: Metadata = {
  title: "Disability Transport Services Melbourne | NDIS Transport | CJ SupportServices",
  description:
    "Safe and accessible disability transport across Melbourne & Victoria. Wheelchair-friendly vehicles for medical appointments, community access and daily activities.",
}



export default function DisabilityTransportPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={disabilityTransportService} />
      <Footer />
    </>
  )
}
