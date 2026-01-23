import React from 'react'
import NoseJobsComponents from '../../component/WordPressServicePages/NoseJobsComponents/'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Nose Jobs in Bangalore - Rhinoplasty & Nose Reshaping | Nypunya"
            description="Expert nose jobs and rhinoplasty in Bangalore. Natural-looking results, board-certified surgeons, advanced techniques. Cosmetic and functional nose surgery. Book consultation."
            keywords="nose jobs bangalore, rhinoplasty, nose reshaping, cosmetic nose surgery, nasal surgery, best nose job surgeon"
            image="https://nypunyaaesthetics.com/services/nose-jobs.png"
            isServicePage={true}
            serviceName="Nose Jobs"
            procedureType="CosmeticProcedure"
            faqItems={[]}
        >
            <NoseJobsComponents />
        </SeoWrapper>
    )
}

export default page
