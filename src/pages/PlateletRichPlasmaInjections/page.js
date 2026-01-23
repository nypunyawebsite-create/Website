import React from 'react'
import PlateletRichPlasmaInjections from '../../component/ServiceComponent/PlateletRichPlasmaInjectionsComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="PRP Injections in Bangalore - Platelet Rich Plasma Therapy | Nypunya"
      description="Expert PRP injections and platelet rich plasma therapy in Bangalore. Natural hair growth, skin rejuvenation, joint healing. Safe, effective, using your own blood. Book consultation."
      keywords="PRP injections bangalore, platelet rich plasma, PRP hair treatment, PRP facial, natural healing, regenerative medicine"
      image="https://nypunyaaesthetics.com/services/prp-injections.png"
      isServicePage={true}
      serviceName="PRP Injections"
      procedureType="TherapeuticProcedure"
      faqItems={[]}
    >
      <PlateletRichPlasmaInjections />
    </SeoWrapper>
  )
}

export default page