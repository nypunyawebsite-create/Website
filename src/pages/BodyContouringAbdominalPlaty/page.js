import React from 'react'
import BodyContouringAbdominalPlatyComponent from '../../component/ServiceComponent/BodyContouring/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Body Contouring in Bangalore - Transform Your Silhouette | Nypunya"
      description="Expert body contouring procedures in Bangalore. Tummy tuck, liposuction, body sculpting for natural results. Board-certified surgeons, advanced techniques. Book consultation."
      keywords="body contouring bangalore, tummy tuck, body sculpting, liposuction bangalore, body reshaping, cosmetic surgery"
      image="https://nypunyaaesthetics.com/services/body-contouring.png"
      isServicePage={true}
      serviceName="Body Contouring"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <BodyContouringAbdominalPlatyComponent />
    </SeoWrapper>
  )
}

export default page