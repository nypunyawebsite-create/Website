import React from 'react'
import HomeVideo from './HomeVideo'
import ClinicBanner from './ClinicBanner'
import AboutNypunyaSection from './AboutNypunyaSection'
import CosmeticPlasticServices from './CosmeticPlasticServices'
import DermatologyServices from './DermatologyServices'
import HomeInformation from './HomeInformation'
import WelcomeNypunya from './WelcomeNypunya'
import OurMedicalExpert from './OurMedicalExpert'
import OurPatientReview from '../OurDoctorsComponent/Feedback';
import Affliations from './Affliations';
import MediaCoverage from './MediaCoverage';
import FAQsSection from './FAQsSection';
import ContactInfoSection from './ContactInfoSection';
import ContactUsContent from '../ContactUsComponent/ContactUsContent';
import ConsultationForm from '../FormsComponent/ConsultationForm';

const Home = () => {
    return (
        <div>
            <HomeVideo />
            <ClinicBanner />
            <AboutNypunyaSection />
            <CosmeticPlasticServices />
            <DermatologyServices />
            {/* <HomeInformation /> */}
            {/* <WelcomeNypunya /> */}
            <OurMedicalExpert />
            <Affliations />
            <OurPatientReview />
            <MediaCoverage />
            <FAQsSection />
            <ContactInfoSection />
            <ConsultationForm />
        </div>
    )
}

export default Home


