import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const afterSchoolCareService = {
    title: "After School Support for Children",
  
    description:
      "At CJ SupportServices, we understand that the hours after school can be one of the most important — and challenging — times of the day for children and families.",
  
    intro: `
  Children may feel tired, overwhelmed, excited, or frustrated after a long school day, while parents are balancing work and home responsibilities.
  
  Our After School Support Program provides a safe, structured, and supportive environment where children can relax, learn, grow, and build confidence — while giving families peace of mind.
  
  As a provider, we support children emotionally, socially, and practically, helping them transition smoothly from school to home life.
  `,
  
    approach: {
      title: "Our Approach",
      content:
        "Every child is unique. That’s why we take a child-centred and family-focused approach to after school support.",
      points: [
        "Work closely with parents, schools, and support teams",
        "Respect each child’s personality, interests, and learning style",
        "Create consistent routines that promote confidence and security",
        "Encourage independence while offering guidance and reassurance",
      ],
    },
  
    servicesIncluded: {
      title: "What Our After School Support Includes",
      sections: [
        {
          heading: "Homework & Learning Support",
          content:
            "We help children complete homework, understand tasks, stay focused, and develop positive study habits — without pressure or stress.",
        },
        {
          heading: "Creative & Recreational Activities",
          content:
            "We encourage children to unwind through games, art, music, reading, and play-based learning that supports creativity and emotional wellbeing.",
        },
        {
          heading: "Emotional & Behavioural Support",
          content:
            "We help children express feelings, manage emotions, and develop positive coping strategies.",
        },
        {
          heading: "Social Skills & Confidence Building",
          content:
            "We support children in building friendships, learning communication skills, sharing, problem-solving, and teamwork.",
        },
        {
          heading: "Healthy Snacks & Routine Support",
          content:
            "We help children follow healthy routines, enjoy nutritious snacks, and learn responsibility through daily habits and structure.",
        },
        {
          heading: "Safe Transport Support (if required)",
          content:
            "We assist with safe travel from school to home or support locations where approved.",
        },
      ],
    },
  
    whoItsFor: {
      title: "Who Our After School Support Helps",
      points: [
        "Working parents needing reliable after school care",
        "Children who benefit from structure and routine",
        "Children with additional support needs (NDIS participants)",
        "Families seeking a positive, safe environment after school",
      ],
    },
  
    flexibleCare: {
      title: "Flexible & Personalised Care",
      content:
        "We tailor support based on each child’s individual needs and family circumstances.",
      points: [
        "Age, interests, and abilities",
        "School schedule and routines",
        "Emotional and learning needs",
      ],
      note:
        "Support can be arranged daily, weekly, or as needed.",
    },
  
    staff: {
      title: "Trained & Caring Support Workers",
      points: [
        "Patient, respectful, and child-focused",
        "Trained in child support and behaviour guidance",
        "Carefully screened and supported",
      ],
    },
  
    whyChooseUs: {
      title: "Why Choose CJ SupportServices?",
      points: [
        "Safe and supportive environment",
        "Child-centred, family-friendly care",
        "Emotional, social, and learning support",
        "Flexible schedules",
        "Trusted and trained staff",
      ],
    },
  
    closing:
      "At CJ SupportServices, we believe children deserve a place where they feel safe, valued, and supported after school. We help children grow in confidence, independence, and happiness — one afternoon at a time.",
  }
  

export const metadata: Metadata = {
  title: "After School Care | Ability First Foundation",
  description: afterSchoolCareService.description,
}



export default function AfterSchoolCarePage() {
  return (
    <>
      <Header />
      <ServiceDetails service={afterSchoolCareService} />
      <Footer />
    </>
  )
}
