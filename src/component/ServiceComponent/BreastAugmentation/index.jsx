import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import BreastAugmentationComponent from './BreastAugmentationComponent';
import ServicesDetails from './ServicesDetails';
import GalleryComponent from './GalleryComponent';
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import { breastServiceContent } from "../../../utils/ServiceDatas/BreastData/breastData";

const Index = () => {
  const location = useLocation();
  const scrollToSection = location.state?.scrollTo;

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

  return (
    <>
      <Banner refProp={informationRef} />

      <BreastAugmentationComponent selectedService={selectedService} />
      <ServicesDetails
        // selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <GalleryComponent />
      <ConsultationForm />
    </>
  );
};

export default Index;
