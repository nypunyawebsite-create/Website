import React from 'react'
import LaserScarRevision from '../../component/ServiceComponent/LaserScarRevisionComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Laser Scar Revision in Bangalore - Reduce Scars Effectively | Nypunya"
      description="Expert laser scar revision in Bangalore. Advanced laser treatments to reduce and improve appearance of scars. Safe, effective, minimal downtime. Book consultation."
      keywords="scar revision bangalore, laser scar treatment, reduce scars, scar removal, keloid treatment, scar improvement"
      image="https://nypunyaaesthetics.com/services/scar-revision.png"
      isServicePage={true}
      serviceName="Laser Scar Revision"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <LaserScarRevision />
    </SeoWrapper>
  )
}

export default page