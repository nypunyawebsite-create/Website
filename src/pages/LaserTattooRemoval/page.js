import React from 'react'
import LaserTattooRemoval from '../../component/ServiceComponent/LaserTattooRemovalComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Laser Tattoo Removal in Bangalore - Safe & Effective | Nypunya"
      description="Expert laser tattoo removal in Bangalore. Advanced Q-switched lasers for safe, effective tattoo removal. Minimal scarring, all skin types. Book consultation."
      keywords="tattoo removal bangalore, laser tattoo removal, tattoo removal cost, remove tattoo, Q-switched laser"
      image="https://nypunyaaesthetics.com/services/tattoo-removal.png"
      isServicePage={true}
      serviceName="Laser Tattoo Removal"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <LaserTattooRemoval />
    </SeoWrapper>
  )
}

export default page