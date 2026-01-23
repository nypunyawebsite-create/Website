import React from 'react'
import AntiAgeing from '../../component/ServiceComponent/AntiAgeingComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Anti-Ageing Procedures in Bangalore - Youthful Skin | Nypunya"
      description="Expert anti-aging procedures in Bangalore. Facelift, thread lift, skin tightening, and rejuvenation treatments. Turn back the clock naturally. Board-certified surgeons. Book consultation."
      keywords="anti-aging bangalore, facelift, thread lift, skin tightening, facial rejuvenation, youth restoration"
      image="https://nypunyaaesthetics.com/services/anti-aging.png"
      isServicePage={true}
      serviceName="Anti-Ageing Procedures"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <AntiAgeing />
    </SeoWrapper>
  )
}

export default page