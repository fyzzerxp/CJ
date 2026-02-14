import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const schoolAgeBehaviourService = {
  title: "School-Age Behaviour Support",

  description:
    "Supporting children to develop emotional regulation, social skills, confidence, and positive behaviour through guidance, structure, and connection.",

  intro: `
Between approximately 5 and 12 years of age, children are building independence, curiosity, and important social skills. During this stage, they learn how to regulate emotions, cooperate with others, follow expectations, and build confidence.

Even though school-age children can focus longer and follow instructions more easily, they still need reassurance, structure, and support — especially when tired, overwhelmed, or navigating new social situations.

At CJ SupportServices, we work alongside families to support positive behaviour development in a calm, respectful, and practical way.
`,
category:"Kids Services",
  approach: {
    title: "Our Approach to Behaviour Support",
    content:
      "We focus on building skills, not punishment. Behaviour support is about guidance, consistency, and helping children understand how their actions affect themselves and others.",
    points: [
      "Encourage emotional regulation and self-expression",
      "Promote clear and consistent expectations",
      "Support problem-solving and social cooperation",
      "Strengthen parent-child communication and connection",
    ],
  },

  servicesIncluded: {
    title: "Key Areas of Behaviour Support",
    sections: [
      {
        heading: "School Transitions & Emotional Adjustment",
        content:
          "Support for managing school-related stress, new routines, friendships, and changes in expectations.",
      },
      {
        heading: "Energy & Emotional Regulation",
        content:
          "Helping children manage tiredness, frustration, or withdrawal after long school days through calm routines and supportive strategies.",
      },
      {
        heading: "Clear Expectations & Positive Reinforcement",
        content:
          "Guidance for setting simple family rules, using positive instructions, and reinforcing cooperation with encouragement and praise.",
      },
      {
        heading: "Routines & Predictability",
        content:
          "Creating structured daily routines that promote security, independence, and self-management skills.",
      },
      {
        heading: "Healthy Discipline & Boundaries",
        content:
          "Supporting calm limit-setting, logical consequences, and collaborative problem-solving rather than punishment-based approaches.",
      },
      {
        heading: "Managing Anxiety & Worries",
        content:
          "Helping children express fears, manage test anxiety, and build coping strategies for stressful situations.",
      },
      {
        heading: "Conflict & Social Challenges",
        content:
          "Guidance for handling sibling conflict, peer disagreements, bullying concerns, and learning negotiation skills.",
      },
      {
        heading: "Habit Support & Behaviour Patterns",
        content:
          "Support for common behaviours such as nail biting, testing limits, or swearing — using calm, consistent responses.",
      },
    ],
  },

  whoItsFor: {
    title: "Who This Service Supports",
    points: [
      "Families seeking guidance on positive behaviour strategies",
      "Children experiencing anxiety, conflict, or emotional regulation challenges",
      "NDIS participants requiring structured behaviour support",
      "Families navigating school or social transitions",
    ],
  },

  flexibleCare: {
    title: "Flexible & Individualised Behaviour Support",
    content:
      "Behaviour strategies are tailored to each child’s personality, environment, and developmental stage.",
    points: [
      "Home-based behaviour guidance",
      "School collaboration where appropriate",
      "Family coaching and strategy planning",
      "Strength-based behaviour planning",
    ],
    note:
      "Support may include collaboration with educators, GPs, or allied health professionals when needed.",
  },

  staff: {
    title: "Experienced & Supportive Team",
    points: [
      "Child-focused and respectful",
      "Trained in positive behaviour guidance",
      "Collaborative with families and schools",
    ],
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices?",
    points: [
      "Positive, skill-building behaviour approach",
      "Focus on connection and communication",
      "Calm and consistent support strategies",
      "Family-centred and practical guidance",
      "Professional and compassionate team",
    ],
  },

  closing:
    "At CJ SupportServices, we believe positive behaviour grows from strong relationships, clear guidance, and emotional support. If your child’s behaviour is affecting daily life, school engagement, or family wellbeing, our team is here to help you build practical strategies with care and confidence.",
}


export const metadata: Metadata = {
  title: "School-Age Behaviour Support Melbourne | CJ SupportServices",
  description:
    "Behaviour support services for school-age children across Melbourne & Victoria. Structured, NDIS-aligned programs promoting positive development.",
}



export default function SchoolAgeBehaviourPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={schoolAgeBehaviourService} />
      <Footer />
    </>
  )
}
