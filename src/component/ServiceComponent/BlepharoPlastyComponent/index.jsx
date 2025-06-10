import React from 'react'
import Banner from "../BlepharoPlastyComponent/Banner"
import BlepharoPlastyComponent from './BlepharoPlastyComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'

const index = () => {
  return (
    <>
      <Banner />
      <BlepharoPlastyComponent />
      <GalleryComponent />
      <ConsultationForm />
    </>
  )
}

export default index