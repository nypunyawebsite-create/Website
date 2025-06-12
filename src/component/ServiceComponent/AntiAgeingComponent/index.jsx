import React, { useEffect } from 'react';
import Banner from '../AntiAgeingComponent/Banner';
import Gallery from '../AntiAgeingComponent/GalleryComponent';
import AntiAgeing from '../AntiAgeingComponent/AntiAgeingProcedures';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import { useLocation } from 'react-router-dom';
import FaqAntiAgeing from './FaqAntiAgeing';



const Index = () => {
  const location = useLocation();
  const { scrollTo } = location.state || {};

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
      <Banner />
      <AntiAgeing />
      <Gallery />
      <div id="faq-section">
        <FaqAntiAgeing />
      </div>
      <ConsultationForm />
    </>
  )
}

export default Index