import React from 'react'
import AboutUsComponent from '../../component/AboutUsComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const AboutUs = () => {
  return (
    <SeoWrapper
      title="About Us - Leading Plastic Surgery & Dermatology Clinic in Bangalore"
      description="Learn about Nypunya Aesthetic Clinic, Bangalore's trusted plastic surgery and dermatology center. Meet our expert doctors, world-class facilities, and commitment to excellence. 15+ years of transforming lives."
      keywords="about nypunya, aesthetic clinic bangalore, plastic surgery center, dermatology clinic, best plastic surgeons bangalore, cosmetic surgery clinic, expert doctors"
      image="https://nypunyaaesthetics.com/about-us/about-page-banner.png"
    >
      <AboutUsComponent />
    </SeoWrapper>
  )
}

export default AboutUs