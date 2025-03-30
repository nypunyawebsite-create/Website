import React from "react";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { doctors } from "../../utils/aboutUsDatas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button className="absolute top-1/2 -left-5 md:-left-10 transform -translate-y-1/2 z-10" onClick={onClick}>
    <FiArrowLeftCircle className="text-3xl md:text-4xl text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="absolute top-1/2 -right-5 md:-right-10 transform -translate-y-1/2 z-10" onClick={onClick}>
    <FiArrowRightCircle className="text-3xl md:text-4xl text-white" />
  </button>
);

const MeetOurMedicalExperts = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="bg-custom-blue text-white py-10 px-5">
      <h2 className="text-lg font-semibold tracking-wide uppercase text-center">
        Meet Our Medical Experts
      </h2>

      <div className="container mx-auto mt-6">
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 md:px-6 py-8"
            >
              
              {/* Left Content Section (Top on Mobile, Left on Desktop) */}
              <div className="w-full md:w-1/2 text-left">
                <h1 className="text-2xl md:text-3xl font-bold">{doctor.name}</h1>
                <p className="text-sm text-gray-200 mt-2">{doctor.qualifications}</p>
                <p className="text-md text-gray-300 mt-4">{doctor.description}</p>

                {/* Achievements */}
                <ul className="mt-4">
                  {doctor.achievements.map((item, i) => (
                    <li key={i} className="flex justify-center md:justify-start items-center gap-2 text-md mt-2">
                      ✅ {item}
                    </li>
                  ))}
                </ul>

                {/* Button & Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 py-5">
                  <button className="px-6 py-2 bg-custom-green text-black font-semibold rounded-3xl shadow-md hover:bg-custom-green transition">
                    Check Out Doctor
                  </button>
                </div>

                <div className="flex justify-center md:justify-start items-center gap-3 py-5">
                  <button className="p-2 bg-white rounded text-black shadow-md">
                    <FaXTwitter className="text-xl" />
                  </button>
                  <button className="p-2 bg-white rounded text-black shadow-md">
                    <FaLinkedinIn className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Right Image Section (Bottom on Mobile, Right on Desktop) */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img src={doctor.image} alt={doctor.name} className="h-[350px] md:h-[600px] object-cover rounded-lg" />
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetOurMedicalExperts;
