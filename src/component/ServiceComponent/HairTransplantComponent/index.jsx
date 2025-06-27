import Banner from './Banner'
import HairTransplant from '../HairTransplantComponent/HairTransplant'
import { useLocation } from "react-router-dom";
import GalleryComponent from '../HairTransplantComponent/GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import FaqHairTransplant from './FaqHairTransplant'
import React, { useLayoutEffect, useRef } from "react";

const Index = () => {
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
      <HairTransplant scrollTo={scrollTo} />
      {/* <ServicesDetails /> */}
      <GalleryComponent />
      <div id="faq-section" ref={faqRef}>
        <FaqHairTransplant />
      </div>

      <ConsultationForm />

    </>
  )
}

export default Index