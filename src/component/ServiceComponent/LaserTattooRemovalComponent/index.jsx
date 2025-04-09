import React from 'react'
import Banner from './Banner'
import LaserTattooRemoval from './LaserTattooRemoval'
import ConsultationForm from '../../FormsComponent/ConsultationForm'
const index = () => {
    return (
        <div>
            <Banner />
            <LaserTattooRemoval />
            <ConsultationForm />
            {/* <ServicesDetails /> */}
        </div>
    )
}

export default index