import React from 'react'
import Banner from "../LiposuctionComponent/Banner"
import LiposuctionComponent from './LiposuctionComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FaqLiposuction from './FaqLiposuction'

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
      <LiposuctionComponent scrollTo={scrollTo} />
      <GalleryComponent />
      <ConsultationForm />
      <div id="faq-section">
        <FaqLiposuction />
      </div>
    </>
  )
}

export default Index