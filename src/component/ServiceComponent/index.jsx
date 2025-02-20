import React from 'react'
import Banner from '../ServiceComponent/Banner'
import BreastAugmentationComponent from './BreastAugmentationComponent'
import ServicesDetails from './ServicesDetails'
import GalleryComponent from './GalleryCompuneny'
import ConsultationForm from '../FormsComponent/ConsultationForm'



const index = () => {
  return (
    <>
      <Banner />
      <BreastAugmentationComponent />
      <ServicesDetails />
      <GalleryComponent />
      <ConsultationForm />

    </>
  )
}

export default index