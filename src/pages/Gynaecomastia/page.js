import React from 'react'
import GynaecomastiaComponent from '../../component/ServiceComponent/GynaecomastiaComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Gynaecomastia Treatment in Bangalore - Male Breast Reduction | Nypunya"
      description="Expert gynaecomastia treatment and male breast reduction in Bangalore. Safe, effective procedures for enlarged male breasts. Board-certified surgeons, natural results. Book consultation."
      keywords="gynaecomastia bangalore, male breast reduction, moobs treatment, enlarged male breasts, chest contouring"
      image="https://nypunyaaesthetics.com/services/gynaecomastia.png"
      isServicePage={true}
      serviceName="Gynaecomastia Treatment"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <GynaecomastiaComponent />
    </SeoWrapper>
  )
}

export default page