import React from 'react'
import ChemicalPeels from './ChemicalPeels'
import Banner from './Banner'
import ConsultationForm from '../../FormsComponent/ConsultationForm';
const index = () => {
  return (
    <div>
        <Banner />
        <ChemicalPeels />
        <ConsultationForm />
        {/* <ServicesDetails /> */}
    </div>
  )
}

export default index