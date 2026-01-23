import React from 'react'
import LiposuctionComponent from '../../component/ServiceComponent/LiposuctionComponent'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Liposuction in Bangalore - Fat Removal & Body Sculpting | Nypunya"
      description="Expert liposuction and fat removal in Bangalore. Advanced techniques for body contouring and sculpting. Safe procedures, natural results. Board-certified surgeons. Book consultation."
      keywords="liposuction bangalore, fat removal, body sculpting, lipo surgery, body contouring, fat reduction"
      image="https://nypunyaaesthetics.com/services/liposuction.png"
      isServicePage={true}
      serviceName="Liposuction"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <LiposuctionComponent />
    </SeoWrapper>
  )
}

export default page