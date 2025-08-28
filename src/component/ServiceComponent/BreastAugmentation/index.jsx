import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import BreastAugmentationComponent from './BreastAugmentationComponent';
import ServicesDetails from './ServicesDetails';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import { breastServiceContent } from "../../../utils/ServiceDatas/BreastData/breastData";
import FaqBreast from "./FaqBreast";

const Index = () => {
  const location = useLocation();
  const scrollToSection = location.state?.scrollTo;
  const { scrollTo } = location.state || {};
  const informationRef = useRef(null);
  const faqRef = useRef(null);
  const whyUsRef = useRef(null);

  const [selectedService, setSelectedService] = useState(breastServiceContent[0]); // Default service

  useEffect(() => {
    if (scrollToSection === "information" && informationRef.current) {
      informationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (scrollToSection === "faqs" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (scrollToSection === "whyUs" && whyUsRef.current) {
      whyUsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollToSection]);

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

      <BreastAugmentationComponent scrollTo={scrollTo} selectedService={selectedService} />
      <ServicesDetails
        // selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <GalleryComponent />
      <div id="faq-section" ref={faqRef}>
        <FaqBreast />
      </div>
      <ConsultationForm />
    </>
  );
};

export default Index;
