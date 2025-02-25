import React from 'react'
import Banner from './Banner'
import HairTransplant from '../HairTransplantComponent/HairTransplant'
// import BreastAugmentationComponent from './BreastAugmentationComponent'
// import ServicesDetails from './ServicesDetails'
import GalleryComponent from '../HairTransplantComponent/GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'



const index = () => {
  return (
    <>
      <Banner />
      <HairTransplant />
      {/* <ServicesDetails /> */}
      <GalleryComponent />
      <ConsultationForm />

    </>
  )
}

export default index