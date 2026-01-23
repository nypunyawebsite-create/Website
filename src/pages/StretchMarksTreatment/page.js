import React from 'react'
import StretchMarksTreatment from '../../component/ServiceComponent/StretchMarksTreatmentComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Stretch Marks Treatment in Bangalore - Reduce & Fade Stretch Marks | Nypunya"
      description="Expert stretch marks treatment in Bangalore. Advanced laser, microneedling, and topical treatments to reduce and fade stretch marks. Visible results. Book consultation."
      keywords="stretch marks treatment bangalore, remove stretch marks, stretch marks removal, laser stretch marks, striae treatment"
      image="https://nypunyaaesthetics.com/services/stretch-marks.png"
      isServicePage={true}
      serviceName="Stretch Marks Treatment"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <StretchMarksTreatment />
    </SeoWrapper>
  )
}

export default page