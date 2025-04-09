import React from 'react'
import StretchMarksTreatment from './StretchMarksTreatment'
import Banner from './Banner'
import ConsultationForm from '../../FormsComponent/ConsultationForm';
const index = () => {
  return (
    <div>
        <Banner />
        <StretchMarksTreatment />
        <ConsultationForm />
        {/* <ServicesDetails /> */}
    </div>
  )
}

export default index