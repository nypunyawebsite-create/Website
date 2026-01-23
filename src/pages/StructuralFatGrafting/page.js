import React from 'react'
import StructuralFatGraftingComponent from '../../component/ServiceComponent/StructuralFatGraftingomponent/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Structural Fat Grafting in Bangalore - Natural Volume Enhancement | Nypunya"
      description="Expert structural fat grafting in Bangalore. Natural volume enhancement using your own fat. Face, breast, and body contouring. Safe, long-lasting results. Book consultation."
      keywords="structural fat grafting bangalore, fat transfer, natural augmentation, volume enhancement, autologous fat grafting"
      image="https://nypunyaaesthetics.com/services/fat-grafting.png"
      isServicePage={true}
      serviceName="Structural Fat Grafting"
      procedureType="CosmeticProcedure"
      faqItems={[]}
    >
      <StructuralFatGraftingComponent />
    </SeoWrapper>
  )
}

export default page