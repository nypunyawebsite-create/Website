import React from 'react'
import HairTransplant from '../../component/ServiceComponent/HairTransplantComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Hair Transplant in Bangalore - Permanent Hair Restoration | Nypunya"
      description="Expert hair transplant in Bangalore. FUE and FUT techniques for natural, permanent hair restoration. Experienced surgeons, high success rate. Book consultation."
      keywords="hair transplant bangalore, FUE hair transplant, FUT hair transplant, hair restoration, baldness treatment, permanent hair"
      image="https://nypunyaaesthetics.com/services/hair-transplant.png"
      isServicePage={true}
      serviceName="Hair Transplant"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <HairTransplant />
    </SeoWrapper>
  )
}

export default page