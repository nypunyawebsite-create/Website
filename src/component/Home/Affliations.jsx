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
                            "/affliations/affiliations_2/1.png",
                            "/affliations/affiliations_2/2.png",
                            "/affliations/affiliations_2/3.jpg",
                            "/affliations/affiliations_2/4.png",
                            "/affliations/affiliations_2/5.png",
                            "/affliations/affiliations_2/6.png",
                            "/affliations/affiliations_2/7.png",
                            "/affliations/affiliations_2/8.png",
                            "/affliations/affiliations_2/9.png",
                            "/affliations/affiliations_2/10.png",
                            "/affliations/affiliations_2/11.png",
                            "/affliations/affiliations_2/12.png",

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