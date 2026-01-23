import React from 'react'
import RhinoplastyComponent from '../../component/ServiceComponent/RhinoplastyComponent'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  // FAQ data for FAQPage schema
  const faqItems = [
    {
      question: "What is rhinoplasty?",
      answer: "Rhinoplasty, commonly known as a nose job, is a surgical procedure to reshape the nose for cosmetic or functional purposes. It can improve the nose's appearance, correct breathing issues, or both."
    },
    {
      question: "How long does rhinoplasty recovery take?",
      answer: "Initial recovery typically takes 1-2 weeks, with most swelling subsiding within 3-4 weeks. Final results become visible after 3-6 months as the nose fully heals."
    },
    {
      question: "Is rhinoplasty painful?",
      answer: "Rhinoplasty is performed under anesthesia, so you won't feel pain during the procedure. Post-surgery, mild discomfort is managed with prescribed pain medication."
    },
    {
      question: "What are the risks of rhinoplasty?",
      answer: "As with any surgery, rhinoplasty carries risks including infection, bleeding, adverse reaction to anesthesia, and unsatisfactory results. However, when performed by an experienced surgeon, complications are rare."
    }
  ]

  return (
    <SeoWrapper
      title="Rhinoplasty in Bangalore - Nose Reshaping Surgery | Nypunya"
      description="Expert rhinoplasty and nose reshaping in Bangalore. Natural-looking results, board-certified surgeons, advanced techniques. Cosmetic and functional nose surgery. Book consultation."
      keywords="rhinoplasty bangalore, nose job, nose reshaping, cosmetic nose surgery, nasal surgery bangalore"
      image="https://nypunyaaesthetics.com/services/rhinoplasty.png"
      isServicePage={true}
      serviceName="Rhinoplasty"
      procedureType="CosmeticProcedure"
      faqItems={faqItems}
    >
      <RhinoplastyComponent />
    </SeoWrapper>
  )
}

export default page