import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import AbdominalContouring from './AbdominalContouring';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import ServicesDetails from './ServicesDetails'; // ✅ Notice the corrected component name
import FaqAbdominal from "./FaqAbdominal";

const Index = () => {
    const location = useLocation();
    const scrollToSection = location.state?.scrollTo;
    const { scrollTo } = location.state || {};
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
    useEffect(() => {
        if (scrollTo === 'faqs') {
            const faqSection = document.getElementById('faq-section');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollTo]);

    return (
        <>
            <Banner refProp={informationRef} />
            <AbdominalContouring scrollTo={scrollTo} />
            <ServicesDetails refProp={faqRef} />
            <GalleryComponent refProp={whyUsRef} />
            <div id="faq-section"><FaqAbdominal refProp={faqRef} /></div>
            <ConsultationForm />
        </>
    );
};

export default Index;
