import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Affliations = () => {
    // Certificate names corresponding to each image
    const affiliations = [
        { src: "/affliations/affiliations_2/1.png", name: "Indian Association of Plastic Surgeons" },
        { src: "/affliations/affiliations_2/2.png", name: "Association of Plastic Surgeons of India" },
        { src: "/affliations/affiliations_2/3.jpg", name: "Indian Society of Aesthetic Plastic Surgery" },
        { src: "/affliations/affiliations_2/4.png", name: "International Society of Aesthetic Plastic Surgery" },
        { src: "/affliations/affiliations_2/5.png", name: "American Society of Plastic Surgeons" },
        { src: "/affliations/affiliations_2/6.png", name: "European Society of Plastic Surgery" },
        { src: "/affliations/affiliations_2/7.png", name: "Indian Association of Dermatologists" },
        { src: "/affliations/affiliations_2/8.png", name: "Association of Cutaneous Surgeons of India" },
        { src: "/affliations/affiliations_2/9.png", name: "Indian Society of Cosmetic Dermatology" },
        { src: "/affliations/affiliations_2/10.png", name: "International Association of Physicians" },
        { src: "/affliations/affiliations_2/11.png", name: "Medical Council of India" },
        { src: "/affliations/affiliations_2/12.png", name: "Karnataka Medical Council" }
    ];

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
                        {affiliations.map((affiliation, index) => (
                            <SwiperSlide key={index} className="!flex !justify-center !items-center">
                                <div className="text-center">
                                    <img
                                        src={affiliation.src}
                                        alt={affiliation.name}
                                        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition block mx-auto"
                                        title={affiliation.name}
                                    />
                                    <p className="text-xs text-gray-600 mt-2 hidden lg:block">
                                        {affiliation.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* SEO-Friendly Hidden Content */}
                <div className="sr-only" aria-hidden="true">
                    <h4>Professional Affiliations and Certifications</h4>
                    <ul>
                        {affiliations.map((affiliation, index) => (
                            <li key={index}>{affiliation.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Affliations