import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const schoolTransportService = {
  title: "School Transport Support",

  description:
    "Safe, reliable and supportive school transport services ensuring children travel comfortably and confidently each day.",

  intro: `
At CJ SupportServices, we understand how important safe and reliable transport is for children and their families. For many families, school travel can be one of the most challenging parts of the day.

Our School Transport Support Service ensures children travel to and from school in a safe, comfortable, and supportive way — helping families feel reassured and children feel confident.

As a provider, we help children travel with confidence while families know their child is in safe hands.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach",
    content:
      "We place safety, consistency, and emotional support at the centre of every journey.",
    points: [
      "Prioritise child safety and wellbeing",
      "Follow clear schedules and predictable routines",
      "Communicate openly with families",
      "Provide emotional reassurance during travel",
    ],
  },

  servicesIncluded: {
    title: "What Our School Transport Includes",
    sections: [
      {
        heading: "Door-to-Door Pick-Up & Drop-Off",
        content:
          "We provide safe transport between home, school, and approved support locations.",
      },
      {
        heading: "Supervision During Travel",
        content:
          "We support children during the journey, helping them feel calm, secure, and comfortable throughout.",
      },
      {
        heading: "Reliable Scheduling",
        content:
          "We ensure punctual and consistent service aligned with school start and finish times.",
      },
      {
        heading: "Family Communication",
        content:
          "We maintain clear and open communication so families feel informed and supported.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families needing safe and reliable school transport",
      "Children with additional support needs",
      "NDIS participants requiring travel assistance",
      "Families seeking consistent and supervised travel support",
    ],
  },

  flexibleCare: {
    title: "Flexible & Reliable Travel Options",
    content:
      "Transport support can be tailored to meet individual family needs and school schedules.",
    points: [
      "Morning and afternoon transport",
      "Consistent daily scheduling",
      "Support aligned with school calendars",
    ],
    note:
      "Travel arrangements are structured to ensure safety, comfort, and punctuality.",
  },

  staff: {
    title: "Trained & Supportive Staff",
    points: [
      "Experienced and child-focused",
      "Committed to safety and supervision",
      "Professionally screened and trained",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Safe and reliable school transport",
      "Supervised and supportive journeys",
      "Clear communication with families",
      "Consistent and punctual service",
      "Trusted and professional team",
    ],
  },

  closing:
    "At CJ SupportServices, we make school travel safe, reliable, and reassuring. Helping children arrive comfortably and on time — every day.",
}

  

export const metadata: Metadata = {
  title: "School Transport Services Melbourne | CJ SupportServices",
  description:
    "Safe and reliable school transport services across Melbourne & Victoria. Accessible NDIS travel support for children.",
}




export default function SchoolTransportPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={schoolTransportService} />
      <Footer />
    </>
  )
}
