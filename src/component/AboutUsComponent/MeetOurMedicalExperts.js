import React from "react";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { doctors } from "../../utils/aboutUsDatas"; // Importing data
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button className="absolute bottom-20 right-5 p-3 z-10 hidden md:block" onClick={onClick}>
    <FiArrowLeftCircle className="text-3xl text-white" />
  </button>
);

// Custom Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <button className="absolute bottom-10 right-5 p-3 z-10 hidden md:block" onClick={onClick}>
    <FiArrowRightCircle className="text-3xl text-white" />
  </button>
);

const MeetOurMedicalExperts = () => {
  const settings = {
    dots: false,
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

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full container mx-auto mt-6">
        
        {/* Left Content Section - Dynamic Mapping */}
        <div className="w-full md:w-1/2 px-4 md:px-0">
          {doctors.map((doctor, index) => (
            <div key={index} className={`doctor-info ${index !== 0 ? "hidden" : ""}`}>
              <h1 className="text-3xl font-bold mt-2">{doctor.name}</h1>
              <p className="text-sm text-gray-200 mt-2">{doctor.qualifications}</p>
              <p className="text-md text-gray-300 mt-4">{doctor.description}</p>

              {/* Achievements */}
              <ul className="mt-4">
                {doctor.achievements.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-md mt-2">
                    ✅ {item}
                  </li>
                ))}
              </ul>

              {/* Button & Social Links */}
              <div className="flex flex-wrap items-center gap-5 py-5">
                <button className="px-6 py-2 bg-custom-green text-black font-semibold rounded-3xl shadow-md hover:bg-custom-green transition">
                  Check Out Doctor
                </button>
              </div>
              
              <div className="flex items-center gap-3 py-5">
                <button className="p-2 bg-white rounded text-black shadow-md">
                  <FaXTwitter className="text-xl" />
                </button>
                <button className="p-2 bg-white rounded text-black shadow-md">
                  <FaLinkedinIn  className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Section - Slick Slider (Moved Below in Mobile) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Slider {...settings} className="w-full h-[500px] flex items-center">
            {doctors.map((doctor, index) => (
              <div key={index} className="relative flex justify-center items-center">
                <img src={doctor.image} alt={doctor.name} className="h-[350px] md:h-[450px] object-cover mx-auto rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default MeetOurMedicalExperts;