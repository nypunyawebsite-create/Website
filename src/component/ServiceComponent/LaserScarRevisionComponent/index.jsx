import React from 'react'
import LaserScarRevision from './LaserScarRevision'
import Banner from './Banner'
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import GalleryComponent from './GalleryComponent';
const index = () => {
  return (
    <div>
        <Banner />
        <LaserScarRevision />
        <GalleryComponent />
        <ConsultationForm />
        {/* <ServicesDetails /> */}

    </div>
  )
}

export default index