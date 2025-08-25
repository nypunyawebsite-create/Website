import React from 'react'
import HomeVideo from './HomeVideo'
import CosmeticPlasticServices from './CosmeticPlasticServices'
import DermatologyServices from './DermatologyServices'
import HomeInformation from './HomeInformation'
import WelcomeNypunya from './WelcomeNypunya'
import OurMedicalExpert from './OurMedicalExpert'
import OurPatientReview from '../OurDoctorsComponent/Feedback';
import Affliations from './Affliations';
const index = () => {
    return (
        <div>
            <HomeVideo />
            <CosmeticPlasticServices />
            <DermatologyServices />
            <HomeInformation />
            {/* <WelcomeNypunya /> */}
            <OurMedicalExpert />
            <Affliations />
            <OurPatientReview />
        </div>
    )
}

export default index


