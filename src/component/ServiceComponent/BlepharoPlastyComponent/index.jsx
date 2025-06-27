import React from 'react'
import Banner from "../BlepharoPlastyComponent/Banner"
import BlepharoPlastyComponent from './BlepharoPlastyComponent'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import { useLocation } from 'react-router-dom'

const Index = () => {
  const location = useLocation();
  const { scrollTo } = location.state || {};
  return (
    <>
      <Banner />
      <BlepharoPlastyComponent scrollTo={scrollTo} />
      <GalleryComponent />
      <ConsultationForm />
    </>
  )
}

export default Index