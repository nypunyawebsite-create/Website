import React from 'react'
import AbdominalComponent from '../../component/ServiceComponent/AbdominalComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Abdominal Contouring in Bangalore - Tummy Tuck & Body Sculpting | Nypunya"
      description="Expert abdominal contouring and tummy tuck procedures in Bangalore. Achieve a flatter, firmer abdomen with advanced techniques. Experienced surgeons, natural results. Book consultation."
      keywords="abdominal contouring bangalore, tummy tuck bangalore, abdominoplasty, body sculpting, flat stomach surgery"
      image="https://nypunyaaesthetics.com/services/abdominal-contouring.png"
      isServicePage={true}
      serviceName="Abdominal Contouring"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <AbdominalComponent />
    </SeoWrapper>
  )
}

export default page