import React from 'react'
import { useSeoMetadata } from '../../hooks/useSeoMetadata'
import HomeVideo from './HomeVideo'
import CosmeticPlasticServices from './CosmeticPlasticServices'
import DermatologyServices from './DermatologyServices'
import HomeInformation from './HomeInformation'
import WelcomeNypunya from './WelcomeNypunya'
import OurMedicalExpert from './OurMedicalExpert'
import OurPatientReview from '../OurDoctorsComponent/Feedback';
import Affliations from './Affliations';

const Home = () => {
    // Use the SEO metadata hook with your specific ID
    const { seoData, loading } = useSeoMetadata('68ae83766a479d349773856d', 'id');

    return (
        <div>
            {/* SEO Loading Indicator (optional) */}
            {loading && (
                <div style={{ display: 'none' }}>
                    Loading SEO metadata...
                </div>
            )}

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

export default Home


