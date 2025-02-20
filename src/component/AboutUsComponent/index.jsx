import React from 'react'
import Banner from '../AboutUsComponent/Banner'
import CardSlider from '../AboutUsComponent/CardSlider'
import AboutNypunya from './AboutNypunya'
import FacilitiesAtNypunya from './FacilitiesAtNypunya'
import MeetOurMedicalExperts from './MeetOurMedicalExperts'


const index = () => {
  return (
    <>
    <Banner />
    <CardSlider />
    <AboutNypunya />
    <FacilitiesAtNypunya />
    <MeetOurMedicalExperts />
    </>
  )
}

export default index