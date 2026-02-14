import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const homeCareSupportService = {
    category: "Adult Services",
  
    title: "Home Care Support",
  
    description:
      "Personalised in-home support designed to help you live safely, comfortably, and independently in your own home.",
  
    intro: `
  At CJ SupportServices, we believe home is more than just a place — it’s where comfort, independence, and dignity belong.
  
  Our Home Care Support services help you or your loved one remain safe, supported, and thriving in familiar surroundings. We combine personalised care with compassion, respect, and practical assistance so you can continue living life on your terms.
    `,
  
    approach: {
      title: "Our Approach to Home Care",
      content:
        "Every individual’s needs are unique, which is why our care is tailored to fit seamlessly into your lifestyle and preferences.",
      points: [
        "Respect for independence and personal choice",
        "Life-enhancing daily care and companionship",
        "Flexible support based on changing needs",
        "Compassionate and respectful care professionals",
        "Focus on safety, comfort, and dignity",
      ],
    },
  
    servicesIncluded: {
      title: "Our Home Care Services Include",
      sections: [
        {
          heading: "Personalised Daily Assistance",
          content:
            "Support with bathing, dressing, grooming, mobility, and everyday routines to maintain confidence and independence.",
        },
        {
          heading: "Household Support",
          content:
            "Light housekeeping, laundry, meal preparation, and grocery shopping assistance to maintain a calm and organised home.",
        },
        {
          heading: "Safe Transport & Community Access",
          content:
            "Reliable transport for appointments, errands, social outings, and community engagement.",
        },
        {
          heading: "Medication Reminders & Wellbeing Support",
          content:
            "Medication prompts, light physical activity encouragement, and support with daily health routines.",
        },
        {
          heading: "Community & Social Engagement",
          content:
            "Support to stay socially connected through walks, community classes, family visits, and recreational activities.",
        },
        {
          heading: "Flexible 24/7 Support",
          content:
            "Ongoing daily care or responsive assistance during unexpected moments when extra help is needed.",
        },
      ],
    },
  
    whoItsFor: {
      title: "Who Home Care Support Is For",
      points: [
        "Older adults wishing to remain at home safely",
        "Individuals needing daily living assistance",
        "People recovering from illness or injury",
        "NDIS participants requiring in-home support",
        "Families seeking structured care for loved ones",
      ],
    },
  
    flexibleCare: {
      title: "Flexible & Funding-Supported Care",
      content:
        "Our services are adaptable and designed to work within your funding or private care arrangements.",
      points: [
        "NDIS funded supports",
        "Home Care Package arrangements",
        "Private care options",
        "Short-term or long-term support",
      ],
      note:
        "Our goal is to provide care that enhances your lifestyle while preserving your independence.",
    },
  
    whyChooseUs: {
      title: "Why Choose CJ SupportServices for Home Care",
      points: [
        "Tailored care plans designed around your goals",
        "Skilled and compassionate care professionals",
        "Respect for independence and dignity",
        "Flexible scheduling and responsive support",
        "Serving Melbourne & Regional Victoria",
      ],
    },
  
    closing:
      "Experience home care that truly supports your life — your way. Contact CJ SupportServices today to begin your personalised home care journey.",
  }
  
  
export const metadata: Metadata = {
    title: "Home Care Support Melbourne | CJ SupportServices",
    description:
      "Personalised in-home care support across Melbourne & Victoria. Daily assistance, companionship, transport, medication reminders and flexible support funded by NDIS or Home Care Packages.",
  }
  


export default function HomeCarePage() {
  return (
    <>
      <Header />
      <ServiceDetails service={homeCareSupportService} />
      <Footer />
    </>
  )
}
