import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../../../utils/ServiceDatas/BodyContouringData/bodyContouring"; // Importing data


const ServicesDetails = ({ refProp }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1, // Only 1 slide in mobile view
                },
            },
        ],
    };

    return (
        <div ref={refProp} className="p-4 bg-white container mx-auto pt-[100px] -mt-[100px]">
            <Slider {...settings} className="flex justify-center">
                {services.map((service, index) => (
                    <div key={index} className="flex justify-center pb-4 px-2">
                        <div className="bg-blue-50 py-6 px-4 rounded-2xl flex items-center gap-4 shadow-md 
                        w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
                            <div className="bg-blue-900 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center 
                            justify-center text-lg font-bold rounded-full">
                                {service.id}
                            </div>
                            <p className="text-blue-900 font-semibold text-sm sm:text-base">{service.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ServicesDetails;
