import Banner from './Banner'
import HairTransplant from '../HairTransplantComponent/HairTransplant'
import { useLocation } from "react-router-dom";
import GalleryComponent from '../HairTransplantComponent/GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import FaqHairTransplant from './FaqHairTransplant'
import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const location = useLocation();
  const { scrollTo } = location.state || {};
  console.log(location.state, 'location.state');
  console.log(scrollTo);

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
      <HairTransplant scrollTo={scrollTo} />
      {/* <ServicesDetails /> */}
      <GalleryComponent />
      <div id="faq-section"><FaqHairTransplant /></div>

      <ConsultationForm />

    </>
  )
}

export default Index