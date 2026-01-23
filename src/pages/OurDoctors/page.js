import React from 'react'
import OurDoctors from '../../component/OurDoctorsComponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Our Expert Doctors - Best Plastic Surgeons & Dermatologists in Bangalore"
      description="Meet our team of highly qualified plastic surgeons and dermatologists at Nypunya Aesthetic Clinic. Board-certified experts with 15+ years experience, specializing in cosmetic surgery, rhinoplasty, hair transplant, and advanced dermatology treatments."
      keywords="plastic surgeons bangalore, dermatologists bangalore, cosmetic surgeons, expert doctors, board certified surgeons, nypunya doctors, aesthetic clinic doctors, best plastic surgeon"
      image="https://nypunyaaesthetics.com/our-doctors/doctor_krashantha.png"
    >
      <OurDoctors />
    </SeoWrapper>
  )
}

export default page