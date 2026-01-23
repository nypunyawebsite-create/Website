import React from 'react'
import AcneComponent from '../../component/ServiceComponent/AcneScarsComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Acne & Scars Treatment in Bangalore - Clear Skin Solutions | Nypunya"
      description="Expert acne and scar treatment in Bangalore. Advanced laser, chemical peels, and medical treatments for clear, smooth skin. Proven results, experienced dermatologists. Book consultation."
      keywords="acne treatment bangalore, scar removal, acne scars, laser scar treatment, clear skin, dermatology bangalore"
      image="https://nypunyaaesthetics.com/services/acne-scars.png"
      isServicePage={true}
      serviceName="Acne & Scars Treatment"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <AcneComponent />
    </SeoWrapper>
  )
}

export default page