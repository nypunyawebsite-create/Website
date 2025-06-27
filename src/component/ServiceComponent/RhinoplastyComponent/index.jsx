import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from "../RhinoplastyComponent/Banner";
import Rhinoplasty from "../RhinoplastyComponent/Rhinoplasty";
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import FaqRhinoplasty from './FaqRhinoplasty';

const RhinoplastyComponent = () => {
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
      <Rhinoplasty scrollTo={scrollTo} />
      <GalleryComponent />
      <div id="faq-section" ref={faqRef}>
        <FaqRhinoplasty />
      </div>
      <ConsultationForm />
    </>
  );
};

export default RhinoplastyComponent;
