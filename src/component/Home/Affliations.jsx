import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Affliations = () => {
    return (
        <>
            {/* Affiliations Section - Full Width */}
            <div className="w-full bg-[#f6f8fa] py-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#000099] mb-8">Affiliations</h3>
                <div className="max-w-5xl mx-auto px-4">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            1024: { slidesPerView: 5 },
                            640: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                        className="!px-4"
                    >
                        {[
                            "/affliations/Affiliation-Association-Of-Plastic-Surgeons-of-India.jpg",
                            "/affliations/Bangalore_Medical_College_and_Research_Institute_logo.png",
                            "/affliations/images.jpeg",
                            "/affliations/images_1.png",
                            "/affliations/ima-logoimg.jpeg",
                            "/affliations/isaps.png",
                            "/affliations/Kapras Logo.jpg",
                            "/affliations/Ltmmc_and_gh_logo.png",
                            "/affliations/National_Medical_Commission_logo_(2023).jpg",
                            "/affliations/pratap-8.png",
                            "/affliations/the-royal-college-of-surgeons-of-edinburgh-logo-vector.png",
                            "/affliations/whatsapp-image-2024-04-10-at-18.34.26-m7VpNQb1Wkc5lOpR.jpeg.avif"
                        ].map((src, index) => (
                            <SwiperSlide key={index} className="!flex !justify-center !items-center">
                                <img
                                    src={src}
                                    alt={`Affiliation ${index + 1}`}
                                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition block"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Affliations