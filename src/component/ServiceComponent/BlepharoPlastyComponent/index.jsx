import React from 'react'
import Banner from "../BlepharoPlastyComponent/Banner"
import BlepharoPlastyComponent from './BlepharoPlastyComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FaqBlepharoPlasty from './FaqBlepharoPlasty'

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
      <BlepharoPlastyComponent scrollTo={scrollTo} />
      <GalleryComponent />
      <ConsultationForm />
      <div id="faq-section">
        <FaqBlepharoPlasty />
      </div>
    </>
  )
}

export default Index