import React from 'react'
import Banner from "../LiposuctionComponent/Banner"
import LiposuctionComponent from './LiposuctionComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import { useLocation } from 'react-router-dom'

const Index = () => {
  const location = useLocation();
  const { scrollTo } = location.state || {};
  return (
    <>
      <Banner />
      <LiposuctionComponent scrollTo={scrollTo} />
      <GalleryComponent />
      <ConsultationForm />
    </>
  )
}

export default Index