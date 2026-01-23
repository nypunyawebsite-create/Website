import React from 'react'
import BlepharoPlastyComponent from '../../component/ServiceComponent/BlepharoPlastyComponent'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Blepharoplasty in Bangalore - Eyelid Surgery & Eye Lift | Nypunya"
      description="Expert blepharoplasty and eyelid surgery in Bangalore. Remove sagging skin, reduce bags, rejuvenate your eyes. Board-certified surgeons, natural results. Book consultation."
      keywords="blepharoplasty bangalore, eyelid surgery, eye lift, upper eyelid surgery, lower eyelid surgery, eye rejuvenation"
      image="https://nypunyaaesthetics.com/services/blepharoplasty.png"
      isServicePage={true}
      serviceName="Blepharoplasty"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <BlepharoPlastyComponent />
    </SeoWrapper>
  )
}

export default page