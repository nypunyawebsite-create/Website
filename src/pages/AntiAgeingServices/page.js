import React from 'react'
import AntiAgeingWordpress from '../../component/WordPressServicePages/AntiAgeingComponent/AntiAgeingWordpress'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Facelift in Bangalore - Anti-Aging & Facial Rejuvenation | Nypunya"
            description="Expert facelift and anti-aging procedures in Bangalore. Natural-looking results, board-certified surgeons, advanced techniques. Turn back the clock. Book consultation."
            keywords="facelift bangalore, anti-aging bangalore, facial rejuvenation, thread lift, skin tightening, youth restoration"
            image="https://nypunyaaesthetics.com/services/facelift.png"
            isServicePage={true}
            serviceName="Facelift"
            procedureType="CosmeticProcedure"
            faqItems={[]}
        >
            <AntiAgeingWordpress />
        </SeoWrapper>
    )
}

export default page
