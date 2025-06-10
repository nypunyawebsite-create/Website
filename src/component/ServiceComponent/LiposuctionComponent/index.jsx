import React from 'react'
import Banner from "../LiposuctionComponent/Banner"
import LiposuctionComponent from './LiposuctionComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'

const index = () => {
  return (
    <>
      <Banner />
      <LiposuctionComponent />
      <GalleryComponent />
      <ConsultationForm />
    </>
  )
}

export default index