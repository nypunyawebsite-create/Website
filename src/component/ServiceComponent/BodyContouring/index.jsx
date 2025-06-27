import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import LipoSuctionBodyContouring from './LipoSuctionBodyContouring';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import ServicesDetails from './ServicesDetails';

const Index = () => {
    const location = useLocation();
    const { scrollTo } = location.state || {};

    const informationRef = useRef(null);
    const faqRef = useRef(null);
    const whyUsRef = useRef(null);

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
            <LipoSuctionBodyContouring scrollTo={scrollTo} />
            <ServicesDetails refProp={faqRef} />
            <GalleryComponent refProp={whyUsRef} />
            <ConsultationForm />
        </>
    );
};

export default Index;
