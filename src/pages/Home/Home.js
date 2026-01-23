import React, { useEffect } from 'react'
import HomeComponent from '../../component/Home'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const Home = () => {
    return (
        <SeoWrapper
            title="Nypunya Aesthetic Clinic - Best Plastic Surgery & Dermatology in Bangalore"
            description="Bangalore's premier aesthetic clinic offering expert plastic surgery, cosmetic procedures, and dermatology services. Board-certified surgeons, advanced technology, natural results. Book your free consultation today."
            keywords="plastic surgery bangalore, cosmetic surgery, dermatology bangalore, aesthetic clinic, best plastic surgeon, nypunya aesthetics, cosmetic procedures"
            image="https://nypunyaaesthetics.com/home/homepagebanner.png"
        >
            <HomeComponent />
        </SeoWrapper>
    )
}

export default Home
