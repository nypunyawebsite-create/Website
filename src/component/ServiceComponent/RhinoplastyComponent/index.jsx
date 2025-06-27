import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from "../RhinoplastyComponent/Banner"
import Rhinoplasty from "../RhinoplastyComponent/Rhinoplasty"
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import FaqRhinoplasty from './FaqRhinoplasty'

const RhinoplastyComponent = () => {
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
      <Rhinoplasty scrollTo={scrollTo} />
      <GalleryComponent />
      <div id="faq-section">
        <FaqRhinoplasty />
      </div>
      <ConsultationForm />
    </>
  )
}

export default RhinoplastyComponent