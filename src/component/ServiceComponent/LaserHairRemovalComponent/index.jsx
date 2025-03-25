import React from 'react'
import Banner from '../LaserHairRemovalComponent/Banner'
import LaserHairRemoval from '../LaserHairRemovalComponent/LaserHairRemoval'
import GalleryComponent from '../LaserHairRemovalComponent/GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'

const index = () => {
  return (
    <>
      <Banner />
      <LaserHairRemoval />
      <GalleryComponent />
      <ConsultationForm />
    </>
  )
}

export default index