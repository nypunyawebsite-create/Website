import React from "react";
import { laserScarRevisionData } from "../../../utils/ServiceDatas/ScarRevisionData/scarRevision";

const LaserScarRevision = () => {
  const { title, description, bulletPoints, image } = laserScarRevisionData;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 px-4 py-10 max-w-7xl mx-auto items-start">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">{title}</h2>

          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 my-auto flex justify-center items-center">
          <img
            src={image}
            alt="Laser Scar Treatment"
            className="rounded shadow-md w-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h3 className="mt-6 font-semibold text-gray-800">
          Scars managed by this laser are –
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 my-5 px-4">
          {bulletPoints.map((point, i) => (
            <p
              key={i}
              className="flex items-start gap-2 border-b border-custom-green mx-2 py-2"
            >
              <span className="text-custom-blue text-lg">•</span> {point}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default LaserScarRevision;
