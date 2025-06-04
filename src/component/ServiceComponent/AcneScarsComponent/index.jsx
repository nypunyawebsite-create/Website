import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import AcneAndScars from './AcneAndScars';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
const Index = () => {
  const location = useLocation();
  const scrollToSection = location.state?.scrollTo;

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

  return (
    <>
      <Banner refProp={informationRef} />
      <AcneAndScars />
      <GalleryComponent />
      <ConsultationForm />
    </>
  );
};

export default Index;
