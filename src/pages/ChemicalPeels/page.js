import React from 'react'
import ChemicalPeels from '../../component/ServiceComponent/ChemicalPeelsComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Chemical Peels & Skin Rejuvenation in Bangalore | Nypunya"
      description="Expert chemical peels and skin rejuvenation in Bangalore. Improve texture, reduce wrinkles, treat acne. Safe, effective treatments for glowing skin. Book consultation."
      keywords="chemical peels bangalore, skin rejuvenation, facial peels, skin resurfacing, laser skin toning, skin treatment"
      image="https://nypunyaaesthetics.com/services/chemical-peels.png"
      isServicePage={true}
      serviceName="Chemical Peels & Skin Rejuvenation"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <ChemicalPeels />
    </SeoWrapper>
  )
}

export default page