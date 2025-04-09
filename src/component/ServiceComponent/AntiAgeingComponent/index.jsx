import React from 'react'
import Banner from '../AntiAgeingComponent/Banner'
import Gallery from '../AntiAgeingComponent/GalleryComponent'
import AntiAgeing from '../AntiAgeingComponent/AntiAgeingProcedures'
import ConsultationForm from '../../FormsComponent/ConsultationForm';


const index = () => {
  return (
    <>
      <Banner />
      <AntiAgeing />
      <Gallery />
      <ConsultationForm />
    </>
  )
}

export default index