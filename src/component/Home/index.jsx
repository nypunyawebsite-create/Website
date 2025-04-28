import React from 'react'
import HomeVideo from './HomeVideo'
import CosmeticPlasticServices from './CosmeticPlasticServices'
import DermatologyServices from './DermatologyServices'
import HomeInformation from './HomeInformation'
import WelcomeNypunya from './WelcomeNypunya'
import OurMedicalExpert from './OurMedicalExpert'
import OurPatientReview from './OurPatientReview'

const index = () => {
    return (
        <div>
            <HomeVideo />
            <CosmeticPlasticServices />
            <DermatologyServices />
            <HomeInformation />
            <WelcomeNypunya />
            <OurMedicalExpert />
            {/* <OurPatientReview /> */}
        </div>
    )
}

export default index
