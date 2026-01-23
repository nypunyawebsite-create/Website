import React from 'react'
import RhinoplastyComponents from '../../component/WordPressServicePages/RhinoplastyComponents'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Rhinoplasty in Bangalore - Expert Nose Surgery | Nypunya"
            description="Expert rhinoplasty and nose reshaping surgery in Bangalore. Natural-looking results, board-certified surgeons, advanced techniques. Cosmetic and functional nose surgery. Book consultation."
            keywords="rhinoplasty bangalore, nose job bangalore, nose reshaping, cosmetic nose surgery, nasal surgery, best rhinoplasty surgeon"
            image="https://nypunyaaesthetics.com/services/rhinoplasty.png"
            isServicePage={true}
            serviceName="Rhinoplasty"
            procedureType="CosmeticProcedure"
            faqItems={[]}
        >
            <RhinoplastyComponents />
        </SeoWrapper>
    )
}

export default page
