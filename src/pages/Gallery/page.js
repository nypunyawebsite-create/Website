import React from 'react'
import Gallery from '../../component/GalleryComponet/index'
import SeoWrapper from '../../utils/Seo/SeoWrapper'

const page = () => {
  return (
    <SeoWrapper
      title="Gallery - Before & After Results | Nypunya Aesthetic Clinic Bangalore"
      description="View our gallery of before and after results for plastic surgery and dermatology treatments. Real patient transformations: rhinoplasty, hair transplant, breast augmentation, liposuction, laser treatments, and more. See the Nypunya difference."
      keywords="plastic surgery before after, rhinoplasty results, hair transplant gallery, breast augmentation results, liposuction before after, transformation gallery bangalore, cosmetic surgery results"
      image="https://nypunyaaesthetics.com/home/gallery_img_1.png"
    >
      <Gallery />
    </SeoWrapper>
  )
}

export default page