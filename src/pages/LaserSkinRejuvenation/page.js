import React from 'react'
import RhinoplastyServicesComponent from '../../component/ServiceComponent/LaserSkinRejuvenationComponent'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Laser Skin Rejuvenation in Bangalore - Glowing Skin | Nypunya"
            description="Expert laser skin rejuvenation in Bangalore. Improve texture, reduce wrinkles, treat pigmentation. Safe, effective treatments for glowing, youthful skin. Book consultation."
            keywords="laser skin rejuvenation bangalore, skin resurfacing, facial rejuvenation, laser skin treatment, skin tightening, glowing skin"
            image="https://nypunyaaesthetics.com/services/skin-rejuvenation.png"
            isServicePage={true}
            serviceName="Laser Skin Rejuvenation"
            procedureType="TherapeuticProcedure"
            faqItems={[]}
        >
            <RhinoplastyServicesComponent />
        </SeoWrapper>
    )
}

export default page
