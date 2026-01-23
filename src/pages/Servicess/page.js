import React from 'react'
import ServiceComponent from '../../component/ServiceComponent/ServiceMainComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Our Services - Plastic Surgery & Dermatology Treatments in Bangalore"
      description="Explore comprehensive plastic surgery and dermatology services at Nypunya Aesthetics Bangalore. Rhinoplasty, hair transplant, breast enhancement, liposuction, laser treatments, anti-aging, and more. Expert care, natural results. Book consultation."
      keywords="plastic surgery services bangalore, cosmetic surgery, dermatology treatments, rhinoplasty, hair transplant, breast augmentation, liposuction, laser hair removal, anti-aging treatments, aesthetic services"
      image="https://nypunyaaesthetics.com/services/service-main/all_services_banner.png"
    >
      <ServiceComponent />
    </SeoWrapper>
  )
}

export default page