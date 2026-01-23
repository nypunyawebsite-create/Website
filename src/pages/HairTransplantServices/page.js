import React from 'react'
import HairTransplantWordpress from '../../component/WordPressServicePages/HairTransplant/HairTransplant'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Hair Transplant in Bangalore - Permanent Hair Restoration | Nypunya"
            description="Expert hair transplant in Bangalore. FUE and FUT techniques for natural, permanent hair restoration. Experienced surgeons, high success rate. Book consultation."
            keywords="hair transplant bangalore, FUE hair transplant, FUT hair transplant, hair restoration, baldness treatment, best hair transplant surgeon"
            image="https://nypunyaaesthetics.com/services/hair-transplant.png"
            isServicePage={true}
            serviceName="Hair Transplant"
            procedureType="CosmeticProcedure"
            faqItems={[]}
        >
            <HairTransplantWordpress />
        </SeoWrapper>
    )
}

export default page
