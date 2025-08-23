import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from "./Banner";
import RhinoplastyServices from "./RhinoplastyServices";
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import FaqLaserSkinRejuvenation from './FaqLaserSkinRejuvenation';

const RhinoplastyServicesComponent = () => {
    const location = useLocation();
    const { scrollTo } = location.state || {};
    const faqRef = useRef(null);

    useLayoutEffect(() => {
        // Give time for nested components to mount
        if (scrollTo === 'faqs' || window.location.hash === '#faq-section') {
            setTimeout(() => {
                if (faqRef.current) {
                    faqRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Adjust this if needed
        }
    }, [scrollTo]);

    return (
        <>
            <Banner />
            <RhinoplastyServices scrollTo={scrollTo} />
        </>
    );
};

export default RhinoplastyServicesComponent;
