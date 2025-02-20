import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    { id: "02", title: "Mastopexy / Breast Reshaping" },
    { id: "03", title: "Scar less Breast reduction" },
    { id: "04", title: "Breast Reduction / Reduction Mastoplexy" },
];

const ServicesDetails = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="p-4 bg-white container mx-auto ">
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="bg-blue-50 py-8 px-4 rounded-2xl flex items-center gap-4 shadow-md w-[400px] mx-auto">
                            <div className="bg-blue-900 text-white w-12 h-12 flex items-center justify-center text-lg font-bold rounded-full">
                                {service.id}
                            </div>
                            <p className="text-blue-900 font-semibold">{service.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ServicesDetails;
