import React from 'react'
import BreastAugmentationComponent from '../../component/ServiceComponent/BreastAugmentation/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Breast Enhancement in Bangalore - Natural Results | Nypunya"
      description="Expert breast enhancement and augmentation in Bangalore. Safe procedures, natural-looking results, board-certified surgeons. Book consultation for breast augmentation, lift, and reduction."
      keywords="breast enhancement bangalore, breast augmentation, breast lift, breast reduction, cosmetic surgery bangalore, breast implants"
      image="https://nypunyaaesthetics.com/services/breast-enhancement.png"
      isServicePage={true}
      serviceName="Breast Enhancement"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <BreastAugmentationComponent />
    </SeoWrapper>
  )
}

export default page