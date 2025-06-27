import React, { useLayoutEffect, useRef } from 'react'
import Banner from "../LiposuctionComponent/Banner"
import LiposuctionComponent from './LiposuctionComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import { useLocation } from 'react-router-dom'
import FaqLiposuction from './FaqLiposuction'

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
      <LiposuctionComponent scrollTo={scrollTo} />
      <GalleryComponent />
      <ConsultationForm />
      <div id="faq-section" ref={faqRef}>
        <FaqLiposuction />
      </div>
    </>
  )
}

export default Index