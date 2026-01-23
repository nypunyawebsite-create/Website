import React from 'react'
import LaserHairRemovalWordpress from '../../component/WordPressServicePages/LaserHairRemoval/LaserHairRemoval'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Laser Hair Removal in Bangalore - Permanent Hair Reduction | Nypunya"
            description="Expert laser hair removal in Bangalore. Safe, effective permanent hair reduction for all skin types. Advanced technology, experienced technicians. Book consultation."
            keywords="laser hair removal bangalore, permanent hair removal, hair reduction, IPL hair removal, smooth skin, best laser hair removal"
            image="https://nypunyaaesthetics.com/services/laser-hair-removal.png"
            isServicePage={true}
            serviceName="Laser Hair Removal"
            procedureType="TherapeuticProcedure"
            faqItems={[]}
        >
            <LaserHairRemovalWordpress />
        </SeoWrapper>
    )
}

export default page
