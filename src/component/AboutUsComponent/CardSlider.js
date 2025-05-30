import React from "react";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardData from "../../utils/aboutUsDatas";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 cursor-pointer z-10 hidden md:block"
    onClick={onClick}
  >
    <FiArrowRightCircle size={35} className="text-gray-600 hover:text-gray-900 transition" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 cursor-pointer z-10 hidden md:block"
    onClick={onClick}
  >
    <FiArrowLeftCircle size={35} className="text-gray-600 hover:text-gray-900 transition" />
  </div>
);

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10 relative -top-20 h-auto">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2 md:px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 md:h-72 object-cover rounded-lg"
              />
              <div className="py-4 text-center">
                <h2 className="text-xl md:text-2xl font-semibold uppercase h-16 md:h-20 lg:px-4">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-2 h-24 md:h-44 overflow-hidden">
                  {card.description}
                </p>
                {/* {card.link && (
                  <a
                    href={card.link}
                    className="mt-4 inline-block px-4 py-2 text-sm md:text-base bg-custom-green text-black rounded-full hover:bg-custom-blue hover:text-white transition"
                  >
                    Read More
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
