import React from "react";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardData from "../../utils/aboutUsDatas"; 

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 md:block hidden"
    onClick={onClick}
  >
    <FiArrowRightCircle size={35} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 rounded-full cursor-pointer z-10 md:block hidden"
    onClick={onClick}
  >
    <FiArrowLeftCircle size={35} />
  </div>
);

const CardSlider = () => {
  const settings = {
    dots: false,
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
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 relative -top-32 h-[600px]">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-sm overflow-hidden p-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-72 object-cover"
              />
              <div className="py-4 text-center">
                <h2 className="text-3xl uppercase h-20 lg:px-7">{card.title}</h2>
                <p className="text-gray-600 mt-2 h-44">{card.description}</p>
                {card.link && (
                  <a
                    href={card.link}
                    className="mt-4 inline-block px-6 py-2 bg-custom-green text-black rounded-full hover:bg-custom-blue hover:text-white transition"
                  >
                    Read More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
