import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LaserHairRemovalData, LaserHairRemovalAdvantages } from "../../../utils/ServiceDatas/LaserHairRamovalData/laserHairRamovalData"; // Adjust path if needed

const LaserHairRemoval = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 px-4 bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 w-full">
        {/* First Column (Text Content + Grid) */}
        <div className="lg:w-1/2 w-full">
          {/* Title */}
          <p className="text-custom-blue text-2xl mb-4 text-center lg:text-left">
            Laser Hair Removal Advantages
          </p>

          {/* Grid Items */}
          <div className="space-y-3 gap-4">
            {LaserHairRemovalData.map((item, index) => (
              <div key={index} className="border border-custom-green p-4 rounded-xl shadow-sm">
                {item}
              </div>
            ))}
          </div>

          {/* Advantages List */}
          <div className="border border-custom-green p-4 rounded-xl shadow-sm my-5">
            <ul className="space-y-3">
              <p>The advantage of Laser Hair reduction at NYPUNYA:</p>
              {LaserHairRemovalAdvantages.map((point, index) => (
                <li key={index} className="flex items-start">
                  <FaArrowRightLong className="w-4 h-4 min-w-[1rem] min-h-[1rem] mr-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Second Column - Centered Image with Overlay Text */}
        <div className="lg:w-1/2 w-full flex items-center justify-center pt-0 lg:pt-10">
          <div className="relative w-full max-w-md lg:max-w-full">
            <img
              src="/services/laser_hair_removal/laser_hair_removal_service.png"
              alt="Laser Hair Removal"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaserHairRemoval;
