import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const GalleryComponent = () => {
    const images = [
        "/services/gallery_img_1.png",
        "/services/gallery_img_1.png",
    ];

    // Custom Arrows with React Icons
    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 md:block hidden"
            onClick={onClick}
        >
            <FiArrowLeftCircle size={35} />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 md:block hidden"
            onClick={onClick}
        >
            <FiArrowRightCircle size={35} />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="w-full mx-auto py-10 px-4 relative">
                <h2 className="text-center text-xl font-medium text-custom-blue py-5">GALLERY</h2>
                <div className="relative w-[80%] mx-auto">
                    <Slider {...settings}>
                        {images.map((img, index) => (
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
                <p className="text-center text-2xl text-custom-blue pb-5"> Be the best version of Yourself with NYPUNYA. </p>
            </div>
        </>
    );
};

export default GalleryComponent;
