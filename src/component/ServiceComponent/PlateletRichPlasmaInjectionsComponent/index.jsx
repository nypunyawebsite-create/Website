import React from 'react'
import Banner from './Banner'
import ConsultationForm from '../../FormsComponent/ConsultationForm';
import GalleryComponent from './GalleryComponent';
import PlateletRichPlasmaInjections from './PlateletRichPlasmaInjections'
const index = () => {
    return (
        <div>
            <Banner />
            <PlateletRichPlasmaInjections />
            <GalleryComponent />
            <ConsultationForm />
            {/* <ServicesDetails /> */}

        </div>
    )
}

export default index