import React from 'react'
import Banner from './Banner'
import LipoSuctionBodyContouring from './LipoSuctionBodyContouring'
import GalleryComponent from './GalleryComponent'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
import ServicesDetails from './ServicesDetails'


const index = () => {
    return (
        <>
            <Banner />
            <LipoSuctionBodyContouring />
            <ServicesDetails />
            <GalleryComponent />
            <ConsultationForm />
        </>
    )
}

export default index