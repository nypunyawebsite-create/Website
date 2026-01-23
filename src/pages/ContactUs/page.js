import React from 'react'
import ContactUs from '../../component/ContactUsComponent//index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Contact Us - Book Appointment | Nypunya Aesthetic Clinic Bangalore"
      description="Contact Nypunya Aesthetic Clinic in Bangalore. Book your free consultation, get directions, call us at +91 9380902115, or visit our clinic. Expert plastic surgery and dermatology services. We're here to help with all your aesthetic needs."
      keywords="contact nypunya, book appointment bangalore, clinic location, aesthetic clinic contact, consultation booking, plastic surgery appointment, dermatology consultation, nypunya address, clinic phone number"
      image="https://nypunyaaesthetics.com/contact-us/contact_us_banner.png"
    >
      <ContactUs />
    </SeoWrapper>
  )
}

export default page