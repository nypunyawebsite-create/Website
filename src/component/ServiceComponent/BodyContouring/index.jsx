import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import LipoSuctionBodyContouring from './LipoSuctionBodyContouring';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import ServicesDetails from './ServicesDetails'; // ✅ Notice the corrected component name

const Index = () => {
    const location = useLocation();
    const scrollToSection = location.state?.scrollTo;

    const informationRef = useRef(null);
    const faqRef = useRef(null);
    const whyUsRef = useRef(null);

    useEffect(() => {
        if (scrollToSection === "information" && informationRef.current) {
            informationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (scrollToSection === "faqs" && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (scrollToSection === "whyUs" && whyUsRef.current) {
            whyUsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [scrollToSection]);


    return (
        <>
            <Banner refProp={informationRef} />
            <LipoSuctionBodyContouring />
            <ServicesDetails refProp={faqRef} /> 
            <GalleryComponent refProp={whyUsRef} /> 
            <ConsultationForm />
        </>
    );
};

export default Index;
