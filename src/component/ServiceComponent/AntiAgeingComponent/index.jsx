import React, { useLayoutEffect, useRef } from 'react';
import Banner from '../AntiAgeingComponent/Banner';
import Gallery from '../AntiAgeingComponent/GalleryComponent';
import AntiAgeing from '../AntiAgeingComponent/AntiAgeingProcedures';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import { useLocation } from 'react-router-dom';
import FaqAntiAgeing from './FaqAntiAgeing';

const AntiAgeingComponent = () => {
  const location = useLocation();
  const { scrollTo } = location.state || {};
  const faqRef = useRef(null);

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
      <Banner />
      <AntiAgeing scrollTo={scrollTo} />
      <Gallery />
      <ConsultationForm />
      <div id="faq-section" ref={faqRef}>
        <FaqAntiAgeing />
      </div>
    </>
  );
};

export default AntiAgeingComponent;