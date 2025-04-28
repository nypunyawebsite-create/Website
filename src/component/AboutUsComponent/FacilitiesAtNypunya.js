import React from "react";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { facilitiesData } from "../../utils/aboutUsDatas"; // Adjust path as needed

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-20 left-5 p-2 transition z-20"
    onClick={onClick}
  >
    <FiArrowLeftCircle className="text-3xl text-black" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="absolute bottom-10 left-5 mt-12 p-2" onClick={onClick}>
    <FiArrowRightCircle className="text-3xl text-black" />
  </button>
);

const FacilitiesAtNypunya = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Adjust the duration (in milliseconds) between slides
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="bg-[#d9d9d9] py-10 px-2">
      <p className="uppercase text-3xl text-custom-blue py-8 text-center">
        {facilitiesData.title}
      </p>
      <div className="relative flex items-center justify-center w-full md:py-10">
        <div className="container relative overflow-hidden rounded-xl">
          <Slider {...settings}>
            {facilitiesData.images.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};



export default FacilitiesAtNypunya;
