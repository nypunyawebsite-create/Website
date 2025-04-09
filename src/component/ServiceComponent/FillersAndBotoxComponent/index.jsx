import React from 'react'
import FillersAndBotox from './FillersAndBotox'
import Banner from './Banner'  
import ConsultationForm from '../../FormsComponent/ConsultationForm';


const index = () => {
  return (
    <div>
        <Banner />
        <FillersAndBotox />
        <ConsultationForm />
        {/* <ServicesDetails /> */}

    </div>
  )
}

export default index