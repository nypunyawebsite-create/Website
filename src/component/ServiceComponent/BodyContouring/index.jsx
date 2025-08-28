import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import LipoSuctionBodyContouring from './LipoSuctionBodyContouring';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import ServicesDetails from './ServicesDetails';
import FaqAbdominal from "./FaqAbdominal";
const Index = () => {
    const location = useLocation();
    const { scrollTo } = location.state || {};

    const informationRef = useRef(null);
    const faqRef = useRef(null);
    const whyUsRef = useRef(null);

    useLayoutEffect(() => {
        if (scrollTo === 'faqs' || window.location.hash === '#faq-section') {
            setTimeout(() => {
                if (faqRef.current) {
                    faqRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }, [scrollTo]);

    return (
        <>
            <Banner refProp={informationRef} />
            <LipoSuctionBodyContouring scrollTo={scrollTo} />
            <ServicesDetails refProp={faqRef} />
            <GalleryComponent refProp={whyUsRef} />
            <div id="faq-section" ref={faqRef}>
                <FaqAbdominal />
            </div>
            <ConsultationForm />
        </>
    );
};

export default Index;
