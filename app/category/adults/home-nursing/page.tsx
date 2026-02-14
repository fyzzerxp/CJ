import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetails } from "@/components/service-details"

 const homeNursingService = {
  category: "Adult Services",

  title: "Home Nursing Services",

  description:
    "Professional clinical care delivered safely and compassionately in the comfort of your own home.",

  intro: `
At CJ SupportServices, our Home Nursing Services provide professional clinical care in the comfort and familiarity of your home.

We support individuals who require medical care, chronic condition management, or post-hospital nursing — helping you maintain dignity, safety, and independence while receiving high-quality support.
  `,

  approach: {
    title: "Our Clinical Care Approach",
    content:
      "Our qualified nursing team delivers evidence-based care while respecting your routines, preferences, and personal goals.",
    points: [
      "Professional and qualified nursing staff",
      "Individualised care plans",
      "Safe medication administration and monitoring",
      "Coordination with GPs and allied health providers",
      "Focus on dignity, safety, and independence",
    ],
  },

  servicesIncluded: {
    title: "What Our Home Nursing Services Include",
    sections: [
      {
        heading: "Medication Management",
        content:
          "Safe administration, monitoring, and support with prescribed medications.",
      },
      {
        heading: "Wound & Skin Care",
        content:
          "Assessment, dressing changes, and ongoing wound management to promote healing.",
      },
      {
        heading: "Diabetes Support",
        content:
          "Blood glucose monitoring, insulin administration, and education for effective diabetes management.",
      },
      {
        heading: "Continence Care",
        content:
          "Professional and respectful support with continence management needs.",
      },
      {
        heading: "Palliative Support",
        content:
          "Compassionate nursing care focused on comfort, symptom management, and quality of life.",
      },
      {
        heading: "Catheter & Stoma Management",
        content:
          "Specialised support for catheter care, stoma management, and related clinical needs.",
      },
    ],
  },

  whoItsFor: {
    title: "Who Home Nursing Is For",
    points: [
      "Individuals managing chronic health conditions",
      "People requiring post-hospital clinical care",
      "Older adults needing ongoing nursing support",
      "Participants under NDIS or Home Care Packages",
      "Individuals requiring palliative or complex care support",
    ],
  },

  flexibleCare: {
    title: "Flexible Clinical Support",
    content:
      "Our nursing services are tailored to your care plan and delivered according to your health requirements.",
    points: [
      "Short-term or long-term nursing care",
      "Scheduled or as-needed visits",
      "Collaboration with medical professionals",
      "Regular monitoring and review of care needs",
    ],
    note:
      "Our priority is delivering safe, high-quality clinical care while preserving independence and dignity.",
  },

  whyChooseUs: {
    title: "Why Choose CJ SupportServices for Home Nursing",
    points: [
      "Qualified and experienced nursing professionals",
      "Personalised, person-centred care planning",
      "Clear communication with families and healthcare providers",
      "Commitment to safety and clinical excellence",
      "Serving Melbourne & Regional Victoria",
    ],
  },

  closing:
    "Receive professional nursing care in the comfort of your own home. Contact CJ SupportServices today to discuss your clinical care needs.",
}

  

export const metadata: Metadata = {
  title: "Home Nursing Services Melbourne | CJ SupportServices",
  description:
    "Professional in-home nursing care across Melbourne & Victoria. Medication management, wound care, diabetes support, palliative care and clinical support delivered safely at home.",
}



export default function HomeNursingPage() {
  return (
    <>
      <Header />
      <ServiceDetails service={homeNursingService} />
      <Footer />
    </>
  )
}
