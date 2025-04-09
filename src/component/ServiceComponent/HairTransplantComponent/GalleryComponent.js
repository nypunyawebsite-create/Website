import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { galleryImages } from "../../../utils/ServiceDatas/HairTransplantData/hairTransplant"; // Importing gallery images

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 md:left-[-50px] left-[-30px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 "
        onClick={onClick}
    >
        <FiArrowLeftCircle className="md:w-9 md:h-9 w-6 h-6" />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 md:right-[-50px] right-[-30px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 "
        onClick={onClick}
    >
        <FiArrowRightCircle className="md:w-9 md:h-9 w-6 h-6" />
    </button>
);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // enable auto slide
    autoplaySpeed: 3000, // time in ms between slides
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};


const GalleryComponent = () => {
    return (
        <>
            <div className="w-full mx-auto pb-10 px-4 relative container">
                <h2 className="text-center text-xl font-medium text-custom-blue py-5">GALLERY</h2>
                <div className="relative md:w-[90%] mx-auto">
                    <Slider {...settings}>
                        {galleryImages.map((img, index) => (
                            <div key={index} className="w-full">
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full object-cover rounded-md shadow-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>
                <p className="text-center text-2xl text-custom-blue pb-5">
                    Be the best version of Yourself with NYPUNYA.
                </p>
            </div>
        </>
    );
};

export default GalleryComponent;
