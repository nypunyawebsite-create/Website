import React from 'react'
import BodyContouringServices from '../../component/WordPressServicePages/BodyContouring/BodyContouring'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Body Contouring in Bangalore - Transform Your Silhouette | Nypunya"
      description="Expert body contouring in Bangalore. Tummy tuck, liposuction, body sculpting for natural results. Board-certified surgeons, advanced techniques. Book consultation."
      keywords="body contouring bangalore, tummy tuck bangalore, body sculpting, liposuction, body reshaping, best body contouring surgeon"
      image="https://nypunyaaesthetics.com/services/body-contouring.png"
      isServicePage={true}
      serviceName="Body Contouring"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <BodyContouringServices />
    </SeoWrapper>
  )
}

export default page