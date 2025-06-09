import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { galleryImages } from "../../../utils/ServiceDatas/BodyContouringData/bodyContouring"; // Importing gallery images
import { useNavigate } from "react-router-dom";

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
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const GalleryComponent = () => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate('/gallery', { state: { category: 'Body Contouring Abdominal Platy' } });
    };

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
                <div className="text-center mt-6">
                    <button
                        onClick={handleViewMore}
                        className="bg-custom-blue hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View More Cases
                    </button>
                </div>
            </div>
        </>
    );
};

export default GalleryComponent;
