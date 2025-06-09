import React from 'react'
import Banner from "../RhinoplastyComponent/Banner"
import Rhinoplasty from "../RhinoplastyComponent/Rhinoplasty"
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import FaqRhinoplasty from './FaqRhinoplasty'

const index = () => {
  return (
    <>
      <Banner />
      <Rhinoplasty />
      <GalleryComponent />
      <FaqRhinoplasty />
      <ConsultationForm />
    </>
  )
}

export default index