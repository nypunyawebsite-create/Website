import React from 'react'
import BreastAugmentationServices from '../../component/WordPressServicePages/BreastAugmentation/'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
    return (
        <SeoWrapper
            title="Breast Augmentation in Bangalore - Natural Results | Nypunya"
            description="Expert breast augmentation in Bangalore. Safe procedures, natural-looking results, board-certified surgeons. Breast implants, lift, and enhancement. Book consultation."
            keywords="breast augmentation bangalore, breast implants, breast enhancement, breast surgery, cosmetic breast surgery, best breast surgeon"
            image="https://nypunyaaesthetics.com/services/breast-augmentation.png"
            isServicePage={true}
            serviceName="Breast Augmentation"
            procedureType="CosmeticProcedure"
            faqItems={[]}
        >
            <BreastAugmentationServices />
        </SeoWrapper>
    )
}

export default page
