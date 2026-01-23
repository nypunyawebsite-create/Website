import React from 'react'
import FillersAndBotox from '../../component/ServiceComponent/FillersAndBotoxComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Fillers & Botox in Bangalore - Anti-Aging Injectables | Nypunya"
      description="Expert dermal fillers and Botox treatments in Bangalore. Reduce wrinkles, add volume, rejuvenate your skin. Safe, FDA-approved, natural results. Book consultation."
      keywords="botox bangalore, dermal fillers, anti-aging injections, wrinkle treatment, facial fillers, cosmetic injectables"
      image="https://nypunyaaesthetics.com/services/fillers-botox.png"
      isServicePage={true}
      serviceName="Fillers & Botox"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <FillersAndBotox />
    </SeoWrapper>
  )
}

export default page