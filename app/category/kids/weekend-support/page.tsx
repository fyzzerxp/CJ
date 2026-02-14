import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceDetails } from "@/components/service-details";

const weekendSupportService = {
  title: "Weekend Support for Children",

  description:
    "Safe, engaging, and supportive weekend care that promotes fun, wellbeing, and personal growth.",

  intro: `
At CJ SupportServices, we understand that children benefit from meaningful activities, structure, and care beyond the school week.

Our Weekend Support Program provides a safe, engaging, and nurturing environment where children can relax, learn, and build confidence — while families receive valuable time to rest or manage other commitments.

As a provider, we help children enjoy weekends in a balanced and positive way.
`,
  category: "Kids Services",
  approach: {
    title: "Our Approach",
    content:
      "We focus on combining fun, wellbeing, and personal development in a structured and supportive environment.",
    points: [
      "Create engaging and age-appropriate activities",
      "Encourage emotional and social development",
      "Support independence and confidence",
      "Work closely with families to meet individual needs",
    ],
  },

  servicesIncluded: {
    title: "What Our Weekend Support Includes",
    sections: [
      {
        heading: "Creative & Recreational Activities",
        content:
          "Art, games, outdoor play, and interactive learning experiences that encourage creativity and enjoyment.",
      },
      {
        heading: "Emotional & Behaviour Support",
        content:
          "Helping children manage emotions, build coping skills, and strengthen resilience in a supportive setting.",
      },
      {
        heading: "Daily Routine & Life Skills",
        content:
          "Supporting children with meals, hygiene, rest, and structured daily routines that promote independence.",
      },
      {
        heading: "Social Skills & Friendship Building",
        content:
          "Encouraging teamwork, communication, and positive peer relationships through guided activities.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families needing reliable weekend care",
      "Children with additional support needs",
      "NDIS participants",
      "Parents seeking flexible weekend assistance",
    ],
  },

  flexibleCare: {
    title: "Flexible & Family-Focused Support",
    content:
      "Weekend support can be tailored to suit each child’s interests, developmental needs, and family schedule.",
    points: [
      "Structured weekend sessions",
      "Individualised activity planning",
      "Support aligned with family routines",
    ],
    note: "Support may be provided regularly or as needed, depending on family circumstances.",
  },

  staff: {
    title: "Caring & Experienced Support Workers",
    points: [
      "Child-focused and respectful",
      "Experienced in recreational and behavioural support",
      "Committed to safe and nurturing care",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Safe and structured weekend environment",
      "Fun, meaningful activities",
      "Focus on emotional and social development",
      "Flexible scheduling options",
      "Trusted and compassionate team",
    ],
  },

  closing:
    "At CJ SupportServices, we make weekends meaningful, balanced, and supportive. Helping children feel safe, happy, and confident — every day of the week.",
};

export const metadata: Metadata = {
  title: "Weekend Child Support Services Melbourne | CJ SupportServices",
  description:
    "Flexible weekend support programs for children across Melbourne & Victoria. Structured care and supervision under NDIS support plans.",
}


export default function WeekendSupportPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={weekendSupportService} />
      <Footer />
    </>
  );
}
