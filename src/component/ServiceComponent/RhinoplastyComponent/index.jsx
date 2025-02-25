import React from 'react'
import Banner from "../RhinoplastyComponent/Banner"
import Rhinoplasty from "../RhinoplastyComponent/Rhinoplasty"
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'

const index = () => {
  return (
   <>
   <Banner />
   <Rhinoplasty />
   <GalleryComponent />
   <ConsultationForm />
   </>
  )
}

export default index